import { useState, useEffect } from 'react';
import { FieldValues, Controller } from 'react-hook-form';
import { HookFormSelectProps } from './types';
import { getColSpanClass, buildRegisterOptions } from './utils';
import SelectLabel from './SelectLabel';
import SelectField from './SelectField';
import ErrorMessage from './ErrorMessage';

const HookFormSelect = <T extends FieldValues>({
  label,
  name,
  options = [],
  groups,
  register,
  control,
  errors,
  // Selección múltiple
  multiple = false,
  selectedValue,
  onChange,
  // Propiedades visuales
  placeholder = 'Selecciona una opción...',
  leftIcon,
  rightIcon,
  icon, // Alias para leftIcon
  colSpan = '6',
  tooltipMessage,
  variant = 'default',
  size = 'md',
  color = 'blue',
  // Funcionalidades avanzadas
  disabled = false,
  loading = false,
  clearable = false,
  searchable = false,
  creatable = false,
  emptyMessage = 'No hay opciones disponibles',
  loadingMessage = 'Cargando...',
  searchPlaceholder = 'Buscar...',
  noOptionsMessage = 'No se encontraron opciones',
  createOptionMessage = 'Crear opción',
  // Configuraciones de UI
  maxHeight = 240,
  maxSelectedDisplay = 3,
  showSelectAll = false,
  closeOnSelect = true,
  // Textos y ayuda
  description,
  helperText,
  // Configuraciones de comportamiento
  autoFocus = false,
  portal = false,
  zIndex = 50,
  // Validaciones
  required = false,
  validate,
  pattern
}: HookFormSelectProps<T>) => {
  
  // Usar icon como alias de leftIcon si no se proporciona leftIcon
  const finalLeftIcon = leftIcon || icon;
  
  // Obtener clase CSS para el grid
  const colSpanClass = getColSpanClass(colSpan);
  
  // Verificar si hay errores
  const hasError = !!errors[name];
  
  // Construir opciones de validación para register
  const validationRules = {
    required: required ? (typeof required === 'string' ? required : 'Este campo es requerido') : false,
    validate,
    ...(pattern && { pattern: { value: pattern.value, message: pattern.message } })
  };

  // Decidir qué método usar: control tiene prioridad sobre register
  const useController = !!control;
  const useRegister = !!register && !control;

  // Si no se proporciona ninguno, mostrar error
  if (!control && !register) {
    console.error('HookFormSelect: Debes proporcionar "control" o "register"');
    return null;
  }

  return (
    <div className={colSpanClass}>
      <SelectLabel 
        label={label}
        tooltipMessage={tooltipMessage}
        required={!!required}
        size={size}
      />
      
      {/* Descripción opcional */}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {description}
        </p>
      )}
      
      {/* Renderizado condicional basado en el método */}
      {useController && control ? (
        // Método con Controller (recomendado para componentes complejos)
        <Controller
          name={name}
          control={control}
          rules={validationRules}
          defaultValue={multiple ? [] as any : '' as any}
          render={({ field }) => (
            <SelectField
              name={name}
              options={options}
              groups={groups}
              multiple={multiple}
              selectedValue={field.value}
              onChange={field.onChange}
              placeholder={placeholder}
              leftIcon={finalLeftIcon}
              rightIcon={rightIcon}
              variant={variant}
              size={size}
              color={color}
              disabled={disabled}
              loading={loading}
              clearable={clearable}
              searchable={searchable}
              creatable={creatable}
              emptyMessage={emptyMessage}
              loadingMessage={loadingMessage}
              searchPlaceholder={searchPlaceholder}
              noOptionsMessage={noOptionsMessage}
              createOptionMessage={createOptionMessage}
              maxHeight={maxHeight}
              maxSelectedDisplay={maxSelectedDisplay}
              showSelectAll={showSelectAll}
              closeOnSelect={closeOnSelect}
              autoFocus={autoFocus}
              portal={portal}
              zIndex={zIndex}
              hasError={hasError}
            />
          )}
        />
      ) : useRegister && register ? (
        // Método tradicional con register (para selects simples)
        <div className="relative">
          {/* Icono izquierdo */}
          {finalLeftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
              {finalLeftIcon}
            </div>
          )}
          
          <select
            {...register(name, validationRules)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 ${
              hasError 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 dark:border-gray-600'
            } ${
              finalLeftIcon ? 'pl-10' : ''
            } ${
              rightIcon || clearable ? 'pr-10' : ''
            } ${
              disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white dark:bg-gray-800'
            } text-gray-900 dark:text-gray-100`}
            disabled={disabled}
            multiple={multiple}
          >
            <option value="" disabled className="text-gray-500 dark:text-gray-400">
              {placeholder}
            </option>
            
            {/* Renderizar grupos si existen */}
            {groups ? (
              groups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option 
                      key={option.value} 
                      value={option.value} 
                      disabled={option.disabled}
                      className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                    >
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))
            ) : (
              /* Renderizar opciones normales */
              options.map((option) => (
                <option 
                  key={option.value} 
                  value={option.value} 
                  disabled={option.disabled}
                  className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                >
                  {option.label}
                  {option.description && ` - ${option.description}`}
                </option>
              ))
            )}
          </select>
          
          {/* Icono derecho */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
      ) : null}
      
      {/* Texto de ayuda opcional */}
      {helperText && !hasError && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {helperText}
        </p>
      )}
      
      <ErrorMessage 
        name={name} 
        errors={errors} 
      />
    </div>
  );
};

export default HookFormSelect;