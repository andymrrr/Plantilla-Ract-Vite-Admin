import React, { memo } from 'react';
import { FaComments } from 'react-icons/fa';
import { HeaderActionsProps } from '../types';
import { HEADER_DEFAULTS, DROPDOWN_CONFIG } from '../constants/headerConstants';
import DropdownNotificaciones from '../DropdownNotificaciones';
import DropdownUser from '../DropdownUser';

interface HeaderActionsExtendedProps extends HeaderActionsProps {
  // Props específicas para las notificaciones
  notificaciones?: any[];
  mensajes?: any[];
  cargandoNotificaciones?: boolean;
  cargandoMensajes?: boolean;
  
  // Funciones de notificaciones
  onMarcarNotificacionComoLeida?: (id: string) => void;
  onMarcarTodasNotificacionesComoLeidas?: () => void;
  onEliminarNotificacion?: (id: string) => void;
  onClickNotificacion?: (notificacion: any) => void;
  
  // Funciones de mensajes
  onMarcarMensajeComoLeido?: (id: string) => void;
  onMarcarTodosMensajesComoLeidos?: () => void;
  onEliminarMensaje?: (id: string) => void;
  onClickMensaje?: (mensaje: any) => void;
  
  // Props del usuario
  userData?: {
    nombre: string;
    cargo: string;
    avatar: string;
  };
  onLogout?: () => void;
}

const HeaderActions: React.FC<HeaderActionsExtendedProps> = memo(({
  showNotifications = true,
  showMessages = true,
  className = '',
  notificaciones = [],
  mensajes = [],
  cargandoNotificaciones = false,
  cargandoMensajes = false,
  onMarcarNotificacionComoLeida,
  onMarcarTodasNotificacionesComoLeidas,
  onEliminarNotificacion,
  onClickNotificacion,
  onMarcarMensajeComoLeido,
  onMarcarTodosMensajesComoLeidos,
  onEliminarMensaje,
  onClickMensaje,
  userData,
  onLogout
}) => {
  return (
    <div className={`flex items-center gap-3 2xsm:gap-7 ${className}`}>
      <ul className="flex items-center gap-2 2xsm:gap-4">
        {/* Notification Menu */}
        {showNotifications && (
          <DropdownNotificaciones
            notificaciones={notificaciones}
            cargando={cargandoNotificaciones}
            onMarcarComoLeida={onMarcarNotificacionComoLeida}
            onMarcarTodasComoLeidas={onMarcarTodasNotificacionesComoLeidas}
            onEliminarNotificacion={onEliminarNotificacion}
            onClickNotificacion={onClickNotificacion}
            titulo={HEADER_DEFAULTS.NOTIFICATIONS_TITLE}
            configuracion={DROPDOWN_CONFIG.NOTIFICATIONS}
          />
        )}

        {/* Messages Menu */}
        {showMessages && (
          <DropdownNotificaciones
            notificaciones={mensajes}
            cargando={cargandoMensajes}
            onMarcarComoLeida={onMarcarMensajeComoLeido}
            onMarcarTodasComoLeidas={onMarcarTodosMensajesComoLeidos}
            onEliminarNotificacion={onEliminarMensaje}
            onClickNotificacion={onClickMensaje}
            titulo={HEADER_DEFAULTS.MESSAGES_TITLE}
            iconoPersonalizado={<FaComments />}
            configuracion={DROPDOWN_CONFIG.MESSAGES}
            ariaLabel={HEADER_DEFAULTS.MESSAGES_TITLE}
          />
        )}
      </ul>

      {/* User Area */}
      {userData && (
        <DropdownUser
          userData={userData}
          onLogout={onLogout}
          logoutLabel={HEADER_DEFAULTS.LOGOUT_LABEL}
        />
      )}
    </div>
  );
});

HeaderActions.displayName = 'HeaderActions';

export default HeaderActions; 