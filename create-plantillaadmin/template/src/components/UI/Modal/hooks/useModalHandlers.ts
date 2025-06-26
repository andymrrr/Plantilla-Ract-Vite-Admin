import { useCallback, useState } from 'react';
import { UseModalHandlersProps, ModalAction } from '../types';

export const useModalHandlers = ({
  actions = [],
  onOk,
  onCancel,
  onClose,
  confirmLoading = false
}: UseModalHandlersProps) => {
  const [loadingActions, setLoadingActions] = useState<Set<string>>(new Set());

  // Manejar click en acción
  const handleActionClick = useCallback(async (action: ModalAction) => {
    if (action.loading || action.disabled) return;

    try {
      // Marcar acción como loading
      setLoadingActions(prev => new Set(prev).add(action.key));

      // Ejecutar la acción
      await action.onClick();

      // Auto cerrar si está configurado
      if (action.autoClose !== false) {
        onClose();
      }
    } catch (error) {
                // Los errores se capturan automáticamente por globalErrorHandler
    } finally {
      // Quitar loading
      setLoadingActions(prev => {
        const newSet = new Set(prev);
        newSet.delete(action.key);
        return newSet;
      });
    }
  }, [onClose]);

  // Manejar OK
  const handleOk = useCallback(async () => {
    if (!onOk) return;

    try {
      await onOk();
      onClose();
    } catch (error) {
      // Los errores se capturan automáticamente por globalErrorHandler
    }
  }, [onOk, onClose]);

  // Manejar Cancel
  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  }, [onCancel, onClose]);

  // Manejar click en máscara
  const handleMaskClick = useCallback((maskClosable: boolean) => {
    if (maskClosable) {
      onClose();
    }
  }, [onClose]);

  // Verificar si una acción está loading
  const isActionLoading = useCallback((actionKey: string) => {
    return loadingActions.has(actionKey);
  }, [loadingActions]);

  return {
    handleActionClick,
    handleOk,
    handleCancel,
    handleMaskClick,
    isActionLoading,
    confirmLoading
  };
}; 