import { ColorMode } from '../../core/types';

// ===== UTILIDADES DE TEMA =====

/**
 * Obtiene el tema guardado en localStorage
 */
export const getSavedTheme = (): ColorMode | null => {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem('color-theme') as ColorMode | null;
};

/**
 * Guarda el tema en localStorage
 */
export const saveTheme = (theme: ColorMode): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('color-theme', theme);
};

/**
 * Detecta la preferencia de tema del sistema
 */
export const getSystemTheme = (): ColorMode => {
  if (typeof window === 'undefined') return 'light';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Obtiene el tema inicial (combinando localStorage y sistema)
 */
export const getInitialTheme = (): ColorMode => {
  const savedTheme = getSavedTheme();
  if (savedTheme) return savedTheme;
  
  return getSystemTheme();
};

/**
 * Aplica el tema al documento
 */
export const applyTheme = (theme: ColorMode): void => {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // Guardar el tema aplicado
  saveTheme(theme);
};

/**
 * Alterna entre temas
 */
export const toggleTheme = (currentTheme: ColorMode): ColorMode => {
  const newTheme: ColorMode = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  return newTheme;
};

/**
 * Configuración de colores para cada tema
 */
export const getThemeColors = (theme: ColorMode) => {
  const themes = {
    light: {
      background: '#ffffff',
      foreground: '#000000',
      border: '#e5e7eb',
      muted: '#f3f4f6',
      accent: '#3b82f6',
      secondary: '#6b7280',
    },
    dark: {
      background: '#1f2937',
      foreground: '#ffffff',
      border: '#374151',
      muted: '#111827',
      accent: '#60a5fa',
      secondary: '#9ca3af',
    }
  };
  
  return themes[theme];
};

/**
 * Hook personalizado para manejar el tema
 */
export const useThemeManager = () => {
  const [theme, setTheme] = React.useState<ColorMode>(getInitialTheme);

  const handleToggleTheme = React.useCallback(() => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
  }, [theme]);

  const handleSetTheme = React.useCallback((newTheme: ColorMode) => {
    applyTheme(newTheme);
    setTheme(newTheme);
  }, []);

  // Aplicar tema inicial
  React.useEffect(() => {
    applyTheme(theme);
  }, []);

  // Escuchar cambios del sistema
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (!getSavedTheme()) {
        // Solo cambiar si no hay preferencia guardada
        const systemTheme = getSystemTheme();
        handleSetTheme(systemTheme);
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [handleSetTheme]);

  return {
    theme,
    setTheme: handleSetTheme,
    toggleTheme: handleToggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    colors: getThemeColors(theme)
  };
};

import React from 'react'; 