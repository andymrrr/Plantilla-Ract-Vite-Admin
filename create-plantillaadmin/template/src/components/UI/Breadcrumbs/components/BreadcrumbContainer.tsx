import React from 'react';
import { combinarClases, obtenerClasesContenedor } from '../utils';
import { BreadcrumbContainerProps } from '../types';

const BreadcrumbContainer: React.FC<BreadcrumbContainerProps> = ({
  variant,
  children,
  className
}) => {
  return (
    <div className={combinarClases(
      obtenerClasesContenedor(variant),
      className
    )}>
      {children}
    </div>
  );
};

export default BreadcrumbContainer; 