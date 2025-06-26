import { ReactNode } from 'react';

export type CardVariant = 'default' | 'gradient' | 'outlined' | 'minimal' | 'glassmorphism' | 'neon';
export type CardSize = 'sm' | 'md' | 'lg' | 'xl';
export type TrendDirection = 'up' | 'down' | 'neutral';
export type CardColor = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'indigo';

export interface CardDataStatsProps {
  title: string;
  total: string | number;
  subtitle?: string;
  rate?: string;
  rateValue?: number;
  trend?: TrendDirection;
  variant?: CardVariant;
  size?: CardSize;
  color?: CardColor;
  icon?: ReactNode;
  loading?: boolean;
  animated?: boolean;
  onClick?: () => void;
  className?: string;
  showBadge?: boolean;
  badgeText?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export interface SizeConfig {
  padding: string;
  iconSize: string;
  titleSize: string;
  totalSize: string;
  rateSize: string;
}

export interface ColorConfig {
  iconBg: string;
  iconColor: string;
  gradient: string;
  neon: string;
  border: string;
}

export interface TrendConfig {
  color: string;
  bgColor: string;
  icon: ReactNode;
} 