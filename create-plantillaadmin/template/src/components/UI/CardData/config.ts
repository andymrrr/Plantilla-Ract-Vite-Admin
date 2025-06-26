import { CardSize, CardColor, SizeConfig, ColorConfig } from './types';

export const sizeConfig: Record<CardSize, SizeConfig> = {
  sm: {
    padding: 'py-4 px-5',
    iconSize: 'h-8 w-8',
    titleSize: 'text-lg',
    totalSize: 'text-2xl',
    rateSize: 'text-xs',
  },
  md: {
    padding: 'py-6 px-7',
    iconSize: 'h-10 w-10',
    titleSize: 'text-base',
    totalSize: 'text-3xl',
    rateSize: 'text-sm',
  },
  lg: {
    padding: 'py-8 px-9',
    iconSize: 'h-12 w-12',
    titleSize: 'text-lg',
    totalSize: 'text-4xl',
    rateSize: 'text-base',
  },
  xl: {
    padding: 'py-10 px-11',
    iconSize: 'h-14 w-14',
    titleSize: 'text-xl',
    totalSize: 'text-5xl',
    rateSize: 'text-lg',
  },
};

export const colorConfig: Record<CardColor, ColorConfig> = {
  primary: {
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    neon: 'shadow-blue-500/50',
    border: 'border-blue-200 dark:border-blue-800',
  },
  success: {
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    gradient: 'from-green-500 to-green-600',
    neon: 'shadow-green-500/50',
    border: 'border-green-200 dark:border-green-800',
  },
  warning: {
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    gradient: 'from-yellow-500 to-yellow-600',
    neon: 'shadow-yellow-500/50',
    border: 'border-yellow-200 dark:border-yellow-800',
  },
  danger: {
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400',
    gradient: 'from-red-500 to-red-600',
    neon: 'shadow-red-500/50',
    border: 'border-red-200 dark:border-red-800',
  },
  info: {
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    gradient: 'from-cyan-500 to-cyan-600',
    neon: 'shadow-cyan-500/50',
    border: 'border-cyan-200 dark:border-cyan-800',
  },
  purple: {
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    gradient: 'from-purple-500 to-purple-600',
    neon: 'shadow-purple-500/50',
    border: 'border-purple-200 dark:border-purple-800',
  },
  indigo: {
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    gradient: 'from-indigo-500 to-indigo-600',
    neon: 'shadow-indigo-500/50',
    border: 'border-indigo-200 dark:border-indigo-800',
  },
}; 