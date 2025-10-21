import { useState } from 'react'
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '../ui/sidebar'
import { AppSidebar } from '../components/navigation/app-sidebar'
import { PageBreadcrumb } from '../components/navigation/page-breadcrumb'
import { Badge } from '../ui/badge'
import {
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  Package,
} from 'lucide-react'

/**
 * Exemplo completo de uso do AppSidebar com todas as features:
 * - Footer com usuário autenticado
 * - Informações de versão
 * - Navegação hierárquica
 * - Breadcrumbs
 * - Logo com badge
 */
export function CompleteExample() {
  const [user] = useState({
    name: 'João Silva',
    email: 'joao@example.com',
    avatar: '/avatar.jpg', // Opcional
  })

  const navItems = [
    {
      title: 'Dashboard',
      url: '/',
      icon: Home,
    },
    {
      title: 'Relatórios',
      url: '/reports',
      icon: BarChart3,
      items: [
        { title: 'Vendas', url: '/reports/sales' },
        { title: 'Financeiro', url: '/reports/financial' },
      ],
    },
    {
      title: 'Produtos',
      url: '/products',
      icon: Package,
      items: [
        { title: 'Catálogo', url: '/products/catalog' },
        { title: 'Estoque', url: '/products/inventory' },
      ],
    },
    {
      title: 'Clientes',
      url: '/customers',
      icon: Users,
    },
    {
      title: 'Documentos',
      url: '/docs',
      icon: FileText,
    },
    {
      title: 'Configurações',
      url: '/settings',
      icon: Settings,
      items: [
        { title: 'Perfil', url: '/settings/profile' },
        { title: 'Conta', url: '/settings/account' },
      ],
    },
  ]

  const handleLogout = () => {
    console.log('Logout')
    // Implementar lógica de logout
  }

  const handleProfile = () => {
    console.log('Navigate to profile')
    // Implementar navegação
  }

  const handleSettings = () => {
    console.log('Navigate to settings')
    // Implementar navegação
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar
        navItems={navItems}
        logoConfig={{
          mainLogoUrl: '/logo.png',
          mainLogoAlt: 'Logo da Empresa',
          badgeText: 'ADMIN',
          badgeLogoUrl: '/badge.png', // Opcional
          logoLink: '/dashboard',
        }}
        footerConfig={{
          userConfig: {
            user,
            onLogout: handleLogout,
            onProfile: handleProfile,
            onSettings: handleSettings,
          },
          showVersion: true,
          developerText: 'Desenvolvido pela equipe de TI',
        }}
        variant="sidebar"
        collapsible="icon"
      />

      <SidebarInset>
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-white px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <PageBreadcrumb
              labelMap={{
                reports: 'Relatórios',
                sales: 'Vendas',
                financial: 'Financeiro',
                products: 'Produtos',
                catalog: 'Catálogo',
                inventory: 'Estoque',
                customers: 'Clientes',
                docs: 'Documentos',
                settings: 'Configurações',
                profile: 'Perfil',
                account: 'Conta',
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline">Produção</Badge>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-bold">Bem-vindo ao Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Este é um exemplo completo de uso do componente AppSidebar.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
