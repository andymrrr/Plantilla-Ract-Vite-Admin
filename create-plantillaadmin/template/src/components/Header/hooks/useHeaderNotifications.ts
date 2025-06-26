import { useState, useEffect } from 'react';
import { Notificacion } from '../DropdownNotificaciones/types';

// Datos de ejemplo - En producción vendrían de tu API
const notificacionesEjemplo: Notificacion[] = [
  {
    id: '1',
    tipo: 'info',
    titulo: 'Sistema actualizado',
    mensaje: 'Nueva versión del sistema disponible',
    tiempo: 'Hace 5 min',
    leida: false
  },
  {
    id: '2',
    tipo: 'exito',
    titulo: 'Job completado',
    mensaje: 'El proceso de sincronización finalizó exitosamente',
    tiempo: 'Hace 15 min',
    leida: false
  },
  {
    id: '3',
    tipo: 'advertencia',
    titulo: 'Mantenimiento programado',
    mensaje: 'El sistema estará en mantenimiento mañana de 2:00 a 4:00 AM',
    tiempo: 'Hace 1 hora',
    leida: true
  },
  {
    id: '4',
    tipo: 'error',
    titulo: 'Error en backup',
    mensaje: 'El proceso de backup nocturno falló. Revisar logs',
    tiempo: 'Hace 2 horas',
    leida: false
  }
];

const mensajesEjemplo: Notificacion[] = [
  {
    id: 'm1',
    tipo: 'info',
    titulo: 'Juan Pérez',
    mensaje: 'Hola, ¿podemos revisar el reporte de hoy?',
    tiempo: 'Hace 2 min',
    leida: false
  },
  {
    id: 'm2',
    tipo: 'default',
    titulo: 'María García',
    mensaje: 'Los datos del dashboard están listos para revisión',
    tiempo: 'Hace 10 min',
    leida: false
  },
  {
    id: 'm3',
    tipo: 'default',
    titulo: 'Carlos López',
    mensaje: 'Gracias por la actualización del sistema',
    tiempo: 'Hace 30 min',
    leida: true
  }
];

export const useHeaderNotifications = () => {
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>(notificacionesEjemplo);
  const [mensajes, setMensajes] = useState<Notificacion[]>(mensajesEjemplo);
  const [cargandoNotificaciones, setCargandoNotificaciones] = useState(false);
  const [cargandoMensajes, setCargandoMensajes] = useState(false);

  // Simular carga inicial
  useEffect(() => {
    setCargandoNotificaciones(true);
    setCargandoMensajes(true);
    
    // Simular API call
    setTimeout(() => {
      setCargandoNotificaciones(false);
      setCargandoMensajes(false);
    }, 1000);
  }, []);

  // Funciones para notificaciones
  const marcarNotificacionComoLeida = (id: string) => {
    setNotificaciones(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, leida: true } : notif
      )
    );
  };

  const marcarTodasNotificacionesComoLeidas = () => {
    setNotificaciones(prev => 
      prev.map(notif => ({ ...notif, leida: true }))
    );
  };

  const eliminarNotificacion = (id: string) => {
    setNotificaciones(prev => prev.filter(notif => notif.id !== id));
  };

  const manejarClickNotificacion = (notificacion: Notificacion) => {
    console.log('Notificación clickeada:', notificacion);
    // Aquí puedes agregar navegación o lógica específica
    if (notificacion.link) {
      // window.location.href = notificacion.link;
    }
  };

  // Funciones para mensajes
  const marcarMensajeComoLeido = (id: string) => {
    setMensajes(prev => 
      prev.map(mensaje => 
        mensaje.id === id ? { ...mensaje, leida: true } : mensaje
      )
    );
  };

  const marcarTodosMensajesComoLeidos = () => {
    setMensajes(prev => 
      prev.map(mensaje => ({ ...mensaje, leida: true }))
    );
  };

  const eliminarMensaje = (id: string) => {
    setMensajes(prev => prev.filter(mensaje => mensaje.id !== id));
  };

  const manejarClickMensaje = (mensaje: Notificacion) => {
    console.log('Mensaje clickeado:', mensaje);
    // Lógica para abrir chat o conversación
  };

  // Funciones de búsqueda
  const manejarBusqueda = (query: string) => {
    console.log('Búsqueda:', query);
    // Implementar lógica de búsqueda
  };

  return {
    // Estados
    notificaciones,
    mensajes,
    cargandoNotificaciones,
    cargandoMensajes,
    
    // Funciones de notificaciones
    marcarNotificacionComoLeida,
    marcarTodasNotificacionesComoLeidas,
    eliminarNotificacion,
    manejarClickNotificacion,
    
    marcarMensajeComoLeido,
    marcarTodosMensajesComoLeidos,
    eliminarMensaje,
    manejarClickMensaje,
    
    // Funciones generales
    manejarBusqueda
  };
}; 