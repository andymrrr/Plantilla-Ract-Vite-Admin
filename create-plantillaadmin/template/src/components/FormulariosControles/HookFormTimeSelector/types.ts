import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';

export type ColSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type TimeSelectorVariant = 'pill' | 'button' | 'tabs' | 'cards';

export type TimeSelectorSize = 'sm' | 'md' | 'lg';

export type TimeSelectorColor = 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' | 'pink';

export interface TimeOption {
  value: string;
  label: string;
}

export interface BaseTimeSelectorProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface HookFormTimeSelectorProps<T extends FieldValues> extends BaseTimeSelectorProps<T> {
  label: string;
  options?: TimeOption[];
  defaultSelected?: string;
  colSpan?: ColSpanType;
  tooltipMessage?: string;
  variant?: TimeSelectorVariant;
  size?: TimeSelectorSize;
  color?: TimeSelectorColor;
  allowMultiple?: boolean;
  maxSelections?: number;
  showDescription?: boolean;
  disabled?: boolean;
}

export interface TimeSelectorLabelProps {
  label: string;
  tooltipMessage?: string;
}

export interface ErrorMessageProps<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
}

export interface TimeSelectorFieldProps {
  options: TimeOption[];
  selected: string;
  onSelect: (value: string) => void;
  variant: TimeSelectorVariant;
  size?: TimeSelectorSize;
  color?: TimeSelectorColor;
  allowMultiple?: boolean;
  maxSelections?: number;
  showDescription?: boolean;
  disabled?: boolean;
}

export interface HiddenInputProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  selected: string;
  label: string;
} 