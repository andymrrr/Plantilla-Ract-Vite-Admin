import React from 'react';
import { FieldValues, Controller } from 'react-hook-form';
import { HookFormSelectBusquedaProps } from './types';
import { getColSpanClass } from './utils';
import SelectLabel from './SelectLabel';
import SelectField from './SelectField';
import ErrorMessage from './ErrorMessage';

/**
 * Componente avanzado de Select con búsqueda integrado con react-hook-form
 * Incluye múltiples variantes, soporte para grupos, multi-selección y más
 * Soporta tanto register como control para máxima flexibilidad
 */
const HookFormSelectBusqueda = <T extends FieldValues>({
  label,
  name,
  control,
  register,
  errors,
  options = [],
  groups,
  selectedValue,
  onChange,
  placeholder = "Selecciona una opción...",
  icon,
  colSpan = '6',
  tooltipMessage,
  variant = 'basic',
  size = 'md',
  isMulti = false,
  isClearable = true,
  isSearchable = true,
  isLoading = false,
  disabled = false,
  noOptionsMessage = "No hay opciones disponibles",
  loadingMessage = "Cargando...",
  customFilter,
  formatOptionLabel,
  required = false,
  validate,
  reactSelectProps = {}
}: HookFormSelectBusquedaProps<T>) => {
  
  // Validar que al menos control o register esté presente
  if (!control && !register) {
    throw new Error('HookFormSelectBusqueda: Debes proporcionar either control o register');
  }

  // Construir reglas de validación
  const validationRules = React.useMemo(() => {
    const rules: any = {};
    
    if (required) {
      rules.required = typeof required === 'string' ? required : `El ${label} es requerido`;
    }
    
    if (validate) {
      rules.validate = validate;
    }
    
    return rules;
  }, [required, validate, label]);

  // Obtener clase CSS para el grid
  const colSpanClass = getColSpanClass(colSpan);
  
  // Verificar si hay errores
  const hasError = !!errors[name];

  // Handler para cambios (si se proporciona)
  const handleFieldChange = (value: string | string[]) => {
    if (onChange) {
      onChange(value);
    }
  };

  // Si se proporciona register, usar el enfoque tradicional
  if (register && !control) {
    const registerProps = register(name, validationRules);
    
    return (
      <div className={colSpanClass}>
        <SelectLabel 
          label={label}
          tooltipMessage={tooltipMessage}
          required={typeof required === 'string' ? true : required}
        />

        <SelectField
          options={options}
          groups={groups}
          selectedValue={selectedValue}
          onChange={(value) => {
            handleFieldChange(value);
            // Para register, necesitamos crear un evento sintético
            const syntheticValue = isMulti && Array.isArray(value) ? value.join(',') : value;
            const event = {
              target: {
                name,
                value: syntheticValue,
                type: 'select-one'
              },
              currentTarget: {
                name,
                value: syntheticValue
              }
            } as unknown as React.ChangeEvent<HTMLSelectElement>;
            
            if (registerProps.onChange) {
              registerProps.onChange(event);
            }
          }}
          placeholder={placeholder}
          icon={icon}
          variant={variant}
          size={size}
          isMulti={isMulti}
          isClearable={isClearable}
          isSearchable={isSearchable}
          isLoading={isLoading}
          disabled={disabled}
          hasError={hasError}
          noOptionsMessage={noOptionsMessage}
          loadingMessage={loadingMessage}
          customFilter={customFilter}
          formatOptionLabel={formatOptionLabel}
          reactSelectProps={reactSelectProps}
          registerProps={registerProps}
        />

        <ErrorMessage 
          name={name} 
          errors={errors} 
        />
      </div>
    );
  }

  // Si se proporciona control, usar Controller (enfoque actual)
  return (
    <div className={colSpanClass}>
      <SelectLabel 
        label={label}
        tooltipMessage={tooltipMessage}
        required={typeof required === 'string' ? true : required}
      />

      <Controller
        name={name}
        control={control!}
        rules={validationRules}
        render={({ field }) => (
          <SelectField
            options={options}
            groups={groups}
            selectedValue={field.value || selectedValue}
            onChange={(value) => {
              field.onChange(value);
              handleFieldChange(value);
            }}
            placeholder={placeholder}
            icon={icon}
            variant={variant}
            size={size}
            isMulti={isMulti}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isLoading={isLoading}
            disabled={disabled}
            hasError={hasError}
            noOptionsMessage={noOptionsMessage}
            loadingMessage={loadingMessage}
            customFilter={customFilter}
            formatOptionLabel={formatOptionLabel}
            reactSelectProps={reactSelectProps}
          />
        )}
      />

      <ErrorMessage 
        name={name} 
        errors={errors} 
      />
    </div>
  );
};

export default HookFormSelectBusqueda;
