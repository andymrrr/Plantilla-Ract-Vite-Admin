import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { ReactNode } from 'react';

export type ColSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type InputVariant = 'default' | 'outlined' | 'filled' | 'underlined' | 'modern';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputColor = 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' | 'pink' | 'gray';

export interface BaseInputProps<T extends FieldValues> {
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

export interface InputValidationProps {
  required?: string;
  pattern?: PatternValidation;
  minLength?: LengthValidation;
  maxLength?: LengthValidation;
}

export interface InputFieldProps<T extends FieldValues> extends BaseInputProps<T>, InputValidationProps {
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  tooltipMessage?: string;
  colSpan?: ColSpanType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: InputVariant;
  size?: InputSize;
  color?: InputColor;
  description?: string;
  helperText?: string;
}

export interface InputLabelProps {
  label: string;
  tooltipMessage?: string;
  size?: InputSize;
  required?: boolean;
}

export interface ErrorMessageProps<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
}

export interface InputFieldOnlyProps {
  type: string;
  placeholder?: string;
  disabled: boolean;
  hasError: boolean;
  registerProps: any;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: InputVariant;
  size?: InputSize;
  color?: InputColor;
} 