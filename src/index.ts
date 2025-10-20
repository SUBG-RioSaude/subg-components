/**
 * @subg-riosaide/subg-components
 *
 * Componentes reutilizáveis de Sidebar e Breadcrumb para aplicações React
 * Desenvolvido por SUBG Rio Saúde
 */

// ============================================================================
// Componentes Principais
// ============================================================================

export { AppSidebar } from './components/sidebar/app-sidebar'
export type {
  AppSidebarProps,
  NavItem,
  LogoConfig,
} from './components/sidebar/app-sidebar'

export { NavMain } from './components/sidebar/nav-main'

export { NavUser } from './components/sidebar/nav-user'
export type { NavUserProps } from './components/sidebar/nav-user'

export { SidebarFooter } from './components/sidebar/sidebar-footer'
export type { SidebarFooterProps } from './components/sidebar/sidebar-footer'

export { default as PageBreadcrumb } from './components/breadcrumb/page-breadcrumb'
export type {
  PageBreadcrumbProps,
  BreadcrumbItem as PageBreadcrumbItem,
} from './components/breadcrumb/page-breadcrumb'

// ============================================================================
// Componentes UI Base (Sidebar)
// ============================================================================

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarInput,
  SidebarHeader,
  SidebarFooter as SidebarFooterBase,
  SidebarSeparator,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from './components/ui/sidebar'

// ============================================================================
// Componentes UI Base (Breadcrumb)
// ============================================================================

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './components/ui/breadcrumb'

// ============================================================================
// Componentes UI Base (Outros)
// ============================================================================

export { Button } from './components/ui/button'
export { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar'
export { Badge } from './components/ui/badge'
export { Separator } from './components/ui/separator'
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './components/ui/tooltip'
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
} from './components/ui/dropdown-menu'
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './components/ui/collapsible'
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './components/ui/sheet'
export { Skeleton } from './components/ui/skeleton'
export { Input } from './components/ui/input'

// ============================================================================
// Hooks
// ============================================================================

export { useIsMobile } from './hooks/use-mobile'

// ============================================================================
// Utilitários
// ============================================================================

export { cn } from './lib/utils'

export {
  obterVersaoBase,
  obterCommitSha,
  obterBuildNumber,
  obterBuildTimestamp,
  obterAmbiente,
  obterVersaoApp,
  obterVersaoCompleta,
  obterMetadataVersao,
  obterAnoAtual,
} from './lib/versao-template'
export type { VersaoMetadata } from './lib/versao-template'
