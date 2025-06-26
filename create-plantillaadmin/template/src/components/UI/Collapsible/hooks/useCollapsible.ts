import { useState, useCallback, useEffect } from 'react';

interface UseCollapsibleProps {
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export const useCollapsible = ({
  defaultOpen = false,
  onToggle,
  onOpen,
  onClose
}: UseCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = useCallback(() => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Callbacks
    onToggle?.(newState);
    if (newState) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isOpen, onToggle, onOpen, onClose]);

  const handleOpen = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
      onToggle?.(true);
      onOpen?.();
    }
  }, [isOpen, onToggle, onOpen]);

  const handleClose = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      onToggle?.(false);
      onClose?.();
    }
  }, [isOpen, onToggle, onClose]);

  // Sincronizar con prop externo si cambia
  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  return {
    isOpen,
    handleToggle,
    handleOpen,
    handleClose,
    setIsOpen
  };
}; 