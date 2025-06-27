import { MenuConfig, MenuSection, MenuItem, ValidationResult } from '../core/types';
export class MenuService {
  private static instance: MenuService;
  private menuConfig: MenuConfig | null = null;

  private constructor() {}


  public static getInstance(): MenuService {
    if (!MenuService.instance) {
      MenuService.instance = new MenuService();
    }
    return MenuService.instance;
  }

  
  public async loadMenuConfig(config: MenuConfig): Promise<void> {
    const validation = this.validateMenuConfig(config);
    
    if (!validation.isValid) {
      throw new Error(`Configuración de menú inválida: ${validation.errors.join(', ')}`);
    }

    this.menuConfig = config;
  }
  public getMenuConfig(): MenuConfig {
    if (!this.menuConfig) {
      throw new Error('Configuración de menú no cargada');
    }
    return this.menuConfig;
  }

 
  public getMenuSections(): MenuSection[] {
    return this.getMenuConfig().sections;
  }

  public validateMenuConfig(config: MenuConfig): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!config.sections || config.sections.length === 0) {
      errors.push('El menú debe tener al menos una sección');
    }

    if (!config.version) {
      warnings.push('Se recomienda especificar una versión');
    }

    if (!config.lastUpdated) {
      warnings.push('Se recomienda especificar la fecha de última actualización');
    }
    config.sections.forEach((section, sectionIndex) => {
      if (!section.id) {
        errors.push(`Sección ${sectionIndex}: ID requerido`);
      }

      if (!section.title) {
        errors.push(`Sección ${sectionIndex}: título requerido`);
      }

      if (!section.items || section.items.length === 0) {
        warnings.push(`Sección ${sectionIndex}: no tiene items`);
      }

     
      section.items.forEach((item, itemIndex) => {
        if (!item.id) {
          errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: ID requerido`);
        }

        if (!item.label) {
          errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: label requerido`);
        }

        if (!item.icon) {
          errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: icono requerido`);
        }

        if (item.type === 'link' && !item.to) {
          errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: 'to' requerido para type 'link'`);
        }

        if (item.type === 'accordion' && (!item.links || item.links.length === 0)) {
          errors.push(`Sección ${sectionIndex}, Item ${itemIndex}: 'links' requerido para type 'accordion'`);
        }

        if (item.type === 'accordion' && item.links) {
          item.links.forEach((link, linkIndex) => {
            if (!link.to) {
              errors.push(`Sección ${sectionIndex}, Item ${itemIndex}, Link ${linkIndex}: 'to' requerido`);
            }
            if (!link.label) {
              errors.push(`Sección ${sectionIndex}, Item ${itemIndex}, Link ${linkIndex}: 'label' requerido`);
            }
          });
        }
      });
    });

    const allIds = config.sections.flatMap(section => [
      section.id,
      ...section.items.map(item => item.id)
    ]);

    const duplicateIds = allIds.filter((id, index) => allIds.indexOf(id) !== index);
    if (duplicateIds.length > 0) {
      errors.push(`IDs duplicados encontrados: ${duplicateIds.join(', ')}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

 
  public filterByPermissions(userPermissions: string[]): MenuSection[] {
    const sections = this.getMenuSections();
    
    return sections
      .filter(section => this.hasPermission(section.permissions, userPermissions))
      .map(section => ({
        ...section,
        items: section.items
          .filter(item => this.hasPermission(item.permissions, userPermissions))
          .map(item => ({
            ...item,
            links: item.links?.filter(link => 
              this.hasPermission(link.permissions, userPermissions)
            )
          }))
      }))
      .filter(section => section.items.length > 0); // Remover secciones vacías
  }

 
  public findItemById(itemId: string): MenuItem | null {
    const sections = this.getMenuSections();
    
    for (const section of sections) {
      const item = section.items.find(item => item.id === itemId);
      if (item) return item;
    }
    
    return null;
  }

 
  public findItemByRoute(route: string): MenuItem | null {
    const sections = this.getMenuSections();
    
    for (const section of sections) {
      for (const item of section.items) {
        if (item.to === route) return item;
        
        if (item.links) {
          const hasLink = item.links.some(link => link.to === route);
          if (hasLink) return item;
        }
      }
    }
    
    return null;
  }

  
  public getMenuStats() {
    const sections = this.getMenuSections();
    
    const totalSections = sections.length;
    const totalItems = sections.reduce((sum, section) => sum + section.items.length, 0);
    const totalLinks = sections.reduce((sum, section) => 
      sum + section.items.reduce((itemSum, item) => 
        itemSum + (item.links?.length || 0), 0
      ), 0
    );
    
    return {
      totalSections,
      totalItems,
      totalLinks,
      totalNavigableItems: totalItems + totalLinks
    };
  }

  
  private hasPermission(requiredPermissions: string[] = [], userPermissions: string[]): boolean {
    if (requiredPermissions.length === 0) return true;
    return requiredPermissions.some(permission => userPermissions.includes(permission));
  }
}


export const menuService = MenuService.getInstance(); 