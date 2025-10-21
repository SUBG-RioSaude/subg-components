import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { copyFileSync, mkdirSync } from 'fs'

const srcDir = resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-styles',
      writeBundle() {
        // Copiar styles.css para dist/
        try {
          mkdirSync('dist', { recursive: true })
          copyFileSync(
            resolve(srcDir, 'styles.css'),
            resolve(__dirname, 'dist/styles.css')
          )
          console.log('✓ styles.css copiado para dist/')
        } catch (err) {
          console.error('Erro ao copiar styles.css:', err)
        }
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(srcDir, 'index.ts'),
      name: 'SubgComponents',
      formats: ['es'],
      fileName: (_format, entryName) =>
        entryName === 'tailwind.plugin' ? 'tailwind.plugin.js' : 'index.js',
    },
    rollupOptions: {
      input: {
        index: resolve(srcDir, 'index.ts'),
        'tailwind.plugin': resolve(srcDir, 'tailwind.plugin.ts'),
      },
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-router-dom',
        'lucide-react',
        'tailwindcss',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          'lucide-react': 'LucideReact',
        },
      },
    },
  },
})
