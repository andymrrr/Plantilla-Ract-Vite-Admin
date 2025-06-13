import React from 'react';
import { TarjetaProps } from './types';
import { obtenerClasesVariante, obtenerClasesTamano } from './utils';
import TarjetaHeader from './TarjetaHeader';
import TarjetaBody from './TarjetaBody';
import TarjetaFooter from './TarjetaFooter';

/**
 * Componente Tarjeta - Contenedor principal modular
 */
const Tarjeta: React.FC<TarjetaProps> = ({
  children,
  titulo,
  subtitulo,
  claseHeader = '',
  claseCuerpo = '',
  claseFooter = 'mb-6',
  piePagina,
  sinRelleno = false,
  conBorde = true,
  variante = 'defecto',
  lineaHeader = { mostrar: true, grosor: '1px', color: 'gray' },
  lineaFooter = { mostrar: true, grosor: '1px', color: 'gray' },
  lineaDivisora,
  tamano = 12,
}) => {
  const clasesTamano = obtenerClasesTamano(tamano);
  const clasesVariante = obtenerClasesVariante(variante);

  return (
    <div
      className={`
        rounded-lg 
        ${conBorde ? 'border-2 border-stroke dark:border-strokedark' : ''} 
        ${clasesVariante}
        shadow-default 
        ${claseFooter}
        ${clasesTamano} 
      `}
    >
      {/* Encabezado */}
      <TarjetaHeader
        titulo={titulo}
        subtitulo={subtitulo}
        className={claseHeader}
        lineaHeader={lineaHeader}
      />

      {/* Cuerpo */}
      <TarjetaBody
        className={claseCuerpo}
        sinRelleno={sinRelleno}
        lineaDivisora={lineaDivisora}
      >
        {children}
      </TarjetaBody>

      {/* Pie de página */}
      <TarjetaFooter
        className=""
        lineaFooter={lineaFooter}
      >
        {piePagina}
      </TarjetaFooter>
    </div>
  );
};

export default Tarjeta;
