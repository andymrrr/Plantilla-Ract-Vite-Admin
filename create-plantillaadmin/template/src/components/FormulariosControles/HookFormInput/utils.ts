import { ColSpanType, InputValidationProps, InputVariant, InputSize, InputColor } from './types';

/**
 * Mapeo de colSpan a clases CSS de Tailwind
 */
export const getColSpanClass = (colSpan: ColSpanType): string => {
  const colSpanClassMap: Record<ColSpanType, string> = {
    '1': 'col-span-1',
    '2': 'col-span-2',
    '3': 'col-span-3',
    '4': 'col-span-4',
    '5': 'col-span-5',
    '6': 'col-span-6',
    '7': 'col-span-7',
    '8': 'col-span-8',
    '9': 'col-span-9',
    '10': 'col-span-10',
    '11': 'col-span-11',
    '12': 'col-span-12',
  };
  
  return colSpanClassMap[colSpan] || 'col-span-6';
};

/**
 * Construye las opciones de registro para react-hook-form
 */
export const buildRegisterOptions = (validations: InputValidationProps) => {
  const { required, pattern, minLength, maxLength } = validations;
  
  return {
    ...(required && { required }),
    ...(pattern && { pattern }),
    ...(minLength && { minLength }),
    ...(maxLength && { maxLength }),
  };
};

/**
 * Obtiene las clases CSS para el tamaño del input
 */
export const getInputSizeClasses = (size: InputSize): string => {
  const sizeClasses = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-5 text-base',
    lg: 'py-4 px-6 text-lg'
  };
  return sizeClasses[size];
};

/**
 * Obtiene las clases CSS para el color del input
 */
export const getInputColorClasses = (color: InputColor, hasError: boolean): string => {
  if (hasError) {
    return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';
  }

  const colorClasses = {
    blue: 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20',
    green: 'border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500/20',
    purple: 'border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/20',
    red: 'border-gray-300 dark:border-gray-600 focus:border-red-500 focus:ring-red-500/20',
    yellow: 'border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-yellow-500/20',
    indigo: 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500/20',
    pink: 'border-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-pink-500/20',
    gray: 'border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:ring-gray-500/20'
  };
  return colorClasses[color];
};

/**
 * Obtiene las clases CSS para la variante del input
 */
export const getInputVariantClasses = (variant: InputVariant): string => {
  const variantClasses = {
    default: 'border-[1.5px] rounded-lg bg-transparent',
    outlined: 'border-2 rounded-lg bg-transparent',
    filled: 'border-0 rounded-lg bg-gray-100 dark:bg-gray-800',
    underlined: 'border-0 border-b-2 rounded-none bg-transparent',
    modern: 'border-[1.5px] rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow'
  };
  return variantClasses[variant];
};

/**
 * Obtiene las clases CSS para el contenedor de iconos
 */
export const getIconContainerClasses = (size: InputSize, position: 'left' | 'right'): string => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const positionClasses = position === 'left' ? 'left-0 pl-3' : 'right-0 pr-3';
  
  return `absolute top-0 ${positionClasses} ${sizeClasses[size]} flex items-center justify-center text-gray-400 dark:text-gray-500`;
};

/**
 * Obtiene las clases CSS para el input con iconos
 */
export const getInputWithIconClasses = (hasLeftIcon: boolean, hasRightIcon: boolean, size: InputSize): string => {
  const paddingClasses = {
    sm: {
      left: hasLeftIcon ? 'pl-10' : 'pl-3',
      right: hasRightIcon ? 'pr-10' : 'pr-3'
    },
    md: {
      left: hasLeftIcon ? 'pl-12' : 'pl-5',
      right: hasRightIcon ? 'pr-12' : 'pr-5'
    },
    lg: {
      left: hasLeftIcon ? 'pl-14' : 'pl-6',
      right: hasRightIcon ? 'pr-14' : 'pr-6'
    }
  };
  
  return `${paddingClasses[size].left} ${paddingClasses[size].right}`;
};

/**
 * Obtiene las clases CSS para el label según el tamaño
 */
export const getLabelSizeClasses = (size: InputSize): string => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  return sizeClasses[size];
};

/**
 * Genera las clases CSS para el input basado en el estado (función legacy)
 */
export const getInputClasses = (hasError: boolean, disabled: boolean): string => {
  const baseClasses = `
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary
  `.trim();

  const errorClasses = hasError
    ? 'border-danger focus:border-danger active:border-danger'
    : 'border-stroke focus:border-primary active:border-primary';

  const disabledClasses = disabled ? 'cursor-not-allowed' : '';

  return `${baseClasses} ${errorClasses} ${disabledClasses}`.trim();
};

/**
 * Genera las clases CSS completas para el input mejorado
 */
export const getEnhancedInputClasses = (
  variant: InputVariant,
  size: InputSize,
  color: InputColor,
  hasError: boolean,
  disabled: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean
): string => {
  const baseClasses = 'w-full font-medium outline-none transition-all duration-200 focus:ring-2';
  const variantClasses = getInputVariantClasses(variant);
  const sizeClasses = getInputSizeClasses(size);
  const colorClasses = getInputColorClasses(color, hasError);
  const iconClasses = getInputWithIconClasses(hasLeftIcon, hasRightIcon, size);
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-60' : '';

  return `${baseClasses} ${variantClasses} ${sizeClasses} ${colorClasses} ${iconClasses} ${disabledClasses}`.trim();
}; 