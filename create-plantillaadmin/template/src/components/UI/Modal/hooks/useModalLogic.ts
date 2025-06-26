import { useMemo, useEffect } from 'react';
import { UseModalLogicProps, ModalSize } from '../types';

export const useModalLogic = ({
  open,
  onClose,
  maskClosable = true,
  keyboard = true,
  destroyOnClose = false
}: UseModalLogicProps) => {
  
  // Configuración de tamaños
  const sizeConfig = useMemo(() => ({
    small: { width: 400, maxWidth: '90vw' },
    medium: { width: 600, maxWidth: '90vw' },
    large: { width: 800, maxWidth: '95vw' },
    'extra-large': { width: 1200, maxWidth: '98vw' },
    full: { width: '100vw', height: '100vh', maxWidth: 'none' }
  }), []);

  // Obtener configuración de tamaño
  const getSizeConfig = (size: ModalSize = 'medium') => {
    return sizeConfig[size];
  };

  // Manejar tecla Escape
  useEffect(() => {
    if (!keyboard || !open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboard, open, onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Clases CSS para diferentes tipos
  const getTypeClasses = (type: string = 'default') => {
    const typeClasses = {
      default: '',
      confirm: 'border-blue-200',
      info: 'border-blue-200',
      warning: 'border-yellow-200',
      error: 'border-red-200',
      success: 'border-green-200'
    };
    return typeClasses[type as keyof typeof typeClasses] || '';
  };

  return {
    getSizeConfig,
    getTypeClasses,
    maskClosable,
    keyboard,
    destroyOnClose
  };
}; 