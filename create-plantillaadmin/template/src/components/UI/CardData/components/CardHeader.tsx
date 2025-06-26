import React, { ReactNode } from 'react';
import { CardVariant, SizeConfig, ColorConfig } from '../types';
import CardIcon from './CardIcon';
import CardBadge from './CardBadge';

interface CardHeaderProps {
  icon?: ReactNode;
  showBadge?: boolean;
  badgeText?: string;
  variant: CardVariant;
  sizeConfig: SizeConfig;
  colorConfig: ColorConfig;
  animated?: boolean;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  icon,
  showBadge = false,
  badgeText,
  variant,
  sizeConfig,
  colorConfig,
  animated = true
}) => {
  if (!icon && !showBadge) {
    return null;
  }

  return (
    <div className="flex items-center justify-between mb-4">
      {icon && (
        <CardIcon
          icon={icon}
          variant={variant}
          sizeConfig={sizeConfig}
          colorConfig={colorConfig}
          animated={animated}
        />
      )}
      
      {showBadge && badgeText && (
        <CardBadge
          text={badgeText}
          variant={variant}
          colorConfig={colorConfig}
        />
      )}
    </div>
  );
};

export default CardHeader; 