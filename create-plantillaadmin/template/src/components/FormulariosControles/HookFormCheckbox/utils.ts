// Reutilizamos la función de colSpan del HookFormInput
export { getColSpanClass } from '../HookFormInput/utils';

import { ColSpanType, CheckboxVariant, CheckboxColor, CheckboxSize, LabelPosition } from './types';

/**
 * Obtiene las clases CSS para el contenedor del checkbox según la variante
 */
export const getCheckboxContainerClasses = (
  variant: CheckboxVariant,
  size: CheckboxSize,
  color: CheckboxColor,
  disabled?: boolean
): string => {
  const baseClasses = 'relative flex items-center justify-center transition-all duration-200';
  const sizeClasses = getSizeClasses(size, variant);
  const colorClasses = getColorClasses(color, variant);
  const variantClasses = getVariantClasses(variant);
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return `${baseClasses} ${sizeClasses} ${colorClasses} ${variantClasses} ${disabledClasses}`.trim();
};

/**
 * Obtiene las clases CSS para el tamaño del checkbox
 */
export const getSizeClasses = (size: CheckboxSize, variant?: CheckboxVariant): string => {
  // Para variantes especiales que necesitan tamaños diferentes
  if (variant === 'button') {
    const buttonSizes = {
      sm: 'min-h-8 px-3 py-1.5 text-sm',
      md: 'min-h-10 px-4 py-2 text-base',
      lg: 'min-h-12 px-5 py-2.5 text-lg'
    };
    return buttonSizes[size];
  }

  if (variant === 'card') {
    const cardSizes = {
      sm: 'min-h-16 p-3',
      md: 'min-h-20 p-4',
      lg: 'min-h-24 p-5'
    };
    return cardSizes[size];
  }

  // Para variantes normales (checkbox tradicional)
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  return sizes[size];
};

/**
 * Obtiene las clases CSS para los colores del checkbox
 */
export const getColorClasses = (color: CheckboxColor, variant: CheckboxVariant): string => {
  const colors = {
    blue: {
      default: 'peer-checked:bg-blue-600 peer-checked:border-blue-600',
      switch: 'peer-checked:bg-blue-600',
      button: 'peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600',
      card: 'peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-blue-100'
    },
    green: {
      default: 'peer-checked:bg-green-600 peer-checked:border-green-600',
      switch: 'peer-checked:bg-green-600',
      button: 'peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600',
      card: 'peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:shadow-green-100'
    },
    purple: {
      default: 'peer-checked:bg-purple-600 peer-checked:border-purple-600',
      switch: 'peer-checked:bg-purple-600',
      button: 'peer-checked:bg-purple-600 peer-checked:text-white peer-checked:border-purple-600',
      card: 'peer-checked:border-purple-500 peer-checked:bg-purple-50 peer-checked:shadow-purple-100'
    },
    red: {
      default: 'peer-checked:bg-red-600 peer-checked:border-red-600',
      switch: 'peer-checked:bg-red-600',
      button: 'peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600',
      card: 'peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:shadow-red-100'
    },
    yellow: {
      default: 'peer-checked:bg-yellow-500 peer-checked:border-yellow-500',
      switch: 'peer-checked:bg-yellow-500',
      button: 'peer-checked:bg-yellow-500 peer-checked:text-white peer-checked:border-yellow-500',
      card: 'peer-checked:border-yellow-500 peer-checked:bg-yellow-50 peer-checked:shadow-yellow-100'
    },
    indigo: {
      default: 'peer-checked:bg-indigo-600 peer-checked:border-indigo-600',
      switch: 'peer-checked:bg-indigo-600',
      button: 'peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600',
      card: 'peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:shadow-indigo-100'
    },
    pink: {
      default: 'peer-checked:bg-pink-600 peer-checked:border-pink-600',
      switch: 'peer-checked:bg-pink-600',
      button: 'peer-checked:bg-pink-600 peer-checked:text-white peer-checked:border-pink-600',
      card: 'peer-checked:border-pink-500 peer-checked:bg-pink-50 peer-checked:shadow-pink-100'
    },
    gray: {
      default: 'peer-checked:bg-gray-600 peer-checked:border-gray-600',
      switch: 'peer-checked:bg-gray-600',
      button: 'peer-checked:bg-gray-600 peer-checked:text-white peer-checked:border-gray-600',
      card: 'peer-checked:border-gray-500 peer-checked:bg-gray-50 peer-checked:shadow-gray-100'
    }
  };

  const variantKey = ['switch', 'button', 'card'].includes(variant) ? variant : 'default';
  return colors[color][variantKey as keyof typeof colors[typeof color]];
};

/**
 * Obtiene las clases CSS específicas para cada variante
 */
export const getVariantClasses = (variant: CheckboxVariant): string => {
  const variants = {
    default: 'border-2 border-gray-300 bg-white rounded shrink-0',
    rounded: 'border-2 border-gray-300 bg-white rounded-md shrink-0',
    circle: 'border-2 border-gray-300 bg-white rounded-full shrink-0',
    switch: 'bg-gray-300 rounded-full relative shrink-0',
    button: 'border-2 border-gray-300 bg-white rounded-lg font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap',
    card: 'border-2 border-gray-200 bg-white rounded-lg hover:shadow-md w-full',
    minimal: 'border border-gray-400 bg-transparent rounded-sm shrink-0',
    modern: 'border-2 border-gray-300 bg-white rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 shrink-0'
  };
  return variants[variant];
};

/**
 * Obtiene las clases CSS para el ícono de check según la variante
 */
export const getCheckIconClasses = (variant: CheckboxVariant, size: CheckboxSize): string => {
  const baseClasses = 'opacity-0 peer-checked:opacity-100 transition-all duration-200';
  
  if (variant === 'switch') {
    const switchSizes = {
      sm: 'h-3 w-3',
      md: 'h-4 w-4', 
      lg: 'h-5 w-5'
    };
    return `${baseClasses} ${switchSizes[size]} bg-white rounded-full absolute left-0.5 peer-checked:translate-x-full transform transition-transform duration-200`;
  }

  if (variant === 'circle') {
    const circleSizes = {
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3'
    };
    return `${baseClasses} ${circleSizes[size]} bg-white rounded-full`;
  }

  // Para variantes default, rounded, minimal, modern
  const checkSizes = {
    sm: 'h-1.5 w-2.5 border-b border-r',
    md: 'h-2 w-3 border-b-2 border-r-2',
    lg: 'h-2.5 w-4 border-b-2 border-r-2'
  };

  return `${baseClasses} ${checkSizes[size]} border-white rotate-45 mt-[-2px]`;
};

/**
 * Obtiene las clases CSS para el switch específicamente
 */
export const getSwitchClasses = (size: CheckboxSize): string => {
  const switchSizes = {
    sm: 'w-8 h-4',
    md: 'w-10 h-5',
    lg: 'w-12 h-6'
  };
  return switchSizes[size];
};

/**
 * Obtiene las clases CSS para el label según la posición y tamaño
 */
export const getLabelClasses = (
  position: LabelPosition,
  size: CheckboxSize,
  disabled?: boolean
): string => {
  const baseClasses = 'select-none transition-colors duration-200';
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  
  const positionClasses = {
    right: 'ml-3',
    left: 'mr-3 order-first',
    top: 'mb-2 block',
    bottom: 'mt-2 block'
  };

  const disabledClasses = disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer';

  return `${baseClasses} ${sizeClasses[size]} ${positionClasses[position]} ${disabledClasses}`.trim();
};

/**
 * Obtiene las clases CSS para la descripción
 */
export const getDescriptionClasses = (size: CheckboxSize): string => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  return `text-gray-500 ${sizeClasses[size]} mt-1 leading-relaxed`;
};

/**
 * Obtiene las clases CSS para el contenedor principal según la posición del label
 */
export const getMainContainerClasses = (labelPosition: LabelPosition): string => {
  const positionClasses = {
    right: 'flex items-start gap-2',
    left: 'flex items-start gap-2',
    top: 'flex flex-col items-start',
    bottom: 'flex flex-col items-start'
  };
  return `cursor-pointer select-none ${positionClasses[labelPosition]}`;
};

/**
 * Genera las clases CSS para el checkbox personalizado (función legacy)
 */
export const getCheckboxClasses = (): string => {
  return getCheckboxContainerClasses('default', 'md', 'blue');
};

/**
 * Genera las clases CSS para el ícono de check (función legacy)
 */
export const getCheckIconClassesLegacy = (): string => {
  return getCheckIconClasses('default', 'md');
}; 