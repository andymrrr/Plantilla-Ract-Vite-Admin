import React from 'react';
import Select from 'react-select';
import { SelectFieldProps } from './types';
import { 
  getContainerClasses, 
  getIconClasses, 
  getReactSelectStyles,
  formatOptionsForReactSelect,
  formatGroupsForReactSelect,
  findOptionByValue,
  findOptionInGroups,
  defaultCustomFilter,
  useDarkMode
} from './utils';

/**
 * Componente avanzado para renderizar el campo select con múltiples variantes
 */
export const SelectField: React.FC<SelectFieldProps> = ({
  options = [],
  groups,
  selectedValue,
  onChange,
  placeholder = "Selecciona una opción...",
  icon,
  variant = 'basic',
  size = 'md',
  isMulti = false,
  isClearable = true,
  isSearchable = true,
  isLoading = false,
  disabled = false,
  hasError = false,
  noOptionsMessage = "No hay opciones disponibles",
  loadingMessage = "Cargando...",
  customFilter = defaultCustomFilter,
  formatOptionLabel,
  reactSelectProps = {}
}) => {
  // Usar el hook personalizado para detectar el tema oscuro
  const isDarkMode = useDarkMode();

  // Preparar opciones para react-select
  const formattedOptions = groups 
    ? formatGroupsForReactSelect(groups)
    : formatOptionsForReactSelect(options);

  // Encontrar valor actual
  const currentValue = React.useMemo(() => {
    if (!selectedValue) return isMulti ? [] : null;
    
    const allOptions = groups ? groups.flatMap(g => g.options) : options;
    
    if (isMulti && Array.isArray(selectedValue)) {
      return selectedValue.map(value => findOptionByValue(allOptions, value)).filter(Boolean);
    } else {
      const singleValue = Array.isArray(selectedValue) ? selectedValue[0] : selectedValue;
      return findOptionByValue(allOptions, singleValue || '');
    }
  }, [selectedValue, options, groups, isMulti]);

  // Manejar cambio de valor
  const handleChange = (newValue: any) => {
    if (isMulti) {
      const values = newValue ? newValue.map((option: any) => option.value) : [];
      onChange(values);
    } else {
      onChange(newValue?.value || '');
    }
  };

  // Filtrado personalizado
  const filterOption = (option: any, inputValue: string) => {
    if (!customFilter) return true;
    return customFilter(option.data, inputValue);
  };

  // Formato personalizado de opciones
  const formatOption = (option: any) => {
    if (formatOptionLabel) {
      return formatOptionLabel(option.data || option);
    }

    const optionData = option.data || option;
    return (
      <div className="flex items-center">
        {optionData.color && (
          <div 
            className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
            style={{ backgroundColor: optionData.color }}
          />
        )}
        <div className="flex-1 min-w-0">
          <div className={`font-medium truncate ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            {optionData.label}
          </div>
          {optionData.description && (
            <div className={`text-sm truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {optionData.description}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Clases CSS
  const containerClasses = getContainerClasses(variant, hasError);
  const iconClasses = icon ? getIconClasses(size) : '';

  // Estilos de react-select (se recalculan cuando cambia el tema)
  const selectStyles = React.useMemo(() => 
    getReactSelectStyles(variant, size, hasError, !!icon, isDarkMode),
    [variant, size, hasError, icon, isDarkMode]
  );

  return (
    <div className={containerClasses}>
      {icon && (
        <div className={iconClasses}>
          {icon}
        </div>
      )}
      
      <Select
        options={formattedOptions}
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isLoading={isLoading}
        isDisabled={disabled}
        filterOption={isSearchable ? filterOption : undefined}
        formatOptionLabel={formatOption}
        noOptionsMessage={() => noOptionsMessage}
        loadingMessage={() => loadingMessage}
        styles={selectStyles}
        classNamePrefix="react-select"
        menuPortalTarget={document.body}
        menuPosition="fixed"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#3b82f6',
            primary75: '#60a5fa',
            primary50: '#93c5fd',
            primary25: '#dbeafe',
            danger: '#ef4444',
            dangerLight: '#fecaca',
            neutral0: isDarkMode ? '#374151' : '#ffffff',
            neutral5: isDarkMode ? '#4b5563' : '#f9fafb',
            neutral10: isDarkMode ? '#6b7280' : '#f3f4f6',
            neutral20: isDarkMode ? '#9ca3af' : '#e5e7eb',
            neutral30: isDarkMode ? '#d1d5db' : '#d1d5db',
            neutral40: isDarkMode ? '#f3f4f6' : '#9ca3af',
            neutral50: isDarkMode ? '#f9fafb' : '#6b7280',
            neutral60: isDarkMode ? '#ffffff' : '#4b5563',
            neutral70: isDarkMode ? '#ffffff' : '#374151',
            neutral80: isDarkMode ? '#ffffff' : '#1f2937',
            neutral90: isDarkMode ? '#ffffff' : '#111827',
          },
        })}
        {...reactSelectProps}
      />
    </div>
  );
};

export default SelectField; 