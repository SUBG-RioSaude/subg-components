# @subg-dev/subg-components

Componentes de Sidebar e Breadcrumb reutilizáveis baseados em shadcn/ui para **Tailwind CSS v4**.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Instalação (Copy-Paste)](#-instalação-copy-paste)
- [Configuração do Tailwind CSS v4](#-configuração-do-tailwind-css-v4)
- [Uso Básico](#-uso-básico)
- [Customização](#-customização)
- [API de Componentes](#-api-de-componentes)
- [Desenvolvimento Local](#️-desenvolvimento-local)

---

## ✨ Visão Geral

Esta biblioteca fornece:
- **AppSidebar** - Sidebar completa e responsiva com suporte a colapso e navegação hierárquica
- **NavMain** - Navegação vertical integrada com React Router
- **PageBreadcrumb** - Breadcrumbs automáticos baseados na URL
- **Componentes UI base** - Todos os primitivos do shadcn/ui necessários (Sidebar, Button, Avatar, etc.)

**Diferencial:** Todos os componentes são **autônomos** e funcionam com **Tailwind CSS v4** sem precisar do shadcn/ui instalado.

---

## 🚀 Instalação (Copy-Paste)

Seguindo o modelo do shadcn/ui, você **copia os componentes diretamente** para o seu projeto ao invés de instalar via NPM.

### 1️⃣ **Instalar dependências base**

```bash
pnpm add @radix-ui/react-avatar @radix-ui/react-collapsible \
         @radix-ui/react-dropdown-menu @radix-ui/react-separator \
         @radix-ui/react-slot @radix-ui/react-tooltip \
         @radix-ui/react-dialog \
         class-variance-authority clsx tailwind-merge \
         lucide-react react-router-dom
```

### 2️⃣ **Copiar os arquivos de componentes**

Copie os seguintes arquivos do repositório para o seu projeto:

```
📁 Seu Projeto
└── src/
    ├── components/
    │   └── navigation/
    │       ├── app-sidebar.tsx     ← Sidebar principal
    │       ├── nav-main.tsx        ← Menu de navegação
    │       ├── nav-user.tsx        ← Componente de usuário
    │       ├── sidebar-footer.tsx  ← Footer com versão
    │       └── page-breadcrumb.tsx ← Breadcrumbs
    │
    ├── ui/                         ← Componentes base shadcn/ui
    │   ├── sidebar.tsx
    │   ├── separator.tsx
    │   ├── button.tsx
    │   ├── badge.tsx               ← Badges
    │   ├── avatar.tsx
    │   ├── collapsible.tsx
    │   ├── dropdown-menu.tsx
    │   ├── tooltip.tsx
    │   ├── breadcrumb.tsx
    │   ├── sheet.tsx
    │   ├── skeleton.tsx
    │   └── input.tsx
    │
    ├── lib/
    │   └── versao.ts               ← Funções de versão/build
    │
    ├── utils/
    │   └── cn.ts                   ← Utilitário de classes
    │
    └── hooks/
        └── use-mobile.ts           ← Hook de detecção mobile
```

**Link do repositório:** [github.com/SUBG-RioSaude/subg-components](https://github.com/SUBG-RioSaude/subg-components)

Você pode clonar o repo e copiar a pasta `src/` completa, ou copiar manualmente os arquivos necessários.

---

## 🎨 Configuração do Tailwind CSS v4

### 1️⃣ **Adicionar variáveis CSS da Sidebar**

No seu arquivo CSS principal (ex: `src/index.css` ou `src/app.css`), adicione:

```css
@import 'tailwindcss';

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  /* Mapeamento de cores para Tailwind */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);

  /* Variáveis da Sidebar - Light Mode */
  --sidebar: oklch(0.404 0.017 264.376);           /* Fundo cinza/azulado */
  --sidebar-foreground: oklch(1 0 0);              /* Texto branco */
  --sidebar-primary: oklch(0.709 0.142 213.68);    /* #43B9EB - Cor primária */
  --sidebar-primary-foreground: oklch(1 0 0);      /* Texto branco */
  --sidebar-accent: oklch(1 0 0 / 0.1);            /* Hover transparente */
  --sidebar-accent-foreground: oklch(0.709 0.142 213.68); /* #43B9EB */
  --sidebar-border: oklch(0.5 0 0);                /* Borda escura */
  --sidebar-ring: oklch(0.709 0.142 213.68);       /* Anel de foco #43B9EB */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);

  /* Variáveis da Sidebar - Dark Mode */
  --sidebar: oklch(0.404 0.017 264.376);           /* Mantém fundo no dark */
  --sidebar-foreground: oklch(1 0 0);
  --sidebar-primary: oklch(0.709 0.142 213.68);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(1 0 0 / 0.1);
  --sidebar-accent-foreground: oklch(0.709 0.142 213.68);
  --sidebar-border: oklch(0.5 0 0);
  --sidebar-ring: oklch(0.709 0.142 213.68);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 2️⃣ **Configurar `tailwind.config.ts` (opcional)**

O Tailwind v4 não requer plugins para variáveis CSS customizadas. O arquivo pode ficar simples:

```ts
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
}
```

---

## 📖 Exemplos de Uso

### 🟢 Exemplo 1: Básico (Mínimo)

Sidebar simples sem footer, apenas navegação essencial.

```tsx
import { SidebarProvider, SidebarInset } from '@/ui/sidebar'
import { AppSidebar } from '@/components/navigation/app-sidebar'
import { Home, FileText } from 'lucide-react'

export function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar
        navItems={[
          { title: 'Início', url: '/', icon: Home },
          { title: 'Documentos', url: '/docs', icon: FileText },
        ]}
        logoConfig={{
          mainLogoUrl: '/logo.png',
          mainLogoAlt: 'Logo',
        }}
      />

      <SidebarInset>
        <main className="p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

---

### 🟡 Exemplo 2: Intermediário

Sidebar com navegação hierárquica, breadcrumbs e footer com versão.

```tsx
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/ui/sidebar'
import { AppSidebar } from '@/components/navigation/app-sidebar'
import { PageBreadcrumb } from '@/components/navigation/page-breadcrumb'
import { Home, Settings, Users, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function IntermediateLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  const navItems = [
    { title: 'Início', url: '/', icon: Home },
    {
      title: 'Configurações',
      url: '/settings',
      icon: Settings,
      items: [
        { title: 'Perfil', url: '/settings/profile' },
        { title: 'Preferências', url: '/settings/preferences' },
      ],
    },
    { title: 'Usuários', url: '/users', icon: Users },
    { title: 'Documentos', url: '/docs', icon: FileText },
  ]

  return (
    <SidebarProvider>
      <AppSidebar
        navItems={navItems}
        logoConfig={{
          mainLogoUrl: '/logo.png',
          mainLogoAlt: 'Minha Logo',
          badgeText: 'BETA',
          logoLink: '/dashboard',
        }}
        footerConfig={{
          showVersion: true,
          developerText: 'Desenvolvido com ❤️ pela equipe',
        }}
      />

      <SidebarInset>
        {/* Header com Breadcrumb e Toggle */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-2 border-b bg-white px-4">
          <SidebarTrigger />
          <PageBreadcrumb
            labelMap={{
              'settings': 'Configurações',
              'users': 'Usuários',
              'docs': 'Documentos',
              'profile': 'Perfil',
              'preferences': 'Preferências',
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
```

---

### 🔴 Exemplo 3: Completo (Todas as Features)

Sidebar com **todas as props**, usuário autenticado, versão, badges e navegação completa.

```tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from '@/ui/sidebar'
import { AppSidebar } from '@/components/navigation/app-sidebar'
import { PageBreadcrumb } from '@/components/navigation/page-breadcrumb'
import { Badge } from '@/ui/badge'
import {
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  Package,
  CreditCard,
  Bell,
  HelpCircle,
} from 'lucide-react'

export function CompleteLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const [user] = useState({
    name: 'Matheus Migliani',
    email: 'matheus@subg.rio',
    avatar: '/avatars/matheus.jpg',
  })

  // Navegação completa com hierarquia
  const navItems = [
    {
      title: 'Dashboard',
      url: '/',
      icon: Home
    },
    {
      title: 'Relatórios',
      url: '/reports',
      icon: BarChart3,
      items: [
        { title: 'Vendas', url: '/reports/sales' },
        { title: 'Financeiro', url: '/reports/financial' },
        { title: 'Analytics', url: '/reports/analytics' },
      ],
    },
    {
      title: 'Produtos',
      url: '/products',
      icon: Package,
      items: [
        { title: 'Catálogo', url: '/products/catalog' },
        { title: 'Estoque', url: '/products/inventory' },
        { title: 'Fornecedores', url: '/products/suppliers' },
      ],
    },
    {
      title: 'Clientes',
      url: '/customers',
      icon: Users,
      items: [
        { title: 'Lista', url: '/customers/list' },
        { title: 'Novo Cliente', url: '/customers/new' },
      ],
    },
    {
      title: 'Financeiro',
      url: '/finance',
      icon: CreditCard,
      items: [
        { title: 'Faturas', url: '/finance/invoices' },
        { title: 'Pagamentos', url: '/finance/payments' },
        { title: 'Cobranças', url: '/finance/billing' },
      ],
    },
    {
      title: 'Documentos',
      url: '/docs',
      icon: FileText
    },
    {
      title: 'Configurações',
      url: '/settings',
      icon: Settings,
      items: [
        { title: 'Perfil', url: '/settings/profile' },
        { title: 'Conta', url: '/settings/account' },
        { title: 'Notificações', url: '/settings/notifications' },
        { title: 'Segurança', url: '/settings/security' },
        { title: 'Integrações', url: '/settings/integrations' },
      ],
    },
  ]

  // Handlers de ações do usuário
  const handleLogout = () => {
    console.log('Logging out...')
    // Lógica de logout
    navigate('/login')
  }

  const handleProfile = () => {
    navigate('/settings/profile')
  }

  const handleSettings = () => {
    navigate('/settings')
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar
        // Navegação
        navItems={navItems}

        // Logo com badge
        logoConfig={{
          mainLogoUrl: '/logo-prefeitura.png',
          mainLogoAlt: 'Logo Prefeitura do Rio',
          badgeText: 'CAC',
          badgeLogoUrl: '/logo-cac.png',
          logoLink: '/dashboard',
        }}

        // Footer completo com usuário e versão
        footerConfig={{
          userConfig: {
            user,
            onLogout: handleLogout,
            onProfile: handleProfile,
            onSettings: handleSettings,
          },
          showVersion: true,
          developerText: 'Desenvolvido pela SUBG',
        }}

        // Props adicionais da Sidebar (shadcn)
        variant="sidebar"
        collapsible="icon"
        className="border-r"
      />

      <SidebarInset>
        {/* Header com todos os recursos */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-white px-4 shadow-sm">
          <div className="flex items-center gap-2">
            {/* Toggle da sidebar */}
            <SidebarTrigger />

            {/* Breadcrumb */}
            <PageBreadcrumb
              labelMap={{
                'reports': 'Relatórios',
                'sales': 'Vendas',
                'financial': 'Financeiro',
                'analytics': 'Analytics',
                'products': 'Produtos',
                'catalog': 'Catálogo',
                'inventory': 'Estoque',
                'suppliers': 'Fornecedores',
                'customers': 'Clientes',
                'list': 'Lista',
                'new': 'Novo',
                'finance': 'Financeiro',
                'invoices': 'Faturas',
                'payments': 'Pagamentos',
                'billing': 'Cobranças',
                'docs': 'Documentos',
                'settings': 'Configurações',
                'profile': 'Perfil',
                'account': 'Conta',
                'notifications': 'Notificações',
                'security': 'Segurança',
                'integrations': 'Integrações',
              }}
            />
          </div>

          {/* Actions no header */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden md:flex">
              Ambiente: Produção
            </Badge>

            <button className="relative p-2 hover:bg-gray-100 rounded-md">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-md">
              <HelpCircle className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

---

## 🎨 Customização

### Alterar cores da Sidebar

Edite as variáveis CSS no seu `index.css`:

```css
:root {
  /* Exemplo: Sidebar verde */
  --sidebar: oklch(0.4 0.15 150);              /* Fundo verde */
  --sidebar-primary: oklch(0.6 0.2 150);       /* Verde mais claro */
  --sidebar-accent-foreground: oklch(0.6 0.2 150);
}
```

### Personalizar a Logo

```tsx
<AppSidebar
  logoConfig={{
    mainLogoUrl: '/custom-logo.svg',
    mainLogoAlt: 'Logo Customizada',
    badgeText: 'BETA',            // Texto da badge
    badgeLogoUrl: '/badge.png',    // Logo da badge (opcional)
    logoLink: '/home',             // Link ao clicar
  }}
  navItems={navItems}
/>
```

### Footer com Usuário e Versão

A sidebar agora suporta um footer completo com informações de usuário e versão:

#### **Opção 1: Footer automático com `footerConfig`**

```tsx
<AppSidebar
  navItems={navItems}
  logoConfig={logoConfig}
  footerConfig={{
    userConfig: {
      user: {
        name: 'João Silva',
        email: 'joao@example.com',
        avatar: '/avatar.jpg'
      },
      onLogout: () => handleLogout(),
      onProfile: () => navigate('/profile'),
      onSettings: () => navigate('/settings'),
    },
    showVersion: true,  // Mostra versão e build info
    developerText: 'Desenvolvido pelo time de TI 2025'
  }}
/>
```

#### **Opção 2: Apenas versão, sem usuário**

```tsx
<AppSidebar
  navItems={navItems}
  logoConfig={logoConfig}
  footerConfig={{
    showVersion: true
  }}
/>
```

#### **Opção 3: Footer totalmente customizado**

```tsx
<AppSidebar
  navItems={navItems}
  logoConfig={logoConfig}
  footerContent={
    <div className="p-4 space-y-2">
      <button className="w-full btn-primary">Sair</button>
      <p className="text-xs text-center">v1.0.0</p>
    </div>
  }
/>
```

### Configurar Variáveis de Versão

O footer com `showVersion: true` exibe informações de build obtidas de variáveis de ambiente.

**1. Crie um arquivo `.env` na raiz do projeto:**

```env
VITE_APP_VERSION=1.0.0
VITE_COMMIT_SHA=abc1234
VITE_BUILD_NUMBER=42
VITE_BUILD_TIMESTAMP=2025-10-21T12:00:00Z
VITE_AMBIENTE=production
```

**2. Configure no CI/CD (exemplo GitHub Actions):**

```yaml
- name: Build
  env:
    VITE_APP_VERSION: ${{ github.ref_name }}
    VITE_COMMIT_SHA: ${{ github.sha }}
    VITE_BUILD_NUMBER: ${{ github.run_number }}
    VITE_BUILD_TIMESTAMP: ${{ github.event.head_commit.timestamp }}
    VITE_AMBIENTE: production
  run: pnpm build
```

Se as variáveis não forem definidas, o sistema usa valores padrão (versão 1.0.0, build "local", etc.).

---

## 📚 API de Componentes

### `AppSidebar`

| Prop | Tipo | Descrição |
|------|------|-----------|
| `navItems` | `NavItem[]` | Lista de itens de navegação (requerido) |
| `logoConfig` | `LogoConfig` | Configuração da logo (requerido) |
| `footerConfig` | `SidebarFooterProps` | Configuração automática do footer com versão e usuário (opcional) |
| `footerContent` | `ReactNode` | Conteúdo totalmente customizado do footer (opcional, alternativa ao footerConfig) |

#### `NavItem`
```ts
interface NavItem {
  title: string
  url: string
  icon: LucideIcon
  items?: { title: string; url: string }[]  // Subitens opcionais
}
```

#### `LogoConfig`
```ts
interface LogoConfig {
  mainLogoUrl: string         // URL da logo principal
  mainLogoAlt?: string        // Texto alternativo
  badgeLogoUrl?: string       // URL da logo da badge
  badgeText?: string          // Texto da badge (ex: "CAC")
  logoLink?: string           // Link ao clicar na logo
}
```

#### `SidebarFooterProps`
```ts
interface SidebarFooterProps {
  userConfig?: {
    user?: {
      name: string
      email: string
      avatar?: string
    }
    onLogout?: () => void
    onProfile?: () => void
    onSettings?: () => void
  }
  showVersion?: boolean       // Padrão: true
  developerText?: string      // Texto customizado do desenvolvedor
}
```

### `NavUser`

Componente standalone para exibir usuário com dropdown de ações.

| Prop | Tipo | Descrição |
|------|------|-----------|
| `user` | `{ name, email, avatar? }` | Dados do usuário (opcional, mostra placeholder se omitido) |
| `onLogout` | `() => void` | Callback ao clicar em "Sair" (opcional) |
| `onProfile` | `() => void` | Callback ao clicar em "Perfil" (opcional) |
| `onSettings` | `() => void` | Callback ao clicar em "Configurações" (opcional) |

### `Badge`

Componente de badge baseado em shadcn/ui.

| Prop | Tipo | Valores | Descrição |
|------|------|---------|-----------|
| `variant` | `string` | `default`, `secondary`, `destructive`, `outline` | Variante visual do badge |

**Exemplo:**
```tsx
<Badge variant="default">Novo</Badge>
<Badge variant="destructive">Erro</Badge>
```

### `PageBreadcrumb`

| Prop | Tipo | Descrição |
|------|------|-----------|
| `labelMap` | `Record<string, string>` | Mapeia segmentos da URL para labels legíveis (opcional) |
| `items` | `BreadcrumbItemType[]` | Lista manual de breadcrumbs (opcional) |

### `SidebarProvider`

| Prop | Tipo | Descrição |
|------|------|-----------|
| `defaultOpen` | `boolean` | Estado inicial da sidebar (padrão: `true`) |
| `open` | `boolean` | Controle externo do estado (opcional) |
| `onOpenChange` | `(open: boolean) => void` | Callback ao mudar estado (opcional) |

### Funções de Versão

```ts
// Obtém versão da aplicação
obterVersaoApp(): string

// Obtém ano atual
obterAnoAtual(): number

// Obtém metadata completa
obterMetadataVersao(): MetadataVersao

interface MetadataVersao {
  versao: string
  buildNumber: string
  commitSha: string
  buildTimestamp: string
  ambiente: 'development' | 'staging' | 'production'
}
```

---

## 🏗️ Desenvolvimento Local

Se você quiser contribuir ou modificar a biblioteca:

```bash
# Clonar o repositório
git clone https://github.com/SUBG-RioSaude/subg-components.git
cd subg-components

# Instalar dependências
pnpm install

# Build
pnpm build

# Watch mode (desenvolvimento)
pnpm dev
```

---

## 📦 Distribuição via NPM (Legado)

> ⚠️ **Nota:** A instalação via NPM não é mais recomendada devido a incompatibilidades com Tailwind v4.
> Use o método **copy-paste** descrito acima.

Se ainda assim quiser instalar via NPM:

```bash
pnpm add @subg-dev/subg-components
```

Você precisará importar o CSS manualmente:

```css
@import '@subg-dev/subg-components/styles.css';
```

---

## 📄 Licença

MIT License · SUBG - Subsecretaria de Gestão

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request no [repositório GitHub](https://github.com/SUBG-RioSaude/subg-components).

---

**Desenvolvido com ❤️ pela equipe SUBG**
