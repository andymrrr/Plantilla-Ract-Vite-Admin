import React from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../../ClickOutside';
import { DropdownUserProps } from './types';
import { useDropdownUser } from './hooks/useDropdownUser';
import { UserInfo, UserMenu } from './components';

const DropdownUser: React.FC<DropdownUserProps> = (props) => {
  const {
    dropdownOpen,
    userData,
    menuItems,
    showLogout,
    logoutLabel,
    toggleDropdown,
    closeDropdown,
    handleLogout
  } = useDropdownUser(props);

  return (
    <ClickOutside 
      onClick={closeDropdown} 
      className={`relative ${props.className || ''}`}
    >
      <Link
        onClick={toggleDropdown}
        className="flex items-center gap-4"
        to="#"
      >
        <UserInfo userData={userData} />
      </Link>

      {dropdownOpen && (
        <UserMenu
          menuItems={menuItems}
          onLogout={handleLogout}
          showLogout={showLogout}
          logoutLabel={logoutLabel}
        />
      )}
    </ClickOutside>
  );
};

export default DropdownUser; 