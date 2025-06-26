import React from 'react';
import { CheckboxFieldOnlyProps } from './types';
import { 
  getCheckboxContainerClasses, 
  getCheckIconClasses,
  getSwitchClasses
} from './utils';

/**
 * Componente para renderizar el campo de checkbox personalizado con múltiples variantes
 */
export const CheckboxField: React.FC<CheckboxFieldOnlyProps> = ({
  name,
  registerProps,
  variant = 'default',
  color = 'blue',
  size = 'md',
  disabled = false,
  icon,
  checkedIcon,
  uncheckedIcon,
  indeterminate = false // TODO: Implementar funcionalidad indeterminate
}) => {
  const { ref, onChange, ...rest } = registerProps;
  
  // Clases CSS para el contenedor del checkbox
  const containerClasses = getCheckboxContainerClasses(variant, size, color, disabled);
  
  // Clases CSS para el ícono de check
  const checkIconClasses = getCheckIconClasses(variant, size);
  
  // Clases especiales para switch
  const switchClasses = variant === 'switch' ? getSwitchClasses(size) : '';

  // Renderizar contenido según la variante
  const renderCheckboxContent = () => {
    // Para variante switch
    if (variant === 'switch') {
      return (
        <div className={`${containerClasses} ${switchClasses}`}>
          <div className={checkIconClasses}></div>
        </div>
      );
    }

    // Para variante button
    if (variant === 'button') {
      return (
        <div className={containerClasses}>
          <div className="flex items-center justify-center gap-2">
            {icon && <span className="shrink-0">{icon}</span>}
            <span className="font-medium">Seleccionar</span>
          </div>
        </div>
      );
    }

    // Para variante card
    if (variant === 'card') {
      return (
        <div className={containerClasses}>
          <div className="flex flex-col items-center justify-center text-center w-full">
            {icon && (
              <div className="mb-2 text-xl">
                {icon}
              </div>
            )}
            <div className="font-medium text-gray-900 dark:text-gray-100">Opción</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Seleccionar esta opción</div>
          </div>
        </div>
      );
    }

    // Para variantes default, rounded, circle, minimal, modern
    return (
      <div className={containerClasses}>
        {/* Ícono personalizado cuando está marcado */}
        {checkedIcon && (
          <div className="opacity-0 peer-checked:opacity-100 transition-opacity duration-200 absolute inset-0 flex items-center justify-center">
            {checkedIcon}
          </div>
        )}
        
        {/* Ícono personalizado cuando no está marcado */}
        {uncheckedIcon && !checkedIcon && (
          <div className="opacity-100 peer-checked:opacity-0 transition-opacity duration-200 absolute inset-0 flex items-center justify-center">
            {uncheckedIcon}
          </div>
        )}
        
        {/* Ícono de check por defecto */}
        {!checkedIcon && !uncheckedIcon && (
          <div className={checkIconClasses}></div>
        )}
        
        {/* Ícono general (siempre visible) */}
        {icon && !checkedIcon && !uncheckedIcon && (
          <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
            {icon}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="relative shrink-0">
      <input
        type="checkbox"
        id={name}
        className="peer sr-only"
        disabled={disabled}
        {...rest}
        onChange={(e) => {
          if (!disabled) {
            onChange(e);
          }
        }}
        ref={ref}
      />
      <label 
        htmlFor={name} 
        className={`block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {renderCheckboxContent()}
      </label>
    </div>
  );
};

export default CheckboxField; 