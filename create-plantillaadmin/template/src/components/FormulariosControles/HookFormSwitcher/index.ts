// Componente principal
export { default as HookFormSwitcher } from './HookFormSwitcher';

// Componentes individuales
export { default as SwitcherField } from './SwitcherField';
export { default as SwitcherLabel } from './SwitcherLabel';
export { default as LoadingSpinner } from './LoadingSpinner';

// Reutilizamos ErrorMessage del HookFormInput
export { ErrorMessage } from '../HookFormInput';

// Tipos
export type {
  SwitcherFieldProps,
  SwitcherLabelProps,
  SwitcherFieldOnlyProps,
  LoadingSpinnerProps,
  ErrorMessageProps,
  SwitcherVariant,
  SwitcherSize,
  SwitcherColor,
  ColSpanType,
  PatternValidation,
  SwitcherValidationProps,
  BaseSwitcherProps
} from './types';

// Utilidades
export {
  getColSpanClass,
  buildRegisterOptions,
  getSwitcherSizeClasses,
  getSwitcherColorClasses,
  getSwitcherVariantClasses,
  getSwitcherIconClasses,
  getLabelSizeClasses,
  getEnhancedSwitcherClasses,
  getSwitcherInputClasses,
  getLoadingSpinnerClasses,
  getStateTextClasses,
  // Utilidades legacy
  getSwitcherBackgroundClasses,
  getSwitcherToggleClasses
} from './utils'; 