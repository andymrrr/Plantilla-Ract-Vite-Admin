import React from 'react';
import { CollapsibleProps } from './types';
import { useCollapsible } from './hooks/useCollapsible';
import CollapsibleContainer from './components/CollapsibleContainer';
import CollapsibleHeader from './components/CollapsibleHeader';
import CollapsibleContent from './components/CollapsibleContent';

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  subtitle,
  children,
  defaultOpen = false,
  variant = 'default',
  size = 'md',
  headerColor = 'gray',
  icon,
  expandIcon = 'arrow',
  disabled = false,
  animated = true,
  onToggle,
  onOpen,
  onClose,
  className = '',
  headerClassName = '',
  contentClassName = '',
  iconClassName = '',
  expandIconClassName = ''
}) => {
  const { isOpen, handleToggle } = useCollapsible({
    defaultOpen,
    onToggle,
    onOpen,
    onClose
  });

  return (
    <CollapsibleContainer
      variant={variant}
      size={size}
      headerColor={headerColor}
      disabled={disabled}
      className={className}
    >
      <CollapsibleHeader
        title={title}
        subtitle={subtitle}
        icon={icon}
        expandIcon={expandIcon}
        isOpen={isOpen}
        variant={variant}
        size={size}
        headerColor={headerColor}
        disabled={disabled}
        animated={animated}
        onClick={handleToggle}
        className={headerClassName}
        iconClassName={iconClassName}
        expandIconClassName={expandIconClassName}
      />
      
      <CollapsibleContent
        isOpen={isOpen}
        variant={variant}
        size={size}
        animated={animated}
        className={contentClassName}
      >
        {children}
      </CollapsibleContent>
    </CollapsibleContainer>
  );
};

export default Collapsible; 