import React from 'react';
import { CardVariant, SizeConfig, TrendDirection } from '../types';
import TrendIndicator from './TrendIndicator';

interface CardFooterProps {
  rate?: string;
  rateValue?: number;
  trend: TrendDirection;
  variant: CardVariant;
  sizeConfig: SizeConfig;
}

const CardFooter: React.FC<CardFooterProps> = ({
  rate,
  rateValue,
  trend,
  variant,
  sizeConfig
}) => {
  if (!rate && rateValue === undefined) {
    return null;
  }

  const getTrendConfig = () => {
    switch (trend) {
      case 'up':
        return {
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 4l6 6H4l6-6z" />
            </svg>
          ),
        };
      case 'down':
        return {
          color: 'text-red-600 dark:text-red-400',
          bgColor: 'bg-red-100 dark:bg-red-900/30',
          icon: (
            <svg className="w-4 h-4 fill-current rotate-180" viewBox="0 0 20 20">
              <path d="M10 4l6 6H4l6-6z" />
            </svg>
          ),
        };
      default:
        return {
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-100 dark:bg-gray-900/30',
          icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M4 10h12M4 10l4-4m-4 4l4 4" />
            </svg>
          ),
        };
    }
  };

  const trendConfig = getTrendConfig();

  const getRateClasses = () => {
    const baseClasses = `${sizeConfig.rateSize} font-medium`;
    
    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} text-white`;
    }
    
    return `${baseClasses} ${trendConfig.color}`;
  };

  const getContainerClasses = () => {
    const baseClasses = 'flex items-center space-x-2 px-2 py-1 rounded-full';
    
    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} bg-white/10`;
    }
    
    return `${baseClasses} ${trendConfig.bgColor}`;
  };

  const getPeriodClasses = () => {
    const baseClasses = sizeConfig.rateSize;
    
    if (variant === 'gradient' || variant === 'neon') {
      return `${baseClasses} text-white/70`;
    }
    
    return `${baseClasses} text-gray-500 dark:text-gray-400`;
  };

  return (
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className={getContainerClasses()}>
        {trendConfig.icon}
        <span className={getRateClasses()}>
          {rate || `${rateValue}%`}
        </span>
      </div>
      
      <span className={getPeriodClasses()}>
        vs último período
      </span>
    </div>
  );
};

export default CardFooter; 