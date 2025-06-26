import React from 'react';
import { 
  combinarClases, 
  CLASES_BASE, 
  obtenerClasesColor, 
  obtenerClasesTamaño 
} from '../utils';
import ContenidoBoton from './ContenidoBoton';
import { 
  PropiedadBotonPrimario, 
  ColorBoton, 
  VarianteBoton, 
  TamañoBoton 
} from '../types';

interface BotonBaseProps extends PropiedadBotonPrimario {
  color: ColorBoton;
  variante: VarianteBoton;
  tamaño: TamañoBoton;
}

const BotonBase: React.FC<BotonBaseProps> = ({
  texto,
  deshabilitar = false,
  tipo = 'button',
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
  const claseAncho = ajustarAlTexto ? 'w-auto' : 'w-full';

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={deshabilitar || cargando}
      className={combinarClases(
        ...CLASES_BASE,
        obtenerClasesTamaño(tamaño),
        obtenerClasesColor(color, variante),
        claseAncho,
        className
      )}
      aria-label={ariaLabel || texto}
      aria-disabled={deshabilitar || cargando}
    >
      <ContenidoBoton
        texto={texto}
        icono={icono}
        cargando={cargando}
        tamaño={tamaño}
      />
    </button>
  );
};

export default BotonBase; 