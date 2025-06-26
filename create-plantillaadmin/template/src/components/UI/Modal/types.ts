import React from 'react';

export type ModalSize = 'small' | 'medium' | 'large' | 'extra-large' | 'full';
export type ModalType = 'default' | 'confirm' | 'info' | 'warning' | 'error' | 'success';
export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface ModalAction {
  key: string;
  label: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: () => void | Promise<void>;
  autoClose?: boolean;
}

export interface ModalProps {
  // Control de visibilidad
  open: boolean;
  onClose: () => void;
  
  // Contenido
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  
  // Configuración
  size?: ModalSize;
  type?: ModalType;
  centered?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  keyboard?: boolean;
  
  // Header personalizado
  showHeader?: boolean;
  headerExtra?: React.ReactNode;
  
  // Footer personalizado
  showFooter?: boolean;
  actions?: ModalAction[];
  footerExtra?: React.ReactNode;
  
  // Estilos
  className?: string;
  bodyClassName?: string;
  width?: number | string;
  height?: number | string;
  
  // Eventos
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
  afterClose?: () => void;
  
  // Loading
  loading?: boolean;
  okText?: string;
  cancelText?: string;
  
  // Confirmación
  confirmLoading?: boolean;
  destroyOnClose?: boolean; // Internamente se mapea a destroyOnHidden de Ant Design v5
}

export interface ModalHeaderProps {
  title?: string | React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  extra?: React.ReactNode;
  type?: ModalType;
}

export interface ModalContentProps {
  children?: React.ReactNode;
  className?: string;
  type?: ModalType;
  loading?: boolean;
}

export interface ModalFooterProps {
  actions?: ModalAction[];
  extra?: React.ReactNode;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  confirmLoading?: boolean;
  showDefaultActions?: boolean;
}

export interface UseModalLogicProps {
  open: boolean;
  onClose: () => void;
  maskClosable?: boolean;
  keyboard?: boolean;
  destroyOnClose?: boolean;
}

export interface UseModalHandlersProps {
  actions?: ModalAction[];
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
  onClose: () => void;
  confirmLoading?: boolean;
}

// Tipos para MenuDropdown
export interface OpcionMenu<T> {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onClick: (item: T) => void;
  disabled?: boolean | ((item: T) => boolean);
  visible?: boolean | ((item: T) => boolean);
  danger?: boolean;
  divider?: boolean;
  tooltip?: string;
}

export interface MenuDropdownProps<T> {
  item: T;
  opciones: OpcionMenu<T>[];
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
  buttonType?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  buttonSize?: 'small' | 'middle' | 'large';
  buttonIcon?: React.ReactNode;
  buttonTooltip?: string;
  className?: string;
}

export interface MenuButtonProps {
  buttonType?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  buttonSize?: 'small' | 'middle' | 'large';
  buttonIcon?: React.ReactNode;
  buttonTooltip?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
} 