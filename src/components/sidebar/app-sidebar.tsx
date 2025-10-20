import { type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NavMain } from './nav-main'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '../ui/sidebar'
import { Separator } from '../ui/separator'

export interface NavItem {
  title: string
  url: string
  icon: LucideIcon
  items?: {
    title: string
    url: string
  }[]
}

export interface LogoConfig {
  /** URL da logo principal */
  mainLogoUrl?: string
  /** Texto alternativo da logo */
  mainLogoAlt?: string
  /** URL da logo secundária (badge) */
  badgeLogoUrl?: string
  /** Texto da badge */
  badgeText?: string
  /** Link ao clicar na logo */
  logoLink?: string
}

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  /** Itens de navegação */
  navItems: NavItem[]
  /** Configuração de logo */
  logoConfig?: LogoConfig
  /** Conteúdo customizado do footer */
  footerContent?: React.ReactNode
}

/**
 * Componente AppSidebar reutilizável
 *
 * @example
 * ```tsx
 * <AppSidebar
 *   navItems={[
 *     { title: 'Início', url: '/', icon: Home },
 *     {
 *       title: 'Contratos',
 *       url: '/contratos',
 *       icon: PenBoxIcon,
 *       items: [{ title: 'Lista', url: '/contratos' }]
 *     }
 *   ]}
 *   logoConfig={{
 *     mainLogoUrl: '/logo.png',
 *     mainLogoAlt: 'Logo',
 *     badgeText: 'Sistema',
 *     logoLink: '/dashboard'
 *   }}
 *   footerContent={<SidebarFooterCustom />}
 * />
 * ```
 */
export const AppSidebar = ({
  navItems,
  logoConfig,
  footerContent,
  ...props
}: AppSidebarProps) => {
  const defaultLogoConfig: LogoConfig = {
    mainLogoUrl: '/logo.png',
    mainLogoAlt: 'Logo',
    logoLink: '/',
    badgeText: 'Sistema',
  }

  const config = { ...defaultLogoConfig, ...logoConfig }

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="h-svh" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="cursor-pointer">
              <div className="flex flex-col items-center space-y-3 group-data-[state=collapsed]:space-y-2">
                {/* Logo principal */}
                <Link to={config.logoLink || '/'}>
                  <div className="logo-container relative transition-all duration-500 group-data-[state=collapsed]:scale-75 hover:scale-110">
                    <img
                      src={config.mainLogoUrl}
                      alt={config.mainLogoAlt}
                      className="h-24 w-52 object-contain drop-shadow-lg transition-all duration-500 group-data-[state=collapsed]:h-24 group-data-[state=collapsed]:w-24"
                    />
                  </div>
                </Link>

                {/* Badge */}
                {config.badgeText && (
                  <div className="group-data-[state=collapsed]:hidden">
                    <div className="relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gray-600 px-4 py-2 opacity-80 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:opacity-95">
                      {config.badgeLogoUrl && (
                        <div className="flex h-[45px] items-center justify-center">
                          <img
                            src={config.badgeLogoUrl}
                            alt="Badge"
                            className="h-25 w-25 object-contain opacity-95 drop-shadow-sm"
                          />
                        </div>
                      )}
                      <span className="text-sidebar-foreground ml-[-20px] text-lg font-bold tracking-wider uppercase drop-shadow-sm">
                        {config.badgeText}
                      </span>
                      <div className="via-sidebar-foreground/10 absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 ease-out group-hover/cac:translate-x-full" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="px-4 py-2">
          <Separator className="bg-sidebar-border/50" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>

      {footerContent && <SidebarFooter>{footerContent}</SidebarFooter>}
    </Sidebar>
  )
}
