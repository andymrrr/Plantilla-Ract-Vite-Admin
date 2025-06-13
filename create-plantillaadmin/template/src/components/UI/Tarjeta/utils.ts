import { TarjetaVariante, TarjetaTamano, LineaColor } from './types';

/**
 * Obtiene las clases CSS para las variantes de tarjeta
 */
export const obtenerClasesVariante = (variante: TarjetaVariante): string => {
  switch (variante) {
    case 'primario':
      return 'bg-primary border-primary text-white';
    case 'secundario':
      return 'bg-gray-2 border-gray-2 dark:bg-meta-4';
    default:
      return 'bg-white dark:bg-boxdark';
  }
};

/**
 * Obtiene las clases CSS para los tamaños de tarjeta
 */
export const obtenerClasesTamano = (tamano: TarjetaTamano): string => {
  switch (tamano) {
    case 4:
      return 'col-span-12 md:col-span-6 xl:col-span-4';
    case 6:
      return 'col-span-12 md:col-span-6 xl:col-span-6';
    case 12:
      return 'col-span-12 md:col-span-12 xl:col-span-12';
    default:
      return 'col-span-12 md:col-span-6 xl:col-span-6';
  }
};

/**
 * Obtiene las clases CSS para los colores de línea
 */
export const obtenerClaseColor = (color: LineaColor = 'gray'): string => {
  const colores = {
    gray: 'border-gray-300 dark:border-strokedark',
    blue: 'border-blue-500 dark:border-blue-700',
    red: 'border-red-500 dark:border-red-700',
    green: 'border-green-500 dark:border-green-700',
    yellow: 'border-yellow-500 dark:border-yellow-700',
  };
  
  return colores[color] || colores.gray;
}; 