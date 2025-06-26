export { default } from './DropdownNotificaciones';
export type { 
  Notificacion, 
  TipoNotificacion, 
  ConfiguracionEstilos,
  AccionNotificacion,
  DropdownNotificacionesProps
} from './types';

// Re-exportar utilidades y constantes para uso externo
export { 
  obtenerIconoPorTipo,
  generarConfiguracion,
  contarNoLeidas,
  formatearContador
} from './utils';

export { 
  DEFAULT_TEXTS,
  CONFIGURACION_DEFAULT
} from './constants';

// Re-exportar hook para uso avanzado
export { useDropdownNotificaciones } from './hooks/useDropdownNotificaciones'; 