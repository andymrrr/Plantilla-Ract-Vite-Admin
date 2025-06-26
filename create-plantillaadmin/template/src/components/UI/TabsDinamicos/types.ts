import { ReactNode } from 'react';

export interface TabConfig {
  key: string;
  label: string | ReactNode;
  contenido: ReactNode;
  icono?: ReactNode;
  disabled?: boolean;
}

export interface TabsDinamicosProps<T = any> {
  tabs: TabConfig[];
  tabInicial?: string;
  className?: string;
  datos?: T[];
  componentesSuperiores?: ReactNode[];
  componentesInferiores?: ReactNode[];
  onCambioTab?: (tabKey: string) => void;
  size?: 'small' | 'middle' | 'large';
  type?: 'line' | 'card' | 'editable-card';
  tabPosition?: 'top' | 'right' | 'bottom' | 'left';
  animated?: boolean;
}

export interface TabsDinamicosContainerProps {
  children: ReactNode;
  className?: string;
} 