import React from 'react';
import EtiquetaEstado from '../Etiqueta-Estado';
import { HealthStatusCardProps } from './types';
import { getStatusConfig } from './utils';
import StatusIcon from './StatusIcon';
import HealthStatusCardSkeleton from './HealthStatusCardSkeleton';

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({
  title,
  status,
  message,
  timestamp,
  details = [],
  loading = false,
  className = ''
}) => {
  const config = getStatusConfig(status);

  if (loading) {
    return <HealthStatusCardSkeleton className={className} />;
  }

  return (
    <div className={`rounded-lg border ${config.borderColor} ${config.bgColor} p-6 shadow-default transition-all duration-200 hover:shadow-lg ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black dark:text-white flex items-center gap-2">
          <StatusIcon status={status} config={config} />
          {title}
        </h3>
        <EtiquetaEstado 
          texto={status} 
          estado={config.estado}
          tamaño="pequeño"
          conAnimacion={true}
        />
      </div>

      {/* Message */}
      <p className="text-gray-700 dark:text-gray-300 mb-3" role="status">
        {message}
      </p>

      {/* Details */}
      {details.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
            Detalles:
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Timestamp */}
      {timestamp && (
        <div className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
          Última verificación: {timestamp.toLocaleString('es-ES')}
        </div>
      )}
    </div>
  );
};

export default HealthStatusCard; 