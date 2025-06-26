import React from 'react';
import { obtenerClasesAlineacion } from '../utils';
import BotonBase from './BotonBase';
import { PropiedadBotonPrimario, AlineacionBoton } from '../types';

interface BotonConWrapperProps extends PropiedadBotonPrimario {
  alineacion: AlineacionBoton;
}

const BotonConWrapper: React.FC<BotonConWrapperProps> = ({
  alineacion = 'centro',
  color = 'primary',
  variante = 'solido',
  tamaño = 'mediano',
  ...props
}) => {
  return (
    <div className={`flex ${obtenerClasesAlineacion(alineacion)}`}>
      <BotonBase 
        {...props}
        color={color}
        variante={variante}
        tamaño={tamaño}
      />
    </div>
  );
};

export default BotonConWrapper; 