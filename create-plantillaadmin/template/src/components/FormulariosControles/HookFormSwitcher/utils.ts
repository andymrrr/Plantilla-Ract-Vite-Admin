import { SwitcherVariant, SwitcherSize, SwitcherColor, SwitcherValidationProps, ColSpanType } from './types';

// Reutilizamos la función de colSpan del HookFormInput
export { getColSpanClass } from '../HookFormInput/utils';

/**
 * Construye las opciones de validación para react-hook-form
 */
export const buildRegisterOptions = (validations: SwitcherValidationProps) => {
  const options: any = {};
  
  if (validations.required) {
    options.required = typeof validations.required === 'string' 
      ? validations.required 
      : 'Este campo es requerido';
  }
  
  if (validations.validate) {
    options.validate = validations.validate;
  }
  
  return options;
};

/**
 * Genera las clases CSS para diferentes tamaños de switcher
 */
export const getSwitcherSizeClasses = (size: SwitcherSize): { container: string; toggle: string; text: string } => {
  const sizes = {
    sm: {
      container: 'h-5 w-9',
      toggle: 'h-3 w-3 left-1 top-1 peer-checked:left-5',
      text: 'text-xs'
    },
    md: {
      container: 'h-6 w-11',
      toggle: 'h-4 w-4 left-1 top-1 peer-checked:left-6',
      text: 'text-sm'
    },
    lg: {
      container: 'h-8 w-14',
      toggle: 'h-6 w-6 left-1 top-1 peer-checked:left-7',
      text: 'text-base'
    },
    xl: {
      container: 'h-10 w-18',
      toggle: 'h-8 w-8 left-1 top-1 peer-checked:left-9',
      text: 'text-lg'
    }
  };
  return sizes[size];
};

/**
 * Genera las clases CSS para diferentes colores de switcher
 */
export const getSwitcherColorClasses = (color: SwitcherColor, hasError: boolean): string => {
  if (hasError) {
    return 'peer-checked:bg-red-500 peer-checked:border-red-500';
  }

  const colors = {
    blue: 'peer-checked:bg-blue-500 peer-checked:border-blue-500',
    green: 'peer-checked:bg-green-500 peer-checked:border-green-500',
    purple: 'peer-checked:bg-purple-500 peer-checked:border-purple-500',
    red: 'peer-checked:bg-red-500 peer-checked:border-red-500',
    yellow: 'peer-checked:bg-yellow-500 peer-checked:border-yellow-500',
    indigo: 'peer-checked:bg-indigo-500 peer-checked:border-indigo-500',
    pink: 'peer-checked:bg-pink-500 peer-checked:border-pink-500',
    gray: 'peer-checked:bg-gray-500 peer-checked:border-gray-500'
  };
  return colors[color];
};

/**
 * Genera las clases CSS para diferentes variantes de switcher
 */
export const getSwitcherVariantClasses = (variant: SwitcherVariant): { container: string; toggle: string } => {
  const variants = {
    default: {
      container: 'rounded-full border-2 border-gray-300 dark:border-gray-600',
      toggle: 'rounded-full shadow-md'
    },
    modern: {
      container: 'rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-inner',
      toggle: 'rounded-xl shadow-lg'
    },
    minimal: {
      container: 'rounded-full border border-gray-200 dark:border-gray-700',
      toggle: 'rounded-full'
    },
    rounded: {
      container: 'rounded-lg border-2 border-gray-300 dark:border-gray-600',
      toggle: 'rounded-md shadow-sm'
    },
    square: {
      container: 'rounded-sm border-2 border-gray-300 dark:border-gray-600',
      toggle: 'rounded-sm shadow-sm'
    },
    gradient: {
      container: 'rounded-full border-2 border-transparent bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600',
      toggle: 'rounded-full shadow-lg bg-gradient-to-r from-white to-gray-100'
    }
  };
  return variants[variant];
};

/**
 * Genera las clases CSS para iconos del switcher
 */
export const getSwitcherIconClasses = (size: SwitcherSize, position: 'left' | 'right'): string => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };
  
  const positionClasses = position === 'left' ? 'mr-2' : 'ml-2';
  
  return `${sizeClasses[size]} ${positionClasses} text-gray-500 dark:text-gray-400`;
};

/**
 * Genera las clases CSS para etiquetas de tamaño
 */
export const getLabelSizeClasses = (size: SwitcherSize): string => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };
  return sizes[size];
};

/**
 * Genera las clases CSS completas para el switcher
 */
export const getEnhancedSwitcherClasses = (
  variant: SwitcherVariant,
  size: SwitcherSize,
  color: SwitcherColor,
  hasError: boolean,
  disabled: boolean
): { container: string; toggle: string } => {
  const sizeClasses = getSwitcherSizeClasses(size);
  const colorClasses = getSwitcherColorClasses(color, hasError);
  const variantClasses = getSwitcherVariantClasses(variant);
  
  const baseContainer = 'relative transition-all duration-300 bg-gray-200 dark:bg-gray-700';
  const baseToggle = 'absolute bg-white transition-all duration-300 ease-in-out';
  
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  
  return {
    container: `${baseContainer} ${sizeClasses.container} ${variantClasses.container} ${colorClasses} ${disabledClasses}`.trim(),
    toggle: `${baseToggle} ${sizeClasses.toggle} ${variantClasses.toggle}`.trim()
  };
};

/**
 * Genera las clases CSS para el input checkbox oculto
 */
export const getSwitcherInputClasses = (): string => {
  return 'peer sr-only';
};

/**
 * Genera las clases CSS para el spinner de carga
 */
export const getLoadingSpinnerClasses = (size: SwitcherSize): string => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };
  
  return `animate-spin ${sizeClasses[size]} text-gray-400`;
};

/**
 * Genera las clases CSS para texto de estado (ON/OFF)
 */
export const getStateTextClasses = (size: SwitcherSize, isActive: boolean): string => {
  const sizeClasses = getSwitcherSizeClasses(size);
  const activeClasses = isActive 
    ? 'text-green-600 dark:text-green-400 font-medium' 
    : 'text-gray-500 dark:text-gray-400';
  
  return `${sizeClasses.text} ${activeClasses} transition-colors duration-200`;
};

/**
 * Utilidades legacy (mantenidas para compatibilidad)
 */
export const getSwitcherBackgroundClasses = (): string => {
  return 'block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B] peer-checked:bg-primary';
};

export const getSwitcherToggleClasses = (): string => {
  return `
    absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-all duration-200 
    peer-checked:left-7 peer-checked:bg-white
  `.trim();
}; 