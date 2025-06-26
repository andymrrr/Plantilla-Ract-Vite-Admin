import React from 'react';
import { TrendDirection, TrendConfig } from '../types';

interface TrendIndicatorProps {
  trend: TrendDirection;
  className?: string;
}

const TrendIndicator: React.FC<TrendIndicatorProps> = ({
  trend,
  className = ''
}) => {
  const getTrendConfig = (): TrendConfig => {
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

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {trendConfig.icon}
    </div>
  );
};

export default TrendIndicator; 