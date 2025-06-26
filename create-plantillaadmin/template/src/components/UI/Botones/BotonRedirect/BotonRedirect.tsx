import React from 'react';
import { esUrlExterna } from './utils';
import { useNavegacion } from './hooks/useNavegacion';
import BotonExterno from './components/BotonExterno';
import BotonInterno from './components/BotonInterno';
import BotonConWrapper from './components/BotonConWrapper';
import { PropiedadBotonRedirect } from './types';

const BotonRedirect: React.FC<PropiedadBotonRedirect> = ({
  href,
  texto,
  icono,
  tipo = 'primary',
  variante = 'solido',
  tamaño = 'mediano',
  alineacion = 'centro',
  ajustarAlTexto = false,
  deshabilitar = false,
  cargando = false,
  onClick,
  onClickAsync,
  className,
  target,
  replace = false,
  state,
  'aria-label': ariaLabel,
}) => {
  const { estaCargando, manejarClick } = useNavegacion({
    href,
    target,
    replace,
    state,
    onClick,
    onClickAsync,
    deshabilitar,
    cargando,
  });

  // Props comunes para ambos tipos de botón
  const propsComunes = {
    texto,
    icono,
    tipo,
    variante,
    tamaño,
    ajustarAlTexto,
    deshabilitar,
    className,
    'aria-label': ariaLabel,
    estaCargando,
    onManejarClick: manejarClick,
  };

  // Determinar si es URL externa
  const esExterno = esUrlExterna(href) || target === '_blank';

  // Renderizar el botón apropiado
  const boton = esExterno ? (
    <BotonExterno
      {...propsComunes}
      href={href}
      target={target}
    />
  ) : (
    <BotonInterno
      {...propsComunes}
      href={href}
      state={state}
      replace={replace}
    />
  );

  // Si el botón se ajusta al texto, no necesitamos el wrapper
  if (ajustarAlTexto) {
    return boton;
  }

  // Con wrapper para alineación
  return (
    <BotonConWrapper alineacion={alineacion}>
      {boton}
    </BotonConWrapper>
  );
};

export default BotonRedirect; 