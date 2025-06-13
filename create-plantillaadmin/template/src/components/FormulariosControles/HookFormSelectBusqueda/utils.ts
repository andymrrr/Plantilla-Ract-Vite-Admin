import { ColSpanType, SelectVariant, SelectSize, SelectOption, SelectGroup } from './types';
import React from 'react';

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
 * Hook personalizado para detectar el tema oscuro
 */
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return isDarkMode;
};

/**
 * Obtiene las clases CSS del contenedor según la variante
 */
export const getContainerClasses = (variant: SelectVariant, hasError: boolean): string => {
  const baseClasses = 'relative bg-white dark:bg-gray-800';
  
  switch (variant) {
    case 'basic':
      return `${baseClasses} ${hasError ? 'border-red-500' : ''}`;
    case 'modern':
      return `${baseClasses} rounded-lg shadow-sm border ${hasError ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`;
    case 'icon':
      return `${baseClasses} border rounded-md ${hasError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`;
    case 'compact':
      return `${baseClasses} border rounded ${hasError ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`;
    default:
      return baseClasses;
  }
};

/**
 * Obtiene el padding del icono según la variante y tamaño
 */
export const getIconPadding = (variant: SelectVariant, size: SelectSize): string => {
  if (variant !== 'icon') return '';
  
  switch (size) {
    case 'sm':
      return 'pl-8';
    case 'md':
      return 'pl-10';
    case 'lg':
      return 'pl-12';
    default:
      return 'pl-10';
  }
};

/**
 * Obtiene las clases CSS del icono según el tamaño
 */
export const getIconClasses = (size: SelectSize): string => {
  const baseClasses = 'absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none z-10';
  
  switch (size) {
    case 'sm':
      return `${baseClasses} text-sm left-2`;
    case 'md':
      return `${baseClasses} text-base`;
    case 'lg':
      return `${baseClasses} text-lg left-4`;
    default:
      return baseClasses;
  }
};

/**
 * Obtiene los estilos personalizados para react-select según la variante y tamaño
 */
export const getReactSelectStyles = (
  variant: SelectVariant, 
  size: SelectSize, 
  hasError: boolean,
  hasIcon: boolean,
  isDarkMode?: boolean
) => {
  // Si no se proporciona isDarkMode, detectarlo
  const darkMode = isDarkMode ?? (typeof window !== 'undefined' && document.documentElement.classList.contains('dark'));
  
  return {
    control: (provided: any, state: any) => {
      const baseStyles = {
        ...provided,
        minHeight: getSizeHeight(size),
        borderRadius: getVariantBorderRadius(variant),
        borderColor: hasError 
          ? '#ef4444' 
          : state.isFocused 
            ? '#3b82f6' 
            : getVariantBorderColor(variant, darkMode),
        boxShadow: state.isFocused 
          ? getVariantFocusBoxShadow(variant) 
          : 'none',
        '&:hover': {
          borderColor: hasError ? '#ef4444' : darkMode ? '#6b7280' : '#9ca3af',
        },
        paddingLeft: hasIcon ? getIconPaddingValue(size) : '12px',
        backgroundColor: darkMode ? '#374151' : '#ffffff',
        cursor: 'pointer',
      };

      return baseStyles;
    },
    
    placeholder: (provided: any) => ({
      ...provided,
      color: darkMode ? '#9ca3af' : '#6b7280',
      fontSize: getSizeFontSize(size),
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: darkMode ? '#f9fafb' : '#111827',
      fontSize: getSizeFontSize(size),
    }),

    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: darkMode ? '#4b5563' : '#e5e7eb',
      borderRadius: '4px',
    }),

    multiValueLabel: (provided: any) => ({
      ...provided,
      color: darkMode ? '#f9fafb' : '#374151',
      fontSize: getSizeFontSize(size),
    }),

    multiValueRemove: (provided: any) => ({
      ...provided,
      color: darkMode ? '#d1d5db' : '#6b7280',
      '&:hover': {
        backgroundColor: darkMode ? '#ef4444' : '#fca5a5',
        color: darkMode ? '#ffffff' : '#991b1b',
      },
    }),

    menu: (provided: any) => ({
      ...provided,
      backgroundColor: darkMode ? '#374151' : '#ffffff',
      borderRadius: getVariantBorderRadius(variant),
      boxShadow: darkMode 
        ? '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)'
        : '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
      zIndex: 50,
    }),

    menuList: (provided: any) => ({
      ...provided,
      padding: '4px',
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected 
        ? '#3b82f6' 
        : state.isFocused 
          ? darkMode ? '#4b5563' : '#eff6ff'
          : 'transparent',
      color: state.isSelected 
        ? '#ffffff' 
        : darkMode ? '#f9fafb' : '#111827',
      fontSize: getSizeFontSize(size),
      padding: getSizeOptionPadding(size),
      cursor: 'pointer',
      borderRadius: '4px',
      margin: '2px 0',
      '&:active': {
        backgroundColor: state.isSelected ? '#2563eb' : darkMode ? '#6b7280' : '#dbeafe',
      },
    }),

    input: (provided: any) => ({
      ...provided,
      color: darkMode ? '#f9fafb' : '#111827',
      fontSize: getSizeFontSize(size),
    }),

    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: darkMode ? '#6b7280' : '#d1d5db',
    }),

    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: darkMode ? '#9ca3af' : '#6b7280',
      '&:hover': {
        color: darkMode ? '#d1d5db' : '#374151',
      },
    }),

    clearIndicator: (provided: any) => ({
      ...provided,
      color: darkMode ? '#9ca3af' : '#6b7280',
      '&:hover': {
        color: darkMode ? '#ef4444' : '#dc2626',
      },
    }),

    noOptionsMessage: (provided: any) => ({
      ...provided,
      color: darkMode ? '#9ca3af' : '#6b7280',
      fontSize: getSizeFontSize(size),
      padding: getSizeOptionPadding(size),
    }),

    loadingMessage: (provided: any) => ({
      ...provided,
      color: darkMode ? '#9ca3af' : '#6b7280',
      fontSize: getSizeFontSize(size),
      padding: getSizeOptionPadding(size),
    }),

    group: (provided: any) => ({
      ...provided,
      paddingTop: '8px',
      paddingBottom: '8px',
    }),

    groupHeading: (provided: any) => ({
      ...provided,
      color: darkMode ? '#d1d5db' : '#374151',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      padding: '8px 12px 4px 12px',
      margin: '0',
    }),
  };
};

/**
 * Obtiene la altura mínima según el tamaño
 */
export const getSizeHeight = (size: SelectSize): string => {
  switch (size) {
    case 'sm': return '32px';
    case 'md': return '40px';
    case 'lg': return '48px';
    default: return '40px';
  }
};

/**
 * Obtiene el tamaño de fuente según el tamaño
 */
export const getSizeFontSize = (size: SelectSize): string => {
  switch (size) {
    case 'sm': return '14px';
    case 'md': return '16px';
    case 'lg': return '18px';
    default: return '16px';
  }
};

/**
 * Obtiene el padding de las opciones según el tamaño
 */
export const getSizeOptionPadding = (size: SelectSize): string => {
  switch (size) {
    case 'sm': return '6px 12px';
    case 'md': return '8px 12px';
    case 'lg': return '10px 16px';
    default: return '8px 12px';
  }
};

/**
 * Obtiene el valor de padding para el icono según el tamaño
 */
const getIconPaddingValue = (size: SelectSize): string => {
  switch (size) {
    case 'sm': return '32px';
    case 'md': return '40px';
    case 'lg': return '48px';
    default: return '40px';
  }
};

/**
 * Obtiene el border radius según la variante
 */
const getVariantBorderRadius = (variant: SelectVariant): string => {
  switch (variant) {
    case 'modern': return '8px';
    case 'icon': return '6px';
    case 'compact': return '4px';
    default: return '4px';
  }
};

/**
 * Obtiene el color del borde según la variante y tema
 */
const getVariantBorderColor = (variant: SelectVariant, isDarkMode: boolean): string => {
  if (isDarkMode) {
    switch (variant) {
      case 'modern': return '#4b5563';
      case 'icon': return '#6b7280';
      case 'compact': return '#4b5563';
      default: return '#6b7280';
    }
  } else {
    switch (variant) {
      case 'modern': return '#e5e7eb';
      case 'icon': return '#d1d5db';
      case 'compact': return '#e5e7eb';
      default: return '#d1d5db';
    }
  }
};

/**
 * Obtiene la sombra de enfoque según la variante
 */
const getVariantFocusBoxShadow = (variant: SelectVariant): string => {
  switch (variant) {
    case 'modern': return '0 0 0 3px rgb(59 130 246 / 0.1)';
    case 'icon': return '0 0 0 2px rgb(59 130 246 / 0.2)';
    default: return '0 0 0 1px rgb(59 130 246 / 0.5)';
  }
};

/**
 * Convierte opciones básicas sin problemas de tipos
 */
export const formatBasicOptions = (options: any[]) => {
  return options.map((option) => ({
    value: option.value,
    label: option.label,
    color: option.color,
    description: option.description,
  }));
};

/**
 * Filter personalizado por defecto
 */
export const defaultCustomFilter = (option: any, inputValue: string): boolean => {
  const searchValue = inputValue.toLowerCase();
  return (
    option.label.toLowerCase().includes(searchValue) ||
    option.value.toLowerCase().includes(searchValue) ||
    (option.description && option.description.toLowerCase().includes(searchValue))
  );
};

/**
 * Encuentra una opción por valor
 */
export const findOptionByValue = (options: any[], value: string): any | null => {
  return options.find(option => option.value === value) || null;
};

/**
 * Encuentra una opción en grupos por valor
 */
export const findOptionInGroups = (groups: any[], value: string): any | null => {
  for (const group of groups) {
    const option = findOptionByValue(group.options, value);
    if (option) return option;
  }
  return null;
};

/**
 * Formatea opciones para react-select
 */
export const formatOptionsForReactSelect = (options: any[]) => {
  return options.map((option) => ({
    value: option.value,
    label: option.label,
    data: option,
    color: option.color,
    description: option.description,
    disabled: option.disabled || false
  }));
};

/**
 * Formatea grupos de opciones para react-select
 */
export const formatGroupsForReactSelect = (groups: any[]) => {
  return groups.map((group) => ({
    label: group.label,
    options: formatOptionsForReactSelect(group.options)
  }));
}; 