import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { NavegacionConfig } from '../types';

interface UseNavegacionProps {
  href: string;
  target?: '_blank' | '_self';
  replace?: boolean;
  state?: any;
  onClick?: () => void;
  onClickAsync?: () => Promise<void>;
  deshabilitar?: boolean;
  cargando?: boolean;
}

export const useNavegacion = ({
  href,
  target,
  replace = false,
  state,
  onClick,
  onClickAsync,
  deshabilitar = false,
  cargando = false,
}: UseNavegacionProps) => {
  const navigate = useNavigate();
  const [cargandoInterno, setCargandoInterno] = useState(false);
  
  // Determinar si está cargando (interno o externo)
  const estaCargando = cargando || cargandoInterno;

  const navegar = useCallback((config: NavegacionConfig) => {
    if (config.target === '_blank') {
      window.open(config.href, '_blank');
    } else {
      navigate(config.href, { 
        replace: config.replace, 
        state: config.state 
      });
    }
  }, [navigate]);

  const manejarClick = useCallback(async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si está deshabilitado o cargando, prevenir navegación
    if (deshabilitar || estaCargando) {
      e.preventDefault();
      return;
    }

    // Ejecutar onClick si existe
    if (onClick) {
      onClick();
    }

    // Ejecutar onClickAsync si existe
    if (onClickAsync) {
      e.preventDefault(); // Prevenir navegación inmediata
      setCargandoInterno(true);
      
      try {
        await onClickAsync();
        // Después de completar la operación async, navegar
        navegar({ href, target, replace, state });
      } catch (error) {
        // Los errores se capturan automáticamente por globalErrorHandler
        console.error('Error en navegación async:', error);
      } finally {
        setCargandoInterno(false);
      }
    }
  }, [
    deshabilitar, 
    estaCargando, 
    onClick, 
    onClickAsync, 
    navegar, 
    href, 
    target, 
    replace, 
    state
  ]);

  return {
    estaCargando,
    manejarClick,
    navegar,
  };
}; 