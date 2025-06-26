import React from 'react';
import { combinarClases, obtenerClasesNavegacion, obtenerClasesLista, obtenerClasesSeparador, truncarItems } from '../utils';
import { BreadcrumbNavigationProps } from '../types';
import BreadcrumbItem from './BreadcrumbItem';

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  items,
  separator,
  variant,
  maxItems,
  truncateItems = false,
  className
}) => {
  // Truncar items si es necesario
  const itemsAMostrar = truncateItems && maxItems ? truncarItems(items, maxItems) : items;

  return (
    <nav 
      className={combinarClases(
        obtenerClasesNavegacion(variant),
        className
      )} 
      aria-label="Breadcrumb"
    >
      <ol className={obtenerClasesLista(variant)}>
        {itemsAMostrar.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem 
              item={item} 
              variant={variant} 
            />
            {index < itemsAMostrar.length - 1 && (
              <li className="flex items-center">
                <span className={obtenerClasesSeparador(variant)}>
                  {separator}
                </span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation; 