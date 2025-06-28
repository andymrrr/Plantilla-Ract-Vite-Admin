import React from 'react';
import { ClasesPersonalizadasTabla } from '../types';

interface FooterTablaProps {
  footer?: React.ReactNode;
  clasesPersonalizadas?: ClasesPersonalizadasTabla;
}

/**
 * Componente para el footer de la tabla
 */
export const FooterTabla: React.FC<FooterTablaProps> = ({
  footer,
  clasesPersonalizadas = {}
}) => {
  if (!footer) return null;

  return (
    <div className={`mt-4 ${clasesPersonalizadas.footer || ''}`}>
      {footer}
    </div>
  );
}; 