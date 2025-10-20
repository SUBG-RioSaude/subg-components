# @subg-riosaide/subg-components

> Biblioteca de componentes reutilizáveis React para Sidebar e Breadcrumb desenvolvida pela SUBG Rio Saúde

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.x-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

## 📦 Instalação

### Via GitHub (Recomendado)

```bash
# pnpm
pnpm add github:SUBG-RioSaude/subg-components

# npm
npm install github:SUBG-RioSaude/subg-components

# yarn
yarn add github:SUBG-RioSaude/subg-components
```

### Instalar Versão Específica

```bash
# Tag/Release específica
pnpm add github:SUBG-RioSaude/subg-components#v1.0.0

# Branch específica
pnpm add github:SUBG-RioSaude/subg-components#main

# Commit específico
pnpm add github:SUBG-RioSaude/subg-components#a1b2c3d
```

## 🚀 Quick Start

### 1. Configurar TailwindCSS

Adicione o pacote ao `content` do seu `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    // Adicione esta linha:
    './node_modules/@subg-riosaide/subg-components/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
    },
  },
  plugins: [],
}
```

### 2. Adicionar Variáveis CSS

Adicione as variáveis CSS ao seu arquivo global (ex: `index.css`):

```css
:root {
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

### 3. Usar os Componentes

```tsx
import { AppSidebar, PageBreadcrumb, SidebarProvider, SidebarInset } from '@subg-riosaide/subg-components'
import { Home, Settings, Users } from 'lucide-react'

function App() {
  return (
    <SidebarProvider>
      <AppSidebar
        navItems={[
          { title: 'Início', url: '/', icon: Home },
          { title: 'Configurações', url: '/settings', icon: Settings },
          { title: 'Usuários', url: '/users', icon: Users },
        ]}
        logoConfig={{
          mainLogoUrl: '/logo.png',
          mainLogoAlt: 'Minha App',
          badgeText: 'Sistema',
        }}
      />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <PageBreadcrumb />
        </header>
        <main className="flex-1 p-4">
          {/* Seu conteúdo aqui */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

## 📚 Componentes

### AppSidebar

Sidebar principal com logo, navegação e footer.

```tsx
<AppSidebar
  navItems={[
    {
      title: 'Contratos',
      url: '/contratos',
      icon: FileText,
      items: [
        { title: 'Lista', url: '/contratos' },
        { title: 'Novo', url: '/contratos/novo' },
      ],
    },
  ]}
  logoConfig={{
    mainLogoUrl: '/logo.png',
    mainLogoAlt: 'Logo Principal',
    badgeLogoUrl: '/badge.png',
    badgeText: 'CAC',
    logoLink: '/dashboard',
  }}
  footerContent={<NavUser user={{ nome: 'João', email: 'joao@email.com' }} onLogout={() => {}} />}
/>
```

**Props:**
- `navItems`: Array de itens de navegação
- `logoConfig`: Configuração de logos e badges
- `footerContent`: Conteúdo customizado do footer

### NavUser

Menu dropdown de usuário com avatar e logout.

```tsx
<NavUser
  user={{
    nome: 'João Silva',
    email: 'joao@email.com',
  }}
  onLogout={async () => {
    await api.logout()
    navigate('/login')
  }}
  isLoggingOut={false}
/>
```

**Props:**
- `user`: Objeto com dados do usuário (nome, email, avatar opcional)
- `onLogout`: Callback assíncrono para logout
- `isLoggingOut`: Estado de loading (opcional)

### PageBreadcrumb

Breadcrumb com geração automática baseada na rota.

```tsx
// Breadcrumb automático
<PageBreadcrumb />

// Com labels customizados
<PageBreadcrumb
  labelMap={{
    'contratos': 'Contratos',
    'fornecedores': 'Fornecedores',
  }}
/>

// Totalmente manual
<PageBreadcrumb
  items={[
    { label: 'Início', href: '/' },
    { label: 'Contratos', href: '/contratos' },
    { label: 'Contrato 123', href: '/contratos/123' },
  ]}
/>
```

**Props:**
- `items`: Array de itens customizados (opcional)
- `labelMap`: Mapa de labels por segmento de URL (opcional)

### SidebarFooter

Footer com informações de versão e desenvolvedor.

```tsx
<SidebarFooter
  developerText="Desenvolvido por SUBG"
  year={2025}
/>
```

**Props:**
- `developerText`: Texto do desenvolvedor/empresa
- `year`: Ano (opcional, usa ano corrente)

## 🎨 Sistema de Versionamento

Este pacote inclui um sistema completo de versionamento com build info.

### Configurar no seu Projeto

**1. Criar `vite-env.d.ts`:**

```typescript
/// <reference types="vite/client" />

declare const __APP_VERSION__: string
declare const __COMMIT_SHA__: string
declare const __BUILD_NUMBER__: string
declare const __BUILD_TIMESTAMP__: string
declare const __APP_ENVIRONMENT__: string
```

**2. Configurar `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '0.0.0'),
    __COMMIT_SHA__: JSON.stringify(
      process.env.VITE_COMMIT_SHA ||
      process.env.GITHUB_SHA?.substring(0, 7) ||
      'dev'
    ),
    __BUILD_NUMBER__: JSON.stringify(
      process.env.VITE_BUILD_NUMBER ||
      process.env.GITHUB_RUN_NUMBER ||
      '0'
    ),
    __BUILD_TIMESTAMP__: JSON.stringify(
      new Date().toISOString().split('T')[0]
    ),
    __APP_ENVIRONMENT__: JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
  },
})
```

**3. Usar as Funções:**

```typescript
import { obterVersaoApp, obterMetadataVersao } from '@subg-riosaide/subg-components'

console.log(obterVersaoApp()) // "1.0.0" ou "1.0.0-dev"
console.log(obterMetadataVersao()) // { versao, commitSha, buildNumber, ... }
```

Veja [VERSIONING.md](./VERSIONING.md) para guia completo de CI/CD.

## 🔧 Peer Dependencies

Certifique-se de ter as seguintes dependências instaladas no seu projeto:

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.0.0",
  "tailwindcss": "^4.0.0",
  "lucide-react": "^0.540.0"
}
```

## 🎯 TypeScript

Este pacote é totalmente tipado com TypeScript. As definições de tipos são incluídas automaticamente.

```typescript
import type { AppSidebarProps, NavItem, NavUserProps } from '@subg-riosaide/subg-components'
```

## 📖 Exemplos Completos

### Exemplo: App com Sidebar e Breadcrumb

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  AppSidebar,
  PageBreadcrumb,
  NavUser,
  SidebarProvider,
  SidebarInset,
} from '@subg-riosaide/subg-components'
import { Home, FileText, Settings } from 'lucide-react'

function Layout() {
  const navItems = [
    { title: 'Início', url: '/', icon: Home },
    {
      title: 'Contratos',
      url: '/contratos',
      icon: FileText,
      items: [
        { title: 'Lista', url: '/contratos' },
        { title: 'Novo', url: '/contratos/novo' },
      ],
    },
    { title: 'Configurações', url: '/settings', icon: Settings },
  ]

  return (
    <SidebarProvider>
      <AppSidebar
        navItems={navItems}
        logoConfig={{
          mainLogoUrl: '/logo.png',
          mainLogoAlt: 'Minha App',
          badgeText: 'Sistema',
        }}
        footerContent={
          <NavUser
            user={{ nome: 'João Silva', email: 'joao@email.com' }}
            onLogout={async () => {
              // Lógica de logout
              console.log('Fazendo logout...')
            }}
          />
        }
      />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center gap-2 border-b bg-background px-4">
          <PageBreadcrumb
            labelMap={{
              contratos: 'Contratos',
              novo: 'Novo Contrato',
            }}
          />
        </header>
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<h1>Início</h1>} />
            <Route path="/contratos" element={<h1>Lista de Contratos</h1>} />
            <Route path="/contratos/novo" element={<h1>Novo Contrato</h1>} />
            <Route path="/settings" element={<h1>Configurações</h1>} />
          </Routes>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
```

## 🔄 Atualizações

Para atualizar para a versão mais recente:

```bash
pnpm update @subg-riosaide/subg-components
```

Para instalar uma versão específica:

```bash
pnpm add github:SUBG-RioSaude/subg-components#v1.2.0
```

## 🐛 Troubleshooting

### Estilos não aparecem

Certifique-se de:
1. Adicionar o pacote ao `content` do tailwind.config.js
2. Adicionar as variáveis CSS no seu arquivo global
3. Importar o CSS do TailwindCSS corretamente

### Tipos não são reconhecidos

Execute:
```bash
pnpm install --force
```

### Ícones não aparecem

Instale `lucide-react`:
```bash
pnpm add lucide-react
```

## 📄 Licença

MIT © SUBG Rio Saúde

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, abra uma issue no [GitHub](https://github.com/SUBG-RioSaude/subg-components/issues).
