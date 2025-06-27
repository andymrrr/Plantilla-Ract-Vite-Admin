import { MenuSection, MenuItem } from '../types';
import { BREAKPOINTS } from '../constants';

// ===== UTILIDADES DE MENÚ =====

/**
 * Busca un item de menú por su ID en toda la configuración
 */
export const findMenuItemById = (menuConfig: MenuSection[], itemId: string): MenuItem | null => {
  for (const section of menuConfig) {
    const item = section.items.find(item => item.id === itemId);
    if (item) return item;
  }
  return null;
};

/**
 * Obtiene todas las rutas disponibles en el menú
 */
export const getAllMenuRoutes = (menuConfig: MenuSection[]): string[] => {
  const routes: string[] = [];
  
  menuConfig.forEach(section => {
    section.items.forEach(item => {
      if (item.to) {
        routes.push(item.to);
      }
      if (item.links) {
        item.links.forEach(link => routes.push(link.to));
      }
    });
  });
  
  return routes;
};

/**
 * Filtra el menú basado en permisos del usuario (placeholder para implementación futura)
 */
export const filterMenuByPermissions = (
  menuConfig: MenuSection[], 
  userPermissions: string[]
): MenuSection[] => {
  // TODO: Implementar lógica de permisos
  return menuConfig;
};

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

// ===== UTILIDADES DE POSICIONAMIENTO =====

/**
 * Calcula la posición Y para un popup de accordion
 */
export const calculatePopupPosition = (itemIndex: number, baseTop: number = 160): number => {
  return baseTop + (itemIndex * 48);
};

/**
 * Ajusta la posición del popup para mantenerlo en pantalla
 */
export const adjustPopupPosition = (
  calculatedTop: number, 
  popupHeight: number = 200
): number => {
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const maxTop = windowHeight - popupHeight - 20; // 20px de margen
  
  return Math.min(calculatedTop, maxTop);
};

// ===== UTILIDADES DE BÚSQUEDA =====

/**
 * Normaliza texto para búsqueda (sin acentos, minúsculas)
 */
export const normalizeSearchText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remover acentos
};

/**
 * Verifica si un texto coincide con la búsqueda
 */
export const matchesSearch = (text: string, searchQuery: string): boolean => {
  if (!searchQuery.trim()) return true;
  
  const normalizedText = normalizeSearchText(text);
  const normalizedQuery = normalizeSearchText(searchQuery);
  
  return normalizedText.includes(normalizedQuery);
};

// ===== UTILIDADES DE TEMA =====

/**
 * Obtiene el tema guardado en localStorage
 */
export const getSavedTheme = (): 'light' | 'dark' | null => {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem('color-theme') as 'light' | 'dark' | null;
};

/**
 * Guarda el tema en localStorage
 */
export const saveTheme = (theme: 'light' | 'dark'): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('color-theme', theme);
};

/**
 * Detecta la preferencia de tema del sistema
 */
export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// ===== UTILIDADES DE VALIDACIÓN =====

/**
 * Valida la configuración del menú
 */
export const validateMenuConfig = (menuConfig: MenuSection[]): string[] => {
  const errors: string[] = [];
  
  menuConfig.forEach((section, sectionIndex) => {
    if (!section.title) {
      errors.push(`Sección ${sectionIndex}: título requerido`);
    }
    
    section.items.forEach((item, itemIndex) => {
      if (!item.id) {
        errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: ID requerido`);
      }
      
      if (!item.label) {
        errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: label requerido`);
      }
      
      if (item.type === 'link' && !item.to) {
        errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: 'to' requerido para type 'link'`);
      }
      
      if (item.type === 'accordion' && (!item.links || item.links.length === 0)) {
        errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: 'links' requerido para type 'accordion'`);
      }
    });
  });
  
  return errors;
};

// ===== UTILIDADES DE PERFORMANCE =====

/**
 * Debounce function para optimizar búsquedas
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

/**
 * Throttle function para optimizar eventos de scroll/resize
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}; 