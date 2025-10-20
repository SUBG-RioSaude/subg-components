# @subg-riosaude/subg-components

> Biblioteca de componentes reutilizáveis React para Sidebar e Breadcrumb desenvolvida pela SUBG, baseada em [shadcn/ui](https://ui.shadcn.com/) e [TailwindCSS](https://tailwindcss.com/).

[![npm version](https://badge.fury.io/js/@subg-riosaude%2Fsubg-components.svg)](https://www.npmjs.com/package/@subg-riosaude/subg-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 📑 Índice

- [Instalação](#-instalação)
- [Antes de Começar](#-antes-de-começar)
- [Configuração Inicial](#-configuração-inicial)
- [Componentes](#-componentes)
  - [AppSidebar](#appsidebar)
  - [PageBreadcrumb](#pagebreadcrumb)
- [Exemplos Completos](#-exemplos-completos)
- [API Reference](#-api-reference)
- [Troubleshooting](#-troubleshooting)
- [Contribuindo](#-contribuindo)

---

## 📦 Instalação

### 1. Instalar o pacote

```bash
pnpm add @subg-riosaude/subg-components
```

<details>
<summary>Usando npm ou yarn?</summary>

```bash
# npm
npm install @subg-riosaude/subg-components

# yarn
yarn add @subg-riosaude/subg-components
```
</details>

### 2. Instalar peer dependencies

Certifique-se de que seu projeto possui as seguintes dependências:

```bash
pnpm add react@^19.0.0 react-dom@^19.0.0 react-router-dom@^7.0.0 tailwindcss@^4.0.0 lucide-react@^0.540.0
```

---

## 🎯 Antes de Começar

Esta biblioteca requer que seu projeto tenha as seguintes dependências instaladas e configuradas. **Siga a ordem abaixo:**

### Ordem de Instalação Recomendada

#### 1️⃣ React & React DOM

<div align="center">
  <a href="https://react.dev/learn/installation" target="_blank">
    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React" width="120"/>
    <br/>
    <strong>Instalar React v19</strong>
  </a>
  <br/>
  <sub>Biblioteca JavaScript para interfaces</sub>
</div>

```bash
pnpm add react@^19.0.0 react-dom@^19.0.0
```

#### 2️⃣ TailwindCSS v4

<div align="center">
  <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">
    <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg" alt="TailwindCSS" width="180"/>
    <br/>
    <strong>Instalar TailwindCSS v4 com Vite</strong>
  </a>
  <br/>
  <sub>Framework CSS utilitário (como plugin Vite)</sub>
</div>

```bash
pnpm add tailwindcss @tailwindcss/vite
```

#### 3️⃣ shadcn/ui

<div align="center">
  <a href="https://ui.shadcn.com/docs/installation/vite" target="_blank">
    <img src="https://ui.shadcn.com/og.jpg" alt="shadcn/ui" width="200"/>
    <br/>
    <strong>Instalar shadcn/ui com Vite</strong>
  </a>
  <br/>
  <sub>Componentes reutilizáveis</sub>
</div>

```bash
# Siga o guia de instalação do shadcn/ui para Vite
npx shadcn@latest init
```

#### 4️⃣ React Router

<div align="center">
  <a href="https://reactrouter.com/en/main/start/tutorial" target="_blank">
    <img src="https://raw.githubusercontent.com/remix-run/react-router/main/docs/public/og.jpg" alt="React Router" width="200"/>
    <br/>
    <strong>Instalar React Router v7</strong>
  </a>
  <br/>
  <sub>Roteamento para aplicações React</sub>
</div>

```bash
pnpm add react-router-dom@^7.0.0
```

#### 5️⃣ Lucide React

<div align="center">
  <a href="https://lucide.dev/guide/installation" target="_blank">
    <img src="https://lucide.dev/og.png" alt="Lucide" width="200"/>
    <br/>
    <strong>Instalar Lucide Icons</strong>
  </a>
  <br/>
  <sub>Biblioteca de ícones</sub>
</div>

```bash
pnpm add lucide-react@^0.540.0
```

#### 6️⃣ @subg-riosaude/subg-components

<div align="center">
  <strong>🎉 Agora você está pronto para instalar esta biblioteca!</strong>
</div>

```bash
pnpm add @subg-riosaude/subg-components
```

---

### ⚡ Instalação Rápida (Tudo de Uma Vez)

Se você já conhece as ferramentas e quer instalar tudo de uma vez:

```bash
# Instalar dependências de produção
pnpm add react@^19.0.0 react-dom@^19.0.0 react-router-dom@^7.0.0 lucide-react@^0.540.0 tailwindcss @tailwindcss/vite @subg-riosaude/subg-components

# Instalar dependências de desenvolvimento
pnpm add -D @types/node

# Inicializar shadcn/ui
pnpm dlx shadcn@latest init
```

> ⚠️ **Importante**: Mesmo instalando tudo de uma vez, você ainda precisa configurar o TailwindCSS v4 e shadcn/ui manualmente conforme a [seção de Configuração Inicial](#️-configuração-inicial).

---

## ⚙️ Configuração Inicial

> 💡 **Pré-requisito**: Este guia assume que você já instalou as dependências conforme a [seção anterior](#-antes-de-começar).

### Guia Completo para Vite + React

Se você ainda não configurou TailwindCSS v4 e shadcn/ui no seu projeto Vite, siga os passos abaixo:

#### 1️⃣ Configurar TailwindCSS v4 no Vite (Como Plugin)

Siga o guia oficial: [TailwindCSS with Vite](https://tailwindcss.com/docs/installation/using-vite)

```bash
# Instalar TailwindCSS v4 e o plugin Vite
pnpm add tailwindcss @tailwindcss/vite
```

**Configurar `vite.config.ts`:**

```ts
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Plugin do TailwindCSS v4
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Configurar `src/index.css`:**

No TailwindCSS v4, você usa `@import` ao invés de `@tailwind`:

```css
@import "tailwindcss";

@layer base {
  :root {
    /* Sidebar colors */
    --sidebar-background: 0 0% 100%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 0 0% 100%;
    --sidebar-primary-foreground: 240 5.9% 10%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

> 📝 **Nota**: No TailwindCSS v4, **NÃO é necessário** criar `tailwind.config.js`. A configuração é feita diretamente no CSS usando `@theme` ou via plugin Vite.

#### 2️⃣ Configurar shadcn/ui no Vite

Siga o guia oficial: [shadcn/ui with Vite](https://ui.shadcn.com/docs/installation/vite)

**Instalar @types/node:**

```bash
pnpm add -D @types/node
```

**Configurar `tsconfig.json`:**

Adicione o `baseUrl` e `paths` para path aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Inicializar shadcn/ui:**

```bash
pnpm dlx shadcn@latest init
```

Durante a inicialização, responda as perguntas:

```
✔ Prefixed with @/ in tsconfig? yes
✔ Choose your CSS variables: Default
✔ Where is your global CSS file? src/index.css
✔ Configure imports? yes
```

Isso criará automaticamente:
- `components.json` - Configuração do shadcn/ui
- `src/lib/utils.ts` - Utilitários
- Atualização do `tsconfig.json` com path aliases

#### 3️⃣ Estruturar seu layout principal

```tsx
// src/App.tsx ou src/layouts/MainLayout.tsx
import { SidebarProvider } from '@subg-riosaude/subg-components'

function App() {
  return (
    <SidebarProvider>
      {/* Seus componentes aqui */}
    </SidebarProvider>
  )
}
```

---

## 🎨 Componentes

### AppSidebar

Componente de sidebar completo com navegação hierárquica, logo customizável e footer.

#### Exemplo Básico

```tsx
import { AppSidebar } from '@subg-riosaude/subg-components'
import { Home, Settings, Users } from 'lucide-react'

function Layout() {
  return (
    <AppSidebar
      navItems={[
        { title: 'Início', url: '/', icon: Home },
        { title: 'Usuários', url: '/users', icon: Users },
        { title: 'Configurações', url: '/settings', icon: Settings },
      ]}
      logoConfig={{
        mainLogoUrl: '/logo.png',
        mainLogoAlt: 'Minha Empresa',
        badgeText: 'Admin',
        logoLink: '/dashboard',
      }}
    />
  )
}
```

#### Com Navegação Hierárquica

```tsx
<AppSidebar
  navItems={[
    { title: 'Início', url: '/', icon: Home },
    {
      title: 'Contratos',
      url: '/contratos',
      icon: PenBoxIcon,
      items: [
        { title: 'Cadastrar Contrato', url: '/contratos/cadastrar' },
        { title: 'Lista de Contratos', url: '/contratos' },
        { title: 'Relatórios', url: '/contratos/relatorios' },
      ],
    },
    {
      title: 'Fornecedores',
      url: '/fornecedores',
      icon: Truck,
      items: [
        { title: 'Lista de Fornecedores', url: '/fornecedores' },
        { title: 'Cadastrar Fornecedor', url: '/fornecedores/cadastrar' },
      ],
    },
  ]}
  logoConfig={{
    mainLogoUrl: '/logo-prefeitura.png',
    mainLogoAlt: 'Prefeitura',
    badgeLogoUrl: '/badge-cac.png',
    badgeText: 'CAC',
    logoLink: '/dashboard',
  }}
/>
```

#### Com Footer Customizado

```tsx
import { AppSidebar } from '@subg-riosaude/subg-components'

const CustomFooter = () => (
  <div className="p-4 text-center">
    <p className="text-xs text-gray-500">© 2025 Minha Empresa</p>
    <p className="text-xs text-gray-400">Versão 1.0.0</p>
  </div>
)

function Layout() {
  return (
    <AppSidebar
      navItems={navItems}
      logoConfig={logoConfig}
      footerContent={<CustomFooter />}
    />
  )
}
```

---

### PageBreadcrumb

Componente de breadcrumb com geração automática baseada na rota atual.

#### Exemplo 1: Geração Automática

```tsx
import { PageBreadcrumb } from '@subg-riosaude/subg-components'

// Na rota /contratos/123
// Gera automaticamente: Início > Contratos > 123
<PageBreadcrumb />
```

#### Exemplo 2: Com Labels Customizados

```tsx
<PageBreadcrumb
  labelMap={{
    'contratos': 'Contratos',
    'fornecedores': 'Fornecedores',
    'cadastrar': 'Novo Cadastro',
    'editar': 'Editar',
  }}
/>

// Na rota /contratos/cadastrar
// Resultado: Início > Contratos > Novo Cadastro
```

#### Exemplo 3: Com Resolver Dinâmico

```tsx
// Para buscar nomes dinâmicos de entidades
<PageBreadcrumb
  labelMap={{
    'contratos': 'Contratos',
    'fornecedores': 'Fornecedores',
  }}
  labelResolver={(segment, currentPath) => {
    // Detectar IDs numéricos na rota de contratos
    if (currentPath.includes('/contratos/') && /^[0-9]+$/.test(segment)) {
      // Buscar o nome do contrato da sua store ou API
      const contrato = contratos.find(c => c.id === segment)
      return contrato ? `Contrato ${contrato.numero}` : `Contrato ${segment}`
    }

    // Detectar UUIDs na rota de fornecedores
    if (currentPath.includes('/fornecedores/') && /^[a-f0-9-]{36}$/.test(segment)) {
      const fornecedor = fornecedores.find(f => f.id === segment)
      return fornecedor ? fornecedor.razaoSocial : 'Carregando...'
    }

    return undefined // Usa labelMap ou fallback
  }}
/>

// Na rota /contratos/123
// Resultado: Início > Contratos > Contrato 2025-001
```

#### Exemplo 4: Breadcrumb Manual

```tsx
<PageBreadcrumb
  items={[
    { label: 'Início', href: '/' },
    { label: 'Contratos', href: '/contratos' },
    { label: 'Contrato 2025-001', href: '/contratos/123' },
    { label: 'Editar', href: '/contratos/123/editar' },
  ]}
/>
```

---

## 🚀 Exemplos Completos

### Layout Completo com Sidebar e Breadcrumb

```tsx
import {
  AppSidebar,
  PageBreadcrumb,
  SidebarProvider,
  SidebarInset,
} from '@subg-riosaude/subg-components'
import { Home, PenBoxIcon, Truck, Building2, Users } from 'lucide-react'

export function MainLayout({ children }) {
  const navItems = [
    { title: 'Início', url: '/', icon: Home },
    {
      title: 'Contratos',
      url: '/contratos',
      icon: PenBoxIcon,
      items: [
        { title: 'Cadastrar Contrato', url: '/contratos/cadastrar' },
        { title: 'Lista de Contratos', url: '/contratos' },
      ],
    },
    {
      title: 'Fornecedores',
      url: '/fornecedores',
      icon: Truck,
      items: [
        { title: 'Lista de Fornecedores', url: '/fornecedores' },
      ],
    },
    {
      title: 'Unidades',
      url: '/unidades',
      icon: Building2,
    },
    {
      title: 'Funcionários',
      url: '/funcionarios',
      icon: Users,
      items: [
        { title: 'Cadastro', url: '/funcionarios/cadastrar' },
      ],
    },
  ]

  const logoConfig = {
    mainLogoUrl: '/logo-prefeitura.png',
    mainLogoAlt: 'Logo Prefeitura',
    badgeText: 'CAC',
    badgeLogoUrl: '/logo-cac.png',
    logoLink: '/dashboard',
  }

  return (
    <SidebarProvider>
      <AppSidebar
        navItems={navItems}
        logoConfig={logoConfig}
        footerContent={<CustomFooter />}
      />
      <SidebarInset>
        {/* Header com Breadcrumb */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-2 border-b bg-white px-4">
          <PageBreadcrumb
            labelMap={{
              'contratos': 'Contratos',
              'fornecedores': 'Fornecedores',
              'unidades': 'Unidades',
              'funcionarios': 'Funcionários',
              'cadastrar': 'Novo Cadastro',
            }}
          />
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

const CustomFooter = () => (
  <div className="border-t p-4">
    <p className="text-center text-xs text-gray-500">
      © 2025 Prefeitura - Desenvolvido pela SUBG
    </p>
  </div>
)
```

### Integração com React Router

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Dashboard } from './pages/Dashboard'
import { ContratosList } from './pages/Contratos/List'
import { ContratosForm } from './pages/Contratos/Form'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contratos" element={<ContratosList />} />
          <Route path="/contratos/cadastrar" element={<ContratosForm />} />
          <Route path="/contratos/:id" element={<ContratosDetail />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
```

---

## 📖 API Reference

### AppSidebar Props

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `navItems` | `NavItem[]` | ✅ | Itens de navegação da sidebar |
| `logoConfig` | `LogoConfig` | ✅ | Configuração da logo e badge |
| `footerContent` | `ReactNode` | ❌ | Conteúdo customizado do footer |

#### NavItem

```typescript
interface NavItem {
  title: string           // Título do item
  url: string            // URL de navegação
  icon: LucideIcon       // Ícone do lucide-react
  items?: {              // Subitens (opcional)
    title: string
    url: string
  }[]
}
```

#### LogoConfig

```typescript
interface LogoConfig {
  mainLogoUrl: string        // URL da logo principal
  mainLogoAlt?: string       // Texto alternativo (opcional)
  badgeLogoUrl?: string      // URL da logo do badge (opcional)
  badgeText?: string         // Texto do badge (opcional)
  logoLink?: string          // Link ao clicar na logo (opcional)
}
```

---

### PageBreadcrumb Props

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `items` | `BreadcrumbItemType[]` | ❌ | Itens manuais do breadcrumb |
| `labelMap` | `Record<string, string>` | ❌ | Mapa de labels customizados |
| `labelResolver` | `(segment: string, path: string) => string \| undefined` | ❌ | Função para resolver labels dinamicamente |

#### BreadcrumbItemType

```typescript
interface BreadcrumbItemType {
  label: string   // Texto exibido
  href: string    // URL do link
}
```

---

## 🔧 Troubleshooting

### Problema: Estilos não aparecem

**Solução**: Certifique-se de que:
1. As variáveis CSS estão no seu `globals.css`
2. O `tailwind.config.js` inclui o caminho dos componentes da biblioteca
3. O TailwindCSS está importado no seu projeto

### Problema: "Cannot find module '@subg-riosaude/subg-components'"

**Solução**: Verifique se:
1. O pacote está instalado: `pnpm list @subg-riosaude/subg-components`
2. Execute `pnpm install` novamente
3. Limpe o cache: `pnpm store prune`

### Problema: Sidebar não colapsa

**Solução**: Certifique-se de que:
1. O componente está dentro de um `<SidebarProvider>`
2. Você está usando o `SidebarInset` para o conteúdo

### Problema: Links do breadcrumb não funcionam

**Solução**: Verifique se:
1. O `react-router-dom` está instalado
2. O componente está dentro de um `<BrowserRouter>` ou `<Router>`

---

## 🤝 Contribuindo

Este é um projeto interno da SUBG. Para contribuir:

1. Clone o repositório
   ```bash
   git clone https://github.com/SUBG-RioSaude/subg-components.git
   cd subg-components
   ```

2. Instale as dependências
   ```bash
   pnpm install
   ```

3. Crie uma branch para sua feature
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

4. Faça suas alterações e teste
   ```bash
   pnpm build
   ```

5. Commit seguindo Conventional Commits
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```

6. Envie para o GitHub
   ```bash
   git push origin feature/nova-funcionalidade
   ```

7. Abra um Pull Request

---

## 📄 Licença

MIT © SUBG - Subsecretaria de Gestão

---

## 🔗 Links Úteis

### Documentação Oficial

- **Repositório GitHub**: [SUBG-RioSaude/subg-components](https://github.com/SUBG-RioSaude/subg-components)
- **NPM Package**: [@subg-riosaude/subg-components](https://www.npmjs.com/package/@subg-riosaude/subg-components)

### Guias de Instalação (Vite + React)

- **TailwindCSS v4 + Vite**: [tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)
- **shadcn/ui + Vite**: [ui.shadcn.com/docs/installation/vite](https://ui.shadcn.com/docs/installation/vite)
- **React**: [react.dev/learn/installation](https://react.dev/learn/installation)
- **Vite**: [vitejs.dev/guide](https://vitejs.dev/guide/)

### Bibliotecas Utilizadas

- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com/)
- **TailwindCSS**: [tailwindcss.com](https://tailwindcss.com/)
- **Lucide Icons**: [lucide.dev](https://lucide.dev/)
- **React Router**: [reactrouter.com](https://reactrouter.com/)

---

## 📝 Changelog

### v1.1.0 (Atual)
- ✨ Componente `AppSidebar` com navegação hierárquica
- ✨ Componente `PageBreadcrumb` com geração automática
- 📚 Documentação completa
- 🎨 Baseado em shadcn/ui + TailwindCSS
