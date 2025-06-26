import React from 'react';
import { Link } from 'react-router-dom';
import { combinarClases, obtenerClasesItem, obtenerClasesLink, obtenerClasesItemActivo } from '../utils';
import { BreadcrumbItem as BreadcrumbItemType, BreadcrumbVariant } from '../types';

interface BreadcrumbItemProps {
  item: BreadcrumbItemType;
  variant: BreadcrumbVariant;
  className?: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  item,
  variant,
  className
}) => {
  const { label, href, icon, isActive, onClick } = item;

  // Si es un item activo o no tiene href, mostrar como span
  if (isActive || !href) {
    return (
      <li className={combinarClases(
        obtenerClasesItem(variant),
        className
      )}>
        <span className={obtenerClasesItemActivo(variant)}>
          {icon && <span className="mr-1">{icon}</span>}
          {label}
        </span>
      </li>
    );
  }

  // Si tiene onClick, usar button
  if (onClick) {
    return (
      <li className={combinarClases(
        obtenerClasesItem(variant),
        className
      )}>
        <button
          onClick={onClick}
          className={obtenerClasesLink(variant)}
        >
          {icon && <span className="group-hover:scale-110 transition-transform duration-200">{icon}</span>}
          <span>{label}</span>
        </button>
      </li>
    );
  }

  // Si tiene href, usar Link
  return (
    <li className={combinarClases(
      obtenerClasesItem(variant),
      className
    )}>
      <Link
        to={href}
        className={obtenerClasesLink(variant)}
      >
        {icon && <span className="group-hover:scale-110 transition-transform duration-200">{icon}</span>}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default BreadcrumbItem; 