import React from 'react';
import { MenuOptionProps } from './types';

export const MenuOption = <T,>({
  opcion,
  item,
  onOptionClick
}: MenuOptionProps<T>) => {
  const isDisabled = typeof opcion.disabled === 'function' 
    ? opcion.disabled(item) 
    : opcion.disabled;

  const isVisible = typeof opcion.visible === 'function' 
    ? opcion.visible(item) 
    : opcion.visible !== false;

  if (!isVisible) return null;

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
    disabled: isDisabled,
    onClick: () => onOptionClick(opcion.key)
  };
}; 