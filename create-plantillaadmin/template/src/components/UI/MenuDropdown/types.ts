import React from 'react';

export interface OpcionMenu<T = any> {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onClick: (item: T) => void;
  disabled?: boolean | ((item: T) => boolean);
  danger?: boolean;
  divider?: boolean;
  tooltip?: string;
  visible?: boolean | ((item: T) => boolean);
}

export interface MenuDropdownProps<T = any> {
  item: T;
  opciones: OpcionMenu<T>[];
  trigger?: ('click' | 'hover')[];
  placement?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topRight';
  buttonType?: 'text' | 'default' | 'primary' | 'dashed' | 'link';
  buttonSize?: 'small' | 'middle' | 'large';
  buttonIcon?: React.ReactNode;
  buttonTooltip?: string;
  className?: string;
}

export interface MenuButtonProps {
  buttonType: 'text' | 'default' | 'primary' | 'dashed' | 'link';
  buttonSize: 'small' | 'middle' | 'large';
  buttonIcon: React.ReactNode;
  buttonTooltip: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export interface MenuContentProps<T = any> {
  opciones: OpcionMenu<T>[];
  item: T;
  onOptionClick: (key: string) => void;
}

export interface MenuOptionProps<T = any> {
  opcion: OpcionMenu<T>;
  item: T;
  onOptionClick: (key: string) => void;
} 