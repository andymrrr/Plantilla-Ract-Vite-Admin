import React from 'react';
import { LineaDivisoraProps } from './types';
import { obtenerClaseColor } from './utils';

/**
 * Componente LineaDivisora - Línea divisoria reutilizable
 */
const LineaDivisora: React.FC<LineaDivisoraProps> = ({
  grosor = '1px',
  color = 'gray',
  className = ''
}) => {
  return (
    <hr
      className={`border-t ${obtenerClaseColor(color)} my-4 ${className}`}
      style={{ borderWidth: grosor }}
    />
  );
};

export default LineaDivisora; 