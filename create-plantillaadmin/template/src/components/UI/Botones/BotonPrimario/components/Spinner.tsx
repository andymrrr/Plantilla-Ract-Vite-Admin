import React from 'react';

interface SpinnerProps {
  tamaño?: 'pequeño' | 'mediano' | 'grande';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  tamaño = 'mediano', 
  className = '' 
}) => {
  const clasesTamaño = {
    pequeño: 'h-3 w-3',
    mediano: 'h-4 w-4',
    grande: 'h-5 w-5'
  };

  return (
    <svg 
      className={`animate-spin ${clasesTamaño[tamaño]} ${className}`} 
      fill="none" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export default Spinner; 