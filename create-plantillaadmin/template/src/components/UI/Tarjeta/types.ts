import { ReactNode } from 'react';

export type TarjetaColor =
  | 'gray' | 'blue' | 'red' | 'green' | 'yellow'
  | 'purple' | 'orange' | 'pink' | 'indigo' | 'teal' | 'cyan';

export type TarjetaVariante = 'defecto' | 'primario' | 'secundario';

export interface TarjetaLinea {
  mostrar?: boolean;
  grosor?: '1px' | '2px' | '4px';
  color?: TarjetaColor;
  className?: string;
}

export interface TarjetaProps {
  children: ReactNode;
  titulo?: string | ReactNode;
  subtitulo?: string;
  claseHeader?: string;
  claseCuerpo?: string;
  claseFooter?: string;
  piePagina?: ReactNode;
  sinRelleno?: boolean;
  conBorde?: boolean;
  variante?: TarjetaVariante;
  lineaHeader?: TarjetaLinea;
  lineaFooter?: TarjetaLinea;
  lineaDivisora?: TarjetaLinea;
  tamano?: 4 | 6 | 12;
}

export interface TarjetaHeaderProps {
  titulo?: string | ReactNode;
  subtitulo?: string;
  claseHeader?: string;
  lineaHeader?: TarjetaLinea;
}

export interface TarjetaBodyProps {
  children: ReactNode;
  claseCuerpo?: string;
  sinRelleno?: boolean;
  lineaDivisora?: TarjetaLinea;
}

export interface TarjetaFooterProps {
  piePagina?: ReactNode;
  claseFooter?: string;
  lineaFooter?: TarjetaLinea;
}

export interface TarjetaDividerProps {
  grosor?: '1px' | '2px' | '4px';
  color?: TarjetaColor;
  className?: string;
} 