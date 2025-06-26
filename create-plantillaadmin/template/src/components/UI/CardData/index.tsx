import React from 'react';
import { CardDataStatsProps } from './types';
import { sizeConfig, colorConfig } from './config';
import { getVariantClasses } from './utils';
import {
  LoadingSkeleton,
  CardHeader,
  CardContent,
  CardFooter
} from './components';

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  subtitle,
  rate,
  rateValue,
  trend = 'neutral',
  variant = 'default',
  size = 'md',
  color = 'primary',
  icon,
  loading = false,
  animated = true,
  onClick,
  className = '',
  showBadge = false,
  badgeText,
  gradientFrom,
  gradientTo,
}) => {
  const currentSize = sizeConfig[size];
  const currentColor = colorConfig[color];

  const cardClasses = `
    ${currentSize.padding}
    ${getVariantClasses(variant, color, gradientFrom, gradientTo)}
    rounded-2xl transition-all duration-300 ease-in-out
    ${onClick ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1' : ''}
    ${className}
    relative overflow-hidden
  `;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={cardClasses} onClick={handleClick}>
      {/* Efecto de brillo para glassmorphism */}
      {variant === 'glassmorphism' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      )}
      
      {/* Contenido */}
      {loading ? (
        <LoadingSkeleton sizeConfig={currentSize} />
      ) : (
        <>
          <CardHeader
            icon={icon}
            showBadge={showBadge}
            badgeText={badgeText}
            variant={variant}
            sizeConfig={currentSize}
            colorConfig={currentColor}
            animated={animated}
          />
          
          <CardContent
            title={title}
            total={total}
            subtitle={subtitle}
            variant={variant}
            sizeConfig={currentSize}
            animated={animated}
          />

          <CardFooter
            rate={rate}
            rateValue={rateValue}
            trend={trend}
            variant={variant}
            sizeConfig={currentSize}
          />
        </>
      )}
      
      {/* Efecto hover para neon */}
      {variant === 'neon' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default CardDataStats;

// Re-exportar tipos para facilitar el uso
export * from './types'; 