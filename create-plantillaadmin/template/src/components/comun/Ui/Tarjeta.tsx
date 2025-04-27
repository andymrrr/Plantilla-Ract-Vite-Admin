
import React from 'react';

interface CardProps {
  children: React.ReactNode; 
}

const Tarjeta: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="mb-10 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {children}
    </div>
  
  );
};

export default Tarjeta;
