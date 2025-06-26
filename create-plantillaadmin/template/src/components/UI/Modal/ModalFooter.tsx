import React from 'react';
import { Button } from 'antd';
import { ModalFooterProps, ModalAction } from './types';

export const ModalFooter: React.FC<ModalFooterProps> = ({
  actions = [],
  extra,
  onOk,
  onCancel,
  okText = 'Aceptar',
  cancelText = 'Cancelar',
  confirmLoading = false,
  showDefaultActions = true
}) => {
  // Obtener tipo de botón por variante
  const getButtonType = (action: ModalAction) => {
    if (action.type) return action.type;
    
    switch (action.variant) {
      case 'primary':
        return 'primary';
      case 'danger':
        return 'primary';
      case 'secondary':
        return 'default';
      default:
        return 'default';
    }
  };

  // Obtener clases adicionales por variante
  const getButtonClasses = (action: ModalAction) => {
    switch (action.variant) {
      case 'danger':
        return 'bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600';
      case 'success':
        return 'bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600';
      case 'warning':
        return 'bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600';
      default:
        return '';
    }
  };

  // Renderizar acciones personalizadas
  const renderCustomActions = () => {
    return actions.map((action) => (
      <Button
        key={action.key}
        type={getButtonType(action)}
        loading={action.loading}
        disabled={action.disabled}
        icon={action.icon}
        onClick={action.onClick}
        className={getButtonClasses(action)}
      >
        {action.label}
      </Button>
    ));
  };

  // Renderizar acciones por defecto
  const renderDefaultActions = () => {
    if (!showDefaultActions) return null;

    return (
      <>
        {onCancel && (
          <Button onClick={onCancel}>
            {cancelText}
          </Button>
        )}
        {onOk && (
          <Button
            type="primary"
            loading={confirmLoading}
            onClick={onOk}
          >
            {okText}
          </Button>
        )}
      </>
    );
  };

  // Si no hay acciones ni botones por defecto, no renderizar footer
  const hasActions = actions.length > 0;
  const hasDefaultActions = showDefaultActions && (onOk || onCancel);
  const hasExtra = !!extra;

  if (!hasActions && !hasDefaultActions && !hasExtra) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
      <div className="flex-1">
        {extra}
      </div>
      
      <div className="flex items-center gap-2">
        {hasActions ? renderCustomActions() : renderDefaultActions()}
      </div>
    </div>
  );
}; 