import React from 'react';
import { TarjetaBodyProps } from './types';
import LineaDivisora from './LineaDivisora';

/**
 * Componente TarjetaBody - Cuerpo principal de la tarjeta
 */
const TarjetaBody: React.FC<TarjetaBodyProps> = ({
  children,
  className = '',
  sinRelleno = false,
  lineaDivisora
}) => {
  return (
    <div className={`${!sinRelleno ? 'p-6' : ''} ${className}`}>
      {children}
      
      {/* Línea divisoria opcional dentro del cuerpo */}
      {lineaDivisora?.mostrar && (
        <LineaDivisora
          grosor={lineaDivisora.grosor}
          color={lineaDivisora.color}
          className={lineaDivisora.className}
        />
      )}
    </div>
  );
};

export default TarjetaBody; 