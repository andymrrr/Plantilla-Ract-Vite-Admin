import React from 'react';
import { FaBell } from 'react-icons/fa';
import { ConfiguracionEstilos } from '../types';
import { generarClasesTrigger, formatearContador } from '../utils';

interface TriggerButtonProps {
  trigger: React.RefObject<HTMLButtonElement | null>;
  onClick: () => void;
  dropdownAbierto: boolean;
  config: Required<ConfiguracionEstilos>;
  iconoPersonalizado?: React.ReactNode;
  mostrarContador: boolean;
  noLeidas: number;
  cargando: boolean;
  ariaLabel: string;
  className: string;
}

export const TriggerButton: React.FC<TriggerButtonProps> = ({
  trigger,
  onClick,
  dropdownAbierto,
  config,
  iconoPersonalizado,
  mostrarContador,
  noLeidas,
  cargando,
  ariaLabel,
  className
}) => {
  return (
    <button
      ref={trigger}
      onClick={onClick}
      className={generarClasesTrigger(config, className)}
      aria-label={ariaLabel}
      aria-expanded={dropdownAbierto}
      aria-haspopup="true"
      disabled={cargando}
    >
      {iconoPersonalizado || <FaBell />}
      
      {/* Contador de notificaciones */}
      {mostrarContador && noLeidas > 0 && (
        <span 
          className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center"
          aria-label={`${noLeidas} notificaciones no leídas`}
        >
          {formatearContador(noLeidas)}
        </span>
      )}
    </button>
  );
}; 