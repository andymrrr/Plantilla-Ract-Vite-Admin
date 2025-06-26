import React from 'react';

export interface CollapsibleProps {
  // Contenido
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  
  // Estado inicial
  defaultOpen?: boolean;
  
  // Estilos y apariencia
  variant?: CollapsibleVariant;
  size?: CollapsibleSize;
  
  // Colores
  headerColor?: CollapsibleHeaderColor;
  
  // Iconos
  icon?: string | React.ReactNode;
  expandIcon?: CollapsibleExpandIcon;
  
  // Comportamiento
  disabled?: boolean;
  animated?: boolean;
  accordion?: boolean;
  
  // Callbacks
  onToggle?: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  
  // Clases CSS personalizadas
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
  expandIconClassName?: string;
}

export type CollapsibleVariant = 'default' | 'card' | 'minimal' | 'bordered' | 'elevated' | 'flat';

export type CollapsibleSize = 'sm' | 'md' | 'lg' | 'xl';

export type CollapsibleHeaderColor = 'gray' | 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'pink' | 'indigo' | 'teal';

export type CollapsibleExpandIcon = 'arrow' | 'plus' | 'chevron' | 'caret' | 'triangle';

export interface CollapsibleHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string | React.ReactNode;
  expandIcon: CollapsibleExpandIcon;
  isOpen: boolean;
  variant: CollapsibleVariant;
  size: CollapsibleSize;
  headerColor: CollapsibleHeaderColor;
  disabled: boolean;
  animated: boolean;
  onClick: () => void;
  className?: string;
  iconClassName?: string;
  expandIconClassName?: string;
}

export interface CollapsibleContentProps {
  children: React.ReactNode;
  isOpen: boolean;
  variant: CollapsibleVariant;
  size: CollapsibleSize;
  animated: boolean;
  className?: string;
}

export interface CollapsibleContainerProps {
  variant: CollapsibleVariant;
  size: CollapsibleSize;
  headerColor: CollapsibleHeaderColor;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface CollapsibleGroupProps {
  children: React.ReactNode;
  variant?: CollapsibleVariant;
  size?: CollapsibleSize;
  headerColor?: CollapsibleHeaderColor;
  expandIcon?: CollapsibleExpandIcon;
  animated?: boolean;
  accordion?: boolean;
  className?: string;
}

export interface CollapsibleContextType {
  variant: CollapsibleVariant;
  size: CollapsibleSize;
  headerColor: CollapsibleHeaderColor;
  expandIcon: CollapsibleExpandIcon;
  animated: boolean;
  accordion: boolean;
  openItems: Set<string>;
  toggleItem: (id: string) => void;
} 