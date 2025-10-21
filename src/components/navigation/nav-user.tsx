import {
  ChevronsUpDown,
  LogOut,
  Settings,
  User as UserIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../../ui/sidebar'

export interface NavUserProps {
  /** Dados do usuário */
  user?: {
    name: string
    email: string
    avatar?: string
  }
  /** Callback ao clicar em "Sair" */
  onLogout?: () => void
  /** Callback ao clicar em "Perfil" */
  onProfile?: () => void
  /** Callback ao clicar em "Configurações" */
  onSettings?: () => void
}

/**
 * Componente de usuário para a sidebar
 * Exibe avatar, nome e email com dropdown de ações
 *
 * @example
 * ```tsx
 * <NavUser
 *   user={{
 *     name: 'João Silva',
 *     email: 'joao@example.com',
 *     avatar: '/avatar.jpg'
 *   }}
 *   onLogout={() => console.log('Logout')}
 *   onProfile={() => navigate('/profile')}
 * />
 * ```
 */
export function NavUser({
  user,
  onLogout,
  onProfile,
  onSettings,
}: NavUserProps) {
  const { isMobile } = useSidebar()

  // Placeholder se não houver usuário
  const displayUser = user || {
    name: 'Usuário',
    email: 'usuario@example.com',
  }

  // Iniciais do usuário para o avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                {displayUser.avatar && (
                  <AvatarImage src={displayUser.avatar} alt={displayUser.name} />
                )}
                <AvatarFallback className="rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {getInitials(displayUser.name)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {displayUser.name}
                </span>
                <span className="truncate text-xs">{displayUser.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {displayUser.avatar && (
                    <AvatarImage
                      src={displayUser.avatar}
                      alt={displayUser.name}
                    />
                  )}
                  <AvatarFallback className="rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    {getInitials(displayUser.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {displayUser.name}
                  </span>
                  <span className="truncate text-xs">{displayUser.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Perfil */}
            {onProfile && (
              <DropdownMenuItem onClick={onProfile}>
                <UserIcon className="mr-2 h-4 w-4" />
                Perfil
              </DropdownMenuItem>
            )}

            {/* Configurações */}
            {onSettings && (
              <DropdownMenuItem onClick={onSettings}>
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </DropdownMenuItem>
            )}

            {(onProfile || onSettings) && <DropdownMenuSeparator />}

            {/* Sair */}
            {onLogout && (
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
