import { TimeSelectorFieldProps } from './types';
import { getContainerClasses, getButtonClasses, getDescriptionClasses } from './utils';

/**
 * Componente para renderizar el campo selector de tiempo con diferentes variantes visuales
 */
export const TimeSelectorField: React.FC<TimeSelectorFieldProps> = ({
  options,
  selected,
  onSelect,
  variant,
  size = 'md',
  color = 'blue',
  disabled = false,
  allowMultiple = false,
  maxSelections,
  showDescription = false,
  orientation = 'horizontal'
}) => {
  const containerClasses = getContainerClasses(variant, orientation);
  const descriptionClasses = getDescriptionClasses(size);

  const isSelected = (value: string): boolean => {
    if (Array.isArray(selected)) {
      return selected.includes(value);
    }
    return selected === value;
  };

  const handleOptionClick = (value: string, optionDisabled?: boolean) => {
    if (disabled || optionDisabled) return;

    if (allowMultiple) {
      const currentSelected = Array.isArray(selected) ? selected : [];
      
      if (currentSelected.includes(value)) {
        // Deseleccionar si ya está seleccionado
        const newSelected = currentSelected.filter(item => item !== value);
        onSelect(newSelected.join(','));
      } else {
        // Seleccionar si no está seleccionado
        if (maxSelections && currentSelected.length >= maxSelections) {
          return; // No permitir más selecciones
        }
        const newSelected = [...currentSelected, value];
        onSelect(newSelected.join(','));
      }
    } else {
      onSelect(value);
    }
  };

  const getSelectionCount = (): number => {
    if (Array.isArray(selected)) {
      return selected.length;
    }
    return selected ? 1 : 0;
  };

  const isMaxSelectionsReached = (): boolean => {
    return allowMultiple && maxSelections ? getSelectionCount() >= maxSelections : false;
  };

  return (
    <div className="space-y-2">
      <div className={containerClasses}>
        {options.map((option) => {
          const optionSelected = isSelected(option.value);
          const optionDisabled = option.disabled || (isMaxSelectionsReached() && !optionSelected);
          
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option.value, option.disabled)}
              disabled={disabled || option.disabled}
              className={getButtonClasses(variant, optionSelected, size, color, optionDisabled)}
              title={option.description}
            >
              <div className="flex items-center space-x-2">
                {option.icon && (
                  <span className="flex-shrink-0">
                    {option.icon}
                  </span>
                )}
                <span className="flex-1">
                  {option.label}
                </span>
                {allowMultiple && optionSelected && (
                  <span className="flex-shrink-0 text-xs">
                    ✓
                  </span>
                )}
              </div>
              {showDescription && option.description && (
                <div className={descriptionClasses}>
                  {option.description}
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Información adicional para selección múltiple */}
      {allowMultiple && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {getSelectionCount()} seleccionado{getSelectionCount() !== 1 ? 's' : ''}
          {maxSelections && ` de ${maxSelections} máximo`}
        </div>
      )}
    </div>
  );
};

export default TimeSelectorField; 