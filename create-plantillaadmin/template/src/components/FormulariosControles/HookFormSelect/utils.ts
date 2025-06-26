import { ColSpanType, SelectVariant, SelectSize, SelectColor, SelectOption, SelectGroup, SelectValidationProps } from './types';


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
export const buildRegisterOptions = (validations: SelectValidationProps) => {
  const { required, pattern, validate } = validations;
  
  return {
    ...(required && { required: typeof required === 'string' ? required : 'Este campo es requerido' }),
    ...(pattern && { pattern }),
    ...(validate && { validate }),
  };
};

/**
 * Obtiene las clases CSS para el tamaño del select
 */
export const getSelectSizeClasses = (size: SelectSize): string => {
  const sizeClasses = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-5 text-lg'
  };
  return sizeClasses[size];
};

/**
 * Obtiene las clases CSS para el color del select
 */
export const getSelectColorClasses = (color: SelectColor, hasError: boolean): string => {
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
 * Obtiene las clases CSS para la variante del select
 */
export const getSelectVariantClasses = (variant: SelectVariant): string => {
  const variantClasses = {
    default: 'border-[1.5px] rounded-lg bg-white dark:bg-gray-800',
    modern: 'border-2 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow',
    outlined: 'border-2 rounded-lg bg-transparent',
    filled: 'border-0 rounded-lg bg-gray-100 dark:bg-gray-800',
    minimal: 'border-0 border-b-2 rounded-none bg-transparent',
    floating: 'border-[1.5px] rounded-lg bg-white dark:bg-gray-800 relative'
  };
  return variantClasses[variant];
};

/**
 * Obtiene las clases CSS para el contenedor de iconos
 */
export const getIconContainerClasses = (size: SelectSize, position: 'left' | 'right'): string => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const positionClasses = position === 'left' ? 'left-0 pl-3' : 'right-0 pr-3';
  
  return `absolute top-1/2 transform -translate-y-1/2 ${positionClasses} ${sizeClasses[size]} flex items-center justify-center text-gray-400 dark:text-gray-500 pointer-events-none z-10`;
};

/**
 * Obtiene las clases CSS para el select con iconos
 */
export const getSelectWithIconClasses = (hasLeftIcon: boolean, hasRightIcon: boolean, size: SelectSize): string => {
  const paddingClasses = {
    sm: {
      left: hasLeftIcon ? 'pl-10' : 'pl-3',
      right: hasRightIcon ? 'pr-10' : 'pr-8'
    },
    md: {
      left: hasLeftIcon ? 'pl-12' : 'pl-4',
      right: hasRightIcon ? 'pr-12' : 'pr-10'
    },
    lg: {
      left: hasLeftIcon ? 'pl-14' : 'pl-5',
      right: hasRightIcon ? 'pr-14' : 'pr-12'
    }
  };
  
  return `${paddingClasses[size].left} ${paddingClasses[size].right}`;
};

/**
 * Obtiene las clases CSS para el label según el tamaño
 */
export const getLabelSizeClasses = (size: SelectSize): string => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  return sizeClasses[size];
};

/**
 * Obtiene las clases CSS para las tags de selección múltiple
 */
export const getMultiSelectTagClasses = (color: SelectColor, size: SelectSize): string => {
  const baseClasses = 'inline-flex items-center gap-1 rounded-full font-medium transition-colors';
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  };
  
  return `${baseClasses} ${sizeClasses[size]} ${colorClasses[color]}`;
};

/**
 * Obtiene las clases CSS para las opciones del dropdown
 */
export const getOptionClasses = (
  isSelected: boolean,
  isHighlighted: boolean,
  color: SelectColor,
  size: SelectSize,
  disabled?: boolean
): string => {
  const baseClasses = 'flex items-center gap-3 cursor-pointer transition-colors';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  };
  
  if (disabled) {
    return `${baseClasses} ${sizeClasses[size]} text-gray-400 cursor-not-allowed opacity-50`;
  }
  
  if (isSelected) {
    const selectedColorClasses = {
      blue: 'bg-blue-50 text-blue-900 dark:bg-blue-900/50 dark:text-blue-100',
      green: 'bg-green-50 text-green-900 dark:bg-green-900/50 dark:text-green-100',
      purple: 'bg-purple-50 text-purple-900 dark:bg-purple-900/50 dark:text-purple-100',
      red: 'bg-red-50 text-red-900 dark:bg-red-900/50 dark:text-red-100',
      yellow: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-900/50 dark:text-yellow-100',
      indigo: 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-100',
      pink: 'bg-pink-50 text-pink-900 dark:bg-pink-900/50 dark:text-pink-100',
      gray: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
    };
    return `${baseClasses} ${sizeClasses[size]} ${selectedColorClasses[color]}`;
  }
  
  if (isHighlighted) {
    return `${baseClasses} ${sizeClasses[size]} bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100`;
  }
  
  return `${baseClasses} ${sizeClasses[size]} text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700`;
};

/**
 * Obtiene las clases CSS para el dropdown
 */
export const getDropdownClasses = (variant: SelectVariant, maxHeight?: number): string => {
  const baseClasses = 'absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg overflow-auto';
  
  const variantClasses = {
    default: 'rounded-lg',
    modern: 'rounded-xl shadow-xl',
    outlined: 'rounded-lg',
    filled: 'rounded-lg',
    minimal: 'rounded-lg',
    floating: 'rounded-lg shadow-2xl'
  };
  
  const heightClass = maxHeight ? `max-h-[${maxHeight}px]` : 'max-h-60';
  
  return `${baseClasses} ${variantClasses[variant]} ${heightClass}`;
};

/**
 * Genera las clases CSS completas para el select mejorado
 */
export const getEnhancedSelectClasses = (
  variant: SelectVariant,
  size: SelectSize,
  color: SelectColor,
  hasError: boolean,
  disabled: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  isOpen: boolean
): string => {
  const baseClasses = 'w-full font-medium outline-none transition-all duration-200 focus:ring-2 cursor-pointer';
  const variantClasses = getSelectVariantClasses(variant);
  const sizeClasses = getSelectSizeClasses(size);
  const colorClasses = getSelectColorClasses(color, hasError);
  const iconClasses = getSelectWithIconClasses(hasLeftIcon, hasRightIcon, size);
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-60' : '';
  const openClasses = isOpen ? 'ring-2' : '';

  return `${baseClasses} ${variantClasses} ${sizeClasses} ${colorClasses} ${iconClasses} ${disabledClasses} ${openClasses}`.trim();
};

/**
 * Utilidades para manejo de selección múltiple
 */
export const isValueSelected = (value: string, selectedValue: string | string[]): boolean => {
  if (Array.isArray(selectedValue)) {
    return selectedValue.includes(value);
  }
  return selectedValue === value;
};

export const toggleMultipleValue = (value: string, selectedValues: string[]): string[] => {
  if (selectedValues.includes(value)) {
    return selectedValues.filter(v => v !== value);
  }
  return [...selectedValues, value];
};

export const selectAllValues = (options: SelectOption[]): string[] => {
  return options.filter(option => !option.disabled).map(option => option.value);
};

export const isAllSelected = (options: SelectOption[], selectedValues: string[]): boolean => {
  const availableValues = options.filter(option => !option.disabled).map(option => option.value);
  return availableValues.every(value => selectedValues.includes(value));
};

export const isIndeterminate = (options: SelectOption[], selectedValues: string[]): boolean => {
  const availableValues = options.filter(option => !option.disabled).map(option => option.value);
  const selectedCount = availableValues.filter(value => selectedValues.includes(value)).length;
  return selectedCount > 0 && selectedCount < availableValues.length;
};

/**
 * Utilidades para búsqueda y filtrado
 */
export const filterOptions = (options: SelectOption[], searchText: string): SelectOption[] => {
  if (!searchText.trim()) return options;
  
  const searchLower = searchText.toLowerCase();
  return options.filter(option => 
    option.label.toLowerCase().includes(searchLower) ||
    option.value.toLowerCase().includes(searchLower) ||
    option.description?.toLowerCase().includes(searchLower)
  );
};

export const filterGroups = (groups: SelectGroup[], searchText: string): SelectGroup[] => {
  if (!searchText.trim()) return groups;
  
  return groups.map(group => ({
    ...group,
    options: filterOptions(group.options, searchText)
  })).filter(group => group.options.length > 0);
};

/**
 * Utilidades para encontrar opciones
 */
export const findOptionByValue = (options: SelectOption[], value: string): SelectOption | null => {
  return options.find(option => option.value === value) || null;
};

export const findOptionInGroups = (groups: SelectGroup[], value: string): SelectOption | null => {
  for (const group of groups) {
    const option = findOptionByValue(group.options, value);
    if (option) return option;
  }
  return null;
};

/**
 * Utilidades para formateo de texto
 */
export const formatSelectedText = (
  selectedValues: string[],
  options: SelectOption[],
  maxDisplay: number = 3
): string => {
  if (selectedValues.length === 0) return '';
  
  if (selectedValues.length <= maxDisplay) {
    return selectedValues
      .map(value => findOptionByValue(options, value)?.label || value)
      .join(', ');
  }
  
  const displayValues = selectedValues.slice(0, maxDisplay);
  const displayText = displayValues
    .map(value => findOptionByValue(options, value)?.label || value)
    .join(', ');
  
  return `${displayText} +${selectedValues.length - maxDisplay} más`;
};

/**
 * Utilidades legacy (mantenidas para compatibilidad)
 */
export const getContainerClasses = (variant: SelectVariant, hasError: boolean): string => {
  return getSelectVariantClasses(variant);
};

export const getSelectClasses = (
  variant: SelectVariant, 
  size: SelectSize, 
  hasError: boolean,
  hasIcon: boolean,
  hasClearButton: boolean,
  isSelected: boolean
): string => {
  return getEnhancedSelectClasses(variant, size, 'blue', hasError, false, hasIcon, hasClearButton, false);
};

export const getIconClasses = (size: SelectSize, variant: SelectVariant): string => {
  return getIconContainerClasses(size, 'left');
};

export const getDropdownIconClasses = (size: SelectSize): string => {
  return getIconContainerClasses(size, 'right');
};

export const getClearButtonClasses = (size: SelectSize): string => {
  const sizeClasses = {
    sm: 'right-8 w-4 h-4',
    md: 'right-10 w-5 h-5',
    lg: 'right-12 w-6 h-6'
  };
  
  return `absolute top-1/2 -translate-y-1/2 ${sizeClasses[size]} text-gray-400 hover:text-gray-600 cursor-pointer z-20`;
};

export const getLoadingSpinnerClasses = (size: SelectSize): string => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  return `animate-spin ${sizeClasses[size]} text-gray-400`;
};

export const formatOptionsForSelect = (options: SelectOption[]): SelectOption[] => {
  return options.map(option => ({
    ...option,
    label: option.label || option.value,
  }));
};

export const formatGroupsForSelect = (groups: SelectGroup[]) => {
  return groups.map(group => ({
    ...group,
    options: formatOptionsForSelect(group.options)
  }));
};

export const getSelectHeight = (size: SelectSize): string => {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };
  return heights[size];
}; 