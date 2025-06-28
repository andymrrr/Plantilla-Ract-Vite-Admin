import { forwardRef } from "react"
import { ContenedorProps } from './types'
import { buildContainerClasses } from './utils'

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
  const baseClasses = buildContainerClasses({
    spacing,
    padding,
    layout,
    columns,
    className,
    responsive,
    center,
    fullHeight,
    fullWidth
  })

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


Contenedor.displayName = 'Contenedor'
