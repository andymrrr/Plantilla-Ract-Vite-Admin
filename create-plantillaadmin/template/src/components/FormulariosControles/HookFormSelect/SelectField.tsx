import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { SelectFieldProps } from './types';
import { 
  getEnhancedSelectClasses,
  getIconContainerClasses,
  isValueSelected,
  toggleMultipleValue,
  formatSelectedText
} from './utils';
import LoadingSpinner from './LoadingSpinner';

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options = [],
  groups,
  multiple = false,
  selectedValue = multiple ? [] : '',
  onChange,
  placeholder = "Selecciona una opción...",
  leftIcon,
  rightIcon,
  variant = 'default',
  size = 'md',
  color = 'blue',
  disabled = false,
  loading = false,
  clearable = false,
  emptyMessage = "No hay opciones disponibles",
  loadingMessage = "Cargando...",
  hasError = false,
  maxSelectedDisplay = 3
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Manejar cambio de valor para selección simple
  const handleSingleChange = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  // Manejar cambio de valor para selección múltiple
  const handleMultipleChange = (value: string) => {
    const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
    const newValues = toggleMultipleValue(value, currentValues);
    onChange(newValues);
  };

  // Manejar limpiar selección
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(multiple ? [] : '');
  };

  // Remover un valor específico en selección múltiple
  const handleRemoveValue = (valueToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
    const newValues = currentValues.filter(v => v !== valueToRemove);
    onChange(newValues);
  };

  // Obtener clases CSS
  const isSelected = !!selectedValue && (Array.isArray(selectedValue) ? selectedValue.length > 0 : selectedValue !== '');
  const selectClasses = getEnhancedSelectClasses(
    variant,
    size,
    color,
    hasError,
    disabled,
    !!leftIcon,
    !!rightIcon || clearable,
    isOpen
  );

  const leftIconClasses = leftIcon ? getIconContainerClasses(size, 'left') : '';
  const rightIconClasses = (rightIcon || clearable) ? getIconContainerClasses(size, 'right') : '';

  // Mostrar mensaje de carga
  if (loading) {
    return (
      <div className="relative">
        {leftIcon && (
          <div className={leftIconClasses}>
            {leftIcon}
          </div>
        )}
        
        <div className={selectClasses.replace('cursor-pointer', 'cursor-wait')}>
          {loadingMessage}
        </div>
        
        <div className={rightIconClasses}>
          <LoadingSpinner size={size} />
        </div>
      </div>
    );
  }

  // Obtener todas las opciones (incluyendo las de grupos)
  const allOptions = groups 
    ? groups.flatMap(group => group.options)
    : options;

  // Obtener texto a mostrar
  const getDisplayText = () => {
    if (multiple && Array.isArray(selectedValue)) {
      if (selectedValue.length === 0) return placeholder;
      return formatSelectedText(selectedValue, allOptions, maxSelectedDisplay);
    } else {
      if (!selectedValue) return placeholder;
      const option = allOptions.find(opt => opt.value === selectedValue);
      return option ? option.label : selectedValue;
    }
  };

  // Renderizar opciones del dropdown
  const renderDropdownOptions = () => {
    if (groups) {
      return groups.map((group) => (
        <div key={group.label}>
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-700">
            {group.label}
          </div>
          {group.options.map((option) => {
            const isOptionSelected = multiple 
              ? isValueSelected(option.value, selectedValue)
              : selectedValue === option.value;
            
            return (
              <div
                key={option.value}
                className={`px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between ${
                  isOptionSelected ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'
                } ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => {
                  if (option.disabled) return;
                  if (multiple) {
                    handleMultipleChange(option.value);
                  } else {
                    handleSingleChange(option.value);
                  }
                }}
              >
                <span>{option.label}</span>
                {multiple && isOptionSelected && (
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                )}
              </div>
            );
          })}
        </div>
      ));
    }

    return allOptions.map((option) => {
      const isOptionSelected = multiple 
        ? isValueSelected(option.value, selectedValue)
        : selectedValue === option.value;
      
      return (
        <div
          key={option.value}
          className={`px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between ${
            isOptionSelected ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'
          } ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            if (option.disabled) return;
            if (multiple) {
              handleMultipleChange(option.value);
            } else {
              handleSingleChange(option.value);
            }
          }}
        >
          <span>
            {option.label}
            {option.description && <span className="text-sm text-gray-500 ml-2">- {option.description}</span>}
          </span>
          {multiple && isOptionSelected && (
            <span className="text-blue-600 dark:text-blue-400">✓</span>
          )}
        </div>
      );
    });
  };

  // Renderizar tags para selección múltiple
  const renderMultipleTags = () => {
    if (!multiple || !Array.isArray(selectedValue) || selectedValue.length === 0) return null;

    const maxToShow = 2;
    const visibleValues = selectedValue.slice(0, maxToShow);
    const remainingCount = selectedValue.length - maxToShow;

    return (
      <div className="flex flex-wrap gap-1 mt-1">
        {visibleValues.map((value) => {
          const option = allOptions.find(opt => opt.value === value);
          return (
            <span
              key={value}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
            >
              {option ? option.label : value}
              <button
                type="button"
                className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800"
                onClick={(e) => handleRemoveValue(value, e)}
              >
                <FiX className="w-3 h-3" />
              </button>
            </span>
          );
        })}
        {remainingCount > 0 && (
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            +{remainingCount} más
          </span>
        )}
      </div>
    );
  };

  const hasClearButton = clearable && isSelected && !disabled;

  return (
    <div className="relative" ref={containerRef}>
      {/* Icono izquierdo */}
      {leftIcon && (
        <div className={leftIconClasses}>
          {leftIcon}
        </div>
      )}
      
      {/* Campo principal */}
      <div
        className={`${selectClasses} cursor-pointer`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={`block truncate ${!isSelected ? 'text-gray-500 dark:text-gray-400' : ''}`}>
          {getDisplayText()}
        </span>
      </div>

      {/* Tags para selección múltiple */}
      {renderMultipleTags()}

      {/* Botón clear */}
      {hasClearButton && (
        <div className={rightIconClasses}>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={handleClear}
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {/* Icono dropdown */}
      {!hasClearButton && (
        <div className={rightIconClasses}>
          <FiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto"
        >
          {allOptions.length === 0 ? (
            <div className="px-3 py-2 text-gray-500 dark:text-gray-400">
              {emptyMessage}
            </div>
          ) : (
            renderDropdownOptions()
          )}
        </div>
      )}
    </div>
  );
};

export default SelectField; 