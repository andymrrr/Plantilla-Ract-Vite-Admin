import React from "react";
import { ModernSidebar } from './components';
import { SidebarProps } from './types';

/**
 * Componente Sidebar principal que encapsula el ModernSidebar
 * Actúa como punto de entrada único para el sistema de navegación lateral
 */
const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <ModernSidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    />
  );
};

export default Sidebar;

// Re-exportar componentes y tipos para uso externo
export { ModernSidebar } from './components';
export type { SidebarProps, MenuItem, MenuSection, MenuLink } from './types';
export { menuConfig } from './menuConfig';
