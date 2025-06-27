// Configuración por defecto del header
export const HEADER_DEFAULTS = {
  SEARCH_PLACEHOLDER: 'Buscar en el sistema...',
  LOGO_ALT_TEXT: 'Logo de la aplicación',
  ARIA_LABEL: 'Encabezado principal',
  LOGOUT_LABEL: 'Cerrar Sesión',
  NOTIFICATIONS_TITLE: 'Notificaciones del Sistema',
  MESSAGES_TITLE: 'Mensajes',
  HAMBURGER_ARIA_LABEL: 'Abrir menú lateral'
} as const;

// Configuración de dropdowns
export const DROPDOWN_CONFIG = {
  NOTIFICATIONS: {
    tamaño: 'medium' as const,
    posicion: 'right' as const,
    maxHeight: 400,
    width: 350
  },
  MESSAGES: {
    tamaño: 'medium' as const,
    posicion: 'right' as const,
    maxHeight: 400,
    width: 350,
    mostrarIconos: false
  }
} as const;

// Configuración de usuario por defecto
export const DEFAULT_USER = {
  nombre: 'Admin Usuario',
  cargo: 'Administrador del Sistema',
  avatar: '/src/images/user/user-01.png'
} as const;

// Configuración de logo por defecto
export const DEFAULT_LOGO = {
  url: '/src/images/logo/logo-icon.svg',
  altText: 'Logo de la aplicación'
} as const; 