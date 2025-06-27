// ===== CONSTANTES DE DISEÑO =====
export const SIDEBAR_WIDTH = {
  EXPANDED: 256, // w-64 = 16rem = 256px
  COLLAPSED: 80, // w-20 = 5rem = 80px
} as const;

export const POPUP_DELAYS = {
  SHOW: 0,
  HIDE: 300,
} as const;

export const POPUP_POSITIONING = {
  LEFT_OFFSET: 85,
  TOP_BASE: 160,
  ITEM_HEIGHT: 48,
} as const;

// ===== CONSTANTES DE TEMA =====
export const THEME_STORAGE_KEY = 'color-theme';

export const THEME_COLORS = {
  LIGHT: {
    BACKGROUND: '#ffffff',
    BORDER: '#e5e7eb',
    HEADER_BG: '#f8fafc',
    HEADER_BORDER: '#e2e8f0',
    ACCENT: '#3b82f6',
  },
  DARK: {
    BACKGROUND: '#1f2937',
    BORDER: '#374151',
    HEADER_BG: '#374151',
    HEADER_BORDER: '#4b5563',
    ACCENT: '#60a5fa',
  },
} as const;

// ===== CONSTANTES DE ACCESIBILIDAD =====
export const ARIA_LABELS = {
  SIDEBAR: 'Menú principal',
  SEARCH: 'Buscar en el menú',
  TOGGLE_SIDEBAR: {
    OPEN: 'Abrir menú',
    CLOSE: 'Cerrar menú',
  },
  TOGGLE_THEME: {
    LIGHT: 'Cambiar a modo claro',
    DARK: 'Cambiar a modo oscuro',
  },
} as const;

// ===== CONSTANTES DE RESPONSIVE =====
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

// ===== CONSTANTES DE ANIMACIÓN =====
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const; 