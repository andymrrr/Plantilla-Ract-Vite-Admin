import React from 'react';
import { Link } from 'react-router-dom';
import { 
  combinarClases, 
  CLASES_BASE, 
  obtenerClasesColor, 
  obtenerClasesTamaño 
} from '../utils';
import ContenidoBoton from './ContenidoBoton';
import { 
  PropiedadBotonRedirect, 
  TipoBotonRedirect, 
  VarianteBotonRedirect, 
  TamañoBotonRedirect 
} from '../types';

interface BotonInternoProps extends PropiedadBotonRedirect {
  tipo: TipoBotonRedirect;
  variante: VarianteBotonRedirect;
  tamaño: TamañoBotonRedirect;
  estaCargando: boolean;
  onManejarClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const BotonInterno: React.FC<BotonInternoProps> = ({
  href,
  texto,
  icono,
  tipo = 'primary',
  variante = 'solido',
  tamaño = 'mediano',
  ajustarAlTexto = false,
  deshabilitar = false,
  className,
  'aria-label': ariaLabel,
  state,
  replace,
  estaCargando,
  onManejarClick,
}) => {
  const claseAncho = ajustarAlTexto ? 'w-auto' : 'w-full';

  return (
    <Link
      to={href}
      onClick={onManejarClick}
      className={combinarClases(
        ...CLASES_BASE,
        obtenerClasesTamaño(tamaño),
        obtenerClasesColor(tipo, variante),
        claseAncho,
        className
      )}
      aria-label={ariaLabel || texto}
      aria-disabled={deshabilitar || estaCargando}
      style={{ 
        pointerEvents: deshabilitar || estaCargando ? 'none' : 'auto',
        textDecoration: 'none'
      }}
      state={state}
      replace={replace}
    >
      <ContenidoBoton
        texto={texto}
        icono={icono}
        cargando={estaCargando}
        tamaño={tamaño}
      />
    </Link>
  );
};

export default BotonInterno; 