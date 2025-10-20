import { ChevronsUpDown, LogOut } from 'lucide-react'

import { Avatar, AvatarFallback } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar'

export interface NavUserProps {
  /** Dados do usuário */
  user: {
    nome: string
    email: string
    avatar?: string
  }
  /** Callback ao fazer logout */
  onLogout: () => void | Promise<void>
  /** Estado de loading do logout */
  isLoggingOut?: boolean
}

/**
 * Componente de menu de usuário para sidebar
 *
 * @example
 * ```tsx
 * <NavUser
 *   user={{ nome: 'João Silva', email: 'joao@email.com' }}
 *   onLogout={async () => {
 *     await api.logout()
 *     navigate('/login')
 *   }}
 * />
 * ```
 */
export const NavUser = ({ user, onLogout, isLoggingOut = false }: NavUserProps) => {
  const { isMobile } = useSidebar()

  const handleLogout = async () => {
    try {
      await onLogout()
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  const userInitials = user.nome
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

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

              <div className="relative z-10 flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-9 w-9 rounded-xl border-2 border-gray-700/40 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/user:border-gray-700/60 group-hover/user:shadow-xl group-data-[state=open]:scale-105">
                    <AvatarFallback className="rounded-xl bg-gray-700 text-sm font-bold text-white !bg-gray-700">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>

                  {/* Indicador de status online */}
                  <div className="absolute -right-0.5 -bottom-0.5">
                    <div className="relative">
                      <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-green-400/40 group-data-[state=open]:bg-green-300/60" />
                      <div className="absolute inset-0.5 h-2 w-2 animate-pulse rounded-full bg-green-400/70" />
                      <div className="border-sidebar relative h-3 w-3 rounded-full border-2 bg-gradient-to-br from-green-400 to-green-500 shadow-lg transition-all duration-300 group-data-[state=open]:scale-110 group-data-[state=open]:shadow-green-400/40" />
                      <div className="absolute inset-0.5 h-1.5 w-1.5 rounded-full bg-green-200/90" />
                    </div>
                  </div>
                </div>

                <div className="grid flex-1 transform text-left text-sm leading-tight transition-all duration-500 group-hover/user:translate-x-1 group-data-[state=open]:translate-x-2">
                  <span className="text-sidebar-foreground truncate font-semibold drop-shadow-sm transition-colors duration-300 group-data-[state=open]:font-bold">
                    {user.nome}
                  </span>
                  <span className="text-sidebar-foreground/70 truncate text-xs font-medium transition-all duration-300 group-data-[state=open]:font-semibold">
                    {user.email}
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
                <Avatar className="h-9 w-9 rounded-xl border-2 border-gray-700/40 shadow-md backdrop-blur-sm">
                  <AvatarFallback className="rounded-xl bg-gray-700 text-xs font-bold text-white !bg-gray-700">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="text-sidebar-foreground truncate font-semibold drop-shadow-sm">
                    {user.nome}
                  </span>
                  <span className="text-sidebar-foreground/70 truncate text-xs font-medium">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-sidebar-border/50" />
            <DropdownMenuGroup />
            <DropdownMenuSeparator className="bg-sidebar-border/50" />
            <DropdownMenuItem
              className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-primary focus:text-sidebar-primary-foreground"
              onClick={() => {
                void handleLogout()
              }}
              disabled={isLoggingOut}
            >
              <LogOut className={isLoggingOut ? 'animate-spin' : ''} />
              {isLoggingOut ? 'Saindo...' : 'Sair'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
