import { FieldValues } from 'react-hook-form';
import { SwitcherFieldProps } from './types';
import { getColSpanClass, buildRegisterOptions } from './utils';
import SwitcherLabel from './SwitcherLabel';
import SwitcherField from './SwitcherField';
import { ErrorMessage } from '../HookFormInput';

/**
 * Componente principal de switcher/toggle para formularios con react-hook-form
 * Refactorizado con múltiples variantes y funcionalidades avanzadas
 */
const HookFormSwitcher = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  // Propiedades visuales
  tooltipMessage,
  colSpan = '6',
  variant = 'default',
  size = 'md',
  color = 'blue',
  // Funcionalidades avanzadas
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  // Textos y ayuda
  description,
  helperText,
  onText,
  offText,
  // Configuraciones de comportamiento
  autoFocus = false,
  defaultValue = false,
  // Validaciones
  required = false,
  validate,
  // Callbacks
  onChange,
  onToggle
}: SwitcherFieldProps<T>) => {
  
  // Obtener clase CSS para el grid
  const colSpanClass = getColSpanClass(colSpan);
  
  // Verificar si hay errores
  const hasError = !!errors[name];
  
  // Construir opciones de validación con defaultValue
  const validationRules = {
    ...buildRegisterOptions({ required, validate }),
    value: defaultValue // Agregar el valor por defecto
  };
  
  // Props para el registro del campo
  const registerProps = register(name, validationRules);

  // Manejar cambio de valor
  const handleChange = (value: boolean) => {
    if (onChange) onChange(value);
    if (onToggle) onToggle(value);
  };

  return (
    <div className={colSpanClass}>
      <SwitcherLabel 
        label={label}
        tooltipMessage={tooltipMessage}
        required={!!required}
        size={size}
      />
      
      {/* Descripción opcional */}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
      )}
      
      <SwitcherField
        name={name}
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onText={onText}
        offText={offText}
        autoFocus={autoFocus}
        hasError={hasError}
        registerProps={registerProps}
        onChange={handleChange}
      />
      
      {/* Texto de ayuda opcional */}
      {helperText && !hasError && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
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

export default HookFormSwitcher; 