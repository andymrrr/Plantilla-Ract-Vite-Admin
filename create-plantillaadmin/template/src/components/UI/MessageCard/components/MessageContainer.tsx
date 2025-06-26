import React from 'react';
import Tarjeta from '../../Tarjeta/Tarjeta';
import { MessageContainerProps } from '../types';
import { combinarClases, obtenerClasesPadding, obtenerClasesEspaciado } from '../utils';

const MessageContainer: React.FC<MessageContainerProps> = ({
  config,
  variant,
  size,
  dismissible,
  children,
  onDismiss,
  className
}) => {
  const containerClasses = combinarClases(
    obtenerClasesPadding(variant),
    obtenerClasesEspaciado(variant),
    className
  );

  // Mapear colores a los tipos aceptados por Tarjeta
  const getTarjetaColor = (color: string) => {
    switch (color) {
      case 'green': return 'green';
      case 'red': return 'red';
      case 'yellow': return 'yellow';
      case 'blue': return 'blue';
      case 'gray': return 'gray';
      case 'purple': return 'blue'; // Mapear a blue como fallback
      case 'orange': return 'yellow'; // Mapear a yellow como fallback
      case 'pink': return 'red'; // Mapear a red como fallback
      default: return 'blue';
    }
  };

  return (
    <Tarjeta
      titulo=""
      lineaHeader={{ mostrar: true, color: getTarjetaColor(config.color), grosor: "2px" }}
      tamano={12}
    >
      <div className={containerClasses}>
        {children}
      </div>
    </Tarjeta>
  );
};

export default MessageContainer; 