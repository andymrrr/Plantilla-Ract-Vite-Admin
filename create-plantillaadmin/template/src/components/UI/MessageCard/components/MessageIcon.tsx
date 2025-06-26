import React from 'react';
import { MessageIconProps } from '../types';
import { combinarClases, obtenerClasesTamañoIcono } from '../utils';

const MessageIcon: React.FC<MessageIconProps> = ({
  icono,
  config,
  size,
  className
}) => {
  const iconClasses = combinarClases(
    config.iconClass,
    obtenerClasesTamañoIcono(size),
    'mb-4',
    className
  );

  return (
    <div className={iconClasses}>
      {typeof icono === 'string' ? icono : icono}
    </div>
  );
};

export default MessageIcon; 