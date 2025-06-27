import { BREAKPOINTS } from '../../constants';

// ===== UTILIDADES DE RESPONSIVE =====

/**
 * Determina si estamos en modo móvil
 */
export const isMobile = (): boolean => {
  return typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.MOBILE;
};

/**
 * Determina si estamos en modo tablet
 */
export const isTablet = (): boolean => {
  return typeof window !== 'undefined' && 
    window.innerWidth >= BREAKPOINTS.MOBILE && 
    window.innerWidth < BREAKPOINTS.TABLET;
};

/**
 * Determina si estamos en modo desktop
 */
export const isDesktop = (): boolean => {
  return typeof window !== 'undefined' && window.innerWidth >= BREAKPOINTS.TABLET;
};

/**
 * Obtiene el breakpoint actual
 */
export const getCurrentBreakpoint = (): 'mobile' | 'tablet' | 'desktop' => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

/**
 * Hook para detectar cambios en el breakpoint
 */
export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = React.useState<'mobile' | 'tablet' | 'desktop'>(getCurrentBreakpoint());

  React.useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop'
  };
};

import React from 'react'; 