import React from 'react';

// Tipos base
export type TarjetaVariante = 'defecto' | 'primario' | 'secundario';
export type TarjetaTamano = 4 | 6 | 12;
export type LineaGrosor = '1px' | '2px' | '4px';
export type LineaColor = 'gray' | 'blue' | 'red' | 'green' | 'yellow';

// Configuración de líneas
export interface LineaConfig {
  mostrar?: boolean;
  grosor?: LineaGrosor;
  color?: LineaColor;
  className?: string;
}

// Props del componente principal Tarjeta
export interface TarjetaProps {
  children: React.ReactNode;
  titulo?: string | React.ReactNode;
  subtitulo?: string;
  claseHeader?: string;
  claseCuerpo?: string;
  claseFooter?: string;
  piePagina?: React.ReactNode;
  sinRelleno?: boolean;
  conBorde?: boolean;
  variante?: TarjetaVariante;
  lineaHeader?: LineaConfig;
  lineaFooter?: LineaConfig;
  lineaDivisora?: LineaConfig;
  tamano?: TarjetaTamano;
}

// Props para TarjetaHeader
export interface TarjetaHeaderProps {
  titulo?: string | React.ReactNode;
  subtitulo?: string;
  className?: string;
  lineaHeader?: LineaConfig;
}

// Props para TarjetaBody
export interface TarjetaBodyProps {
  children: React.ReactNode;
  className?: string;
  sinRelleno?: boolean;
  lineaDivisora?: LineaConfig;
}

// Props para TarjetaFooter
export interface TarjetaFooterProps {
  children: React.ReactNode;
  className?: string;
  lineaFooter?: LineaConfig;
}

// Props para LineaDivisora
export interface LineaDivisoraProps {
  grosor?: LineaGrosor;
  color?: LineaColor;
  className?: string;
} 