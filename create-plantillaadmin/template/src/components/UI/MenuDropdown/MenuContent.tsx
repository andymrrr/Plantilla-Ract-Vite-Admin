import React from 'react';
import { Menu } from 'antd';
import { MenuContentProps } from './types';
import { useMenuLogic } from './hooks/useMenuLogic';

export const MenuContent = <T,>({
  opciones,
  item,
  onOptionClick
}: MenuContentProps<T>) => {
  const { menuItems } = useMenuLogic(opciones, item);

  // Agregar el handler de click a cada item
  const menuItemsWithHandlers = menuItems.map(menuItem => ({
    ...menuItem,
    onClick: menuItem.type === 'divider' ? undefined : () => onOptionClick(menuItem.key)
  }));

  return (
    <Menu
      items={menuItemsWithHandlers}
      className="min-w-[160px]"
    />
  );
}; 