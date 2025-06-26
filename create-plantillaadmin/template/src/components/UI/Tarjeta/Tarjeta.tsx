import React from 'react';
import { TarjetaProps } from './types';
import { combinarClases } from './utils';
import TarjetaHeader from './components/TarjetaHeader';
import TarjetaBody from './components/TarjetaBody';
import TarjetaFooter from './components/TarjetaFooter';

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
  const obtenerClasesVariante = () => {
    switch (variante) {
      case 'primario':
        return 'bg-primary border-primary text-white';
      case 'secundario':
        return 'bg-gray-2 border-gray-2 dark:bg-meta-4';
      default:
        return 'bg-white dark:bg-boxdark';
    }
  };
  const obtenerClasesTamaño = (tam: 4 | 6 | 12) => {
    switch (tam) {
      case 4:
        return 'col-span-12 md:col-span-6 xl:col-span-4';
      case 6:
        return 'col-span-12 md:col-span-6 xl:col-span-6';
      case 12:
        return 'col-span-12 md:col-span-12 xl:col-span-12';
      default:
        return 'col-span-12 md:col-span-6 xl:col-span-6';
    }
  };
  const clasesTamano = obtenerClasesTamaño(tamano);

  return (
    <div
      className={combinarClases(
        'rounded-lg shadow-default',
        conBorde ? 'border-2 border-stroke dark:border-strokedark' : '',
        obtenerClasesVariante(),
        claseFooter,
        clasesTamano
      )}
    >
      <TarjetaHeader
        titulo={titulo}
        subtitulo={subtitulo}
        claseHeader={claseHeader}
        lineaHeader={lineaHeader}
      />
      <TarjetaBody
        claseCuerpo={claseCuerpo}
        sinRelleno={sinRelleno}
        lineaDivisora={lineaDivisora}
      >
        {children}
      </TarjetaBody>
      <TarjetaFooter
        piePagina={piePagina}
        claseFooter={claseFooter}
        lineaFooter={lineaFooter}
      />
    </div>
  );
};

export default Tarjeta;
