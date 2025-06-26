import React from 'react';
import { obtenerClasesAlineacion } from '../utils';
import { AlineacionBotonRedirect } from '../types';

interface BotonConWrapperProps {
  alineacion: AlineacionBotonRedirect;
  children: React.ReactNode;
}

const BotonConWrapper: React.FC<BotonConWrapperProps> = ({
  alineacion = 'centro',
  children
}) => {
  return (
    <div className={`flex ${obtenerClasesAlineacion(alineacion)}`}>
      {children}
    </div>
  );
};

export default BotonConWrapper; 