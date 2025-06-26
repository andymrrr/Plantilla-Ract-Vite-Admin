import React from 'react';
import { DEFAULT_TEXTS } from '../constants';

interface DropdownHeaderProps {
  titulo: string;
  noLeidas: number;
  onMarcarTodasComoLeidas?: () => void;
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  titulo,
  noLeidas,
  onMarcarTodasComoLeidas
}) => {
  return (
    <div className="px-4.5 py-3 border-b border-stroke dark:border-strokedark">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-medium text-bodydark2">{titulo}</h5>
        {noLeidas > 0 && onMarcarTodasComoLeidas && (
          <button
            onClick={onMarcarTodasComoLeidas}
            className="text-xs hover:text-primary transition-colors"
            aria-label={DEFAULT_TEXTS.marcarTodasComoLeidas}
          >
            {DEFAULT_TEXTS.marcarTodasComoLeidas}
          </button>
        )}
      </div>
    </div>
  );
}; 