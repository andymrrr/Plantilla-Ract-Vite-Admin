import React from 'react';
import { CardVariant, ColorConfig } from '../types';

interface CardBadgeProps {
  text: string;
  variant: CardVariant;
  colorConfig: ColorConfig;
  className?: string;
}

const CardBadge: React.FC<CardBadgeProps> = ({
  text,
  variant,
  colorConfig,
  className = ''
}) => {
  const getBadgeClasses = () => {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';

    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} bg-white/20 text-white`;
    }

    return `${baseClasses} ${colorConfig.iconBg} ${colorConfig.iconColor}`;
  };

  return (
    <span className={`${getBadgeClasses()} ${className}`}>
      {text}
    </span>
  );
};

export default CardBadge; 