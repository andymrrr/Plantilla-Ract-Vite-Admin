import React from 'react';
import { CollapsibleContentProps } from '../types';
import { combinarClases, obtenerClasesContenido, obtenerClasesAnimacion } from '../utils';

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({
  children,
  isOpen,
  variant,
  size,
  animated,
  className
}) => {
  const contentClasses = combinarClases(
    obtenerClasesContenido(variant),
    obtenerClasesAnimacion(isOpen, animated),
    className
  );

  if (!isOpen) return null;

  return (
    <div 
      className={contentClasses}
      id={`collapsible-content-${typeof children === 'string' ? children : 'content'}`}
      role="region"
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  );
};

export default CollapsibleContent; 