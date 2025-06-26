import React from 'react';
import { SizeConfig } from '../types';

interface LoadingSkeletonProps {
  sizeConfig: SizeConfig;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ sizeConfig }) => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center space-x-4">
        <div className={`${sizeConfig.iconSize} bg-gray-300 dark:bg-gray-600 rounded-full`}></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton; 