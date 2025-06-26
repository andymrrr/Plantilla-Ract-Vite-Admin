import React from 'react';
import { TarjetaDividerProps } from '../types';
import { obtenerClaseColor, combinarClases } from '../utils';

const TarjetaDivider: React.FC<TarjetaDividerProps> = ({
  grosor = '1px',
  color = 'gray',
  className = ''
}) => (
  <hr
    className={combinarClases('border-t', obtenerClaseColor(color), 'my-4', className)}
    style={{ borderWidth: grosor }}
  />
);

export default TarjetaDivider; 