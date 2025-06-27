import { useState, useMemo } from 'react';
import { MenuSection } from '../types';

export const useMenuSearch = (menuConfig: MenuSection[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = useMemo(() => {
    if (!searchQuery) return menuConfig;
    
    return menuConfig.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.to?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.links?.some(link => 
          link.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link.to.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    })).filter(section => section.items.length > 0);
  }, [searchQuery, menuConfig]);

  return {
    searchQuery,
    setSearchQuery,
    filteredMenu,
  };
}; 