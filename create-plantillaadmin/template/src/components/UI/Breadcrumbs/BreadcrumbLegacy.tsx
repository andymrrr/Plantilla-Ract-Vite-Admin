import React from 'react';
import { Breadcrumb as NewBreadcrumb } from './index';

/**
 * @deprecated Usar el nuevo componente Breadcrumb con props mejoradas
 * Este componente mantiene compatibilidad con la versión anterior
 */
interface BreadcrumbLegacyProps {
  pageName: string;
}

const BreadcrumbLegacy: React.FC<BreadcrumbLegacyProps> = ({ pageName }) => {
  console.warn(
    'BreadcrumbLegacy está deprecado. Usar el nuevo componente Breadcrumb con props mejoradas.'
  );

  return <NewBreadcrumb pageName={pageName} />;
};

export default BreadcrumbLegacy; 