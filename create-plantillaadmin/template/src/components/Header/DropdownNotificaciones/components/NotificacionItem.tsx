import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Notificacion, ConfiguracionEstilos } from '../types';
import { obtenerIconoPorTipo } from '../utils';
import { DEFAULT_TEXTS } from '../constants';

interface NotificacionItemProps {
  notificacion: Notificacion;
  config: Required<ConfiguracionEstilos>;
  onClickNotificacion: (notificacion: Notificacion) => void;
  onMarcarComoLeida?: (id: string) => void;
  onEliminarNotificacion?: (id: string, e: React.MouseEvent) => void;
}

export const NotificacionItem: React.FC<NotificacionItemProps> = ({
  notificacion,
  config,
  onClickNotificacion,
  onMarcarComoLeida,
  onEliminarNotificacion
}) => {
  return (
    <li role="menuitem">
      <div
        className={`flex gap-3 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4 cursor-pointer transition-colors ${
          !notificacion.leida ? 'bg-blue-50 dark:bg-blue-900/20' : ''
        }`}
        onClick={() => onClickNotificacion(notificacion)}
      >
        {/* Icono */}
        {config.mostrarIconos && (
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 dark:bg-meta-4 flex items-center justify-center">
            {obtenerIconoPorTipo(notificacion.tipo, config.mostrarIconos)}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h6 className="font-medium text-black dark:text-white text-sm">
                {notificacion.titulo}
                {!notificacion.leida && (
                  <span className="ml-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                )}
              </h6>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {notificacion.mensaje}
              </p>
              {config.mostrarTiempo && (
                <p className="text-xs text-gray-400 mt-1">
                  {notificacion.tiempo}
                </p>
              )}
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-1 ml-2">
              {!notificacion.leida && onMarcarComoLeida && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarcarComoLeida(notificacion.id);
                  }}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-meta-3 rounded text-gray-400 hover:text-gray-600"
                  aria-label={DEFAULT_TEXTS.marcarComoLeida}
                >
                  <FaCheck className="h-3 w-3" />
                </button>
              )}
              
              {onEliminarNotificacion && (
                <button
                  onClick={(e) => onEliminarNotificacion(notificacion.id, e)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-meta-3 rounded text-gray-400 hover:text-red-500"
                  aria-label={DEFAULT_TEXTS.eliminarNotificacion}
                >
                  <FaTimes className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          {/* Acciones personalizadas */}
          {notificacion.acciones && notificacion.acciones.length > 0 && (
            <div className="flex gap-2 mt-2">
              {notificacion.acciones.map((accion, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    accion.accion(notificacion);
                  }}
                  className={`px-2 py-1 text-xs rounded ${
                    accion.tipo === 'primary' ? 'bg-primary text-white' :
                    accion.tipo === 'danger' ? 'bg-red-500 text-white' :
                    'bg-gray-200 text-gray-700'
                  }`}
                >
                  {accion.icono && <span className="mr-1">{accion.icono}</span>}
                  {accion.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}; 