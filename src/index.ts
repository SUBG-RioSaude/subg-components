/**
 * @subg-riosaude/subg-components
 * Biblioteca de componentes reutilizáveis da SUBG baseados em shadcn/ui
 */

// ============================================================================
// Componentes de Navegação
// ============================================================================

export { AppSidebar } from './components/navigation/app-sidebar'
export type {
  AppSidebarProps,
  NavItem,
  LogoConfig,
} from './components/navigation/app-sidebar'

export { NavMain } from './components/navigation/nav-main'
export type { NavMainProps, NavMainItem } from './components/navigation/nav-main'

export { default as PageBreadcrumb } from './components/navigation/page-breadcrumb'
export type {
  PageBreadcrumbProps,
  BreadcrumbItemType,
} from './components/navigation/page-breadcrumb'

// ============================================================================
// Componentes UI Base (shadcn/ui)
// ============================================================================

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  useSidebar,
} from './ui/sidebar'

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './ui/breadcrumb'

export { Separator } from './ui/separator'
export { Button } from './ui/button'
export { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './ui/tooltip'
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './ui/collapsible'
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './ui/dropdown-menu'

// ============================================================================
// Utilitários
// ============================================================================

export { cn } from './utils/cn'
export { useIsMobile } from './hooks/use-mobile'
