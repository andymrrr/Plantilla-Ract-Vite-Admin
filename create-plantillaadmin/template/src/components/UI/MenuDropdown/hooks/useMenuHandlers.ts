import { useCallback } from 'react';
import { OpcionMenu } from '../types';

export const useMenuHandlers = <T,>(opciones: OpcionMenu<T>[], item: T) => {
  const handleMenuClick = useCallback((key: string) => {
    const opcion = opciones.find(op => op.key === key);
    if (opcion) {
      opcion.onClick(item);
    }
  }, [opciones, item]);

  const handleButtonClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return {
    handleMenuClick,
    handleButtonClick
  };
}; 