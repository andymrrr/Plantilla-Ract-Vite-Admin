import { MessageType, MessageConfig, MessageVariant, MessageSize, ButtonVariant } from './types';

/**
 * Función utilitaria para combinar clases de CSS
 */
export const combinarClases = (...clases: (string | undefined | null | false)[]): string => {
  return clases.filter(Boolean).join(' ');
};

/**
 * Configuración de mensajes por tipo
 */
export const MESSAGE_CONFIG: Record<MessageType, MessageConfig> = {
  error: {
    color: 'red',
    defaultIcon: '⚠️',
    titleClass: 'text-red-800 dark:text-red-200',
    iconClass: 'text-red-500',
    bgClass: 'bg-red-50 dark:bg-red-900/20',
    borderClass: 'border-red-200 dark:border-red-800'
  },
  warning: {
    color: 'yellow',
    defaultIcon: '📭',
    titleClass: 'text-yellow-800 dark:text-yellow-200',
    iconClass: 'text-yellow-500',
    bgClass: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderClass: 'border-yellow-200 dark:border-yellow-800'
  },
  info: {
    color: 'blue',
    defaultIcon: 'ℹ️',
    titleClass: 'text-blue-800 dark:text-blue-200',
    iconClass: 'text-blue-500',
    bgClass: 'bg-blue-50 dark:bg-blue-900/20',
    borderClass: 'border-blue-200 dark:border-blue-800'
  },
  success: {
    color: 'green',
    defaultIcon: '✅',
    titleClass: 'text-green-800 dark:text-green-200',
    iconClass: 'text-green-500',
    bgClass: 'bg-green-50 dark:bg-green-900/20',
    borderClass: 'border-green-200 dark:border-green-800'
  },
  neutral: {
    color: 'gray',
    defaultIcon: '💬',
    titleClass: 'text-gray-800 dark:text-gray-200',
    iconClass: 'text-gray-500',
    bgClass: 'bg-gray-50 dark:bg-gray-900/20',
    borderClass: 'border-gray-200 dark:border-gray-800'
  }
};

/**
 * Variantes de botones
 */
export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  secondary: 'px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  outline: 'px-4 py-2 border-2 border-current text-current rounded-lg hover:bg-current hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2',
  ghost: 'px-4 py-2 text-current rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2',
  danger: 'px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
};

/**
 * Clases de tamaño para iconos
 */
export const ICON_SIZE_CLASSES: Record<MessageSize, string> = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-8xl'
};

/**
 * Clases de tamaño para títulos
 */
export const TITLE_SIZE_CLASSES: Record<MessageSize, string> = {
  sm: 'text-sm font-semibold',
  md: 'text-base font-semibold',
  lg: 'text-xl font-semibold',
  xl: 'text-2xl font-semibold'
};

/**
 * Clases de tamaño para descripciones
 */
export const DESCRIPTION_SIZE_CLASSES: Record<MessageSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg'
};

/**
 * Clases de tamaño para detalles
 */
export const DETAILS_SIZE_CLASSES: Record<MessageSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg'
};

/**
 * Clases de padding por variante
 */
export const PADDING_CLASSES: Record<MessageVariant, string> = {
  default: 'p-6',
  compact: 'p-4',
  detailed: 'p-8',
  minimal: 'p-3'
};

/**
 * Clases de espaciado por variante
 */
export const SPACING_CLASSES: Record<MessageVariant, string> = {
  default: 'space-y-4',
  compact: 'space-y-2',
  detailed: 'space-y-6',
  minimal: 'space-y-1'
};

/**
 * Obtiene la configuración de mensaje por tipo
 */
export const obtenerConfigMensaje = (type: MessageType): MessageConfig => {
  return MESSAGE_CONFIG[type];
};

/**
 * Obtiene las clases de botón por variante
 */
export const obtenerClasesBoton = (variant: ButtonVariant): string => {
  return BUTTON_VARIANTS[variant];
};

/**
 * Obtiene las clases de tamaño de icono
 */
export const obtenerClasesTamañoIcono = (size: MessageSize): string => {
  return ICON_SIZE_CLASSES[size];
};

/**
 * Obtiene las clases de tamaño de título
 */
export const obtenerClasesTamañoTitulo = (size: MessageSize): string => {
  return TITLE_SIZE_CLASSES[size];
};

/**
 * Obtiene las clases de tamaño de descripción
 */
export const obtenerClasesTamañoDescripcion = (size: MessageSize): string => {
  return DESCRIPTION_SIZE_CLASSES[size];
};

/**
 * Obtiene las clases de tamaño de detalles
 */
export const obtenerClasesTamañoDetalles = (size: MessageSize): string => {
  return DETAILS_SIZE_CLASSES[size];
};

/**
 * Obtiene las clases de padding por variante
 */
export const obtenerClasesPadding = (variant: MessageVariant): string => {
  return PADDING_CLASSES[variant];
};

/**
 * Obtiene las clases de espaciado por variante
 */
export const obtenerClasesEspaciado = (variant: MessageVariant): string => {
  return SPACING_CLASSES[variant];
}; 