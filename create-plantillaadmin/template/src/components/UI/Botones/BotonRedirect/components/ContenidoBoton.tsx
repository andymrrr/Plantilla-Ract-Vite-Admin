import React from 'react';
import Spinner from './Spinner';
import { TamañoBotonRedirect } from '../types';

interface ContenidoBotonProps {
  texto: string;
  icono?: React.ReactNode;
  cargando?: boolean;
  tamaño?: TamañoBotonRedirect;
}

const ContenidoBoton: React.FC<ContenidoBotonProps> = ({
  texto,
  icono,
  cargando = false,
  tamaño = 'mediano'
}) => {
  return (
    <>
      {cargando && <Spinner tamaño={tamaño} />}
      {icono && !cargando && icono}
      <span>{texto}</span>
    </>
  );
};

export default ContenidoBoton; 