import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { SidebarTrigger } from '../ui/sidebar'

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface PageBreadcrumbProps {
  /** Itens customizados do breadcrumb (opcional) */
  items?: BreadcrumbItem[]
  /** Mapa de labels customizados por segmento de URL */
  labelMap?: Record<string, string>
}

/**
 * Componente de breadcrumb com geração automática baseada na rota
 *
 * @example
 * ```tsx
 * // Breadcrumb automático
 * <PageBreadcrumb />
 *
 * // Breadcrumb com labels customizados
 * <PageBreadcrumb
 *   labelMap={{
 *     'contratos': 'Contratos',
 *     'fornecedores': 'Fornecedores',
 *   }}
 * />
 *
 * // Breadcrumb totalmente manual
 * <PageBreadcrumb
 *   items={[
 *     { label: 'Início', href: '/' },
 *     { label: 'Contratos', href: '/contratos' },
 *     { label: 'Contrato 123', href: '/contratos/123' },
 *   ]}
 * />
 * ```
 */
const PageBreadcrumb = ({ items, labelMap = {} }: PageBreadcrumbProps) => {
  const location = useLocation()

  const generateCrumbs = (): BreadcrumbItem[] => {
    if (items) {
      return items
    }

    const pathSegments = location.pathname.split('/').filter(Boolean)
    const crumbs: BreadcrumbItem[] = [{ label: 'Início', href: '/' }]

    let currentPath = ''
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`

      // Usar label customizado se fornecido, senão capitalizar o segmento
      const label =
        labelMap[segment] ||
        segment.charAt(0).toUpperCase() + segment.slice(1)

      crumbs.push({ label, href: currentPath })
    })

    return crumbs
  }

  const crumbs = generateCrumbs()

  return (
    <div className="flex items-center gap-2">
      <SidebarTrigger
        className="cursor-pointer rounded-md border border-transparent p-2 transition-colors duration-200 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        aria-label="Alternar sidebar"
        title="Clique para expandir/colapsar a sidebar (Ctrl+B)"
      />
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.map((crumb, index) => {
            const isLastItem = index === crumbs.length - 1

            return (
              <React.Fragment key={crumb.href}>
                <BreadcrumbItem>
                  {isLastItem ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLastItem && <BreadcrumbSeparator />}
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default PageBreadcrumb
