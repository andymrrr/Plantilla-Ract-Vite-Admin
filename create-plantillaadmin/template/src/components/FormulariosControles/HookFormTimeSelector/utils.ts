import { ColSpanType, TimeSelectorVariant, TimeSelectorSize, TimeSelectorColor } from './types';

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
 * Obtiene las clases CSS del contenedor según la variante y orientación
 */
export const getContainerClasses = (
  variant: TimeSelectorVariant, 
  orientation: 'horizontal' | 'vertical' = 'horizontal'
): string => {
  const baseClasses = 'flex min-h-[48px] items-center';
  const orientationClasses = orientation === 'vertical' ? 'flex-col items-stretch' : 'flex-wrap';
  const gapClasses = orientation === 'vertical' ? 'gap-1' : 'gap-2';
  
  switch (variant) {
    case 'pill':
      return `${baseClasses} ${orientationClasses} ${gapClasses} bg-gray-100 dark:bg-gray-800 p-2 rounded-lg`;
    
    case 'button':
      return `${baseClasses} ${orientationClasses} gap-1 border border-gray-200 dark:border-gray-700 p-1 rounded-md`;
    
    case 'tabs':
      return `${baseClasses} ${orientationClasses === 'flex-col items-stretch' ? 'flex-col border-r' : ''} border-b border-gray-200 dark:border-gray-700`;
    
    case 'cards':
      return `${baseClasses} ${orientationClasses} gap-3`;
    
    case 'minimal':
      return `${baseClasses} ${orientationClasses} ${gapClasses}`;
    
    case 'outlined':
      return `${baseClasses} ${orientationClasses} ${gapClasses} border border-gray-200 dark:border-gray-700 p-2 rounded-lg`;
    
    case 'filled':
      return `${baseClasses} ${orientationClasses} ${gapClasses} bg-gray-50 dark:bg-gray-900 p-2 rounded-lg`;
    
    case 'segmented':
      return `${baseClasses} ${orientationClasses === 'flex-col items-stretch' ? 'flex-col' : ''} border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden`;
    
    default:
      return `${baseClasses} ${orientationClasses} ${gapClasses} bg-gray-100 dark:bg-gray-800 p-2 rounded-lg`;
  }
};

/**
 * Obtiene las clases de tamaño
 */
export const getSizeClasses = (size: TimeSelectorSize): string => {
  switch (size) {
    case 'sm':
      return 'px-2 py-1 text-xs';
    case 'md':
      return 'px-4 py-2 text-sm';
    case 'lg':
      return 'px-6 py-3 text-base';
    default:
      return 'px-4 py-2 text-sm';
  }
};

/**
 * Obtiene las clases de color para el estado seleccionado
 */
export const getColorClasses = (color: TimeSelectorColor, isSelected: boolean): { selected: string; unselected: string } => {
  const colorMap = {
    blue: {
      selected: 'bg-blue-500 text-white border-blue-500',
      unselected: 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20'
    },
    green: {
      selected: 'bg-green-500 text-white border-green-500',
      unselected: 'text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20'
    },
    purple: {
      selected: 'bg-purple-500 text-white border-purple-500',
      unselected: 'text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20'
    },
    red: {
      selected: 'bg-red-500 text-white border-red-500',
      unselected: 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20'
    },
    yellow: {
      selected: 'bg-yellow-500 text-white border-yellow-500',
      unselected: 'text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-900/20'
    },
    indigo: {
      selected: 'bg-indigo-500 text-white border-indigo-500',
      unselected: 'text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/20'
    },
    pink: {
      selected: 'bg-pink-500 text-white border-pink-500',
      unselected: 'text-pink-600 hover:bg-pink-50 dark:text-pink-400 dark:hover:bg-pink-900/20'
    },
    gray: {
      selected: 'bg-gray-500 text-white border-gray-500',
      unselected: 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900/20'
    }
  };

  return colorMap[color] || colorMap.blue;
};

/**
 * Obtiene las clases CSS del botón según la variante, estado, tamaño y color
 */
export const getButtonClasses = (
  variant: TimeSelectorVariant, 
  isSelected: boolean,
  size: TimeSelectorSize = 'md',
  color: TimeSelectorColor = 'blue',
  disabled: boolean = false
): string => {
  const baseClasses = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const sizeClasses = getSizeClasses(size);
  const colorClasses = getColorClasses(color, isSelected);
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  switch (variant) {
    case 'pill':
      return `${baseClasses} ${sizeClasses} rounded-full ${disabledClasses} ${
        isSelected
          ? `${colorClasses.selected} shadow-sm`
          : `text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700`
      }`;
    
    case 'button':
      return `${baseClasses} ${sizeClasses} rounded ${disabledClasses} ${
        isSelected
          ? `${colorClasses.selected} shadow-sm`
          : `text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700`
      }`;
    
    case 'tabs':
      return `${baseClasses} ${sizeClasses} border-b-2 ${disabledClasses} ${
        isSelected
          ? `border-${color}-500 text-${color}-600 dark:text-${color}-400`
          : `border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600`
      }`;
    
    case 'cards':
      return `${baseClasses} ${sizeClasses} border rounded-lg ${disabledClasses} ${
        isSelected
          ? `border-${color}-500 bg-${color}-50 dark:bg-${color}-900/20 text-${color}-700 dark:text-${color}-300`
          : `border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800`
      }`;
    
    case 'minimal':
      return `${baseClasses} ${sizeClasses} rounded ${disabledClasses} ${
        isSelected
          ? `${colorClasses.selected}`
          : `text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`
      }`;
    
    case 'outlined':
      return `${baseClasses} ${sizeClasses} border rounded-md ${disabledClasses} ${
        isSelected
          ? `${colorClasses.selected} shadow-sm`
          : `border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800`
      }`;
    
    case 'filled':
      return `${baseClasses} ${sizeClasses} rounded-md ${disabledClasses} ${
        isSelected
          ? `${colorClasses.selected} shadow-sm`
          : `bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600`
      }`;
    
    case 'segmented':
      return `${baseClasses} ${sizeClasses} border-r border-gray-200 dark:border-gray-700 last:border-r-0 ${disabledClasses} ${
        isSelected
          ? `${colorClasses.selected}`
          : `text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800`
      }`;
    
    default:
      return getButtonClasses('pill', isSelected, size, color, disabled);
  }
};

/**
 * Obtiene las clases para el contenedor de descripción
 */
export const getDescriptionClasses = (size: TimeSelectorSize): string => {
  switch (size) {
    case 'sm':
      return 'text-xs text-gray-500 dark:text-gray-400 mt-0.5';
    case 'md':
      return 'text-xs text-gray-500 dark:text-gray-400 mt-1';
    case 'lg':
      return 'text-sm text-gray-500 dark:text-gray-400 mt-1';
    default:
      return 'text-xs text-gray-500 dark:text-gray-400 mt-1';
  }
}; 