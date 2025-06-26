import React from 'react';
import { DropdownNotificacionesProps } from './types';
import { generarConfiguracion, generarClasesDropdown, contarNoLeidas } from './utils';
import { DEFAULT_TEXTS } from './constants';
import { useDropdownNotificaciones } from './hooks/useDropdownNotificaciones';
import { TriggerButton, DropdownHeader, DropdownContent } from './components';

const DropdownNotificaciones: React.FC<DropdownNotificacionesProps> = ({
  notificaciones = [],
  onMarcarComoLeida,
  onMarcarTodasComoLeidas,
  onEliminarNotificacion,
  onClickNotificacion,
  onAbrirDropdown,
  onCerrarDropdown,
  configuracion = {},
  iconoPersonalizado,
  titulo = DEFAULT_TEXTS.titulo,
  mensajeVacio = DEFAULT_TEXTS.mensajeVacio,
  mostrarContador = true,
  cerrarAlClickear = true,
  cargando = false,
  error,
  ariaLabel = DEFAULT_TEXTS.ariaLabel,
  className = "",
  classNameDropdown = ""
}) => {
  // Configuración completa con defaults
  const config = generarConfiguracion(configuracion);
  
  // Hook personalizado para manejar lógica del dropdown
  const {
    dropdownAbierto,
    trigger,
    dropdown,
    toggleDropdown,
    manejarMarcarComoLeida,
    manejarMarcarTodasComoLeidas,
    manejarEliminarNotificacion,
    manejarClickNotificacion
  } = useDropdownNotificaciones({
    onAbrirDropdown,
    onCerrarDropdown,
    onMarcarComoLeida,
    onMarcarTodasComoLeidas,
    onEliminarNotificacion,
    onClickNotificacion,
    cerrarAlClickear
  });

  // Cálculos
  const noLeidas = contarNoLeidas(notificaciones);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <TriggerButton
        trigger={trigger}
        onClick={toggleDropdown}
        dropdownAbierto={dropdownAbierto}
        config={config}
        iconoPersonalizado={iconoPersonalizado}
        mostrarContador={mostrarContador}
        noLeidas={noLeidas}
        cargando={cargando}
        ariaLabel={ariaLabel}
        className={className}
      />

      {/* Dropdown Panel */}
      <div
        ref={dropdown}
        className={generarClasesDropdown(config, dropdownAbierto, classNameDropdown)}
        style={{ 
          width: config.width,
          maxHeight: config.maxHeight 
        }}
        role="menu"
        aria-labelledby="notifications-button"
      >
        {/* Header */}
        <DropdownHeader
          titulo={titulo}
          noLeidas={noLeidas}
          onMarcarTodasComoLeidas={manejarMarcarTodasComoLeidas}
        />

        {/* Content */}
        <DropdownContent
          cargando={cargando}
          error={error}
          notificaciones={notificaciones}
          mensajeVacio={mensajeVacio}
          config={config}
          onClickNotificacion={manejarClickNotificacion}
          onMarcarComoLeida={manejarMarcarComoLeida}
          onEliminarNotificacion={manejarEliminarNotificacion}
        />
      </div>
    </div>
  );
};

export default DropdownNotificaciones; 