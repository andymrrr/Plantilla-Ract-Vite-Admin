import { useState, useRef, useEffect, useCallback } from 'react';
import { Notificacion } from '../types';

interface UseDropdownNotificacionesProps {
  onAbrirDropdown?: () => void;
  onCerrarDropdown?: () => void;
  onMarcarComoLeida?: (id: string) => void;
  onMarcarTodasComoLeidas?: () => void;
  onEliminarNotificacion?: (id: string) => void;
  onClickNotificacion?: (notificacion: Notificacion) => void;
  cerrarAlClickear?: boolean;
}

export const useDropdownNotificaciones = ({
  onAbrirDropdown,
  onCerrarDropdown,
  onMarcarComoLeida,
  onMarcarTodasComoLeidas,
  onEliminarNotificacion,
  onClickNotificacion,
  cerrarAlClickear = true
}: UseDropdownNotificacionesProps) => {
  const [dropdownAbierto, setDropdownAbierto] = useState(false);
  
  const trigger = useRef<HTMLButtonElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);

  // Funciones del dropdown
  const abrirDropdown = useCallback(() => {
    setDropdownAbierto(true);
    onAbrirDropdown?.();
  }, [onAbrirDropdown]);

  const cerrarDropdown = useCallback(() => {
    setDropdownAbierto(false);
    onCerrarDropdown?.();
  }, [onCerrarDropdown]);

  const toggleDropdown = useCallback(() => {
    dropdownAbierto ? cerrarDropdown() : abrirDropdown();
  }, [dropdownAbierto, abrirDropdown, cerrarDropdown]);

  // Funciones de notificaciones
  const manejarMarcarComoLeida = useCallback((id: string) => {
    onMarcarComoLeida?.(id);
  }, [onMarcarComoLeida]);

  const manejarMarcarTodasComoLeidas = useCallback(() => {
    onMarcarTodasComoLeidas?.();
  }, [onMarcarTodasComoLeidas]);

  const manejarEliminarNotificacion = useCallback((id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEliminarNotificacion?.(id);
  }, [onEliminarNotificacion]);

  const manejarClickNotificacion = useCallback((notificacion: Notificacion) => {
    if (!notificacion.leida) {
      manejarMarcarComoLeida(notificacion.id);
    }
    onClickNotificacion?.(notificacion);
    if (cerrarAlClickear) {
      cerrarDropdown();
    }
  }, [manejarMarcarComoLeida, onClickNotificacion, cerrarAlClickear, cerrarDropdown]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (!dropdownAbierto || e.keyCode !== 27) return;
      cerrarDropdown();
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownAbierto, cerrarDropdown]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!dropdown.current || !dropdownAbierto) return;
      if (
        dropdown.current.contains(e.target as Node) ||
        trigger.current?.contains(e.target as Node)
      ) return;
      cerrarDropdown();
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownAbierto, cerrarDropdown]);

  return {
    // Estado
    dropdownAbierto,
    
    // Referencias
    trigger,
    dropdown,
    
    // Funciones del dropdown
    abrirDropdown,
    cerrarDropdown,
    toggleDropdown,
    
    // Funciones de notificaciones
    manejarMarcarComoLeida,
    manejarMarcarTodasComoLeidas,
    manejarEliminarNotificacion,
    manejarClickNotificacion
  };
}; 