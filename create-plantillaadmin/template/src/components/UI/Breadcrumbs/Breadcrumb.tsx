import React from 'react';
import { FaHome } from 'react-icons/fa';
import { RightOutlined } from '@ant-design/icons';
import { BreadcrumbProps, BreadcrumbItem } from './types';
import BreadcrumbContainer from './components/BreadcrumbContainer';
import BreadcrumbTitle from './components/BreadcrumbTitle';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  pageName,
  variant = 'default',
  separator = <RightOutlined />,
  showHome = true,
  homeIcon = <FaHome />,
  homeLabel = 'Dashboard',
  homeHref = '/',
  className,
  containerClassName,
  titleClassName,
  navClassName,
  showTitle = true,
  titleIcon,
  maxItems,
  truncateItems = false,
}) => {
  // Construir items del breadcrumb
  const breadcrumbItems: BreadcrumbItem[] = [];

  // Agregar home si está habilitado
  if (showHome) {
    breadcrumbItems.push({
      label: homeLabel,
      href: homeHref,
      icon: homeIcon,
    });
  }

  // Agregar items personalizados
  breadcrumbItems.push(...items);

  // Agregar página actual si se proporciona
  if (pageName) {
    breadcrumbItems.push({
      label: pageName,
      isActive: true,
    });
  }

  return (
    <BreadcrumbContainer 
      variant={variant} 
      className={containerClassName}
    >
      {showTitle && pageName && (
        <BreadcrumbTitle
          pageName={pageName}
          icon={titleIcon}
          variant={variant}
          className={titleClassName}
        />
      )}
      
      {breadcrumbItems.length > 0 && (
        <BreadcrumbNavigation
          items={breadcrumbItems}
          separator={separator}
          variant={variant}
          maxItems={maxItems}
          truncateItems={truncateItems}
          className={navClassName}
        />
      )}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
