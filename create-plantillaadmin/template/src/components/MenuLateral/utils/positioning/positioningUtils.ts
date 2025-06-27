import { POPUP_POSITIONING } from '../../constants';

// ===== UTILIDADES DE POSICIONAMIENTO =====

/**
 * Calcula la posición Y para un popup de accordion
 */
export const calculatePopupPosition = (
  itemIndex: number, 
  baseTop: number = POPUP_POSITIONING.TOP_BASE
): number => {
  return baseTop + (itemIndex * POPUP_POSITIONING.ITEM_HEIGHT);
};

/**
 * Ajusta la posición del popup para mantenerlo en pantalla
 */
export const adjustPopupPosition = (
  calculatedTop: number, 
  popupHeight: number = 200
): number => {
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const maxTop = windowHeight - popupHeight - 20; // 20px de margen
  
  return Math.min(calculatedTop, maxTop);
};

/**
 * Calcula la posición completa del popup
 */
export const calculatePopupFullPosition = (
  itemIndex: number,
  popupHeight: number = 200,
  baseTop: number = POPUP_POSITIONING.TOP_BASE
) => {
  const calculatedTop = calculatePopupPosition(itemIndex, baseTop);
  const adjustedTop = adjustPopupPosition(calculatedTop, popupHeight);
  
  return {
    top: adjustedTop,
    left: POPUP_POSITIONING.LEFT_OFFSET,
    height: popupHeight
  };
};

/**
 * Verifica si el popup está dentro de los límites de la pantalla
 */
export const isPopupInBounds = (
  top: number,
  left: number,
  width: number,
  height: number
): boolean => {
  if (typeof window === 'undefined') return true;
  
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  return (
    top >= 0 &&
    left >= 0 &&
    top + height <= windowHeight &&
    left + width <= windowWidth
  );
};

/**
 * Ajusta la posición del popup para evitar que se salga de la pantalla
 */
export const adjustPopupToFitScreen = (
  top: number,
  left: number,
  width: number,
  height: number,
  margin: number = 20
) => {
  if (typeof window === 'undefined') {
    return { top, left };
  }
  
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  let adjustedTop = top;
  let adjustedLeft = left;
  
  // Ajustar posición vertical
  if (top + height + margin > windowHeight) {
    adjustedTop = windowHeight - height - margin;
  }
  if (adjustedTop < margin) {
    adjustedTop = margin;
  }
  
  // Ajustar posición horizontal
  if (left + width + margin > windowWidth) {
    adjustedLeft = windowWidth - width - margin;
  }
  if (adjustedLeft < margin) {
    adjustedLeft = margin;
  }
  
  return {
    top: adjustedTop,
    left: adjustedLeft
  };
};

/**
 * Calcula la posición preferida para mostrar un tooltip
 */
export const calculateTooltipPosition = (
  triggerElement: HTMLElement,
  tooltipWidth: number,
  tooltipHeight: number,
  preferredPosition: 'top' | 'bottom' | 'left' | 'right' = 'top'
) => {
  const rect = triggerElement.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
  const positions = {
    top: {
      top: rect.top + scrollTop - tooltipHeight - 8,
      left: rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2)
    },
    bottom: {
      top: rect.bottom + scrollTop + 8,
      left: rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2)
    },
    left: {
      top: rect.top + scrollTop + (rect.height / 2) - (tooltipHeight / 2),
      left: rect.left + scrollLeft - tooltipWidth - 8
    },
    right: {
      top: rect.top + scrollTop + (rect.height / 2) - (tooltipHeight / 2),
      left: rect.right + scrollLeft + 8
    }
  };
  
  const preferredPos = positions[preferredPosition];
  
  // Verificar si la posición preferida está en pantalla
  if (isPopupInBounds(preferredPos.top, preferredPos.left, tooltipWidth, tooltipHeight)) {
    return preferredPos;
  }
  
  // Probar otras posiciones
  for (const [position, coords] of Object.entries(positions)) {
    if (position !== preferredPosition && 
        isPopupInBounds(coords.top, coords.left, tooltipWidth, tooltipHeight)) {
      return coords;
    }
  }
  
  // Si ninguna posición funciona, ajustar la preferida
  return adjustPopupToFitScreen(
    preferredPos.top,
    preferredPos.left,
    tooltipWidth,
    tooltipHeight
  );
}; 