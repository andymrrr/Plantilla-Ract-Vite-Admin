import React from 'react';
import { UseFormRegister, FieldErrors, FieldValues, Path, Control } from 'react-hook-form';

export type ColSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type SelectVariant = 'default' | 'modern' | 'outlined' | 'filled' | 'minimal' | 'floating' | 'basic';

export type SelectSize = 'sm' | 'md' | 'lg';

export type SelectColor = 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' | 'pink' | 'gray';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  color?: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  avatar?: string;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
  color?: string;
  icon?: React.ReactNode;
}

export interface BaseSelectProps<T extends FieldValues> {
  name: Path<T>;
  register?: UseFormRegister<T>;
  control?: Control<T>;
  errors: FieldErrors<T>;
}

export interface PatternValidation {
  value: RegExp;
  message: string;
}

export interface SelectValidationProps {
  required?: string | boolean;
  validate?: (value: string | string[]) => string | boolean;
  pattern?: PatternValidation;
}

export interface HookFormSelectProps<T extends FieldValues> 
  extends BaseSelectProps<T>, SelectValidationProps {
  label: string;
  options?: SelectOption[];
  groups?: SelectGroup[];
  multiple?: boolean;
  selectedValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
  colSpan?: ColSpanType;
  tooltipMessage?: string;
  variant?: SelectVariant;
  size?: SelectSize;
  color?: SelectColor;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  creatable?: boolean;
  emptyMessage?: string;
  loadingMessage?: string;
  searchPlaceholder?: string;
  noOptionsMessage?: string;
  createOptionMessage?: string;
  maxHeight?: number;
  maxSelectedDisplay?: number;
  showSelectAll?: boolean;
  closeOnSelect?: boolean;
  description?: string;
  helperText?: string;
  autoFocus?: boolean;
  portal?: boolean;
  zIndex?: number;
}

export interface SelectLabelProps {
  label: string;
  tooltipMessage?: string;
  required?: boolean;
  size?: SelectSize;
}

export interface ErrorMessageProps<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
}

export interface SelectFieldProps<T extends FieldValues = FieldValues> {
  name: string;
  options: SelectOption[];
  groups?: SelectGroup[];
  multiple?: boolean;
  selectedValue: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant: SelectVariant;
  size: SelectSize;
  color: SelectColor;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  creatable?: boolean;
  emptyMessage?: string;
  loadingMessage?: string;
  searchPlaceholder?: string;
  noOptionsMessage?: string;
  createOptionMessage?: string;
  maxHeight?: number;
  maxSelectedDisplay?: number;
  showSelectAll?: boolean;
  closeOnSelect?: boolean;
  autoFocus?: boolean;
  portal?: boolean;
  zIndex?: number;
  hasError?: boolean;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface ClearButtonProps {
  onClear: () => void;
  disabled?: boolean;
} 