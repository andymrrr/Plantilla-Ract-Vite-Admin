import { ContenedorSpacing, ContenedorPadding, ContenedorLayout } from './types'

/**
 * Mapeo de espaciados a clases CSS
 */
export const spacingClasses: Record<ContenedorSpacing, string> = {
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
export const paddingClasses: Record<ContenedorPadding, string> = {
  none: '',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8'
}

/**
 * Mapeo de layouts a clases CSS
 */
export const layoutClasses: Record<ContenedorLayout, string> = {
  grid: 'grid',
  flex: 'flex flex-wrap',
  block: 'block'
}

/**
 * Mapeo de columnas a clases CSS
 */
export const columnClasses: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  12: 'grid-cols-12'
} 