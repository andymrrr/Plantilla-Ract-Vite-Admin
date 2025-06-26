export type HealthStatus = 'Saludable' | 'Error' | 'Degradado' | 'Desconocido';

export interface HealthStatusConfig {
  estado: 'exito' | 'error' | 'advertencia' | 'info';
  bgColor: string;
  borderColor: string;
  iconColor: string;
}

export interface HealthStatusCardProps {
  title: string;
  status: HealthStatus;
  message: string;
  timestamp?: Date;
  details?: string[];
  loading?: boolean;
  className?: string;
} 