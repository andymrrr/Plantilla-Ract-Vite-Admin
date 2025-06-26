import { ConfiguracionEstilos } from './types';

// Configuración por defecto
export const CONFIGURACION_DEFAULT: Required<ConfiguracionEstilos> = {
  tamaño: 'medium',
  posicion: 'right',
  maxHeight: 360,
  width: 320,
  mostrarTiempo: true,
  mostrarIconos: true,
  animaciones: true
};

// Clases CSS por tamaño
export const SIZE_CLASSES = {
  small: "h-7 w-7",
  medium: "h-8.5 w-8.5", 
  large: "h-10 w-10"
} as const;

// Clases CSS por posición
export const POSITION_CLASSES = {
  left: "-left-27 sm:left-0",
  right: "-right-27 sm:right-0"
} as const;

// Clases base
export const BASE_TRIGGER_CLASSES = "relative flex items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white transition-all duration-200";

export const BASE_DROPDOWN_CLASSES = "absolute mt-2.5 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark z-50";

// Textos por defecto
export const DEFAULT_TEXTS = {
  titulo: "Notificaciones",
  mensajeVacio: "No hay notificaciones",
  ariaLabel: "Notificaciones",
  marcarTodasComoLeidas: "Marcar todas como leídas",
  marcarComoLeida: "Marcar como leída",
  eliminarNotificacion: "Eliminar notificación"
} as const; 