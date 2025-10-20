# @subg-riosaude/subg-components

> Biblioteca de componentes reutilizáveis React para Sidebar e Breadcrumb desenvolvida pela SUBG Rio Saúde

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.x-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

## 📋 Índice

- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração Inicial](#-configuração-inicial)
- [Guia de Uso](#-guia-de-uso)
- [Componentes Disponíveis](#-componentes-disponíveis)
- [Exemplos Completos](#-exemplos-completos)
- [Sistema de Versionamento](#-sistema-de-versionamento)
- [Troubleshooting](#-troubleshooting)

---

## ✅ Pré-requisitos

Antes de instalar este pacote, siga esta **ordem de instalação** das dependências obrigatórias:

### Passo 1: Instalar React e Vite (se ainda não tiver)

```bash
# Criar projeto React com Vite
pnpm create vite@latest meu-projeto --template react-ts
cd meu-projeto
pnpm install
```

### Passo 2: Instalar TailwindCSS

**⚠️ IMPORTANTE:** Instale o TailwindCSS ANTES do shadcn/ui.

Siga a documentação oficial do Vite + TailwindCSS:
📖 **[TailwindCSS - Vite Installation Guide](https://tailwindcss.com/docs/guides/vite)**

**Método Recomendado: Vite Plugin (TailwindCSS v4+)**

```bash
# Instalar TailwindCSS como plugin do Vite
pnpm add -D tailwindcss @tailwindcss/vite
```

**Configurar `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Adicione o plugin do TailwindCSS
  ],
})
```

**Adicionar ao `src/index.css`:**

```css
@import "tailwindcss";
```

**Método Alternativo: PostCSS (TailwindCSS v3)**

Se você estiver usando TailwindCSS v3, use PostCSS:

```bash
# Instalar TailwindCSS com PostCSS
pnpm add -D tailwindcss postcss autoprefixer

# Criar arquivo de configuração
pnpx tailwindcss init -p
```

**Adicionar ao `src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Passo 3: Instalar shadcn/ui

**⚠️ IMPORTANTE:** Instale o shadcn/ui DEPOIS do TailwindCSS.

Siga a documentação oficial do shadcn/ui para Vite:
📖 **[shadcn/ui - Vite Installation](https://ui.shadcn.com/docs/installation/vite)**

```bash
# Inicializar shadcn/ui
pnpx shadcn@latest init
```

**Durante a inicialização, escolha:**
- Style: `New York`
- Base color: `Neutral`
- CSS variables: `Yes`

### Passo 4: Instalar Dependências Adicionais

```bash
# React Router DOM
pnpm add react-router-dom@^7.0.0

# Lucide React (ícones)
pnpm add lucide-react@^0.540.0
```

### Verificar Instalação

Verifique se todas as dependências foram instaladas corretamente:

```bash
pnpm list react react-dom react-router-dom tailwindcss lucide-react
```

**Versões mínimas esperadas:**
- React: `^19.0.0`
- React DOM: `^19.0.0`
- React Router DOM: `^7.0.0`
- TailwindCSS: `^4.0.0` (ou `^3.4.0` se usar PostCSS)
- Lucide React: `^0.540.0`

**Nota sobre TailwindCSS v4:**
- A versão 4 do TailwindCSS usa o plugin `@tailwindcss/vite` integrado ao Vite
- Não requer `tailwind.config.js` nem `postcss.config.js`
- Usa `@import "tailwindcss"` em vez de `@tailwind` directives

### Links das Documentações Oficiais

- 📖 [React](https://react.dev/)
- 📖 [Vite](https://vite.dev/)
- 📖 [TailwindCSS](https://tailwindcss.com/)
- 📖 [shadcn/ui](https://ui.shadcn.com/)
- 📖 [React Router](https://reactrouter.com/)
- 📖 [Lucide Icons](https://lucide.dev/)

---

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

## 🔧 Configuração Inicial

Após instalar o pacote e verificar os pré-requisitos, siga estes passos:

### Passo 1: Configurar TailwindCSS

#### Se você está usando TailwindCSS v4 (Vite Plugin)

Não é necessário arquivo de configuração! O plugin do Vite gerencia automaticamente.

Apenas certifique-se de ter o plugin configurado no `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

E adicione ao seu `src/index.css`:

```css
@import "tailwindcss";

/* Variáveis da Sidebar - Tema claro */
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

#### Se você está usando TailwindCSS v3 (PostCSS)

Atualize seu `tailwind.config.js` para incluir o pacote no escaneamento de classes CSS:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // ⚠️ IMPORTANTE: Adicione esta linha para escanear os componentes do pacote
    './node_modules/@subg-riosaude/subg-components/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Cores customizadas para a sidebar
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

**Variáveis CSS adicionais (opcional - tema escuro):**

```css
/* Tema escuro (opcional) */
.dark {
  --sidebar-background: 240 5.9% 10%;
  --sidebar-foreground: 0 0% 98%;
  --sidebar-primary: 0 0% 98%;
  --sidebar-primary-foreground: 240 5.9% 10%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 0 0% 98%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

### Passo 2: Configurar Layout da Aplicação

Envolva sua aplicação com o `SidebarProvider` e estruture o layout:

```tsx
// App.tsx ou main.tsx
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from '@subg-riosaude/subg-components'
import { Layout } from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Layout />
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App
```

---

## 📖 Guia de Uso

### Estrutura Básica do Layout

A estrutura padrão de uma aplicação com este pacote segue este padrão:

```tsx
import {
  AppSidebar,
  SidebarProvider,
  SidebarInset,
  PageBreadcrumb,
} from '@subg-riosaude/subg-components'

function Layout() {
  return (
    <SidebarProvider>
      {/* Sidebar fixa à esquerda */}
      <AppSidebar {...sidebarProps} />

      {/* Área de conteúdo principal */}
      <SidebarInset>
        {/* Header com breadcrumb */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-2 border-b bg-background px-4">
          <PageBreadcrumb />
        </header>

        {/* Conteúdo da página */}
        <main className="flex-1 p-6">
          {/* Suas páginas aqui */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

### Exemplo Mínimo Funcional

```tsx
import {
  AppSidebar,
  PageBreadcrumb,
  SidebarProvider,
  SidebarInset,
} from '@subg-riosaude/subg-components'
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
          badgeText: 'v1.0',
        }}
      />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <PageBreadcrumb />
        </header>
        <main className="flex-1 p-4">
          <h1>Bem-vindo!</h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

### Usando Navegação com Submenus

```tsx
import { AppSidebar } from '@subg-riosaude/subg-components'
import { Home, FileText, Settings } from 'lucide-react'

const navItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home
  },
  {
    title: 'Documentos',
    url: '/documentos',
    icon: FileText,
    // Submenu (opcional)
    items: [
      { title: 'Todos os Documentos', url: '/documentos' },
      { title: 'Novo Documento', url: '/documentos/novo' },
      { title: 'Arquivados', url: '/documentos/arquivados' },
    ],
  },
  {
    title: 'Configurações',
    url: '/settings',
    icon: Settings
  },
]

function App() {
  return (
    <AppSidebar
      navItems={navItems}
      logoConfig={{
        mainLogoUrl: '/logo.png',
        mainLogoAlt: 'Minha App',
      }}
    />
  )
}
```

### Adicionando Menu de Usuário

```tsx
import { AppSidebar, NavUser } from '@subg-riosaude/subg-components'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const user = { nome: 'João Silva', email: 'joao@example.com' }

  const handleLogout = async () => {
    // Sua lógica de logout aqui
    console.log('Fazendo logout...')
    await api.logout()
    navigate('/login')
  }

  return (
    <AppSidebar
      navItems={[/* seus items */]}
      logoConfig={{
        mainLogoUrl: '/logo.png',
        mainLogoAlt: 'Sistema',
      }}
      footerContent={
        <NavUser
          user={user}
          onLogout={handleLogout}
          isLoggingOut={false}
        />
      }
    />
  )
}
```

### Personalizando Breadcrumb

```tsx
import { PageBreadcrumb } from '@subg-riosaude/subg-components'

// Opção 1: Automático (usa a rota atual)
<PageBreadcrumb />

// Opção 2: Com labels customizados por segmento
<PageBreadcrumb
  labelMap={{
    'dashboard': 'Painel',
    'usuarios': 'Usuários',
    'novo': 'Novo Usuário',
  }}
/>

// Opção 3: Completamente manual
<PageBreadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Usuários', href: '/usuarios' },
    { label: 'João Silva', href: '/usuarios/123' },
  ]}
/>
```

---

## 📚 Componentes Disponíveis

### AppSidebar

Componente principal de sidebar com navegação hierárquica, logo e footer customizável.

**Importação:**
```tsx
import { AppSidebar } from '@subg-riosaude/subg-components'
```

**Props:**

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `navItems` | `NavItem[]` | ✅ Sim | Array de itens de navegação com ícones e submenus opcionais |
| `logoConfig` | `LogoConfig` | ❌ Não | Configuração de logos (principal e badge) |
| `footerContent` | `React.ReactNode` | ❌ Não | Conteúdo customizado do footer (ex: NavUser) |

**Tipos:**

```typescript
interface NavItem {
  title: string          // Título do item
  url: string           // URL de destino
  icon: LucideIcon      // Ícone do lucide-react
  items?: {             // Submenu opcional
    title: string
    url: string
  }[]
}

interface LogoConfig {
  mainLogoUrl?: string    // URL da logo principal
  mainLogoAlt?: string    // Texto alternativo da logo
  badgeLogoUrl?: string   // URL da logo do badge
  badgeText?: string      // Texto do badge
  logoLink?: string       // URL de destino ao clicar na logo
}
```

**Exemplo Completo:**

```tsx
import { AppSidebar } from '@subg-riosaude/subg-components'
import { Home, FileText, Building, Users, Settings } from 'lucide-react'

<AppSidebar
  navItems={[
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    {
      title: 'Contratos',
      url: '/contratos',
      icon: FileText,
      items: [
        { title: 'Lista', url: '/contratos' },
        { title: 'Novo', url: '/contratos/novo' },
        { title: 'Arquivados', url: '/contratos/arquivados' },
      ],
    },
    { title: 'Fornecedores', url: '/fornecedores', icon: Building },
    { title: 'Usuários', url: '/usuarios', icon: Users },
    { title: 'Configurações', url: '/settings', icon: Settings },
  ]}
  logoConfig={{
    mainLogoUrl: '/assets/logo-principal.png',
    mainLogoAlt: 'Sistema CAC',
    badgeLogoUrl: '/assets/badge.png',
    badgeText: 'CAC',
    logoLink: '/dashboard',
  }}
  footerContent={
    <NavUser
      user={{ nome: 'João Silva', email: 'joao@empresa.com' }}
      onLogout={() => console.log('Logout')}
    />
  }
/>
```

### NavUser

Menu dropdown de usuário com avatar gerado automaticamente, informações do usuário e botão de logout.

**Importação:**
```tsx
import { NavUser } from '@subg-riosaude/subg-components'
```

**Props:**

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `user` | `{ nome: string, email: string, avatar?: string }` | ✅ Sim | Dados do usuário logado |
| `onLogout` | `() => void \| Promise<void>` | ✅ Sim | Callback executado ao fazer logout |
| `isLoggingOut` | `boolean` | ❌ Não | Estado de loading durante logout (padrão: `false`) |

**Exemplo Completo:**

```tsx
import { NavUser } from '@subg-riosaude/subg-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Sidebar() {
  const navigate = useNavigate()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await api.logout() // Sua lógica de logout
      localStorage.removeItem('token')
      navigate('/login')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <NavUser
      user={{
        nome: 'João Silva',
        email: 'joao.silva@empresa.com',
        avatar: '/avatars/joao.jpg', // Opcional
      }}
      onLogout={handleLogout}
      isLoggingOut={isLoggingOut}
    />
  )
}
```

**Recursos:**
- ✅ Avatar com iniciais automáticas
- ✅ Indicador de status online
- ✅ Animação de loading no botão de logout
- ✅ Dropdown responsivo

---

### PageBreadcrumb

Breadcrumb inteligente com geração automática baseada na URL atual ou configuração manual.

**Importação:**
```tsx
import { PageBreadcrumb } from '@subg-riosaude/subg-components'
```

**Props:**

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `items` | `BreadcrumbItem[]` | ❌ Não | Array de itens customizados (sobrescreve geração automática) |
| `labelMap` | `Record<string, string>` | ❌ Não | Mapa de labels personalizados por segmento de URL |

**Tipos:**

```typescript
interface BreadcrumbItem {
  label: string  // Texto exibido
  href: string   // URL de navegação
}
```

**Modo 1: Automático (Recomendado)**

Gera o breadcrumb automaticamente baseado na rota atual:

```tsx
// URL: /usuarios/novo
<PageBreadcrumb />
// Renderiza: Início > Usuarios > Novo
```

**Modo 2: Com Labels Customizados**

Personaliza labels de segmentos específicos da URL:

```tsx
// URL: /contratos/123/editar
<PageBreadcrumb
  labelMap={{
    'contratos': 'Contratos',
    '123': 'Contrato ABC-123',
    'editar': 'Editar Contrato',
  }}
/>
// Renderiza: Início > Contratos > Contrato ABC-123 > Editar Contrato
```

**Modo 3: Totalmente Manual**

Controle total sobre os itens do breadcrumb:

```tsx
<PageBreadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Usuários', href: '/usuarios' },
    { label: 'João Silva', href: '/usuarios/123' },
    { label: 'Editar Perfil', href: '/usuarios/123/editar' },
  ]}
/>
```

**Recursos:**
- ✅ Geração automática inteligente
- ✅ Integração com React Router
- ✅ Último item não clicável (página atual)
- ✅ Separadores automáticos

---

### SidebarFooter

Footer informativo com dados de versão, ambiente e desenvolvedor.

**Importação:**
```tsx
import { SidebarFooter } from '@subg-riosaude/subg-components'
```

**Props:**

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `developerText` | `string` | ❌ Não | Texto do desenvolvedor/empresa (padrão: "Desenvolvido pela equipe de TI") |
| `year` | `number` | ❌ Não | Ano do copyright (padrão: ano atual) |

**Exemplo:**

```tsx
<SidebarFooter
  developerText="Desenvolvido por SUBG Rio Saúde"
  year={2025}
/>
```

**Recursos:**
- ✅ Exibe versão da aplicação
- ✅ Tooltip com informações detalhadas de build:
  - Versão
  - Commit SHA
  - Build number
  - Data do build
  - Ambiente (produção/desenvolvimento)
- ✅ Badge colorido por ambiente
- ✅ Adapta-se ao estado da sidebar (expandida/colapsada)

---

### Outros Componentes UI

Além dos componentes principais, o pacote exporta todos os componentes base do shadcn/ui:

**Layout:**
- `SidebarProvider` - Provider de contexto da sidebar
- `Sidebar` - Componente base da sidebar
- `SidebarInset` - Container para conteúdo principal
- `SidebarTrigger` - Botão toggle da sidebar
- `SidebarHeader`, `SidebarContent`, `SidebarFooter` - Seções da sidebar

**Componentes UI:**
- `Button` - Botão estilizado
- `Badge` - Badge/etiqueta
- `Avatar`, `AvatarImage`, `AvatarFallback` - Sistema de avatar
- `Separator` - Divisor visual
- `Tooltip`, `TooltipProvider`, `TooltipTrigger`, `TooltipContent` - Tooltips
- `DropdownMenu` e subcomponentes - Menu dropdown
- `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` - Conteúdo colapsável
- `Sheet` e subcomponentes - Modal lateral
- `Skeleton` - Placeholder de loading
- `Input` - Campo de entrada
- `Breadcrumb` e subcomponentes - Sistema de breadcrumb base

**Hooks:**
- `useSidebar` - Hook para controlar estado da sidebar
- `useIsMobile` - Hook para detectar dispositivos móveis

**Utilitários:**
- `cn` - Merge de classes TailwindCSS

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
import { obterVersaoApp, obterMetadataVersao } from '@subg-riosaude/subg-components'

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
import type { AppSidebarProps, NavItem, NavUserProps } from '@subg-riosaude/subg-components'
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
} from '@subg-riosaude/subg-components'
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
pnpm update @subg-riosaude/subg-components
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
