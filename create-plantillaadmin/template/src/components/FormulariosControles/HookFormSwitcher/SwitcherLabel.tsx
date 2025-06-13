import React from 'react';
import { SwitcherLabelProps } from './types';
import { getLabelSizeClasses } from './utils';

/**
 * Componente para renderizar la etiqueta del switcher con soporte para tooltip y tamaños
 */
export const SwitcherLabel: React.FC<SwitcherLabelProps> = ({
  label,
  tooltipMessage,
  required = false,
  size = 'md'
}) => {
  const labelSizeClasses = getLabelSizeClasses(size);

  return (
    <div className="flex items-center justify-between mb-3">
      <label className={`block font-medium text-gray-900 dark:text-white ${labelSizeClasses}`}>
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="Campo requerido">
            *
          </span>
        )}
      </label>
      
      {tooltipMessage && (
        <div className="group relative">
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Información adicional"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block z-50">
            <div className="bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
              {tooltipMessage}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwitcherLabel; 