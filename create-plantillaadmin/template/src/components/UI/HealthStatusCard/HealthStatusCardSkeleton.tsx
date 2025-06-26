import React from 'react';

interface HealthStatusCardSkeletonProps {
  className?: string;
}

const HealthStatusCardSkeleton: React.FC<HealthStatusCardSkeletonProps> = ({ className = '' }) => (
  <div className={`rounded-lg border bg-white dark:bg-boxdark p-6 shadow-default ${className}`}>
    <div className="animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
      </div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);

export default HealthStatusCardSkeleton; 