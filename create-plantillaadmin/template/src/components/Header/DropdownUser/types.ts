export interface UserData {
  nombre: string;
  cargo: string;
  avatar: string;
}

export interface MenuItemConfig {
  key: string;
  label: string;
  icono: React.ReactNode;
  ruta?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface DropdownUserProps {
  userData?: UserData;
  menuItems?: MenuItemConfig[];
  onLogout?: () => void;
  className?: string;
  showLogout?: boolean;
  logoutLabel?: string;
}

export interface UserMenuProps {
  menuItems: MenuItemConfig[];
  onLogout?: () => void;
  showLogout: boolean;
  logoutLabel: string;
}

export interface UserInfoProps {
  userData: UserData;
} 