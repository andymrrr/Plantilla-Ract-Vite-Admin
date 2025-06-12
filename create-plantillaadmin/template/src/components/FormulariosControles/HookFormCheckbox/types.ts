import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
import React from 'react';

export type ColSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

// Variantes visuales del checkbox
export type CheckboxVariant = 
  | 'default'     // Checkbox cuadrado tradicional
  | 'rounded'     // Checkbox con bordes redondeados
  | 'circle'      // Checkbox circular (radio-like)
  | 'switch'      // Toggle switch
  | 'button'      // Botón toggle
  | 'card'        // Tarjeta seleccionable
  | 'minimal'     // Estilo minimalista
  | 'modern';     // Estilo moderno con animaciones

// Colores disponibles
export type CheckboxColor = 
  | 'blue'
  | 'green' 
  | 'purple'
  | 'red'
  | 'yellow'
  | 'indigo'
  | 'pink'
  | 'gray';

// Tamaños disponibles
export type CheckboxSize = 'sm' | 'md' | 'lg';

// Posición del label
export type LabelPosition = 'right' | 'left' | 'top' | 'bottom';

export interface BaseCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface CheckboxFieldProps<T extends FieldValues> extends BaseCheckboxProps<T> {
  label: string;
  tooltipMessage?: string;
  colSpan?: ColSpanType;
  variant?: CheckboxVariant;
  color?: CheckboxColor;
  size?: CheckboxSize;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  description?: string;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  indeterminate?: boolean;
  required?: boolean;
  validate?: (value: boolean) => string | boolean;
}

export interface CheckboxLabelProps {
  label: string;
  name: string;
  tooltipMessage?: string;
  description?: string;
  labelPosition: LabelPosition;
  size: CheckboxSize;
  disabled?: boolean;
}

export interface CheckboxFieldOnlyProps {
  name: string;
  registerProps: any;
  variant: CheckboxVariant;
  color: CheckboxColor;
  size: CheckboxSize;
  disabled?: boolean;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  indeterminate?: boolean;
} 