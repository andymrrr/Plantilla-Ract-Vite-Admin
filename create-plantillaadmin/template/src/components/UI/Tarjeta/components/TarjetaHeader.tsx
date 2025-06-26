import React from 'react';
import { TarjetaHeaderProps } from '../types';
import { combinarClases } from '../utils';
import TarjetaDivider from './TarjetaDivider';

const TarjetaHeader: React.FC<TarjetaHeaderProps> = ({
  titulo,
  subtitulo,
  claseHeader = '',
  lineaHeader = { mostrar: true, grosor: '1px', color: 'gray' }
}) => {
  return (titulo || subtitulo) ? (
    <>
      <div className={combinarClases('px-6 py-4', claseHeader)}>
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
      {lineaHeader?.mostrar && (
        <TarjetaDivider grosor={lineaHeader.grosor} color={lineaHeader.color} />
      )}
    </>
  ) : null;
};

export default TarjetaHeader; 