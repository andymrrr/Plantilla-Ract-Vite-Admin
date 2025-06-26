import React from 'react';
import { MessageActionsProps } from '../types';
import { combinarClases, obtenerClasesBoton } from '../utils';

const MessageActions: React.FC<MessageActionsProps> = ({
  acciones,
  config,
  size,
  variant,
  onAction,
  className
}) => {
  if (acciones.length === 0) return null;

  const handleActionClick = (action: any, index: number) => {
    action.onClick();
    onAction?.(action, index);
  };

  return (
    <div className={combinarClases(
      'flex justify-center space-x-4 mt-6',
      variant === 'compact' ? 'space-x-2' : 'space-x-4',
      className
    )}>
      {acciones.map((accion, index) => (
        <button
          key={index}
          onClick={() => handleActionClick(accion, index)}
          disabled={accion.loading || accion.disabled}
          className={combinarClases(
            obtenerClasesBoton(accion.variant || 'primary'),
            accion.className
          )}
        >
          {accion.loading && (
            <span className="inline-block animate-spin mr-2">⟳</span>
          )}
          {accion.icon && (
            <span className="mr-2">{accion.icon}</span>
          )}
          {accion.label}
        </button>
      ))}
    </div>
  );
};

export default MessageActions; 