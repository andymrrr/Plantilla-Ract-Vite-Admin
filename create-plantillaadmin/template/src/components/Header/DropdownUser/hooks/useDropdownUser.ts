import { useState, useCallback } from 'react';
import { UserData, MenuItemConfig } from '../types';
import { DEFAULT_USER_DATA, DEFAULT_MENU_ITEMS, DEFAULT_LOGOUT_LABEL } from '../constants';

interface UseDropdownUserProps {
  userData?: UserData;
  menuItems?: MenuItemConfig[];
  onLogout?: () => void;
  showLogout?: boolean;
  logoutLabel?: string;
}

export const useDropdownUser = ({
  userData = DEFAULT_USER_DATA,
  menuItems = DEFAULT_MENU_ITEMS,
  onLogout,
  showLogout = true,
  logoutLabel = DEFAULT_LOGOUT_LABEL
}: UseDropdownUserProps = {}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen(prev => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    closeDropdown();
    onLogout?.();
  }, [onLogout, closeDropdown]);

  return {
    dropdownOpen,
    userData,
    menuItems,
    showLogout,
    logoutLabel,
    toggleDropdown,
    closeDropdown,
    handleLogout
  };
}; 