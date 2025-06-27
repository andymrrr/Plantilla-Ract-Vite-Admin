import { ReactNode } from 'react';

// ===== TIPOS BASE =====
export type MenuItemType = 'link' | 'accordion';
export type ColorMode = 'light' | 'dark';
export type ResponsiveBreakpoint = 'mobile' | 'tablet' | 'desktop';

// ===== CONFIGURACIÓN DE MENÚ =====
export interface MenuLink {
  /** Ruta de navegación */
  to: string;
  /** Texto del enlace */
  label: string;
  /** Icono opcional del enlace */
  icon?: React.ElementType;
  /** Permisos requeridos para ver este enlace */
  permissions?: string[];
}

export interface MenuItem {
  /** ID único del item */
  id: string;
  /** Ruta de navegación (solo para type: 'link') */
  to?: string;
  /** Icono del item */
  icon: React.ElementType;
  /** Texto del item */
  label: string;
  /** Tipo de item */
  type: MenuItemType;
  /** Enlaces hijos (solo para type: 'accordion') */
  links?: MenuLink[];
  /** Permisos requeridos para ver este item */
  permissions?: string[];
  /** Badge opcional para mostrar notificaciones */
  badge?: {
    text: string;
    variant: 'default' | 'success' | 'warning' | 'error';
  };
}

export interface MenuSection {
  /** ID único de la sección */
  id: string;
  /** Título de la sección */
  title: string;
  /** Items de la sección */
  items: MenuItem[];
  /** Permisos requeridos para ver esta sección */
  permissions?: string[];
  /** Orden de visualización */
  order?: number;
}

// ===== CONFIGURACIÓN COMPLETA =====
export interface MenuConfig {
  sections: MenuSection[];
  version: string;
  lastUpdated: Date;
}

// ===== PROPS DE COMPONENTES =====
export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface SidebarHeaderProps extends Pick<SidebarProps, 'sidebarOpen' | 'setSidebarOpen'> {}

export interface SidebarSearchProps extends Pick<SidebarProps, 'sidebarOpen'> {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface SidebarFooterProps extends Pick<SidebarProps, 'sidebarOpen'> {
  colorMode: ColorMode;
  toggleTheme: () => void;
}

export interface MenuItemLinkProps extends Pick<SidebarProps, 'sidebarOpen' | 'setSidebarOpen'> {
  item: MenuItem;
}

export interface MenuItemAccordionProps extends Pick<SidebarProps, 'sidebarOpen' | 'setSidebarOpen'> {
  item: MenuItem;
  itemIndex: number;
  isExpanded: boolean;
  isPopupOpen: boolean;
  colorMode: ColorMode;
  handleAccordionInteraction: (itemId: string, hasLinks: boolean) => void;
  handleMouseEnterAccordion: (itemId: string, hasLinks: boolean) => void;
  handleMouseLeaveAccordion: (itemId: string, hasLinks: boolean) => void;
  handleMouseEnterPopup: () => void;
  handleMouseLeavePopup: () => void;
}

// ===== HOOKS =====
export interface UseSidebarStateReturn {
  expandedSections: Set<string>;
  activeAccordionPopup: string | null;
  setActiveAccordionPopup: (id: string | null) => void;
  popupTimeoutRef: React.MutableRefObject<number | null>;
  sidebarRef: React.RefObject<HTMLDivElement>;
  toggleSection: (itemId: string) => void;
  isSectionExpanded: (itemId: string) => boolean;
}

export interface UseThemeReturn {
  colorMode: ColorMode;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
}

export interface UseMenuSearchReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredMenu: MenuSection[];
  clearSearch: () => void;
}

export interface UseAccordionHandlersProps {
  sidebarOpen: boolean;
  activeAccordionPopup: string | null;
  setActiveAccordionPopup: (id: string | null) => void;
  popupTimeoutRef: React.MutableRefObject<number | null>;
  toggleSection: (itemId: string) => void;
}

// ===== SERVICIOS =====
export interface MenuService {
  getMenuConfig: () => Promise<MenuConfig>;
  validateMenuConfig: (config: MenuConfig) => ValidationResult;
  filterByPermissions: (sections: MenuSection[], permissions: string[]) => MenuSection[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// ===== EVENTOS =====
export interface MenuItemClickEvent {
  item: MenuItem;
  type: 'navigation' | 'accordion-toggle';
  timestamp: Date;
}

export interface MenuSearchEvent {
  query: string;
  resultsCount: number;
  timestamp: Date;
} 