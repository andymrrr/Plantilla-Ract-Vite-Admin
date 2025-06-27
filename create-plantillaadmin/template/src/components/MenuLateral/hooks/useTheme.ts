import { useState, useEffect } from 'react';

export type ColorMode = 'light' | 'dark';

export const useTheme = () => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  // Cargar tema desde localStorage al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme') as ColorMode;
    if (savedTheme) {
      setColorMode(savedTheme);
    }
  }, []);

  // Aplicar tema al body
  useEffect(() => {
    const bodyClass = window.document.body.classList;
    if (colorMode === 'dark') {
      bodyClass.add('dark');
    } else {
      bodyClass.remove('dark');
    }
    localStorage.setItem('color-theme', colorMode);
  }, [colorMode]);

  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return {
    colorMode,
    toggleTheme,
  };
}; 