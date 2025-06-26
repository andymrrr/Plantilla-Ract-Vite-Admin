import React, { ReactNode } from 'react';
import { CardVariant, SizeConfig, ColorConfig } from '../types';

interface CardIconProps {
  icon: ReactNode;
  variant: CardVariant;
  sizeConfig: SizeConfig;
  colorConfig: ColorConfig;
  animated?: boolean;
  className?: string;
}

const CardIcon: React.FC<CardIconProps> = ({
  icon,
  variant,
  sizeConfig,
  colorConfig,
  animated = true,
  className = ''
}) => {
  const getIconClasses = () => {
    const baseClasses = `
      ${sizeConfig.iconSize} 
      rounded-xl flex items-center justify-center shadow-sm
    `;

    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} bg-white/20 text-white`;
    }

    return `${baseClasses} ${colorConfig.iconBg} ${colorConfig.iconColor}`;
  };

  return (
    <div className={`${getIconClasses()} ${className}`}>
      {icon}
    </div>
  );
};

export default CardIcon; 