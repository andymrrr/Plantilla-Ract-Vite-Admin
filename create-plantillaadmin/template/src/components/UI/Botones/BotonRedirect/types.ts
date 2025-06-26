import React from 'react';

export interface PropiedadBotonRedirect {
  href: string;
  texto: string;
  icono?: React.ReactNode;
  tipo?: 'success' | 'primary' | 'delete' | 'warning' | 'info' | 'gray';
  variante?: 'solido' | 'outline' | 'ghost';
  tamaño?: 'pequeño' | 'mediano' | 'grande';
  alineacion?: 'izquierda' | 'centro' | 'derecha';
  ajustarAlTexto?: boolean;
  deshabilitar?: boolean;
  cargando?: boolean;
  onClick?: () => void;
  onClickAsync?: () => Promise<void>;
  className?: string;
  target?: '_blank' | '_self';
  'aria-label'?: string;
  replace?: boolean;
  state?: any;
}

export type TipoBotonRedirect = 'success' | 'primary' | 'delete' | 'warning' | 'info' | 'gray';
export type VarianteBotonRedirect = 'solido' | 'outline' | 'ghost';
export type TamañoBotonRedirect = 'pequeño' | 'mediano' | 'grande';
export type AlineacionBotonRedirect = 'izquierda' | 'centro' | 'derecha';
export type TargetBotonRedirect = '_blank' | '_self';

export interface NavegacionConfig {
  href: string;
  target?: TargetBotonRedirect;
  replace?: boolean;
  state?: any;
} 