export interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  className?: string;
  userData?: UserData;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  showNotifications?: boolean;
  showMessages?: boolean;
  showSearch?: boolean;
}

export interface UserData {
  nombre: string;
  cargo: string;
  avatar: string;
  email?: string;
  id?: string;
}

export interface SearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  defaultValue?: string;
}

export interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  ariaLabel?: string;
}

export interface HeaderActionsProps {
  showNotifications?: boolean;
  showMessages?: boolean;
  className?: string;
}

export interface HeaderLogoProps {
  className?: string;
  logoUrl?: string;
  altText?: string;
  onClick?: () => void;
}

export interface HeaderSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
} 