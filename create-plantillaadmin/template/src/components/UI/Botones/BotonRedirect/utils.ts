import { 
  TipoBotonRedirect, 
  VarianteBotonRedirect, 
  TamañoBotonRedirect, 
  AlineacionBotonRedirect 
} from './types';

/**
 * Función utilitaria para combinar clases de CSS
 */
export const combinarClases = (...clases: (string | undefined | null | false)[]): string => {
  return clases.filter(Boolean).join(' ');
};

/**
 * Clases base del botón redirect
 */
export const CLASES_BASE = [
  'inline-flex items-center justify-center gap-2',
  'font-medium transition-all duration-200',
  'rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  'no-underline', // Para evitar subrayado del Link
];

/**
 * Clases de tamaño por tipo
 */
export const CLASES_TAMAÑO: Record<TamañoBotonRedirect, string> = {
  pequeño: 'px-3 py-1.5 text-sm',
  mediano: 'px-4 py-2 text-base',
  grande: 'px-6 py-3 text-lg'
};

/**
 * Clases de color por variante
 */
export const CLASES_COLOR: Record<TipoBotonRedirect, Record<VarianteBotonRedirect, string>> = {
  primary: {
    solido: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500 focus:ring-blue-500',
    outline: 'border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-500 hover:bg-blue-50 border-transparent focus:ring-blue-500',
  },
  success: {
    solido: 'bg-green-500 hover:bg-green-600 text-white border-green-500 focus:ring-green-500',
    outline: 'border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-500',
    ghost: 'text-green-500 hover:bg-green-50 border-transparent focus:ring-green-500',
  },
  delete: {
    solido: 'bg-red-500 hover:bg-red-600 text-white border-red-500 focus:ring-red-500',
    outline: 'border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500',
    ghost: 'text-red-500 hover:bg-red-50 border-transparent focus:ring-red-500',
  },
  warning: {
    solido: 'bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500 focus:ring-yellow-500',
    outline: 'border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-500',
    ghost: 'text-yellow-500 hover:bg-yellow-50 border-transparent focus:ring-yellow-500',
  },
  info: {
    solido: 'bg-blue-400 hover:bg-blue-500 text-white border-blue-400 focus:ring-blue-400',
    outline: 'border-blue-400 text-blue-400 hover:bg-blue-50 focus:ring-blue-400',
    ghost: 'text-blue-400 hover:bg-blue-50 border-transparent focus:ring-blue-400',
  },
  gray: {
    solido: 'bg-gray-500 hover:bg-gray-600 text-white border-gray-500 focus:ring-gray-500',
    outline: 'border-gray-500 text-gray-500 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-500 hover:bg-gray-50 border-transparent focus:ring-gray-500',
  },
};

/**
 * Clases de alineación para el contenedor
 */
export const CLASES_ALINEACION: Record<AlineacionBotonRedirect, string> = {
  izquierda: 'justify-start',
  centro: 'justify-center',
  derecha: 'justify-end',
};

/**
 * Obtiene las clases de color según el tipo y variante
 */
export const obtenerClasesColor = (tipo: TipoBotonRedirect, variante: VarianteBotonRedirect): string => {
  return CLASES_COLOR[tipo][variante];
};

/**
 * Obtiene las clases de tamaño
 */
export const obtenerClasesTamaño = (tamaño: TamañoBotonRedirect): string => {
  return CLASES_TAMAÑO[tamaño];
};

/**
 * Obtiene las clases de alineación
 */
export const obtenerClasesAlineacion = (alineacion: AlineacionBotonRedirect): string => {
  return CLASES_ALINEACION[alineacion];
};

/**
 * Determina si una URL es externa
 */
export const esUrlExterna = (href: string): boolean => {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
};

/**
 * Obtiene los atributos rel para links externos
 */
export const obtenerAtributosRel = (target?: string): string | undefined => {
  return target === '_blank' ? 'noopener noreferrer' : undefined;
}; 