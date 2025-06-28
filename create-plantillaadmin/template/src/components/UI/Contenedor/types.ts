import { ReactNode } from "react"

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