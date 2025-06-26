import React from 'react';
import { Dropdown, MenuProps } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { MenuDropdownProps } from './types';
import { MenuButton } from './MenuButton';
import { useMenuHandlers } from './hooks/useMenuHandlers';
import { useMenuLogic } from './hooks/useMenuLogic';

export const MenuDropdown = <T,>({
  item,
  opciones,
  trigger = ['click'],
  placement = 'bottomRight',
  buttonType = 'text',
  buttonSize = 'small',
  buttonIcon = <MoreOutlined />,
  buttonTooltip = 'Más opciones',
  className = ''
}: MenuDropdownProps<T>) => {
  const { handleMenuClick, handleButtonClick } = useMenuHandlers(opciones, item);
  const { opcionesFiltradas } = useMenuLogic(opciones, item);

  // Convertir nuestras opciones al formato de Ant Design
  const menuItems: MenuProps['items'] = opcionesFiltradas.map((opcion) => {
    if (opcion.divider) {
      return {
        type: 'divider',
        key: opcion.key
      };
    }

    const isDisabled = typeof opcion.disabled === 'function' 
      ? opcion.disabled(item) 
      : opcion.disabled;

    return {
      key: opcion.key,
      label: (
        <div className={`flex items-center gap-2 ${opcion.danger ? 'text-red-600' : ''}`}>
          {opcion.icon}
          <span>{opcion.label}</span>
        </div>
      ),
      disabled: isDisabled,
      danger: opcion.danger
    };
  });

  const handleClick = ({ key }: { key: string }) => {
    handleMenuClick(key);
  };

  return (
    <Dropdown
      menu={{
        items: menuItems,
        onClick: handleClick
      }}
      trigger={trigger}
      placement={placement}
      className={className}
    >
      <div>
        <MenuButton
          buttonType={buttonType}
          buttonSize={buttonSize}
          buttonIcon={buttonIcon}
          buttonTooltip={buttonTooltip}
          onClick={handleButtonClick}
        />
      </div>
    </Dropdown>
  );
};

// Función helper para crear divisores
export const crearDivisor = (key: string = `divider-${Date.now()}`) => ({
  key,
  label: '',
  onClick: () => {},
  divider: true
});

export default MenuDropdown; 