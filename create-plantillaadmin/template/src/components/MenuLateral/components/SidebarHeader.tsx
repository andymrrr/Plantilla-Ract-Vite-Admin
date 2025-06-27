import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface SidebarHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
      {/* Logo */}
      <div className={`flex items-center transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
        <img 
          src="/src/images/logo/logo.svg" 
          alt="Logo" 
          className="w-8 h-8 flex-shrink-0"
        />
        {sidebarOpen && (
          <span className="ml-3 text-lg font-semibold text-gray-900 dark:text-white transition-all duration-300">
            Admin
          </span>
        )}
      </div>

      {/* Botón toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
        aria-label={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </div>
  );
}; 