import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { ReactNode } from 'react';

export type ColSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type TextareaVariant = 'default' | 'outlined' | 'filled' | 'underlined' | 'modern';
export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaColor = 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' | 'pink' | 'gray';

export interface BaseTextareaProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface PatternValidation {
  value: RegExp;
  message: string;
}

export interface LengthValidation {
  value: number;
  message: string;
}

export interface TextareaValidationProps {
  required?: string;
  pattern?: PatternValidation;
  minLength?: LengthValidation;
  maxLength?: LengthValidation;
}

export interface TextareaFieldProps<T extends FieldValues> extends BaseTextareaProps<T>, TextareaValidationProps {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  tooltipMessage?: string;
  colSpan?: ColSpanType;
  rows?: number;
  // Nuevas propiedades para iconos y estilos
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: TextareaVariant;
  size?: TextareaSize;
  color?: TextareaColor;
  description?: string;
  helperText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  autoResize?: boolean;
  maxRows?: number;
  minRows?: number;
}

export interface TextareaLabelProps {
  label: string;
  tooltipMessage?: string;
  size?: TextareaSize;
  required?: boolean;
}

export interface ErrorMessageProps<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
}

export interface TextareaFieldOnlyProps {
  placeholder?: string;
  disabled: boolean;
  hasError: boolean;
  rows: number;
  registerProps: any;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: TextareaVariant;
  size?: TextareaSize;
  color?: TextareaColor;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  autoResize?: boolean;
  maxRows?: number;
  minRows?: number;
} 