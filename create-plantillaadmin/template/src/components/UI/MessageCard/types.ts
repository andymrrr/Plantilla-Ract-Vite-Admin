import React from 'react';

export type MessageType = 'error' | 'warning' | 'info' | 'success' | 'neutral';

export type MessageVariant = 'default' | 'compact' | 'detailed' | 'minimal';

export type MessageSize = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export interface MessageAction {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export interface MessageConfig {
  color: 'red' | 'yellow' | 'blue' | 'green' | 'gray' | 'purple' | 'orange' | 'pink';
  defaultIcon: string;
  titleClass: string;
  iconClass: string;
  bgClass: string;
  borderClass: string;
}

export interface MessageCardProps {
  // Contenido
  type: MessageType;
  titulo: string;
  subtitulo?: string;
  icono?: string | React.ReactNode;
  descripcion: string;
  detalles?: string;
  
  // Acciones
  acciones?: MessageAction[];
  
  // Apariencia
  variant?: MessageVariant;
  size?: MessageSize;
  
  // Comportamiento
  dismissible?: boolean;
  autoDismiss?: boolean;
  dismissTimeout?: number;
  
  // Callbacks
  onDismiss?: () => void;
  onAction?: (action: MessageAction, index: number) => void;
  
  // Clases CSS personalizadas
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  detailsClassName?: string;
  actionsClassName?: string;
}

export interface MessageIconProps {
  icono: string | React.ReactNode;
  config: MessageConfig;
  size: MessageSize;
  className?: string;
}

export interface MessageContentProps {
  titulo: string;
  subtitulo?: string;
  descripcion: string;
  detalles?: string;
  config: MessageConfig;
  size: MessageSize;
  variant: MessageVariant;
  titleClassName?: string;
  descriptionClassName?: string;
  detailsClassName?: string;
}

export interface MessageActionsProps {
  acciones: MessageAction[];
  config: MessageConfig;
  size: MessageSize;
  variant: MessageVariant;
  onAction?: (action: MessageAction, index: number) => void;
  className?: string;
}

export interface MessageContainerProps {
  config: MessageConfig;
  variant: MessageVariant;
  size: MessageSize;
  dismissible: boolean;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
} 