import { InputFieldOnlyProps } from './types';
import { getEnhancedInputClasses, getIconContainerClasses } from './utils';

/**
 * Componente para renderizar el campo de input con estilos dinámicos e iconos
 */
export const InputField: React.FC<InputFieldOnlyProps> = ({
  type,
  placeholder,
  disabled,
  hasError,
  registerProps,
  leftIcon,
  rightIcon,
  variant = 'default',
  size = 'md',
  color = 'blue'
}) => {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  
  const inputClasses = getEnhancedInputClasses(
    variant,
    size,
    color,
    hasError,
    disabled,
    hasLeftIcon,
    hasRightIcon
  );

  const leftIconClasses = getIconContainerClasses(size, 'left');
  const rightIconClasses = getIconContainerClasses(size, 'right');

  return (
    <div className="relative">
      {/* Ícono izquierdo */}
      {leftIcon && (
        <div className={leftIconClasses}>
          {leftIcon}
        </div>
      )}
      
      {/* Input field */}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        {...registerProps}
      />
      
      {/* Ícono derecho */}
      {rightIcon && (
        <div className={rightIconClasses}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default InputField; 