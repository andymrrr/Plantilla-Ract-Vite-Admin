import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CollapsibleGroupProps, CollapsibleContextType } from './types';

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

export const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error('useCollapsibleContext debe usarse dentro de CollapsibleGroup');
  }
  return context;
};

const CollapsibleGroup: React.FC<CollapsibleGroupProps> = ({
  children,
  variant = 'default',
  size = 'md',
  headerColor = 'gray',
  expandIcon = 'arrow',
  animated = true,
  accordion = false,
  className = ''
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = useCallback((id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (accordion) {
        // En modo acordeón, cerrar todos los demás
        newSet.clear();
        if (!newSet.has(id)) {
          newSet.add(id);
        }
      } else {
        // En modo normal, alternar el item
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
      }
      
      return newSet;
    });
  }, [accordion]);

  const contextValue: CollapsibleContextType = {
    variant,
    size,
    headerColor,
    expandIcon,
    animated,
    accordion,
    openItems,
    toggleItem
  };

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <div className={className}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
};

export default CollapsibleGroup; 