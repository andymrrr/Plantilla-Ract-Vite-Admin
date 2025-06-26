import React from 'react';
import { TarjetaFooterProps } from '../types';
import TarjetaDivider from './TarjetaDivider';
import { combinarClases } from '../utils';

const TarjetaFooter: React.FC<TarjetaFooterProps> = ({
  piePagina,
  claseFooter = 'mb-6',
  lineaFooter = { mostrar: true, grosor: '1px', color: 'gray' }
}) => {
  if (!piePagina) return null;
  return (
    <>
      {lineaFooter?.mostrar && (
        <TarjetaDivider grosor={lineaFooter.grosor} color={lineaFooter.color} />
      )}
      <div className={combinarClases('px-6 py-4', claseFooter)}>
        {piePagina}
      </div>
    </>
  );
};

export default TarjetaFooter; 