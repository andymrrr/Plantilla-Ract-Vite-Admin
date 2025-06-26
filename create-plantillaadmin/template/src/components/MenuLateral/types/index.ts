import { ReactNode } from 'react';

// ===== TIPOS BASE =====
export type MenuItemType = 'link' | 'accordion';

// ===== ITEM DE MENÚ =====
export interface MenuLink {
  to: string;
  label: string;
  icon?: React.ElementType;
}

export interface MenuItem {
  id: string;
  to?: string;
  icon: React.ElementType;
  label: string;
  type: MenuItemType;
  links?: MenuLink[];
}

// ===== SECCIÓN DE MENÚ =====
export interface MenuSection {
  title: string;
  items: MenuItem[];
}

// ===== PROPS DEL SIDEBAR =====
export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
} 