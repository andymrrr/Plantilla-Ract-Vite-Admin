import { TarjetaColor } from './types';

export const TARJETA_COLOR_CLASSES: Record<TarjetaColor, string> = {
  gray: 'border-gray-300 dark:border-strokedark',
  blue: 'border-blue-500 dark:border-blue-700',
  red: 'border-red-500 dark:border-red-700',
  green: 'border-green-500 dark:border-green-700',
  yellow: 'border-yellow-500 dark:border-yellow-700',
  purple: 'border-purple-500 dark:border-purple-700',
  orange: 'border-orange-500 dark:border-orange-700',
  pink: 'border-pink-500 dark:border-pink-700',
  indigo: 'border-indigo-500 dark:border-indigo-700',
  teal: 'border-teal-500 dark:border-teal-700',
  cyan: 'border-cyan-500 dark:border-cyan-700',
};

export const combinarClases = (...clases: (string | undefined | null | false)[]): string => {
  return clases.filter(Boolean).join(' ');
};

export const obtenerClaseColor = (color: TarjetaColor = 'gray') => {
  return TARJETA_COLOR_CLASSES[color] || TARJETA_COLOR_CLASSES.gray;
}; 