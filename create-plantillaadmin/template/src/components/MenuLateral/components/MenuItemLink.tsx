import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../types';

interface MenuItemLinkProps {
  item: MenuItem;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({
  item,
  sidebarOpen,
  setSidebarOpen
}) => {
  const IconComponent = item.icon;

  return (
    <div className="relative group">
      <NavLink
        to={item.to || '#'}
        className={({ isActive }) => `
          flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          ${isActive 
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }
        `}
        onClick={() => window.innerWidth <= 768 && setSidebarOpen(false)}
      >
        {IconComponent && (
          <span className="flex-shrink-0 w-5 h-5 mr-3">
            <IconComponent />
          </span>
        )}
        {sidebarOpen && (
          <span className="truncate">{item.label}</span>
        )}
      </NavLink>
      
      
      {!sidebarOpen && (
        <div 
          className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 
                    bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                    whitespace-nowrap z-50 pointer-events-none"
        >
          {item.label}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-2 border-y-transparent border-r-2 border-r-gray-900 dark:border-r-gray-700" />
        </div>
      )}
    </div>
  );
}; 