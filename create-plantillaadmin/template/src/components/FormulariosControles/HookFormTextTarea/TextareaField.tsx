import React, { useRef, useEffect } from 'react';
import { TextareaFieldOnlyProps } from './types';
import { getEnhancedTextareaClasses, getIconContainerClasses } from './utils';

/**
 * Componente para renderizar el campo de textarea con estilos dinámicos e iconos
 */
export const TextareaField: React.FC<TextareaFieldOnlyProps> = ({
  placeholder,
  disabled,
  hasError,
  rows,
  registerProps,
  leftIcon,
  rightIcon,
  variant = 'default',
  size = 'md',
  color = 'blue',
  resize = 'vertical',
  autoResize = false,
  maxRows,
  minRows
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  
  const textareaClasses = getEnhancedTextareaClasses(
    variant,
    size,
    color,
    hasError,
    disabled,
    hasLeftIcon,
    hasRightIcon,
    resize
  );

  const leftIconClasses = getIconContainerClasses(size, 'left');
  const rightIconClasses = getIconContainerClasses(size, 'right');

  // Auto-resize functionality
  useEffect(() => {
    if (autoResize && textareaRef.current) {
      const textarea = textareaRef.current;
      
      const adjustHeight = () => {
        textarea.style.height = 'auto';
        const scrollHeight = textarea.scrollHeight;
        
        // Calculate min and max heights based on rows
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        const paddingTop = parseInt(getComputedStyle(textarea).paddingTop);
        const paddingBottom = parseInt(getComputedStyle(textarea).paddingBottom);
        
        const minHeight = minRows ? (minRows * lineHeight) + paddingTop + paddingBottom : 0;
        const maxHeight = maxRows ? (maxRows * lineHeight) + paddingTop + paddingBottom : Infinity;
        
        const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;
      };

      // Adjust height on mount
      adjustHeight();
      
      // Add event listener for input changes
      textarea.addEventListener('input', adjustHeight);
      
      return () => {
        textarea.removeEventListener('input', adjustHeight);
      };
    }
  }, [autoResize, maxRows, minRows]);

  return (
    <div className="relative">
      {/* Ícono izquierdo */}
      {leftIcon && (
        <div className={leftIconClasses}>
          {leftIcon}
        </div>
      )}
      
      {/* Textarea field */}
      <textarea
        ref={textareaRef}
        rows={autoResize ? (minRows || rows) : rows}
        disabled={disabled}
        placeholder={placeholder}
        className={textareaClasses}
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

export default TextareaField; 