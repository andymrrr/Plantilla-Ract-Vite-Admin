import React from 'react';
import { MessageCardProps } from './types';
import { obtenerConfigMensaje } from './utils';
import { useMessageCard } from './hooks/useMessageCard';
import MessageContainer from './components/MessageContainer';
import MessageIcon from './components/MessageIcon';
import MessageContent from './components/MessageContent';
import MessageActions from './components/MessageActions';

const MessageCard: React.FC<MessageCardProps> = ({
  type,
  titulo,
  subtitulo,
  icono,
  descripcion,
  detalles,
  acciones = [],
  variant = 'default',
  size = 'md',
  dismissible = false,
  autoDismiss = false,
  dismissTimeout = 5000,
  onDismiss,
  onAction,
  className = '',
  iconClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  detailsClassName = '',
  actionsClassName = ''
}) => {
  const config = obtenerConfigMensaje(type);
  const displayIcon = icono || config.defaultIcon;

  const { handleDismiss } = useMessageCard({
    autoDismiss,
    dismissTimeout,
    onDismiss
  });

  return (
    <MessageContainer
      config={config}
      variant={variant}
      size={size}
      dismissible={dismissible}
      onDismiss={handleDismiss}
      className={className}
    >
      <div className="text-center py-8">
        {/* Ícono */}
        <MessageIcon
          icono={displayIcon}
          config={config}
          size={size}
          className={iconClassName}
        />

        {/* Contenido */}
        <MessageContent
          titulo={titulo}
          subtitulo={subtitulo}
          descripcion={descripcion}
          detalles={detalles}
          config={config}
          size={size}
          variant={variant}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          detailsClassName={detailsClassName}
        />

        {/* Acciones */}
        <MessageActions
          acciones={acciones}
          config={config}
          size={size}
          variant={variant}
          onAction={onAction}
          className={actionsClassName}
        />
      </div>
    </MessageContainer>
  );
};

export default MessageCard; 