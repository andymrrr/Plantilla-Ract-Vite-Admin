import { MutableRefObject } from 'react';

interface UseAccordionHandlersProps {
  sidebarOpen: boolean;
  activeAccordionPopup: string | null;
  setActiveAccordionPopup: (id: string | null) => void;
  popupTimeoutRef: MutableRefObject<number | null>;
  toggleSection: (itemId: string) => void;
}

export const useAccordionHandlers = ({
  sidebarOpen,
  activeAccordionPopup,
  setActiveAccordionPopup,
  popupTimeoutRef,
  toggleSection,
}: UseAccordionHandlersProps) => {
  
  const handleAccordionInteraction = (itemId: string, hasLinks: boolean) => {
    if (sidebarOpen) {
      // Comportamiento normal cuando está expandido
      if (hasLinks) {
        toggleSection(itemId);
      }
    } else {
      // Cuando está colapsado, alternar popup
      if (hasLinks) {
        setActiveAccordionPopup(activeAccordionPopup === itemId ? null : itemId);
      }
    }
  };

  const handleMouseEnterAccordion = (itemId: string, hasLinks: boolean) => {
    if (!sidebarOpen && hasLinks) {
      // Limpiar cualquier timeout pendiente
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
      setActiveAccordionPopup(itemId);
    }
  };

  const handleMouseLeaveAccordion = (itemId: string, hasLinks: boolean) => {
    if (!sidebarOpen && hasLinks) {
      // Delay antes de cerrar para permitir mover al popup
      popupTimeoutRef.current = window.setTimeout(() => {
        setActiveAccordionPopup(null);
      }, 300);
    }
  };

  const handleMouseEnterPopup = () => {
    // Cancelar el cierre del popup
    if (popupTimeoutRef.current) {
      clearTimeout(popupTimeoutRef.current);
    }
  };

  const handleMouseLeavePopup = () => {
    // Cerrar inmediatamente al salir del popup
    setActiveAccordionPopup(null);
  };

  return {
    handleAccordionInteraction,
    handleMouseEnterAccordion,
    handleMouseLeaveAccordion,
    handleMouseEnterPopup,
    handleMouseLeavePopup,
  };
}; 