export interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface SearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
} 