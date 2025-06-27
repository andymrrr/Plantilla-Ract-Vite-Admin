import { POPUP_DELAYS, ANIMATION_DURATION, BREAKPOINTS } from '../constants';

// ===== TIPO UTILITARIO =====
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ===== CONFIGURACIÓN AVANZADA DEL SIDEBAR =====

export interface SidebarConfig {
  // Configuración visual
  appearance: {
    showLogo: boolean;
    showVersion: boolean;
    enableAnimations: boolean;
    compactMode: boolean;
  };
  
  // Configuración de comportamiento
  behavior: {
    autoCollapse: boolean;
    persistState: boolean;
    closeOnRouteChange: boolean;
    enableSearch: boolean;
  };
  
  // Configuración de popups
  popups: {
    showDelay: number;
    hideDelay: number;
    enableHover: boolean;
    enableClick: boolean;
  };
  
  // Configuración responsive
  responsive: {
    mobileBreakpoint: number;
    tabletBreakpoint: number;
    forceOverlayOnMobile: boolean;
  };
  
  // Configuración de tema
  theme: {
    enableThemeToggle: boolean;
    defaultTheme: 'light' | 'dark' | 'system';
    persistTheme: boolean;
  };
  
  // Configuración de accesibilidad
  accessibility: {
    enableKeyboardNavigation: boolean;
    enableScreenReader: boolean;
    enableFocusTrapping: boolean;
  };
}

// ===== CONFIGURACIÓN POR DEFECTO =====
export const defaultSidebarConfig: SidebarConfig = {
  appearance: {
    showLogo: true,
    showVersion: true,
    enableAnimations: true,
    compactMode: false,
  },
  
  behavior: {
    autoCollapse: false,
    persistState: true,
    closeOnRouteChange: true,
    enableSearch: true,
  },
  
  popups: {
    showDelay: POPUP_DELAYS.SHOW,
    hideDelay: POPUP_DELAYS.HIDE,
    enableHover: true,
    enableClick: true,
  },
  
  responsive: {
    mobileBreakpoint: BREAKPOINTS.MOBILE,
    tabletBreakpoint: BREAKPOINTS.TABLET,
    forceOverlayOnMobile: true,
  },
  
  theme: {
    enableThemeToggle: true,
    defaultTheme: 'system',
    persistTheme: true,
  },
  
  accessibility: {
    enableKeyboardNavigation: true,
    enableScreenReader: true,
    enableFocusTrapping: true,
  },
};

// ===== CONFIGURACIONES PREDEFINIDAS =====

/**
 * Configuración para modo minimal
 */
export const minimalSidebarConfig: DeepPartial<SidebarConfig> = {
  appearance: {
    showLogo: false,
    showVersion: false,
    enableAnimations: false,
    compactMode: true,
  },
  
  behavior: {
    enableSearch: false,
  },
  
  theme: {
    enableThemeToggle: false,
  },
};

/**
 * Configuración para modo móvil optimizado
 */
export const mobileSidebarConfig: DeepPartial<SidebarConfig> = {
  behavior: {
    autoCollapse: true,
    closeOnRouteChange: true,
  },
  
  popups: {
    enableHover: false,
    enableClick: true,
  },
  
  responsive: {
    forceOverlayOnMobile: true,
  },
};

/**
 * Configuración para modo accesibilidad
 */
export const accessibleSidebarConfig: DeepPartial<SidebarConfig> = {
  appearance: {
    enableAnimations: false,
  },
  
  accessibility: {
    enableKeyboardNavigation: true,
    enableScreenReader: true,
    enableFocusTrapping: true,
  },
  
  popups: {
    showDelay: 0,
    hideDelay: 500, // Más tiempo para usuarios con discapacidades
  },
};

// ===== UTILIDADES DE CONFIGURACIÓN =====

/**
 * Combina configuraciones personalizadas con la configuración por defecto
 */
export const mergeConfigs = (
  customConfig: DeepPartial<SidebarConfig>
): SidebarConfig => {
  return {
    appearance: {
      ...defaultSidebarConfig.appearance,
      ...customConfig.appearance,
    },
    behavior: {
      ...defaultSidebarConfig.behavior,
      ...customConfig.behavior,
    },
    popups: {
      ...defaultSidebarConfig.popups,
      ...customConfig.popups,
    },
    responsive: {
      ...defaultSidebarConfig.responsive,
      ...customConfig.responsive,
    },
    theme: {
      ...defaultSidebarConfig.theme,
      ...customConfig.theme,
    },
    accessibility: {
      ...defaultSidebarConfig.accessibility,
      ...customConfig.accessibility,
    },
  };
};

/**
 * Valida una configuración del sidebar
 */
export const validateSidebarConfig = (config: SidebarConfig): string[] => {
  const errors: string[] = [];
  
  if (config.popups.showDelay < 0) {
    errors.push('popups.showDelay debe ser >= 0');
  }
  
  if (config.popups.hideDelay < 0) {
    errors.push('popups.hideDelay debe ser >= 0');
  }
  
  if (config.responsive.mobileBreakpoint <= 0) {
    errors.push('responsive.mobileBreakpoint debe ser > 0');
  }
  
  if (config.responsive.tabletBreakpoint <= config.responsive.mobileBreakpoint) {
    errors.push('responsive.tabletBreakpoint debe ser > mobileBreakpoint');
  }
  
  return errors;
}; 