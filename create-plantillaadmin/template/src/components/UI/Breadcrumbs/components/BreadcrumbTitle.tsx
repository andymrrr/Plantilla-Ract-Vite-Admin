import React from 'react';
import { combinarClases, obtenerClasesTitulo, obtenerClasesIconoTitulo, obtenerClasesTextoTitulo } from '../utils';
import { BreadcrumbTitleProps } from '../types';

const BreadcrumbTitle: React.FC<BreadcrumbTitleProps> = ({
  pageName,
  icon,
  variant,
  className
}) => {
  if (!pageName) return null;

  return (
    <div className={combinarClases(
      obtenerClasesTitulo(variant),
      className
    )}>
      {icon && (
        <div className={obtenerClasesIconoTitulo(variant)}>
          {icon}
        </div>
      )}
      <h2 className={obtenerClasesTextoTitulo(variant)}>
        {pageName}
      </h2>
    </div>
  );
};

export default BreadcrumbTitle; 