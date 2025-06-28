import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { ConfiguracionBotonTabla, PosicionBoton } from './types';

/**
 * Genera columnas de tabla a partir de un objeto de propiedades
 */
export const generarColumnas = <T extends object>(props: { [K in keyof T]: string }) => {
  return Object.keys(props).map((key) => ({
    title: props[key as keyof T],
    dataIndex: key,
    key,
  })) as ColumnsType<T>;
};

/**
 * Filtra botones visibles y los ordena por posición
 */
export const obtenerBotonesVisibles = (
  botones: ConfiguracionBotonTabla[], 
  posicion: PosicionBoton
): ConfiguracionBotonTabla[] => {
  return botones
    .filter(boton => boton.posicion === posicion && (boton.visible !== false))
    .sort((a, b) => (a.orden || 0) - (b.orden || 0));
};

/**
 * Verifica si hay botones en las posiciones inferiores
 */
export const tieneBotonesAbajo = (botones: ConfiguracionBotonTabla[]): boolean => {
  const botonesAbajoIzquierda = obtenerBotonesVisibles(botones, 'abajo-izquierda').length;
  const botonesAbajoCentro = obtenerBotonesVisibles(botones, 'abajo-centro').length;
  const botonesAbajoDerecha = obtenerBotonesVisibles(botones, 'abajo-derecha').length;
  
  return botonesAbajoIzquierda > 0 || botonesAbajoCentro > 0 || botonesAbajoDerecha > 0;
};

/**
 * Verifica si se debe mostrar el header de la tabla
 */
export const debeMostrarHeader = (
  mostrarHeader: boolean,
  tituloTabla?: string,
  subtituloTabla?: string,
  header?: React.ReactNode
): boolean => {
  return mostrarHeader || !!tituloTabla || !!subtituloTabla || !!header;
}; 