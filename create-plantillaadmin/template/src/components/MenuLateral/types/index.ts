import { ReactNode } from 'react';

// ===== TIPOS BASE =====
export type MenuItemType = 'link' | 'accordion';
export type ColorMode = 'light' | 'dark';

// ===== ITEM DE MENÚ =====
export interface MenuLink {
  /** Ruta de navegación */
  to: string;
  /** Texto del enlace */
  label: string;
  /** Icono opcional del enlace */
  icon?: React.ElementType;
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
}

// ===== SECCIÓN DE MENÚ =====
export interface MenuSection {
  /** Título de la sección */
  title: string;
  /** Items de la sección */
  items: MenuItem[];
}

// ===== PROPS DE COMPONENTES =====
export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface SidebarHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface SidebarSearchProps {
  sidebarOpen: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface SidebarFooterProps {
  sidebarOpen: boolean;
  colorMode: ColorMode;
  toggleTheme: () => void;
}

export interface MenuItemLinkProps {
  item: MenuItem;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface MenuItemAccordionProps {
  item: MenuItem;
  itemIndex: number;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isExpanded: boolean;
  isPopupOpen: boolean;
  colorMode: ColorMode;
  handleAccordionInteraction: (itemId: string, hasLinks: boolean) => void;
  handleMouseEnterAccordion: (itemId: string, hasLinks: boolean) => void;
  handleMouseLeaveAccordion: (itemId: string, hasLinks: boolean) => void;
  handleMouseEnterPopup: () => void;
  handleMouseLeavePopup: () => void;
} 