import React from 'react';
import { FieldValues } from 'react-hook-form';
import { CheckboxFieldProps } from './types';
import { getColSpanClass, getMainContainerClasses } from './utils';
import CheckboxLabel from './CheckboxLabel';
import CheckboxField from './CheckboxField';
import { ErrorMessage } from '../HookFormInput';

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

  return (
    <div className={colSpanClass}>
      <div className={`${mainContainerClasses} w-full`}>
        <CheckboxField
          name={name}
          registerProps={registerProps}
          variant={variant}
          color={color}
          size={size}
          disabled={disabled}
          icon={icon}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          indeterminate={indeterminate}
        />
        
        <CheckboxLabel
          label={label}
          name={name}
          tooltipMessage={tooltipMessage}
          description={description}
          labelPosition={labelPosition}
          size={size}
          disabled={disabled}
        />
      </div>
      
      <ErrorMessage 
        name={name} 
        errors={errors} 
      />
    </div>
  );
};

export default HookFormCheckbox; 