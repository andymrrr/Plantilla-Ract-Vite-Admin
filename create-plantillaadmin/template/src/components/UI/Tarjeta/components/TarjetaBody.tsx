import React from 'react';
import { TarjetaBodyProps } from '../types';
import TarjetaDivider from './TarjetaDivider';
import { combinarClases } from '../utils';

const TarjetaBody: React.FC<TarjetaBodyProps> = ({
  children,
  claseCuerpo = '',
  sinRelleno = false,
  lineaDivisora
}) => {
  return (
    <div className={combinarClases(!sinRelleno ? 'p-6' : '', claseCuerpo)}>
      {children}
      {lineaDivisora?.mostrar && (
        <TarjetaDivider
          grosor={lineaDivisora.grosor}
          color={lineaDivisora.color}
          className={lineaDivisora.className}
        />
      )}
    </div>
  );
};

export default TarjetaBody; 