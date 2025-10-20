import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { copyFileSync, mkdirSync } from 'fs'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    // Plugin customizado para copiar arquivos CSS para dist/
    {
      name: 'copy-styles',
      closeBundle() {
        // Cria pasta dist/themes
        const themesDir = resolve(__dirname, 'dist/themes')
        mkdirSync(themesDir, { recursive: true })

        // Copia o arquivo styles principal
        copyFileSync(
          resolve(__dirname, 'src/styles/index.css'),
          resolve(__dirname, 'dist/styles.css')
        )

        // Copia os arquivos de tema
        copyFileSync(
          resolve(__dirname, 'src/themes/default.css'),
          resolve(themesDir, 'default.css')
        )
        copyFileSync(
          resolve(__dirname, 'src/themes/blue.css'),
          resolve(themesDir, 'blue.css')
        )

        console.log('✅ Arquivos CSS copiados para dist/')
      },
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SubgComponents',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
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
