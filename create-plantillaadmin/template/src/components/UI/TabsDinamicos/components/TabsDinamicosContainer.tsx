import * as React from 'react';
import { TabsDinamicosContainerProps } from '../types';
import { combinarClases } from '../utils';

const TabsDinamicosContainer = ({
  children,
  className
}: TabsDinamicosContainerProps) => {
  return (
    <div className={combinarClases('tabs-dinamicos', className)}>
      {children}
    </div>
  );
};

export default TabsDinamicosContainer; 