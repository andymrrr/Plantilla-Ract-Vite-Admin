import React, { useState, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { CheckboxFieldProps } from './types';
import { getColSpanClass, getMainContainerClasses, getLabelClasses, getDescriptionClasses } from './utils';
import { ErrorMessage } from '../HookFormInput';
import Tooltip from '../../UI/Tooltip';

/**
 * Componente principal de checkbox para formularios con react-hook-form
 * Soporta múltiples variantes visuales, colores, tamaños y funcionalidades avanzadas
 */
const HookFormCheckbox = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  tooltipMessage,
  colSpan = '6',
  variant = 'default',
  color = 'blue',
  size = 'md',
  labelPosition = 'right',
  disabled = false,
  description,
  icon,
  checkedIcon,
  uncheckedIcon,
  indeterminate = false,
  required = false,
  validate
}: CheckboxFieldProps<T>) => {
  // Estado local para controlar la visualización
  const [isChecked, setIsChecked] = useState(false);
  
  // Obtener clase CSS para el grid
  const colSpanClass = getColSpanClass(colSpan);
  
  // Obtener clases para el contenedor principal
  const mainContainerClasses = getMainContainerClasses(labelPosition);
  
  // Construir reglas de validación
  const validationRules = React.useMemo(() => {
    const rules: any = {};
    
    if (required) {
      rules.required = typeof required === 'string' ? required : `${label} es requerido`;
    }
    
    if (validate) {
      rules.validate = validate;
    }
    
    return rules;
  }, [required, validate, label]);
  
  // Props para el registro del campo
  const registerProps = register(name, validationRules);

  // Clases CSS para el label
  const labelClasses = getLabelClasses(labelPosition, size, disabled);
  const descriptionClasses = getDescriptionClasses(size);

  // Función para obtener clases de tamaño
  const getSizeClasses = () => {
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

    if (variant === 'switch') {
      const switchSizes = {
        sm: 'w-8 h-4',
        md: 'w-10 h-5',
        lg: 'w-12 h-6'
      };
      return switchSizes[size];
    }

    // Para variantes normales (checkbox tradicional)
    const sizes = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };
    return sizes[size];
  };

  // Función para obtener clases de color
  const getColorClasses = () => {
    const colorMap = {
      blue: isChecked ? 'bg-blue-600 border-blue-600' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
      green: isChecked ? 'bg-green-600 border-green-600' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
      purple: isChecked ? 'bg-purple-600 border-purple-600' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
      red: isChecked ? 'bg-red-600 border-red-600' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
      yellow: isChecked ? 'bg-yellow-500 border-yellow-500' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
      indigo: isChecked ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
      pink: isChecked ? 'bg-pink-600 border-pink-600' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
      gray: isChecked ? 'bg-gray-600 border-gray-600' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
    };

    if (variant === 'switch') {
      return isChecked ? colorMap[color].split(' ')[0] : 'bg-gray-300 dark:bg-gray-600';
    }

    if (variant === 'button') {
      return isChecked 
        ? `${colorMap[color]} text-white` 
        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700';
    }

    if (variant === 'card') {
      return isChecked 
        ? `border-${color}-500 bg-${color}-50 dark:bg-${color}-900/20 shadow-${color}-100` 
        : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:shadow-md';
    }

    if (variant === 'minimal') {
      return isChecked 
        ? colorMap[color] 
        : 'border-gray-400 dark:border-gray-500 bg-transparent';
    }

    return colorMap[color];
  };

  // Función para obtener clases de variante
  const getVariantClasses = () => {
    const variants = {
      default: 'border-2 rounded shrink-0',
      rounded: 'border-2 rounded-md shrink-0',
      circle: 'border-2 rounded-full shrink-0',
      switch: 'rounded-full relative shrink-0',
      button: 'border-2 rounded-lg font-medium whitespace-nowrap',
      card: 'border-2 rounded-lg w-full',
      minimal: 'border rounded-sm shrink-0',
      modern: 'border-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 shrink-0'
    };
    return variants[variant];
  };

  // Manejar cambio de estado
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    registerProps.onChange(e);
  };

  // Renderizar contenido del checkbox según la variante
  const renderCheckboxContent = () => {
    const baseClasses = `relative flex items-center justify-center transition-all duration-200 ${getSizeClasses()} ${getVariantClasses()} ${getColorClasses()}`;

    // Para variante switch
    if (variant === 'switch') {
      const knobSize = {
        sm: 'h-3 w-3',
        md: 'h-4 w-4', 
        lg: 'h-5 w-5'
      };
      
      return (
        <div className={baseClasses}>
          <div 
            className={`${knobSize[size]} bg-white rounded-full absolute left-0.5 transform transition-transform duration-200 ${
              isChecked ? 'translate-x-full' : 'translate-x-0'
            }`}
          ></div>
        </div>
      );
    }

    // Para variante button
    if (variant === 'button') {
      return (
        <div className={baseClasses}>
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
        <div className={baseClasses}>
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
      <div className={baseClasses}>
        {/* Ícono personalizado cuando está marcado */}
        {checkedIcon && isChecked && (
          <div className="absolute inset-0 flex items-center justify-center">
            {checkedIcon}
          </div>
        )}
        
        {/* Ícono personalizado cuando no está marcado */}
        {uncheckedIcon && !isChecked && !checkedIcon && (
          <div className="absolute inset-0 flex items-center justify-center">
            {uncheckedIcon}
          </div>
        )}
        
        {/* Ícono de check por defecto */}
        {!checkedIcon && !uncheckedIcon && isChecked && (
          <div className="flex items-center justify-center">
            {variant === 'circle' ? (
              <div className={`bg-white rounded-full ${size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-2.5 w-2.5' : 'h-3 w-3'}`}></div>
            ) : (
              <div className={`border-white rotate-45 ${
                size === 'sm' ? 'h-1.5 w-2.5 border-b border-r' : 
                size === 'md' ? 'h-2 w-3 border-b-2 border-r-2' : 
                'h-2.5 w-4 border-b-2 border-r-2'
              } mt-[-2px]`}></div>
            )}
          </div>
        )}
        
        {/* Ícono general (siempre visible) */}
        {icon && !checkedIcon && !uncheckedIcon && isChecked && (
          <span className="absolute inset-0 flex items-center justify-center text-white">
            {icon}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={colSpanClass}>
      <label 
        htmlFor={name}
        className={`${mainContainerClasses} w-full ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
      >
        {/* Input checkbox - oculto pero funcional */}
        <input
          type="checkbox"
          id={name}
          className="sr-only"
          disabled={disabled}
          {...registerProps}
          onChange={handleChange}
        />
        
        {/* Checkbox visual */}
        <div className="relative shrink-0">
          {renderCheckboxContent()}
        </div>
        
        {/* Label y descripción */}
        <div className={`${labelPosition === 'top' || labelPosition === 'bottom' ? 'w-full' : 'flex-1 min-w-0'}`}>
          <div className="flex items-start gap-1">
            <span className={`${labelClasses} leading-tight`}>
              {label}
            </span>
            {tooltipMessage && (
              <Tooltip message={tooltipMessage}>
                <span className="text-blue-500 cursor-pointer text-sm hover:text-blue-600 transition-colors shrink-0 mt-0.5">
                  ⓘ
                </span>
              </Tooltip>
            )}
          </div>
          
          {description && (
            <div className={`${descriptionClasses} break-words`}>
              {description}
            </div>
          )}
        </div>
      </label>
      
      <ErrorMessage 
        name={name} 
        errors={errors} 
      />
    </div>
  );
};

export default HookFormCheckbox; 