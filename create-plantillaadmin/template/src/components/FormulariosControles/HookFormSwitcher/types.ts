import React from 'react';
import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';

export type ColSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type SwitcherVariant = 'default' | 'modern' | 'minimal' | 'rounded' | 'square' | 'gradient';

export type SwitcherSize = 'sm' | 'md' | 'lg' | 'xl';

export type SwitcherColor = 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' | 'pink' | 'gray';

export interface BaseSwitcherProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface PatternValidation {
  value: RegExp;
  message: string;
}

export interface SwitcherValidationProps {
  required?: string | boolean;
  validate?: (value: boolean) => string | boolean;
}

export interface SwitcherFieldProps<T extends FieldValues> 
  extends BaseSwitcherProps<T>, SwitcherValidationProps {
  label: string;
  tooltipMessage?: string;
  colSpan?: ColSpanType;
  variant?: SwitcherVariant;
  size?: SwitcherSize;
  color?: SwitcherColor;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  description?: string;
  helperText?: string;
  onText?: string;
  offText?: string;
  autoFocus?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
  onToggle?: (value: boolean) => void;
}

export interface SwitcherLabelProps {
  label: string;
  tooltipMessage?: string;
  required?: boolean;
  size?: SwitcherSize;
}

export interface SwitcherFieldOnlyProps {
  name: string;
  variant: SwitcherVariant;
  size: SwitcherSize;
  color: SwitcherColor;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onText?: string;
  offText?: string;
  autoFocus?: boolean;
  hasError?: boolean;
  registerProps: any;
  onChange?: (value: boolean) => void;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ErrorMessageProps<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
} 