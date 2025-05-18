import React from 'react';

interface LineaDivisoraProps {
  grosor?: '1px' | '2px' | '4px'; 
  color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow'; 
  className?: string; 
}

export const LineaDivisora: React.FC<LineaDivisoraProps> = ({
  grosor = '2px', 
  color = 'gray', 
  className = '',
}) => {
  const colorClass = {
    gray: 'border-gray-300 dark:border-strokedark',
    blue: 'border-blue-500 dark:border-blue-700',
    red: 'border-red-500 dark:border-red-700',
    green: 'border-green-500 dark:border-green-700',
    yellow: 'border-yellow-500 dark:border-yellow-700',
  }[color];

  return (
    <hr
      className={`border-t ${colorClass} my-4 ${className}`}
      style={{ borderWidth: grosor }} 
    />
  );
};
