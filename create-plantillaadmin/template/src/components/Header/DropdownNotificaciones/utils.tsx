import React from 'react';
import { 
  FaBell, 
  FaCheckDouble, 
  FaExclamationTriangle, 
  FaInfoCircle
} from 'react-icons/fa';
import { TipoNotificacion, ConfiguracionEstilos } from './types';
import { 
  BASE_TRIGGER_CLASSES, 
  BASE_DROPDOWN_CLASSES, 
  SIZE_CLASSES, 
  POSITION_CLASSES,
  CONFIGURACION_DEFAULT 
} from './constants';

// Obtener icono por tipo de notificación
export const obtenerIconoPorTipo = (tipo: TipoNotificacion, mostrarIconos: boolean) => {
  if (!mostrarIconos) return null;
  
  switch (tipo) {
    case 'info':
      return <FaInfoCircle className="text-blue-500" />;
    case 'exito':
      return <FaCheckDouble className="text-green-500" />;
    case 'advertencia':
      return <FaExclamationTriangle className="text-yellow-500" />;
    case 'error':
      return <FaExclamationTriangle className="text-red-500" />;
    case 'default':
    default:
      return <FaBell className="text-gray-500" />;
  }
};

// Generar configuración completa con defaults
export const generarConfiguracion = (configuracion: ConfiguracionEstilos = {}) => {
  return {
    ...CONFIGURACION_DEFAULT,
    ...configuracion
  };
};

// Generar clases CSS para el trigger
export const generarClasesTrigger = (config: Required<ConfiguracionEstilos>, className: string) => {
  return `${BASE_TRIGGER_CLASSES} ${SIZE_CLASSES[config.tamaño]} ${className}`;
};

// Generar clases CSS para el dropdown
export const generarClasesDropdown = (
  config: Required<ConfiguracionEstilos>, 
  dropdownAbierto: boolean, 
  classNameDropdown: string
) => {
  const animationClasses = config.animaciones 
    ? "transition-all duration-200 ease-in-out" 
    : "";
  
  const visibilityClasses = dropdownAbierto 
    ? "opacity-100 translate-y-0 pointer-events-auto" 
    : "opacity-0 -translate-y-2 pointer-events-none";
  
  return `${BASE_DROPDOWN_CLASSES} ${POSITION_CLASSES[config.posicion]} ${animationClasses} ${visibilityClasses} ${classNameDropdown}`;
};

// Contar notificaciones no leídas
export const contarNoLeidas = (notificaciones: Array<{ leida: boolean }>) => {
  return notificaciones.filter(n => !n.leida).length;
};

// Formatear contador de notificaciones
export const formatearContador = (count: number) => {
  return count > 99 ? '99+' : count.toString();
}; 