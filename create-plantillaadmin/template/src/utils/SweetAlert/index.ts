// Servicio principal
export { default as sweetAlert } from './SweetAlertService';
export { sweetAlert as SweetAlertService } from './SweetAlertService';

// Hook personalizado
export { useSweetAlert } from './hooks/useSweetAlert';

// Tipos
export type {
  TipoAlerta,
  PosicionAlerta,
  ConfiguracionAlerta,
  ConfiguracionConfirmacion,
  ConfiguracionNotificacion,
  ConfiguracionInput,
  ResultadoAlerta
} from './types';

// Re-export de SweetAlert2 por si se necesita acceso directo
export { default as Swal } from 'sweetalert2'; 