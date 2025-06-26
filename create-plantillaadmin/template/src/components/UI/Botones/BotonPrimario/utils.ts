import { TamañoBoton, ColorBoton, VarianteBoton, AlineacionBoton } from './types';

/**
 * Función utilitaria para combinar clases de CSS
 */
export const combinarClases = (...clases: (string | undefined | null | false)[]): string => {
  return clases.filter(Boolean).join(' ');
};

/**
 * Clases base del botón
 */
export const CLASES_BASE = [
  'inline-flex items-center justify-center gap-2',
  'font-medium transition-all duration-200',
  'rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
];

/**
 * Clases de tamaño por tipo
 */
export const CLASES_TAMAÑO: Record<TamañoBoton, string> = {
  pequeño: 'px-3 py-1.5 text-sm',
  mediano: 'px-4 py-2 text-base',
  grande: 'px-6 py-3 text-lg'
};

/**
 * Clases de color por variante
 */
export const CLASES_COLOR: Record<ColorBoton, Record<VarianteBoton, string>> = {
  primary: {
    solido: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500 focus:ring-blue-500',
    outline: 'border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-500 hover:bg-blue-50 border-transparent focus:ring-blue-500',
  },
  green: {
    solido: 'bg-green-500 hover:bg-green-600 text-white border-green-500 focus:ring-green-500',
    outline: 'border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-500',
    ghost: 'text-green-500 hover:bg-green-50 border-transparent focus:ring-green-500',
  },
  red: {
    solido: 'bg-red-500 hover:bg-red-600 text-white border-red-500 focus:ring-red-500',
    outline: 'border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500',
    ghost: 'text-red-500 hover:bg-red-50 border-transparent focus:ring-red-500',
  },
  gray: {
    solido: 'bg-gray-500 hover:bg-gray-600 text-white border-gray-500 focus:ring-gray-500',
    outline: 'border-gray-500 text-gray-500 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-500 hover:bg-gray-50 border-transparent focus:ring-gray-500',
  },
  lightBlue: {
    solido: 'bg-blue-400 hover:bg-blue-500 text-white border-blue-400 focus:ring-blue-400',
    outline: 'border-blue-400 text-blue-400 hover:bg-blue-50 focus:ring-blue-400',
    ghost: 'text-blue-400 hover:bg-blue-50 border-transparent focus:ring-blue-400',
  },
};

/**
 * Clases de alineación para el contenedor
 */
export const CLASES_ALINEACION: Record<AlineacionBoton, string> = {
  izquierda: 'justify-start',
  centro: 'justify-center',
  derecha: 'justify-end',
};

/**
 * Obtiene las clases de color según el color y variante
 */
export const obtenerClasesColor = (color: ColorBoton, variante: VarianteBoton): string => {
  return CLASES_COLOR[color][variante];
};

/**
 * Obtiene las clases de tamaño
 */
export const obtenerClasesTamaño = (tamaño: TamañoBoton): string => {
  return CLASES_TAMAÑO[tamaño];
};

/**
 * Obtiene las clases de alineación
 */
export const obtenerClasesAlineacion = (alineacion: AlineacionBoton): string => {
  return CLASES_ALINEACION[alineacion];
}; 