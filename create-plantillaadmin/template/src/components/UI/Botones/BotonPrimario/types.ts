import React from 'react';

export interface PropiedadBotonPrimario {
  texto: string;
  deshabilitar?: boolean;
  tipo?: 'button' | 'submit' | 'reset';
  alineacion?: 'izquierda' | 'centro' | 'derecha';
  tamaño?: 'pequeño' | 'mediano' | 'grande';
  ajustarAlTexto?: boolean;
  onClick?: () => void;
  color?: 'primary' | 'green' | 'red' | 'gray' | 'lightBlue';
  variante?: 'solido' | 'outline' | 'ghost';
  icono?: React.ReactNode;
  cargando?: boolean;
  className?: string;
  'aria-label'?: string;
}

export type TamañoBoton = 'pequeño' | 'mediano' | 'grande';
export type ColorBoton = 'primary' | 'green' | 'red' | 'gray' | 'lightBlue';
export type VarianteBoton = 'solido' | 'outline' | 'ghost';
export type AlineacionBoton = 'izquierda' | 'centro' | 'derecha';
export type TipoBoton = 'button' | 'submit' | 'reset'; 