import { FieldValues } from 'react-hook-form';
import { TextareaFieldProps } from './types';
import { getColSpanClass, buildRegisterOptions } from './utils';
import TextareaLabel from './TextareaLabel';
import TextareaField from './TextareaField';
import ErrorMessage from './ErrorMessage';

const HookFormTextarea = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  tooltipMessage,
  placeholder,
  rows = 6,
  disabled = false,
  colSpan = '6',
  leftIcon,
  rightIcon,
  variant = 'default',
  size = 'md',
  color = 'blue',
  description,
  helperText,
  resize = 'vertical',
  autoResize = false,
  maxRows,
  minRows,
  required,
  pattern,
  minLength,
  maxLength
}: TextareaFieldProps<T>) => {
  // Obtener clase CSS para el grid
  const colSpanClass = getColSpanClass(colSpan);
  
  // Verificar si hay errores
  const hasError = !!errors[name];
  
  // Construir opciones de validación
  const validationOptions = buildRegisterOptions({
    required,
    pattern,
    minLength,
    maxLength
  });
  
  // Props para el registro del campo
  const registerProps = register(name, validationOptions);

  return (
    <div className={colSpanClass}>
      <TextareaLabel 
        label={label} 
        tooltipMessage={tooltipMessage}
        size={size}
        required={!!required}
      />
      
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {description}
        </p>
      )}
      
      <TextareaField
        placeholder={placeholder}
        disabled={disabled}
        hasError={hasError}
        rows={rows}
        registerProps={registerProps}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        variant={variant}
        size={size}
        color={color}
        resize={resize}
        autoResize={autoResize}
        maxRows={maxRows}
        minRows={minRows}
      />
      
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

export default HookFormTextarea; 