import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ModalHeaderProps } from './types';

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  closable = true,
  onClose,
  extra,
  type = 'default'
}) => {
  // Iconos por tipo
  const getTypeIcon = () => {
    switch (type) {
      case 'info':
        return <span className="text-blue-500 mr-2">ℹ️</span>;
      case 'warning':
        return <span className="text-yellow-500 mr-2">⚠️</span>;
      case 'error':
        return <span className="text-red-500 mr-2">❌</span>;
      case 'success':
        return <span className="text-green-500 mr-2">✅</span>;
      case 'confirm':
        return <span className="text-blue-500 mr-2">❓</span>;
      default:
        return null;
    }
  };

  // Clases por tipo
  const getTypeClasses = () => {
    switch (type) {
      case 'info':
        return 'border-b border-blue-100 bg-blue-50';
      case 'warning':
        return 'border-b border-yellow-100 bg-yellow-50';
      case 'error':
        return 'border-b border-red-100 bg-red-50';
      case 'success':
        return 'border-b border-green-100 bg-green-50';
      case 'confirm':
        return 'border-b border-blue-100 bg-blue-50';
      default:
        return 'border-b border-gray-200';
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 ${getTypeClasses()}`}>
      <div className="flex items-center flex-1">
        {getTypeIcon()}
        {typeof title === 'string' ? (
          <h3 className="text-lg font-semibold text-gray-900 m-0">
            {title}
          </h3>
        ) : (
          title
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {extra}
        {closable && (
          <Button
            type="text"
            size="small"
            icon={<CloseOutlined />}
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          />
        )}
      </div>
    </div>
  );
}; 