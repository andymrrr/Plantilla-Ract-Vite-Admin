import { useMemo } from 'react';
import { HeaderProps } from '../types';

export interface HeaderConfig {
  showNotifications: boolean;
  showMessages: boolean;
  showSearch: boolean;
  searchPlaceholder: string;
  logoAltText: string;
  ariaLabel: string;
}

export const useHeaderConfig = (props: HeaderProps): HeaderConfig => {
  const config = useMemo(() => ({
    showNotifications: props.showNotifications ?? true,
    showMessages: props.showMessages ?? true,
    showSearch: props.showSearch ?? true,
    searchPlaceholder: 'Buscar en el sistema...',
    logoAltText: 'Logo de la aplicación',
    ariaLabel: 'Encabezado principal'
  }), [
    props.showNotifications,
    props.showMessages,
    props.showSearch
  ]);

  return config;
}; 