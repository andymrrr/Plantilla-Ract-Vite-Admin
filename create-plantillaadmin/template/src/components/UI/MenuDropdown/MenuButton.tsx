import React from 'react';
import { Button, Tooltip } from 'antd';
import { MenuButtonProps } from './types';

export const MenuButton: React.FC<MenuButtonProps> = ({
  buttonType = 'text',
  buttonSize = 'small',
  buttonIcon,
  buttonTooltip,
  onClick,
  className = ''
}) => {
  const button = (
    <Button
      type={buttonType}
      size={buttonSize}
      icon={buttonIcon}
      onClick={onClick}
      className={`
        hover:bg-gray-100 
        hover:border-gray-300 
        transition-all 
        duration-200 
        flex 
        items-center 
        justify-center
        ${className}
      `}
      style={{
        border: 'none',
        boxShadow: 'none'
      }}
    />
  );

  if (buttonTooltip) {
    return (
      <Tooltip title={buttonTooltip} placement="top">
        {button}
      </Tooltip>
    );
  }

  return button;
}; 