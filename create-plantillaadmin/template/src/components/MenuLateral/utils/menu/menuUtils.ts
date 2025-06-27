import { MenuSection, MenuItem, MenuLink } from '../../core/types';

// ===== UTILIDADES DE BÚSQUEDA EN MENÚ =====

/**
 * Busca un item de menú por su ID en toda la configuración
 */
export const findMenuItemById = (menuConfig: MenuSection[], itemId: string): MenuItem | null => {
  for (const section of menuConfig) {
    const item = section.items.find(item => item.id === itemId);
    if (item) return item;
  }
  return null;
};

/**
 * Busca un item de menú por su ruta
 */
export const findMenuItemByRoute = (menuConfig: MenuSection[], route: string): MenuItem | null => {
  for (const section of menuConfig) {
    for (const item of section.items) {
      if (item.to === route) return item;
      
      if (item.links) {
        const linkItem = item.links.find(link => link.to === route);
        if (linkItem) return item; // Retorna el item padre del accordion
      }
    }
  }
  return null;
};

/**
 * Obtiene todas las rutas disponibles en el menú
 */
export const getAllMenuRoutes = (menuConfig: MenuSection[]): string[] => {
  const routes: string[] = [];
  
  menuConfig.forEach(section => {
    section.items.forEach(item => {
      if (item.to) {
        routes.push(item.to);
      }
      if (item.links) {
        item.links.forEach(link => routes.push(link.to));
      }
    });
  });
  
  return routes;
};

/**
 * Obtiene todos los enlaces de un item de menú específico
 */
export const getMenuItemLinks = (item: MenuItem): MenuLink[] => {
  return item.links || [];
};

/**
 * Verifica si un item de menú tiene enlaces hijos
 */
export const hasMenuItemLinks = (item: MenuItem): boolean => {
  return Boolean(item.links && item.links.length > 0);
};

/**
 * Obtiene el primer enlace navegable de un item de menú
 */
export const getFirstNavigableLink = (item: MenuItem): string | null => {
  if (item.to) return item.to;
  
  if (item.links && item.links.length > 0) {
    return item.links[0].to;
  }
  
  return null;
};

/**
 * Cuenta el total de elementos navegables en el menú
 */
export const countNavigableItems = (menuConfig: MenuSection[]): number => {
  let count = 0;
  
  menuConfig.forEach(section => {
    section.items.forEach(item => {
      if (item.to) count++;
      if (item.links) count += item.links.length;
    });
  });
  
  return count;
};

/**
 * Obtiene la estructura plana de todos los elementos del menú
 */
export const getFlatMenuStructure = (menuConfig: MenuSection[]): Array<{
  id: string;
  label: string;
  route: string;
  type: 'section' | 'item' | 'link';
  parentId?: string;
}> => {
  const flatStructure: Array<{
    id: string;
    label: string;
    route: string;
    type: 'section' | 'item' | 'link';
    parentId?: string;
  }> = [];
  
  menuConfig.forEach(section => {
    // Agregar sección
    flatStructure.push({
      id: section.id,
      label: section.title,
      route: '',
      type: 'section'
    });
    
    section.items.forEach(item => {
      // Agregar item
      flatStructure.push({
        id: item.id,
        label: item.label,
        route: item.to || '',
        type: 'item',
        parentId: section.id
      });
      
      // Agregar enlaces del item
      if (item.links) {
        item.links.forEach((link, index) => {
          flatStructure.push({
            id: `${item.id}-link-${index}`,
            label: link.label,
            route: link.to,
            type: 'link',
            parentId: item.id
          });
        });
      }
    });
  });
  
  return flatStructure;
}; 