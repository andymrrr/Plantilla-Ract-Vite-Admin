import React from 'react';
import { TarjetaFooterProps } from './types';
import { obtenerClaseColor } from './utils';

/**
 * Componente TarjetaFooter - Pie de página de la tarjeta
 */
const TarjetaFooter: React.FC<TarjetaFooterProps> = ({
  children,
  className = '',
  lineaFooter = { mostrar: true, grosor: '1px', color: 'gray' }
}) => {
  // Si no hay contenido, no renderizar nada
  if (!children) {
    return null;
  }

  return (
    <>
      {/* Línea divisoria del footer */}
      {lineaFooter.mostrar && (
        <div 
          className={`border-t ${obtenerClaseColor(lineaFooter.color)}`} 
          style={{ borderWidth: lineaFooter.grosor }} 
        />
      )}
      
      <div className={`px-6 py-4 ${className}`}>
        {children}
      </div>
    </>
  );
};

export default TarjetaFooter; 