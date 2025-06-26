import React from 'react';
import { Spin } from 'antd';
import { ModalContentProps } from './types';

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = '',
  type = 'default',
  loading = false
}) => {
  // Clases base del contenido
  const baseClasses = 'p-6 flex-1 overflow-auto';
  
  // Clases por tipo
  const getTypeClasses = () => {
    switch (type) {
      case 'info':
        return 'bg-blue-50/30';
      case 'warning':
        return 'bg-yellow-50/30';
      case 'error':
        return 'bg-red-50/30';
      case 'success':
        return 'bg-green-50/30';
      case 'confirm':
        return 'bg-blue-50/30';
      default:
        return 'bg-white';
    }
  };

  const contentClasses = `${baseClasses} ${getTypeClasses()} ${className}`;

  if (loading) {
    return (
      <div className={`${contentClasses} flex items-center justify-center min-h-[200px]`}>
        <Spin size="large" tip="Cargando..." />
      </div>
    );
  }

  return (
    <div className={contentClasses}>
      {children}
    </div>
  );
}; 