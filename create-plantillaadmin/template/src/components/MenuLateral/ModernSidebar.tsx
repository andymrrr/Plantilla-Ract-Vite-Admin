import React from 'react';
import { ModernSidebar as ModernSidebarComponent } from './components/ModernSidebar';
import './styles/ModernSidebar.css';

interface ModernSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ModernSidebar: React.FC<ModernSidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  className,
  style
}) => {
  return (
    <ModernSidebarComponent
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    />
  );
};

export default ModernSidebar; 