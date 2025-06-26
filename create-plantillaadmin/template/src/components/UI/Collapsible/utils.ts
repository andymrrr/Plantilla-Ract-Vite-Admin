import { 
  CollapsibleVariant, 
  CollapsibleSize, 
  CollapsibleHeaderColor, 
  CollapsibleExpandIcon 
} from './types';

/**
 * Función utilitaria para combinar clases de CSS
 */
export const combinarClases = (...clases: (string | undefined | null | false)[]): string => {
  return clases.filter(Boolean).join(' ');
};

/**
 * Clases base del contenedor por variante
 */
export const CLASES_CONTENEDOR: Record<CollapsibleVariant, string> = {
  default: 'bg-gradient-to-r rounded-xl border',
  card: 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm',
  minimal: 'border-b border-gray-200 dark:border-gray-600',
  bordered: 'border border-gray-200 dark:border-gray-600 rounded-lg',
  elevated: 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 shadow-lg',
  flat: 'bg-gray-50 dark:bg-gray-900 rounded-lg'
};

/**
 * Clases del header por variante
 */
export const CLASES_HEADER: Record<CollapsibleVariant, string> = {
  default: 'w-full text-left flex items-center justify-between rounded-xl',
  card: 'w-full text-left flex items-center justify-between rounded-xl',
  minimal: 'w-full text-left flex items-center justify-between',
  bordered: 'w-full text-left flex items-center justify-between rounded-t-lg',
  elevated: 'w-full text-left flex items-center justify-between rounded-xl',
  flat: 'w-full text-left flex items-center justify-between rounded-lg'
};

/**
 * Clases de color para el header
 */
export const CLASES_COLOR_HEADER: Record<CollapsibleHeaderColor, string> = {
  gray: 'from-gray-50 to-slate-50 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600 hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  blue: 'from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  green: 'from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 border-green-200 dark:border-gray-600 hover:from-green-100 hover:to-emerald-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  purple: 'from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-700 border-purple-200 dark:border-gray-600 hover:from-purple-100 hover:to-violet-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  orange: 'from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600 hover:from-orange-100 hover:to-amber-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  red: 'from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 border-red-200 dark:border-gray-600 hover:from-red-100 hover:to-pink-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  yellow: 'from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 border-yellow-200 dark:border-gray-600 hover:from-yellow-100 hover:to-amber-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  pink: 'from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-700 border-pink-200 dark:border-gray-600 hover:from-pink-100 hover:to-rose-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  indigo: 'from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-indigo-200 dark:border-gray-600 hover:from-indigo-100 hover:to-blue-100 dark:hover:from-gray-700 dark:hover:to-gray-600',
  teal: 'from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border-teal-200 dark:border-gray-600 hover:from-teal-100 hover:to-cyan-100 dark:hover:from-gray-700 dark:hover:to-gray-600'
};

/**
 * Clases de tamaño
 */
export const CLASES_TAMAÑO: Record<CollapsibleSize, string> = {
  sm: 'p-4 text-sm',
  md: 'p-6 text-base',
  lg: 'p-8 text-lg',
  xl: 'p-10 text-xl'
};

/**
 * Clases del contenido por variante
 */
export const CLASES_CONTENIDO: Record<CollapsibleVariant, string> = {
  default: 'px-6 pb-6 border-t border-gray-200 dark:border-gray-600',
  card: 'px-6 pb-6 border-t border-gray-200 dark:border-gray-600',
  minimal: 'pt-4',
  bordered: 'px-6 pb-6 border-t border-gray-200 dark:border-gray-600',
  elevated: 'px-6 pb-6 border-t border-gray-200 dark:border-gray-600',
  flat: 'px-6 pb-6'
};

/**
 * Clases del título por tamaño
 */
export const CLASES_TITULO: Record<CollapsibleSize, string> = {
  sm: 'text-sm font-semibold text-gray-900 dark:text-white',
  md: 'text-base font-semibold text-gray-900 dark:text-white',
  lg: 'text-lg font-semibold text-gray-900 dark:text-white',
  xl: 'text-xl font-semibold text-gray-900 dark:text-white'
};

/**
 * Clases del subtítulo por tamaño
 */
export const CLASES_SUBTITULO: Record<CollapsibleSize, string> = {
  sm: 'text-xs text-gray-600 dark:text-gray-400 mt-1',
  md: 'text-sm text-gray-600 dark:text-gray-400 mt-1',
  lg: 'text-base text-gray-600 dark:text-gray-400 mt-1',
  xl: 'text-lg text-gray-600 dark:text-gray-400 mt-1'
};

/**
 * Clases del icono por tamaño
 */
export const CLASES_ICONO: Record<CollapsibleSize, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl'
};

/**
 * Clases del icono de expansión por tamaño
 */
export const CLASES_ICONO_EXPANSION: Record<CollapsibleSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

/**
 * Obtiene las clases del contenedor según la variante
 */
export const obtenerClasesContenedor = (variant: CollapsibleVariant): string => {
  return CLASES_CONTENEDOR[variant];
};

/**
 * Obtiene las clases del header según la variante
 */
export const obtenerClasesHeader = (variant: CollapsibleVariant): string => {
  return CLASES_HEADER[variant];
};

/**
 * Obtiene las clases de color del header
 */
export const obtenerClasesColorHeader = (headerColor: CollapsibleHeaderColor): string => {
  return CLASES_COLOR_HEADER[headerColor];
};

/**
 * Obtiene las clases de tamaño
 */
export const obtenerClasesTamaño = (size: CollapsibleSize): string => {
  return CLASES_TAMAÑO[size];
};

/**
 * Obtiene las clases del contenido según la variante
 */
export const obtenerClasesContenido = (variant: CollapsibleVariant): string => {
  return CLASES_CONTENIDO[variant];
};

/**
 * Obtiene las clases del título según el tamaño
 */
export const obtenerClasesTitulo = (size: CollapsibleSize): string => {
  return CLASES_TITULO[size];
};

/**
 * Obtiene las clases del subtítulo según el tamaño
 */
export const obtenerClasesSubtitulo = (size: CollapsibleSize): string => {
  return CLASES_SUBTITULO[size];
};

/**
 * Obtiene las clases del icono según el tamaño
 */
export const obtenerClasesIcono = (size: CollapsibleSize): string => {
  return CLASES_ICONO[size];
};

/**
 * Obtiene las clases del icono de expansión según el tamaño
 */
export const obtenerClasesIconoExpansion = (size: CollapsibleSize): string => {
  return CLASES_ICONO_EXPANSION[size];
};

/**
 * Genera un ID único para el collapsible
 */
export const generarId = (): string => {
  return `collapsible-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Obtiene las clases de animación según el estado
 */
export const obtenerClasesAnimacion = (isOpen: boolean, animated: boolean): string => {
  if (!animated) return '';
  
  return isOpen 
    ? 'animate-fadeIn overflow-hidden' 
    : 'animate-fadeOut overflow-hidden';
};

/**
 * Obtiene las clases de estado deshabilitado
 */
export const obtenerClasesDeshabilitado = (disabled: boolean): string => {
  return disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
};

/**
 * Obtiene las clases de hover para el header
 */
export const obtenerClasesHover = (variant: CollapsibleVariant): string => {
  if (variant === 'minimal') {
    return 'hover:bg-gray-50 dark:hover:bg-gray-700';
  }
  return 'transition-colors duration-200';
}; 