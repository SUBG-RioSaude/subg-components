import { Home, Settings } from 'lucide-react'

import { AppSidebar } from '../components/navigation/app-sidebar'
import { SidebarProvider } from '../ui/sidebar'

const navigation = [
  {
    title: 'Início',
    url: '/',
    icon: Home,
  },
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

export function ExampleApp() {
  return (
    <SidebarProvider>
      <AppSidebar
        navItems={navigation}
        logoConfig={{ mainLogoUrl: '/logo.svg', mainLogoAlt: 'Minha Logo' }}
      />
    </SidebarProvider>
  )
}

export default ExampleApp
