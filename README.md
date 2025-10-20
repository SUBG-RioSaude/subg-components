# @subg-dev/subg-components

Biblioteca React da SUBG que fornece uma Sidebar completa e componentes complementares de navegação, prontos para funcionar em qualquer projeto com TailwindCSS – sem depender de uma instalação prévia do shadcn/ui.

## ✨ Destaques
- Sidebar autônoma (`AppSidebar`) com todos os primitivos incluídos na lib (`Sidebar`, `SidebarMenu`, `SidebarProvider` etc.).
- Plugin Tailwind (`subgTheme`) que registra os tokens CSS utilizados pela Sidebar.
- Exporta utilitários (`cn`, `useIsMobile`) e componentes de navegação adicionais (Breadcrumb, NavMain).
- Funciona em qualquer projeto React 18+ com Tailwind.

## 📦 Instalação

```bash
pnpm add @subg-dev/subg-components
```

> A biblioteca declara `react`, `react-dom`, `react-router-dom` e `lucide-react` como peer dependencies. Certifique-se de já tê-las instaladas.

## 🎨 Configurando o Tailwind

1. Importe e registre o plugin na sua `tailwind.config.ts`:

```ts
// tailwind.config.ts
import { subgTheme } from '@subg-dev/subg-components/tailwind.plugin'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [subgTheme],
}
```

2. O plugin adiciona as variáveis abaixo. Você pode sobrescrevê-las no seu CSS (por exemplo em `globals.css`).

```css
:root {
  --sidebar-background: 255 255 255;
  --sidebar-foreground: 30 41 59;
  --sidebar-primary: 30 64 175;
  --sidebar-primary-foreground: 255 255 255;
  --sidebar-accent: 241 245 249;
  --sidebar-accent-foreground: 30 41 59;
  --sidebar-border: 226 232 240;
  --sidebar-ring: 59 130 246;
}

.dark {
  --sidebar-background: 30 41 59;
  --sidebar-foreground: 241 245 249;
  --sidebar-primary: 96 165 250;
  --sidebar-primary-foreground: 15 23 42;
  --sidebar-accent: 51 65 85;
  --sidebar-accent-foreground: 241 245 249;
  --sidebar-border: 71 85 105;
  --sidebar-ring: 96 165 250;
}
```

## 🚀 Uso Rápido

```tsx
import {
  AppSidebar,
  SidebarProvider,
  type NavItem,
} from '@subg-dev/subg-components'
import { Home, Settings } from 'lucide-react'

const navItems: NavItem[] = [
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
]

export function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar
        navItems={navItems}
        logoConfig={{
          mainLogoUrl: '/logo.svg',
          mainLogoAlt: 'Minha Logo',
          badgeText: 'CAC',
        }}
      />
      {/* resto da aplicação */}
    </SidebarProvider>
  )
}
```

### Breadcrumb integrado

```tsx
import { PageBreadcrumb } from '@subg-dev/subg-components'

export function Header() {
  return (
    <header className="flex items-center gap-4">
      <PageBreadcrumb />
    </header>
  )
}
```

## 📚 API Principal

### `AppSidebar`
- `navItems`: estrutura de navegação com suporte a submenus.
- `logoConfig`: controla logo principal, badge e link.
- `footerContent`: slot opcional para rodapé customizado.
- Herda todas as props da `Sidebar` primitiva (ex.: `collapsible="icon"`).

### `SidebarProvider`
Contexto obrigatório que provê estado da sidebar (colapsada/expandida, mobile etc.). Utilize-o na raiz do layout que consome a sidebar.

### `NavMain`
Lista de navegação vertical que respeita o estado de colapso e ativa itens conforme `react-router-dom`.

### `PageBreadcrumb`
Gera breadcrumbs automaticamente a partir da URL atual, com opções para mapear labels ou informar uma lista manual.

## 🧪 Exemplos

Veja `src/examples/ExampleApp.tsx` para um layout mínimo usando `SidebarProvider` + `AppSidebar`.

## 🏗️ Desenvolvimento local

```bash
pnpm install
npm run build
```

Use `pnpm link`/`npm link` para apontar um projeto consumidor para a pasta local da biblioteca durante o desenvolvimento.

## 🚢 Publicação no NPM

1. Faça login (`npm login`).
2. Atualize a versão (`npm version patch|minor|major`).
3. Gere o build (`npm run build`).
4. Confira o pacote (`npm pack --dry-run`).
5. Publique (`npm publish --access public`).
6. Faça push das tags (`git push origin main --tags`).

---

MIT License · SUBG
