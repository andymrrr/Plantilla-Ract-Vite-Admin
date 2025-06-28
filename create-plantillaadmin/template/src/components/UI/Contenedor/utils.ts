import { ContenedorProps } from './types'
import { spacingClasses, paddingClasses, layoutClasses, columnClasses } from './constants'

/**
 * Propiedades necesarias para construir las clases CSS
 */
type ContainerClassProps = Omit<ContenedorProps, 'children'>

/**
 * Construye las clases CSS para el contenedor basándose en las props
 */
export const buildContainerClasses = ({
  spacing = 'md',
  padding = 'none',
  layout = 'grid',
  columns = 12,
  className = '',
  responsive = true,
  center = false,
  fullHeight = false,
  fullWidth = true
}: ContainerClassProps): string => {
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

  return baseClasses
} 