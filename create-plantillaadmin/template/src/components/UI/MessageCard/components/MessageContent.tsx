import React from 'react';
import { MessageContentProps } from '../types';
import { combinarClases, obtenerClasesTamañoTitulo, obtenerClasesTamañoDescripcion, obtenerClasesTamañoDetalles } from '../utils';

const MessageContent: React.FC<MessageContentProps> = ({
  titulo,
  subtitulo,
  descripcion,
  detalles,
  config,
  size,
  variant,
  titleClassName,
  descriptionClassName,
  detailsClassName
}) => {
  const titleClasses = combinarClases(
    config.titleClass,
    obtenerClasesTamañoTitulo(size),
    'mb-2',
    titleClassName
  );

  const descriptionClasses = combinarClases(
    obtenerClasesTamañoDescripcion(size),
    'text-gray-600 dark:text-gray-400',
    descriptionClassName
  );

  const detailsClasses = combinarClases(
    obtenerClasesTamañoDetalles(size),
    'text-gray-600 dark:text-gray-400 mb-6',
    detailsClassName
  );

  return (
    <div className="text-center">
      {/* Título principal */}
      <h3 className={titleClasses}>
        {descripcion}
      </h3>

      {/* Subtítulo */}
      {subtitulo && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {subtitulo}
        </p>
      )}

      {/* Detalles adicionales */}
      {detalles && (
        <p className={detailsClasses}>
          {detalles}
        </p>
      )}
    </div>
  );
};

export default MessageContent; 