import React from 'react';
import { Modal as AntModal } from 'antd';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';
import { useModalLogic } from './hooks/useModalLogic';
import { useModalHandlers } from './hooks/useModalHandlers';
import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
  // Control de visibilidad
  open,
  onClose,
  
  // Contenido
  title,
  children,
  
  // Configuración
  size = 'medium',
  type = 'default',
  centered = true,
  closable = true,
  maskClosable = true,
  keyboard = true,
  
  // Header personalizado
  showHeader = true,
  headerExtra,
  
  // Footer personalizado
  showFooter = true,
  actions,
  footerExtra,
  
  // Estilos
  className = '',
  bodyClassName = '',
  width,
  height,
  
  // Eventos
  onOk,
  onCancel,
  afterClose,
  
  // Loading
  loading = false,
  okText = 'Aceptar',
  cancelText = 'Cancelar',
  
  // Confirmación
  confirmLoading = false,
  destroyOnClose = false
}) => {
  // Hooks personalizados
  const { getSizeConfig, getTypeClasses } = useModalLogic({
    open,
    onClose,
    maskClosable,
    keyboard,
    destroyOnClose
  });

  const { handleOk, handleCancel, handleMaskClick, handleActionClick, isActionLoading } = useModalHandlers({
    actions,
    onOk,
    onCancel,
    onClose,
    confirmLoading
  });

  // Configuración de tamaño
  const sizeConfig = getSizeConfig(size);
  const modalWidth = width || sizeConfig.width;
  const modalHeight = height || ('height' in sizeConfig ? sizeConfig.height : undefined);

  // Clases CSS
  const modalClasses = `${getTypeClasses(type)} ${className}`;

  // Props para acciones con loading state
  const actionsWithLoading = actions?.map(action => ({
    ...action,
    loading: action.loading || isActionLoading(action.key),
    onClick: () => handleActionClick(action)
  }));

  return (
    <AntModal
      open={open}
      onCancel={handleCancel}
      onOk={onOk ? handleOk : undefined}
      afterClose={afterClose}
      
      // Configuración
      centered={centered}
      closable={false} // Manejamos el cierre con nuestro header
      maskClosable={maskClosable}
      keyboard={keyboard}
      destroyOnHidden={destroyOnClose}
      
      // Estilos actualizados para Ant Design v5
      className={modalClasses}
      styles={{
        body: { padding: 0 }
      }}
      width={modalWidth}
      style={{ height: modalHeight }}
      
      // Sin footer por defecto, usamos nuestro componente
      footer={null}
      
      // Sin título por defecto, usamos nuestro header
      title={null}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        {showHeader && (
          <ModalHeader
            title={title}
            closable={closable}
            onClose={onClose}
            extra={headerExtra}
            type={type}
          />
        )}
        
        {/* Content */}
        <ModalContent
          className={bodyClassName}
          type={type}
          loading={loading}
        >
          {children}
        </ModalContent>
        
        {/* Footer */}
        {showFooter && (
          <ModalFooter
            actions={actionsWithLoading}
            extra={footerExtra}
            onOk={onOk ? handleOk : undefined}
            onCancel={onCancel ? handleCancel : undefined}
            okText={okText}
            cancelText={cancelText}
            confirmLoading={confirmLoading}
            showDefaultActions={!actions || actions.length === 0}
          />
        )}
      </div>
    </AntModal>
  );
}; 