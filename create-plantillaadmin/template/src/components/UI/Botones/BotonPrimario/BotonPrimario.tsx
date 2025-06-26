import React from 'react';
import BotonBase from './components/BotonBase';
import BotonConWrapper from './components/BotonConWrapper';
import { PropiedadBotonPrimario } from './types';

const BotonPrimario: React.FC<PropiedadBotonPrimario> = ({
  texto,
  deshabilitar = false,
  tipo = 'button',
  alineacion = 'centro',
  tamaño = 'mediano',
  ajustarAlTexto = false,
  onClick,
  color = 'primary',
  variante = 'solido',
  icono,
  cargando = false,
  className,
  'aria-label': ariaLabel,
}) => {
  // Si el botón se ajusta al texto, no necesitamos el wrapper
  if (ajustarAlTexto) {
    return (
      <BotonBase
        texto={texto}
        deshabilitar={deshabilitar}
        tipo={tipo}
        tamaño={tamaño}
        ajustarAlTexto={ajustarAlTexto}
        onClick={onClick}
        color={color}
        variante={variante}
        icono={icono}
        cargando={cargando}
        className={className}
        aria-label={ariaLabel}
      />
    );
  }

  // Con wrapper para alineación
  return (
    <BotonConWrapper
      texto={texto}
      deshabilitar={deshabilitar}
      tipo={tipo}
      alineacion={alineacion}
      tamaño={tamaño}
      ajustarAlTexto={ajustarAlTexto}
      onClick={onClick}
      color={color}
      variante={variante}
      icono={icono}
      cargando={cargando}
      className={className}
      aria-label={ariaLabel}
    />
  );
};

export default BotonPrimario; 