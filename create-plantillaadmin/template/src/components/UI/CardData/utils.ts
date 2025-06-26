import { CardVariant, CardColor } from './types';
import { colorConfig } from './config';

export const getVariantClasses = (
  variant: CardVariant,
  color: CardColor,
  gradientFrom?: string,
  gradientTo?: string
): string => {
  const colors = colorConfig[color];
  const customGradient = gradientFrom && gradientTo ? `from-${gradientFrom} to-${gradientTo}` : colors.gradient;

  switch (variant) {
    case 'gradient':
      return `bg-gradient-to-br ${customGradient} text-white border-0 shadow-lg`;
    case 'outlined':
      return `bg-transparent border-2 ${colors.border} hover:bg-gray-50 dark:hover:bg-gray-800/50`;
    case 'minimal':
      return `bg-gray-50 dark:bg-gray-800/50 border-0 shadow-sm hover:shadow-md`;
    case 'glassmorphism':
      return `bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl`;
    case 'neon':
      return `bg-gray-900 dark:bg-gray-800 border border-gray-700 shadow-2xl ${colors.neon} shadow-lg`;
    default:
      return `bg-white dark:bg-boxdark border border-stroke dark:border-strokedark shadow-default hover:shadow-lg`;
  }
}; 