import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ColorMode } from '../hooks/useTheme';

interface SidebarFooterProps {
  sidebarOpen: boolean;
  colorMode: ColorMode;
  toggleTheme: () => void;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  sidebarOpen,
  colorMode,
  toggleTheme
}) => {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
      <div className={`flex items-center justify-between transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
          title={colorMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          aria-label={colorMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {colorMode === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
        
        {sidebarOpen && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            v1.0.0
          </span>
        )}
      </div>
    </div>
  );
}; 