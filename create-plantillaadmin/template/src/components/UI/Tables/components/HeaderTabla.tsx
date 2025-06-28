import React from 'react';
import { ClasesPersonalizadasTabla } from '../types';
import { debeMostrarHeader } from '../utils';

interface HeaderTablaProps {
  mostrarHeader: boolean;
  tituloTabla?: string;
  subtituloTabla?: string;
  header?: React.ReactNode;
  clasesPersonalizadas?: ClasesPersonalizadasTabla;
}

/**
 * Componente para el header de la tabla
 */
export const HeaderTabla: React.FC<HeaderTablaProps> = ({
  mostrarHeader,
  tituloTabla,
  subtituloTabla,
  header,
  clasesPersonalizadas = {}
}) => {
  if (!debeMostrarHeader(mostrarHeader, tituloTabla, subtituloTabla, header)) {
    return null;
  }

  return (
    <div className={`mb-4 ${clasesPersonalizadas.header || ''}`}>
      {/* Si hay header personalizado, usarlo */}
      {header && header}
      
      {/* Si no hay header personalizado, mostrar título/subtítulo */}
      {!header && (tituloTabla || subtituloTabla) && (
        <div className="text-center">
          {tituloTabla && <h3 className="text-lg font-semibold text-gray-800 mb-0">{tituloTabla}</h3>}
          {subtituloTabla && <p className="text-sm text-gray-600 mb-0">{subtituloTabla}</p>}
        </div>
      )}
    </div>
  );
}; 