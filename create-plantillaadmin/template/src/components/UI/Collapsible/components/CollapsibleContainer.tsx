import React from 'react';
import { CollapsibleContainerProps } from '../types';
import { combinarClases, obtenerClasesContenedor } from '../utils';

const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({
  variant,
  size,
  headerColor,
  disabled,
  children,
  className
}) => {
  const containerClasses = combinarClases(
    obtenerClasesContenedor(variant),
    className
  );

  return (
    <div 
      className={containerClasses}
      role="region"
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
};

export default CollapsibleContainer; 