import React, { memo, useMemo } from 'react';
import { SearchBar } from './HamburguesaMenu';
import { HeaderLogo, HeaderActions, HeaderMobile } from './components';
import { useHeaderNotifications, useHeaderConfig } from './hooks';
import { HeaderProps } from './types';
import { HEADER_DEFAULTS, DEFAULT_USER, DEFAULT_LOGO } from './constants/headerConstants';

// Assets
import LogoIcon from '../../images/logo/logo-icon.svg';
import UserOneImage from '../../images/user/user-01.png';

const Header: React.FC<HeaderProps> = memo(({
  sidebarOpen,
  setSidebarOpen,
  className = '',
  userData,
  onLogout,
  onSearch,
  showNotifications = true,
  showMessages = true,
  showSearch = true
}) => {
  // Usar el hook de configuración
  const config = useHeaderConfig({
    sidebarOpen,
    setSidebarOpen,
    showNotifications,
    showMessages,
    showSearch
  });

  const {
    // Estados
    notificaciones,
    mensajes,
    cargandoNotificaciones,
    cargandoMensajes,
    
    // Estadísticas
    estadisticasNotificaciones,
    estadisticasMensajes,
    
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

  // Memoizar el usuario por defecto si no se proporciona
  const defaultUserData = useMemo(() => ({
    ...DEFAULT_USER,
    avatar: UserOneImage
  }), []);

  // Memoizar la función de logout por defecto
  const defaultLogout = useMemo(() => () => {
    console.log('Cerrando sesión...');
    // Aquí iría la lógica de logout
  }, []);

  // Memoizar la función de búsqueda
  const handleSearch = useMemo(() => (query: string) => {
    if (onSearch) {
      onSearch(query);
    } else {
      manejarBusqueda(query);
    }
  }, [onSearch, manejarBusqueda]);

  // Memoizar la función de toggle del sidebar
  const handleToggleSidebar = useMemo(() => () => {
    setSidebarOpen(!sidebarOpen);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <header 
      className={`sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none ${className}`}
      role="banner"
      aria-label={config.ariaLabel}
    >
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {/* Mobile Menu Section */}
        <HeaderMobile
          sidebarOpen={sidebarOpen}
          onToggleSidebar={handleToggleSidebar}
          logoUrl={LogoIcon}
          logoAltText={config.logoAltText}
        />

        {/* Search Bar */}
        {config.showSearch && (
          <SearchBar
            onSearch={handleSearch}
            placeholder={config.searchPlaceholder}
            className="hidden md:block"
          />
        )}

        {/* Actions Section */}
        <HeaderActions
          showNotifications={config.showNotifications}
          showMessages={config.showMessages}
          notificaciones={notificaciones}
          mensajes={mensajes}
          cargandoNotificaciones={cargandoNotificaciones}
          cargandoMensajes={cargandoMensajes}
          onMarcarNotificacionComoLeida={marcarNotificacionComoLeida}
          onMarcarTodasNotificacionesComoLeidas={marcarTodasNotificacionesComoLeidas}
          onEliminarNotificacion={eliminarNotificacion}
          onClickNotificacion={manejarClickNotificacion}
          onMarcarMensajeComoLeido={marcarMensajeComoLeido}
          onMarcarTodosMensajesComoLeidos={marcarTodosMensajesComoLeidos}
          onEliminarMensaje={eliminarMensaje}
          onClickMensaje={manejarClickMensaje}
          userData={userData || defaultUserData}
          onLogout={onLogout || defaultLogout}
        />
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
