// Componente principal
export { default } from './HookFormFile';

// Subcomponentes
export { default as FileLabel } from './FileLabel';
export { default as FileField } from './FileField';
export { default as FileDropArea } from './FileDropArea';

// Reutilizamos ErrorMessage del HookFormInput
export { ErrorMessage } from '../HookFormInput';

// Tipos
export type * from './types';

// Utilidades
export * from './utils'; 