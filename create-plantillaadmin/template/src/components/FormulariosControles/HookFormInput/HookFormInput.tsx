import { FieldValues } from 'react-hook-form';
import { InputFieldProps } from './types';
import { getColSpanClass, buildRegisterOptions } from './utils';
import InputLabel from './InputLabel';
import InputField from './InputField';
import ErrorMessage from './ErrorMessage';

const HookFormInput = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  type = 'text',
  placeholder,
  disabled = false,
  tooltipMessage,
  required,
  pattern,
  minLength,
  maxLength,
  colSpan = '6',
  leftIcon,
  rightIcon,
  variant = 'default',
  size = 'md',
  color = 'blue',
  description,
  helperText
}: InputFieldProps<T>) => {
  // Construir opciones de validación para react-hook-form
  const registerOptions = buildRegisterOptions({ required, pattern, minLength, maxLength });
  
  // Obtener clase CSS para el grid
  const colSpanClass = getColSpanClass(colSpan);
  
  // Verificar si hay errores
  const hasError = !!errors[name];
  
  // Props para el registro del campo
  const registerProps = register(name, registerOptions);

  // Determinar si el campo es requerido
  const isRequired = !!required;

  return (
    <div className={colSpanClass}>
      <InputLabel 
        label={label} 
        tooltipMessage={tooltipMessage}
        size={size}
        required={isRequired}
      />
      
      <InputField
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        hasError={hasError}
        registerProps={registerProps}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        variant={variant}
        size={size}
        color={color}
      />
      
      {/* Descripción o texto de ayuda */}
      {(description || helperText) && !hasError && (
        <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
          {description || helperText}
        </p>
      )}
      
      <ErrorMessage 
        name={name} 
        errors={errors} 
      />
    </div>
  );
};

export default HookFormInput;
