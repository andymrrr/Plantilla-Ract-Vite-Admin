// Exportar el componente principal
export { TablaPaginada } from './TablaPaginada';
export { default as TablaPaginadaDefault } from './TablaPaginada';

// Exportar tipos
export type {
  TablaPaginadaProps,
  ClasesPersonalizadasTabla,
  TablaTema,
  TablaTemaConfig,
  TablaTamanio,
  TablaDensidad
} from './types';

// Exportar utilidades
export { 
  generarColumnas,
  debeMostrarHeader
} from './utils';

// Exportar temas
export {
  TABLA_TEMAS,
  normalizarTema,
  generarClasesTema
} from './themes';

// Exportar componentes
export { 
  HeaderTabla,
  FooterTabla
} from './components'; 