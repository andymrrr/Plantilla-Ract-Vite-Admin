import React from 'react';
import { FaBell } from 'react-icons/fa';
import { Notificacion, ConfiguracionEstilos } from '../types';
import { NotificacionItem } from './NotificacionItem';

interface DropdownContentProps {
  cargando: boolean;
  error?: string;
  notificaciones: Notificacion[];
  mensajeVacio: string;
  config: Required<ConfiguracionEstilos>;
  onClickNotificacion: (notificacion: Notificacion) => void;
  onMarcarComoLeida?: (id: string) => void;
  onEliminarNotificacion?: (id: string, e: React.MouseEvent) => void;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  cargando,
  error,
  notificaciones,
  mensajeVacio,
  config,
  onClickNotificacion,
  onMarcarComoLeida,
  onEliminarNotificacion
}) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Loading State */}
      {cargando && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="px-4.5 py-3 text-center text-red-500">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!cargando && !error && notificaciones.length === 0 && (
        <div className="px-4.5 py-8 text-center text-gray-500">
          <FaBell className="mx-auto mb-2 h-8 w-8 opacity-50" />
          <p className="text-sm">{mensajeVacio}</p>
        </div>
      )}

      {/* Notificaciones */}
      {!cargando && !error && notificaciones.length > 0 && (
        <ul className="divide-y divide-stroke dark:divide-strokedark">
          {notificaciones.map(notificacion => (
            <NotificacionItem
              key={notificacion.id}
              notificacion={notificacion}
              config={config}
              onClickNotificacion={onClickNotificacion}
              onMarcarComoLeida={onMarcarComoLeida}
              onEliminarNotificacion={onEliminarNotificacion}
            />
          ))}
        </ul>
      )}
    </div>
  );
}; 