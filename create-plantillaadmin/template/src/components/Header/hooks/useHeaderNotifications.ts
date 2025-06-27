import { useState, useEffect, useCallback, useMemo } from 'react';
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
    const cargarDatos = async () => {
      setCargandoNotificaciones(true);
      setCargandoMensajes(true);
      
      try {
        // Simular API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Aquí irían las llamadas reales a la API
      } catch (error) {
        console.error('Error cargando notificaciones:', error);
      } finally {
        setCargandoNotificaciones(false);
        setCargandoMensajes(false);
      }
    };

    cargarDatos();
  }, []);

  // Funciones para notificaciones - memoizadas para evitar re-renders innecesarios
  const marcarNotificacionComoLeida = useCallback((id: string) => {
    setNotificaciones(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, leida: true } : notif
      )
    );
  }, []);

  const marcarTodasNotificacionesComoLeidas = useCallback(() => {
    setNotificaciones(prev => 
      prev.map(notif => ({ ...notif, leida: true }))
    );
  }, []);

  const eliminarNotificacion = useCallback((id: string) => {
    setNotificaciones(prev => prev.filter(notif => notif.id !== id));
  }, []);

  const manejarClickNotificacion = useCallback((notificacion: Notificacion) => {
    console.log('Notificación clickeada:', notificacion);
    // Aquí puedes agregar navegación o lógica específica
    if (notificacion.link) {
      // window.location.href = notificacion.link;
    }
  }, []);

  // Funciones para mensajes - memoizadas
  const marcarMensajeComoLeido = useCallback((id: string) => {
    setMensajes(prev => 
      prev.map(mensaje => 
        mensaje.id === id ? { ...mensaje, leida: true } : mensaje
      )
    );
  }, []);

  const marcarTodosMensajesComoLeidos = useCallback(() => {
    setMensajes(prev => 
      prev.map(mensaje => ({ ...mensaje, leida: true }))
    );
  }, []);

  const eliminarMensaje = useCallback((id: string) => {
    setMensajes(prev => prev.filter(mensaje => mensaje.id !== id));
  }, []);

  const manejarClickMensaje = useCallback((mensaje: Notificacion) => {
    console.log('Mensaje clickeado:', mensaje);
    // Lógica para abrir chat o conversación
  }, []);

  // Funciones de búsqueda - memoizada
  const manejarBusqueda = useCallback((query: string) => {
    console.log('Búsqueda:', query);
    // Implementar lógica de búsqueda
  }, []);

  // Estadísticas memoizadas
  const estadisticasNotificaciones = useMemo(() => ({
    total: notificaciones.length,
    noLeidas: notificaciones.filter(n => !n.leida).length
  }), [notificaciones]);

  const estadisticasMensajes = useMemo(() => ({
    total: mensajes.length,
    noLeidos: mensajes.filter(m => !m.leida).length
  }), [mensajes]);

  return {
    // Estados
    notificaciones,
    mensajes,
    cargandoNotificaciones,
    cargandoMensajes,
    
    // Estadísticas
    estadisticasNotificaciones,
    estadisticasMensajes,
    
    // Funciones de notificaciones
    marcarNotificacionComoLeida,
    marcarTodasNotificacionesComoLeidas,
    eliminarNotificacion,
    manejarClickNotificacion,
    
    // Funciones de mensajes
    marcarMensajeComoLeido,
    marcarTodosMensajesComoLeidos,
    eliminarMensaje,
    manejarClickMensaje,
    
    // Funciones generales
    manejarBusqueda
  };
}; 