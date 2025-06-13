import React from 'react';
import { SwitcherFieldOnlyProps } from './types';
import { 
  getEnhancedSwitcherClasses,
  getSwitcherInputClasses,
  getSwitcherIconClasses,
  getStateTextClasses
} from './utils';
import LoadingSpinner from './LoadingSpinner';

/**
 * Componente para renderizar el toggle/switch personalizado
 */
export const SwitcherField: React.FC<SwitcherFieldOnlyProps> = ({
  name,
  variant = 'default',
  size = 'md',
  color = 'blue',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onText,
  offText,
  autoFocus = false,
  hasError = false,
  registerProps,
  onChange
}) => {
  const { ref, onChange: registerOnChange, ...rest } = registerProps;
  const inputClasses = getSwitcherInputClasses();
  const switcherClasses = getEnhancedSwitcherClasses(variant, size, color, hasError, disabled);
  const leftIconClasses = leftIcon ? getSwitcherIconClasses(size, 'left') : '';
  const rightIconClasses = rightIcon ? getSwitcherIconClasses(size, 'right') : '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !loading) {
      registerOnChange(event);
      if (onChange) {
        onChange(event.target.checked);
      }
    }
  };

  // Mostrar spinner de carga
  if (loading) {
    return (
      <div className="flex items-center">
        {leftIcon && (
          <div className={leftIconClasses}>
            {leftIcon}
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <LoadingSpinner size={size} />
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Cargando...
          </span>
        </div>
        
        {rightIcon && (
          <div className={rightIconClasses}>
            {rightIcon}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {/* Icono izquierdo */}
      {leftIcon && (
        <div className={leftIconClasses}>
          {leftIcon}
        </div>
      )}
      
      {/* Texto OFF */}
      {offText && (
        <span className="text-sm text-gray-500 dark:text-gray-400 mr-3 select-none">
          {offText}
        </span>
      )}
      
      {/* Switch principal */}
      <label
        htmlFor={name}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={name}
            name={name}
            className={inputClasses}
            {...rest}
            onChange={handleChange}
            disabled={disabled}
            autoFocus={autoFocus}
            ref={ref}
            aria-label={`Toggle ${name}`}
          />
          
          {/* Contenedor del switch */}
          <div className={switcherClasses.container}>
            {/* Toggle/círculo */}
            <div className={switcherClasses.toggle}></div>
          </div>
        </div>
      </label>
      
      {/* Texto ON */}
      {onText && (
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-3 select-none">
          {onText}
        </span>
      )}
      
      {/* Icono derecho */}
      {rightIcon && (
        <div className={rightIconClasses}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default SwitcherField; 