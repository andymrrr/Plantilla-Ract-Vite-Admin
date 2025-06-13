// Componente principal
export { default as Tarjeta } from './Tarjeta';

// Subcomponentes
export { default as TarjetaHeader } from './TarjetaHeader';
export { default as TarjetaBody } from './TarjetaBody';
export { default as TarjetaFooter } from './TarjetaFooter';
export { default as LineaDivisora } from './LineaDivisora';

// Tipos
export type {
  TarjetaProps,
  TarjetaHeaderProps,
  TarjetaBodyProps,
  TarjetaFooterProps,
  LineaDivisoraProps,
  TarjetaVariante,
  TarjetaTamano,
  LineaGrosor,
  LineaColor,
  LineaConfig
} from './types';

// Utilidades
export {
  obtenerClasesVariante,
  obtenerClasesTamano,
  obtenerClaseColor
} from './utils'; 