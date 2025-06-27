import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SidebarSearchProps {
  sidebarOpen: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SidebarSearch: React.FC<SidebarSearchProps> = ({
  sidebarOpen,
  searchQuery,
  setSearchQuery
}) => {
  return (
    <div className={`p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        <input
          type="text"
          placeholder={sidebarOpen ? "Buscar..." : ""}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          aria-label="Buscar en el menú"
        />
      </div>
    </div>
  );
}; 