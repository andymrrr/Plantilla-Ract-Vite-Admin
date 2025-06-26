import React, { useMemo } from 'react';
import { OpcionMenu } from '../types';

export const useMenuLogic = <T,>(opciones: OpcionMenu<T>[], item: T) => {
  const opcionesFiltradas = useMemo(() => {
    return opciones.filter(opcion => {
      if (typeof opcion.visible === 'function') {
        return opcion.visible(item);
      }
      return opcion.visible !== false;
    });
  }, [opciones, item]);

  const menuItems = useMemo(() => {
    return opcionesFiltradas.map((opcion) => {
      const isDisabled = typeof opcion.disabled === 'function' 
        ? opcion.disabled(item) 
        : opcion.disabled;

      if (opcion.divider) {
        return {
          type: 'divider' as const,
          key: opcion.key
        };
      }

      return {
        key: opcion.key,
        label: (
          <div className={`flex items-center gap-2 ${opcion.danger ? 'text-red-600' : ''}`}>
            {opcion.icon}
            <span>{opcion.label}</span>
          </div>
        ),
        disabled: isDisabled
      };
    });
  }, [opcionesFiltradas, item]);

  return {
    opcionesFiltradas,
    menuItems
  };
}; 