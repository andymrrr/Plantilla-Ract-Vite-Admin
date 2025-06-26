import React from 'react';
import { Link } from 'react-router-dom';
import { UserMenuProps } from '../types';
import { LOGOUT_ICON } from '../constants';

const UserMenu: React.FC<UserMenuProps> = ({ 
  menuItems, 
  onLogout, 
  showLogout, 
  logoutLabel 
}) => {
  return (
    <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {menuItems.length > 0 && (
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          {menuItems.map((item) => (
            <li key={item.key}>
              {item.ruta ? (
                <Link
                  to={item.ruta}
                  className={`flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base ${
                    item.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={item.disabled ? (e) => e.preventDefault() : item.onClick}
                >
                  {item.icono}
                  {item.label}
                </Link>
              ) : (
                <button
                  className={`flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base w-full text-left ${
                    item.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={item.disabled ? undefined : item.onClick}
                  disabled={item.disabled}
                >
                  {item.icono}
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      
      {showLogout && (
        <button 
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          onClick={onLogout}
        >
          {LOGOUT_ICON}
          {logoutLabel}
        </button>
      )}
    </div>
  );
};

export default UserMenu; 