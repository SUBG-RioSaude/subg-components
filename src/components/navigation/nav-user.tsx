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
              className="group/user relative mt-5 mb-3 h-15 overflow-hidden bg-gray-600 py-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg data-[state=open]:scale-[1.01]"
            >
              {/* Efeito de brilho animado */}
              <div className="via-sidebar-foreground/10 absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 ease-out group-hover/user:translate-x-full group-data-[state=open]:translate-x-full" />

              {/* Efeito de luz ambiente suave */}
              <div className="from-sidebar-primary/5 to-sidebar-primary/10 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-data-[state=open]:opacity-100" />

              {/* Efeito de pulsação no estado ativo */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-all duration-500 group-data-[state=open]:animate-pulse" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-9 w-9 rounded-xl border-2 border-gray-700/40 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/user:border-gray-700/60 group-hover/user:shadow-xl group-data-[state=open]:scale-105">
                    {displayUser.avatar && (
                      <AvatarImage src={displayUser.avatar} alt={displayUser.name} />
                    )}
                    <AvatarFallback className="rounded-xl bg-gray-700 text-sm font-bold text-white !bg-gray-700">
                      {getInitials(displayUser.name)}
                    </AvatarFallback>
                  </Avatar>

                  {/* Indicador de status online */}
                  <div className="absolute -right-0.5 -bottom-0.5">
                    <div className="relative">
                      {/* Anel externo pulsante */}
                      <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-green-400/40 group-data-[state=open]:bg-green-300/60" />
                      {/* Anel médio */}
                      <div className="absolute inset-0.5 h-2 w-2 animate-pulse rounded-full bg-green-400/70" />
                      {/* Núcleo sólido */}
                      <div className="border-sidebar relative h-3 w-3 rounded-full border-2 bg-gradient-to-br from-green-400 to-green-500 shadow-lg transition-all duration-300 group-data-[state=open]:scale-110 group-data-[state=open]:shadow-green-400/40" />
                      {/* Brilho interno */}
                      <div className="absolute inset-0.5 h-1.5 w-1.5 rounded-full bg-green-200/90" />
                    </div>
                  </div>
                </div>

                <div className="grid flex-1 transform text-left text-sm leading-tight transition-all duration-500 group-hover/user:translate-x-1 group-data-[state=open]:translate-x-2">
                  <span className="text-sidebar-foreground truncate font-semibold drop-shadow-sm transition-colors duration-300 group-data-[state=open]:font-bold">
                    {displayUser.name}
                  </span>
                  <span className="text-sidebar-foreground/70 truncate text-xs font-medium transition-all duration-300 group-data-[state=open]:font-semibold">
                    {displayUser.email}
                  </span>
                </div>

                <ChevronsUpDown className="text-sidebar-foreground/60 group-hover/user:text-sidebar-foreground ml-auto size-4 transition-all duration-500 group-hover/user:scale-125 group-hover/user:rotate-180 group-data-[state=open]:scale-125 group-data-[state=open]:rotate-180" />
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="border-sidebar-border bg-sidebar/95 w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg backdrop-blur-md"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="border-sidebar-border/30 bg-sidebar-accent m-1 flex items-center gap-3 rounded-lg border px-2 py-2 text-left text-sm shadow-sm backdrop-blur-sm">
                <div className="relative">
                  <Avatar className="h-9 w-9 rounded-xl border-2 border-gray-700/40 shadow-md backdrop-blur-sm">
                    {displayUser.avatar && (
                      <AvatarImage
                        src={displayUser.avatar}
                        alt={displayUser.name}
                      />
                    )}
                    <AvatarFallback className="rounded-xl bg-gray-700 text-xs font-bold text-white !bg-gray-700">
                      {getInitials(displayUser.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -right-0.5 -bottom-0.5">
                    <div className="relative">
                      <div className="border-sidebar h-3 w-3 rounded-full border-2 bg-gradient-to-br from-green-400 to-green-500 shadow-md" />
                      <div className="absolute inset-0.5 h-2 w-2 rounded-full bg-green-200/90" />
                    </div>
                  </div>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="text-sidebar-foreground truncate font-semibold drop-shadow-sm">
                    {displayUser.name}
                  </span>
                  <span className="text-sidebar-foreground/70 truncate text-xs font-medium">
                    {displayUser.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-sidebar-border/50" />

            {/* Perfil */}
            {onProfile && (
              <DropdownMenuItem
                onClick={onProfile}
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-primary focus:text-sidebar-primary-foreground"
              >
                <UserIcon className="mr-2 h-4 w-4" />
                Perfil
              </DropdownMenuItem>
            )}

            {/* Configurações */}
            {onSettings && (
              <DropdownMenuItem
                onClick={onSettings}
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-primary focus:text-sidebar-primary-foreground"
              >
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </DropdownMenuItem>
            )}

            {(onProfile || onSettings) && <DropdownMenuSeparator className="bg-sidebar-border/50" />}

            {/* Sair */}
            {onLogout && (
              <DropdownMenuItem
                onClick={onLogout}
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-primary focus:text-sidebar-primary-foreground"
              >
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
