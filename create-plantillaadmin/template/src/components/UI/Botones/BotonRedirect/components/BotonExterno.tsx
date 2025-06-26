import React from 'react';
import { 
  combinarClases, 
  CLASES_BASE, 
  obtenerClasesColor, 
  obtenerClasesTamaño,
  obtenerAtributosRel
} from '../utils';
import ContenidoBoton from './ContenidoBoton';
import { 
  PropiedadBotonRedirect, 
  TipoBotonRedirect, 
  VarianteBotonRedirect, 
  TamañoBotonRedirect 
} from '../types';

interface BotonExternoProps extends PropiedadBotonRedirect {
  tipo: TipoBotonRedirect;
  variante: VarianteBotonRedirect;
  tamaño: TamañoBotonRedirect;
  estaCargando: boolean;
  onManejarClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const BotonExterno: React.FC<BotonExternoProps> = ({
  href,
  texto,
  icono,
  tipo = 'primary',
  variante = 'solido',
  tamaño = 'mediano',
  ajustarAlTexto = false,
  deshabilitar = false,
  className,
  target,
  'aria-label': ariaLabel,
  estaCargando,
  onManejarClick,
}) => {
  const claseAncho = ajustarAlTexto ? 'w-auto' : 'w-full';

  return (
    <a
      href={href}
      target={target}
      rel={obtenerAtributosRel(target)}
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
    >
      <ContenidoBoton
        texto={texto}
        icono={icono}
        cargando={estaCargando}
        tamaño={tamaño}
      />
    </a>
  );
};

export default BotonExterno; 