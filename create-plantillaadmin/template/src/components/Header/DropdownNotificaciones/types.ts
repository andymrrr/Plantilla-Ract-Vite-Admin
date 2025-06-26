import { ReactNode } from 'react';

// Tipos principales
export type TipoNotificacion = 'info' | 'exito' | 'advertencia' | 'error' | 'default';

export interface Notificacion {
  id: string;
  tipo: TipoNotificacion;
  titulo: string;
  mensaje: string;
  tiempo: string;
  leida: boolean;
  link?: string;
  acciones?: AccionNotificacion[];
  metadata?: Record<string, any>;
}

export interface AccionNotificacion {
  label: string;
  accion: (notificacion: Notificacion) => void;
  tipo?: 'primary' | 'secondary' | 'danger';
  icono?: ReactNode;
}

export interface ConfiguracionEstilos {
  tamaño?: 'small' | 'medium' | 'large';
  posicion?: 'left' | 'right';
  maxHeight?: number;
  width?: number;
  mostrarTiempo?: boolean;
  mostrarIconos?: boolean;
  animaciones?: boolean;
}

export interface DropdownNotificacionesProps {
  // Props principales
  notificaciones: Notificacion[];
  
  // Callbacks
  onMarcarComoLeida?: (id: string) => void;
  onMarcarTodasComoLeidas?: () => void;
  onEliminarNotificacion?: (id: string) => void;
  onClickNotificacion?: (notificacion: Notificacion) => void;
  onAbrirDropdown?: () => void;
  onCerrarDropdown?: () => void;
  
  // Configuración
  configuracion?: ConfiguracionEstilos;
  iconoPersonalizado?: ReactNode;
  titulo?: string;
  mensajeVacio?: string;
  mostrarContador?: boolean;
  cerrarAlClickear?: boolean;
  
  // Estados
  cargando?: boolean;
  error?: string;
  
  // Accesibilidad
  ariaLabel?: string;
  
  // Clases CSS personalizadas
  className?: string;
  classNameDropdown?: string;
} 