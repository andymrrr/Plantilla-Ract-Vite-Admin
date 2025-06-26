import React from 'react';
import { CollapsibleHeaderProps } from '../types';
import { 
  combinarClases, 
  obtenerClasesHeader, 
  obtenerClasesColorHeader, 
  obtenerClasesTamaño,
  obtenerClasesTitulo,
  obtenerClasesSubtitulo,
  obtenerClasesIcono,
  obtenerClasesDeshabilitado,
  obtenerClasesHover
} from '../utils';
import CollapsibleIcon from './CollapsibleIcon';

const CollapsibleHeader: React.FC<CollapsibleHeaderProps> = ({
  title,
  subtitle,
  icon,
  expandIcon,
  isOpen,
  variant,
  size,
  headerColor,
  disabled,
  animated,
  onClick,
  className,
  iconClassName,
  expandIconClassName
}) => {
  const headerClasses = combinarClases(
    obtenerClasesHeader(variant),
    obtenerClasesTamaño(size),
    variant !== 'minimal' ? obtenerClasesColorHeader(headerColor) : obtenerClasesHover(variant),
    obtenerClasesDeshabilitado(disabled),
    className
  );

  const titleClasses = obtenerClasesTitulo(size);
  const subtitleClasses = obtenerClasesSubtitulo(size);
  const iconClasses = obtenerClasesIcono(size);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={headerClasses}
      aria-expanded={isOpen}
      aria-controls={`collapsible-content-${title}`}
    >
      <div className="flex items-center space-x-3">
        {/* Icono opcional */}
        {icon && (
          <span className={combinarClases(iconClasses, iconClassName)}>
            {typeof icon === 'string' ? icon : icon}
          </span>
        )}
        
        {/* Título y subtítulo */}
        <div>
          <h3 className={titleClasses}>
            {title}
          </h3>
          {subtitle && (
            <p className={subtitleClasses}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Icono de expansión */}
      <CollapsibleIcon
        expandIcon={expandIcon}
        isOpen={isOpen}
        size={size}
        className={expandIconClassName}
      />
    </button>
  );
};

export default CollapsibleHeader; 