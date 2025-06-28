import { ReactNode, forwardRef } from "react"

/**
 * Variantes de espaciado disponibles para el contenedor
 */
export type ContenedorSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

/**
 * Variantes de padding disponibles para el contenedor
 */
export type ContenedorPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Variantes de layout disponibles para el contenedor
 */
export type ContenedorLayout = 'grid' | 'flex' | 'block'

/**
 * Propiedades del componente Contenedor
 */
export interface ContenedorProps {
  /** Contenido del contenedor */
  children: ReactNode
  /** Variante de espaciado entre elementos */
  spacing?: ContenedorSpacing
  /** Variante de padding interno */
  padding?: ContenedorPadding
  /** Tipo de layout a utilizar */
  layout?: ContenedorLayout
  /** Número de columnas para layout grid (1-12) */
  columns?: 1 | 2 | 3 | 4 | 6 | 12
  /** Clases CSS adicionales */
  className?: string
  /** ID del elemento para accesibilidad */
  id?: string
  /** Título del contenedor para accesibilidad */
  'aria-label'?: string
  /** Descripción del contenedor para accesibilidad */
  'aria-describedby'?: string
  /** Si el contenedor debe ser responsive */
  responsive?: boolean
  /** Si el contenedor debe centrar su contenido */
  center?: boolean
  /** Si el contenedor debe tener altura completa */
  fullHeight?: boolean
  /** Si el contenedor debe tener ancho completo */
  fullWidth?: boolean
}

/**
 * Mapeo de espaciados a clases CSS
 */
const spacingClasses: Record<ContenedorSpacing, string> = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-10'
}

/**
 * Mapeo de paddings a clases CSS
 */
const paddingClasses: Record<ContenedorPadding, string> = {
  none: '',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8'
}

/**
 * Mapeo de layouts a clases CSS
 */
const layoutClasses: Record<ContenedorLayout, string> = {
  grid: 'grid',
  flex: 'flex flex-wrap',
  block: 'block'
}

/**
 * Mapeo de columnas a clases CSS
 */
const columnClasses: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  12: 'grid-cols-12'
}

/**
 * Componente Contenedor mejorado
 * 
 * Proporciona un contenedor flexible y responsive para organizar contenido
 * con múltiples opciones de layout, espaciado y personalización.
 * 
 * @example
 * ```tsx
 * // Uso básico
 * <Contenedor>
 *   <div>Contenido</div>
 * </Contenedor>
 * 
 * // Con opciones personalizadas
 * <Contenedor 
 *   spacing="lg" 
 *   padding="md" 
 *   layout="grid" 
 *   columns={3}
 *   center
 * >
 *   <div>Elemento 1</div>
 *   <div>Elemento 2</div>
 *   <div>Elemento 3</div>
 * </Contenedor>
 * ```
 */
export const Contenedor = forwardRef<HTMLDivElement, ContenedorProps>(({
  children,
  spacing = 'md',
  padding = 'none',
  layout = 'grid',
  columns = 12,
  className = '',
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  responsive = true,
  center = false,
  fullHeight = false,
  fullWidth = true
}, ref) => {
  // Construir clases CSS dinámicamente
  const baseClasses = [
    // Layout base
    layout === 'grid' ? columnClasses[columns] : layoutClasses[layout],
    // Espaciado
    layout === 'grid' ? spacingClasses[spacing] : '',
    // Padding
    paddingClasses[padding],
    // Responsive
    responsive ? 'w-full' : '',
    // Centrado
    center ? 'justify-center items-center' : '',
    // Altura completa
    fullHeight ? 'h-full' : '',
    // Ancho completo
    fullWidth ? 'w-full' : '',
    // Clases adicionales
    className
  ].filter(Boolean).join(' ')

  return (
    <div
      ref={ref}
      id={id}
      className={baseClasses}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      role="region"
    >
      {children}
    </div>
  )
})

// Agregar displayName para debugging
Contenedor.displayName = 'Contenedor'
