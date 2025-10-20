# @subg-riosaude/subg-components

Biblioteca de componentes reutilizáveis da SUBG baseados em shadcn/ui e TailwindCSS.

## 📦 Instalação

```bash
pnpm add @subg-riosaude/subg-components
```

## 🎯 Peer Dependencies

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

## 🚀 Uso Rápido

### AppSidebar

```tsx
import { AppSidebar, SidebarProvider } from '@subg-riosaude/subg-components'
import { Home, PenBoxIcon } from 'lucide-react'

<SidebarProvider>
  <AppSidebar
    navItems={[
      { title: 'Início', url: '/', icon: Home },
      {
        title: 'Contratos',
        url: '/contratos',
        icon: PenBoxIcon,
        items: [
          { title: 'Lista', url: '/contratos' }
        ]
      }
    ]}
    logoConfig={{
      mainLogoUrl: '/logo.png',
      badgeText: 'CAC'
    }}
  />
</SidebarProvider>
```

### PageBreadcrumb

```tsx
import { PageBreadcrumb } from '@subg-riosaude/subg-components'

<PageBreadcrumb
  labelMap={{
    'contratos': 'Contratos',
    'fornecedores': 'Fornecedores'
  }}
/>
```

## 📚 Componentes

- **AppSidebar**: Sidebar completa com navegação
- **PageBreadcrumb**: Breadcrumb com geração automática
- Todos os componentes base do shadcn/ui

## 📄 Licença

MIT © SUBG - Subsecretaria de Gestão
