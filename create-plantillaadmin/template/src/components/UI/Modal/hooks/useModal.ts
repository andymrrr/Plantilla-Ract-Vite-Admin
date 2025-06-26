import { useState } from 'react';

interface UseModalOptions {
  initialOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const useModal = (options: UseModalOptions = {}) => {
  const { initialOpen = false, onOpen, onClose } = options;
  const [isOpen, setIsOpen] = useState(initialOpen);

  const abrir = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const cerrar = () => {
    setIsOpen(false);
    onClose?.();
  };

  const toggle = () => {
    if (isOpen) {
      cerrar();
    } else {
      abrir();
    }
  };

  return {
    isOpen,
    abrir,
    cerrar,
    toggle,
    // Alias en inglés para compatibilidad
    open: abrir,
    close: cerrar,
  };
}; 