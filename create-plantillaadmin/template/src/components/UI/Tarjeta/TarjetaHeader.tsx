import React from 'react';
import { TarjetaHeaderProps } from './types';
import { obtenerClaseColor } from './utils';

/**
 * Componente TarjetaHeader - Encabezado de la tarjeta con título y subtítulo
 */
const TarjetaHeader: React.FC<TarjetaHeaderProps> = ({
  titulo,
  subtitulo,
  className = '',
  lineaHeader = { mostrar: true, grosor: '1px', color: 'gray' }
}) => {
  // Si no hay título ni subtítulo, no renderizar nada
  if (!titulo && !subtitulo) {
    return null;
  }

  return (
    <>
      <div className={`px-6 py-4 ${className}`}>
        {titulo && (
          typeof titulo === 'string' ? (
            <h4 className="text-xl font-semibold text-black dark:text-white">
              {titulo}
            </h4>
          ) : (
            titulo
          )
        )}
        {subtitulo && (
          <p className="mt-1 text-sm text-gray-5">{subtitulo}</p>
        )}
      </div>
      
      {/* Línea divisoria del header */}
      {lineaHeader.mostrar && (
        <div 
          className={`border-t ${obtenerClaseColor(lineaHeader.color)}`} 
          style={{ borderWidth: lineaHeader.grosor }} 
        />
      )}
    </>
  );
};

export default TarjetaHeader; 