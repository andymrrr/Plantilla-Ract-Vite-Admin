import { HealthStatus, HealthStatusConfig } from './types';

export function getStatusConfig(status: HealthStatus): HealthStatusConfig {
  switch (status) {
    case 'Saludable':
      return {
        estado: 'exito',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        borderColor: 'border-green-200 dark:border-green-800',
        iconColor: 'text-green-600 dark:text-green-400'
      };
    case 'Error':
      return {
        estado: 'error',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        borderColor: 'border-red-200 dark:border-red-800',
        iconColor: 'text-red-600 dark:text-red-400'
      };
    case 'Degradado':
      return {
        estado: 'advertencia',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        borderColor: 'border-yellow-200 dark:border-yellow-800',
        iconColor: 'text-yellow-600 dark:text-yellow-400'
      };
    default:
      return {
        estado: 'info',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        borderColor: 'border-blue-200 dark:border-blue-800',
        iconColor: 'text-blue-600 dark:text-blue-400'
      };
  }
} 