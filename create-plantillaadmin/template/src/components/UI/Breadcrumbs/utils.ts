import { BreadcrumbVariant, BreadcrumbItem } from './types';

/**
 * Función utilitaria para combinar clases de CSS
 */
export const combinarClases = (...clases: (string | undefined | null | false)[]): string => {
  return clases.filter(Boolean).join(' ');
};

/**
 * Clases base del contenedor por variante
 */
export const CLASES_CONTENEDOR: Record<BreadcrumbVariant, string> = {
  default: 'mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white dark:bg-boxdark rounded-lg shadow-sm border border-stroke dark:border-strokedark',
  minimal: 'mb-4 flex items-center gap-2 text-sm',
  detailed: 'mb-6 flex flex-col gap-4 p-6 bg-gradient-to-r from-gray-50 to-white dark:from-boxdark dark:to-boxdark-2 rounded-xl shadow-lg border border-stroke dark:border-strokedark',
  compact: 'mb-3 flex items-center gap-2 text-xs'
};

/**
 * Clases del título por variante
 */
export const CLASES_TITULO: Record<BreadcrumbVariant, string> = {
  default: 'flex items-center gap-3',
  minimal: 'flex items-center gap-2',
  detailed: 'flex items-center gap-4',
  compact: 'flex items-center gap-1'
};

/**
 * Clases del icono del título por variante
 */
export const CLASES_ICONO_TITULO: Record<BreadcrumbVariant, string> = {
  default: 'flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20',
  minimal: 'flex h-6 w-6 items-center justify-center rounded bg-primary/10 dark:bg-primary/20',
  detailed: 'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20',
  compact: 'flex h-4 w-4 items-center justify-center rounded bg-primary/10 dark:bg-primary/20'
};

/**
 * Clases del texto del título por variante
 */
export const CLASES_TEXTO_TITULO: Record<BreadcrumbVariant, string> = {
  default: 'text-title-lg font-bold text-black dark:text-white tracking-tight',
  minimal: 'text-lg font-semibold text-black dark:text-white',
  detailed: 'text-2xl font-bold text-black dark:text-white tracking-tight',
  compact: 'text-sm font-medium text-black dark:text-white'
};

/**
 * Clases de navegación por variante
 */
export const CLASES_NAVEGACION: Record<BreadcrumbVariant, string> = {
  default: 'flex items-center',
  minimal: 'flex items-center',
  detailed: 'flex items-center',
  compact: 'flex items-center'
};

/**
 * Clases de la lista por variante
 */
export const CLASES_LISTA: Record<BreadcrumbVariant, string> = {
  default: 'flex items-center space-x-2',
  minimal: 'flex items-center space-x-1',
  detailed: 'flex items-center space-x-3',
  compact: 'flex items-center space-x-1'
};

/**
 * Clases de los items por variante
 */
export const CLASES_ITEM: Record<BreadcrumbVariant, string> = {
  default: 'flex items-center',
  minimal: 'flex items-center',
  detailed: 'flex items-center',
  compact: 'flex items-center'
};

/**
 * Clases de los links por variante
 */
export const CLASES_LINK: Record<BreadcrumbVariant, string> = {
  default: 'group flex items-center gap-2 px-3 py-2 text-sm font-medium text-bodydark1 dark:text-bodydark hover:text-primary dark:hover:text-primary transition-colors duration-200 rounded-md hover:bg-gray-50 dark:hover:bg-meta-4',
  minimal: 'group flex items-center gap-1 px-2 py-1 text-sm font-medium text-bodydark1 dark:text-bodydark hover:text-primary dark:hover:text-primary transition-colors duration-200 rounded hover:bg-gray-50 dark:hover:bg-meta-4',
  detailed: 'group flex items-center gap-2 px-4 py-2 text-base font-medium text-bodydark1 dark:text-bodydark hover:text-primary dark:hover:text-primary transition-all duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-meta-4 hover:shadow-sm',
  compact: 'group flex items-center gap-1 px-1 py-0.5 text-xs font-medium text-bodydark1 dark:text-bodydark hover:text-primary dark:hover:text-primary transition-colors duration-200 rounded hover:bg-gray-50 dark:hover:bg-meta-4'
};

/**
 * Clases de los items activos por variante
 */
export const CLASES_ITEM_ACTIVO: Record<BreadcrumbVariant, string> = {
  default: 'px-3 py-2 text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 rounded-md border border-primary/20',
  minimal: 'px-2 py-1 text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 rounded border border-primary/20',
  detailed: 'px-4 py-2 text-base font-semibold text-primary bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 rounded-lg border border-primary/30 shadow-sm',
  compact: 'px-1 py-0.5 text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 rounded border border-primary/20'
};

/**
 * Clases de los separadores por variante
 */
export const CLASES_SEPARADOR: Record<BreadcrumbVariant, string> = {
  default: 'h-4 w-4 text-bodydark2 dark:text-bodydark mx-1',
  minimal: 'h-3 w-3 text-bodydark2 dark:text-bodydark mx-0.5',
  detailed: 'h-5 w-5 text-bodydark2 dark:text-bodydark mx-2',
  compact: 'h-2 w-2 text-bodydark2 dark:text-bodydark mx-0.5'
};

/**
 * Obtiene las clases del contenedor según la variante
 */
export const obtenerClasesContenedor = (variant: BreadcrumbVariant): string => {
  return CLASES_CONTENEDOR[variant];
};

/**
 * Obtiene las clases del título según la variante
 */
export const obtenerClasesTitulo = (variant: BreadcrumbVariant): string => {
  return CLASES_TITULO[variant];
};

/**
 * Obtiene las clases del icono del título según la variante
 */
export const obtenerClasesIconoTitulo = (variant: BreadcrumbVariant): string => {
  return CLASES_ICONO_TITULO[variant];
};

/**
 * Obtiene las clases del texto del título según la variante
 */
export const obtenerClasesTextoTitulo = (variant: BreadcrumbVariant): string => {
  return CLASES_TEXTO_TITULO[variant];
};

/**
 * Obtiene las clases de navegación según la variante
 */
export const obtenerClasesNavegacion = (variant: BreadcrumbVariant): string => {
  return CLASES_NAVEGACION[variant];
};

/**
 * Obtiene las clases de la lista según la variante
 */
export const obtenerClasesLista = (variant: BreadcrumbVariant): string => {
  return CLASES_LISTA[variant];
};

/**
 * Obtiene las clases de los items según la variante
 */
export const obtenerClasesItem = (variant: BreadcrumbVariant): string => {
  return CLASES_ITEM[variant];
};

/**
 * Obtiene las clases de los links según la variante
 */
export const obtenerClasesLink = (variant: BreadcrumbVariant): string => {
  return CLASES_LINK[variant];
};

/**
 * Obtiene las clases de los items activos según la variante
 */
export const obtenerClasesItemActivo = (variant: BreadcrumbVariant): string => {
  return CLASES_ITEM_ACTIVO[variant];
};

/**
 * Obtiene las clases de los separadores según la variante
 */
export const obtenerClasesSeparador = (variant: BreadcrumbVariant): string => {
  return CLASES_SEPARADOR[variant];
};

/**
 * Trunca los items del breadcrumb si exceden el máximo
 */
export const truncarItems = (items: BreadcrumbItem[], maxItems: number): BreadcrumbItem[] => {
  if (items.length <= maxItems) return items;
  
  const itemsVisibles = maxItems - 2; // -2 para el primer y último item
  const primerItem = items[0];
  const ultimoItem = items[items.length - 1];
  const itemsMedios = items.slice(1, -1);
  
  if (itemsMedios.length <= itemsVisibles) {
    return items;
  }
  
  const itemsAMostrar = itemsMedios.slice(-itemsVisibles);
  
  return [
    primerItem,
    { label: '...', isActive: false },
    ...itemsAMostrar,
    ultimoItem
  ];
}; 