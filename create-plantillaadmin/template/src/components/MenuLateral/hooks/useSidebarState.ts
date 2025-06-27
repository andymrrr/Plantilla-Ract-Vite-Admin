import { useState, useEffect, useRef } from 'react';

export const useSidebarState = (
  sidebarOpen: boolean,
  setSidebarOpen: (open: boolean) => void
) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [activeAccordionPopup, setActiveAccordionPopup] = useState<string | null>(null);
  const popupTimeoutRef = useRef<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
    };
  }, []);

  // Cerrar sidebar al hacer clic fuera en móvil
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        if (window.innerWidth <= 768) {
          setSidebarOpen(false);
        }
        setActiveAccordionPopup(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setSidebarOpen]);

  // Cerrar sidebar con Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
        setActiveAccordionPopup(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setSidebarOpen]);

  const toggleSection = (itemId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isSectionExpanded = (itemId: string) => expandedSections.has(itemId);

  return {
    expandedSections,
    activeAccordionPopup,
    setActiveAccordionPopup,
    popupTimeoutRef,
    sidebarRef,
    toggleSection,
    isSectionExpanded,
  };
}; 