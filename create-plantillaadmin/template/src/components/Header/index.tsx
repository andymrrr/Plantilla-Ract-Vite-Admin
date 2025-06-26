import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

// Componentes existentes
import DropdownUser from './DropdownUser';
import DarkModeSwitcher from './DarkModeSwitcher';

// Nuevos componentes modularizados
import { HamburgerMenu, SearchBar } from './HamburguesaMenu';
import DropdownNotificaciones from './DropdownNotificaciones';

// Hooks y tipos
import { useHeaderNotifications } from './hooks/useHeaderNotifications';
import { HeaderProps } from './types';

// Assets
import LogoIcon from '../../images/logo/logo-icon.svg';
import UserOneImage from '../../images/user/user-01.png';

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const {
    // Estados
    notificaciones,
    mensajes,
    cargandoNotificaciones,
    cargandoMensajes,
    
    // Funciones de notificaciones
    marcarNotificacionComoLeida,
    marcarTodasNotificacionesComoLeidas,
    eliminarNotificacion,
    manejarClickNotificacion,
    
    // Funciones de mensajes
    marcarMensajeComoLeido,
    marcarTodosMensajesComoLeidos,
    eliminarMensaje,
    manejarClickMensaje,
    
    // Funciones generales
    manejarBusqueda
  } = useHeaderNotifications();
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {/* Mobile Menu Section */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <HamburgerMenu
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
          />
          
          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" />
          </Link>
        </div>

        {/* Search Bar */}
        <SearchBar
          onSearch={manejarBusqueda}
          placeholder="Buscar en el sistema..."
        />

        {/* Actions Section */}
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Dark Mode Toggler */}
            <DarkModeSwitcher />

            {/* Notification Menu */}
            <DropdownNotificaciones
              notificaciones={notificaciones}
              cargando={cargandoNotificaciones}
              onMarcarComoLeida={marcarNotificacionComoLeida}
              onMarcarTodasComoLeidas={marcarTodasNotificacionesComoLeidas}
              onEliminarNotificacion={eliminarNotificacion}
              onClickNotificacion={manejarClickNotificacion}
              titulo="Notificaciones del Sistema"
              configuracion={{
                tamaño: 'medium',
                posicion: 'right',
                maxHeight: 400,
                width: 350
              }}
            />

            {/* Messages Menu */}
            <DropdownNotificaciones
              notificaciones={mensajes}
              cargando={cargandoMensajes}
              onMarcarComoLeida={marcarMensajeComoLeido}
              onMarcarTodasComoLeidas={marcarTodosMensajesComoLeidos}
              onEliminarNotificacion={eliminarMensaje}
              onClickNotificacion={manejarClickMensaje}
              titulo="Mensajes"
              iconoPersonalizado={<FaComments />}
              configuracion={{
                tamaño: 'medium',
                posicion: 'right',
                maxHeight: 400,
                width: 350,
                mostrarIconos: false
              }}
              ariaLabel="Mensajes"
            />
          </ul>

          {/* User Area */}
          <DropdownUser
            userData={{
              nombre: 'Admin Usuario',
              cargo: 'Administrador del Sistema',
              avatar: UserOneImage
            }}
            onLogout={() => {
              console.log('Cerrando sesión...');
              // Aquí iría la lógica de logout
            }}
            logoutLabel="Cerrar Sesión"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
