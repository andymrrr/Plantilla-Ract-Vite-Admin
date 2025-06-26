import React from 'react';
import { CardVariant, SizeConfig } from '../types';

interface CardContentProps {
  title: string;
  total: string | number;
  subtitle?: string;
  variant: CardVariant;
  sizeConfig: SizeConfig;
  animated?: boolean;
}

const CardContent: React.FC<CardContentProps> = ({
  title,
  total,
  subtitle,
  variant,
  sizeConfig,
  animated = true
}) => {
  const getTitleClasses = () => {
    const baseClasses = `${sizeConfig.titleSize} font-medium`;
    
    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} text-white/90`;
    }
    
    return `${baseClasses} text-gray-600 dark:text-gray-300`;
  };

  const getTotalClasses = () => {
    const baseClasses = `${sizeConfig.totalSize} font-bold`;
    
    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} text-white`;
    }
    
    return `${baseClasses} text-gray-900 dark:text-white`;
  };

  const getSubtitleClasses = () => {
    const baseClasses = 'text-sm';
    
    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} text-white/70`;
    }
    
    return `${baseClasses} text-gray-500 dark:text-gray-400`;
  };

  return (
    <div className="space-y-2">
      {/* Título */}
      <h3 className={getTitleClasses()}>
        {title}
      </h3>

      {/* Número principal */}
      <div className={getTotalClasses()}>
        {typeof total === 'number' ? total.toLocaleString() : total}
      </div>

      {/* Subtítulo */}
      {subtitle && (
        <p className={getSubtitleClasses()}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default CardContent; 