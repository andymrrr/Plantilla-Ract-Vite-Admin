import React from 'react';
import { CollapsibleExpandIcon, CollapsibleSize } from '../types';
import { obtenerClasesIconoExpansion } from '../utils';

interface CollapsibleIconProps {
  expandIcon: CollapsibleExpandIcon;
  isOpen: boolean;
  size: CollapsibleSize;
  className?: string;
}

const CollapsibleIcon: React.FC<CollapsibleIconProps> = ({
  expandIcon,
  isOpen,
  size,
  className
}) => {
  const baseClasses = `transition-transform duration-200 ${obtenerClasesIconoExpansion(size)}`;
  
  const renderIcon = () => {
    switch (expandIcon) {
      case 'plus':
        return (
          <span className={`${baseClasses} ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
            +
          </span>
        );
      case 'chevron':
        return (
          <span className={`${baseClasses} ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ⌄
          </span>
        );
      case 'caret':
        return (
          <span className={`${baseClasses} ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            ▶
          </span>
        );
      case 'triangle':
        return (
          <span className={`${baseClasses} ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
        );
      default: // arrow
        return (
          <span className={`${baseClasses} ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
        );
    }
  };

  return (
    <div className={`flex-shrink-0 ${className || ''}`}>
      {renderIcon()}
    </div>
  );
};

export default CollapsibleIcon; 