import { MenuSection, MenuItem, ValidationResult } from '../../core/types';

// ===== UTILIDADES DE VALIDACIÓN =====

/**
 * Valida la configuración del menú
 */
export const validateMenuConfig = (menuConfig: MenuSection[]): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!menuConfig || menuConfig.length === 0) {
    errors.push('El menú debe tener al menos una sección');
    return { isValid: false, errors, warnings };
  }

  menuConfig.forEach((section, sectionIndex) => {
    if (!section.title) {
      errors.push(`Sección ${sectionIndex}: título requerido`);
    }

    if (!section.id) {
      errors.push(`Sección ${sectionIndex}: ID requerido`);
    }

    if (!section.items || section.items.length === 0) {
      warnings.push(`Sección ${sectionIndex}: no tiene items`);
      return;
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

      // Validar links del accordion
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

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Valida que los IDs del menú sean únicos
 */
export const validateUniqueIds = (menuConfig: MenuSection[]): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  const allIds: string[] = [];

  menuConfig.forEach(section => {
    allIds.push(section.id);
    section.items.forEach(item => {
      allIds.push(item.id);
    });
  });

  const duplicateIds = allIds.filter((id, index) => allIds.indexOf(id) !== index);
  
  if (duplicateIds.length > 0) {
    errors.push(`IDs duplicados encontrados: ${[...new Set(duplicateIds)].join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Valida que las rutas del menú sean válidas
 */
export const validateMenuRoutes = (menuConfig: MenuSection[]): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  const allRoutes: string[] = [];

  menuConfig.forEach((section, sectionIndex) => {
    section.items.forEach((item, itemIndex) => {
      if (item.to) {
        if (!item.to.startsWith('/')) {
          warnings.push(`Sección ${sectionIndex}, Item ${itemIndex}: la ruta '${item.to}' debería comenzar con '/'`);
        }
        allRoutes.push(item.to);
      }

      if (item.links) {
        item.links.forEach((link, linkIndex) => {
          if (!link.to.startsWith('/')) {
            warnings.push(`Sección ${sectionIndex}, Item ${itemIndex}, Link ${linkIndex}: la ruta '${link.to}' debería comenzar con '/'`);
          }
          allRoutes.push(link.to);
        });
      }
    });
  });

  // Verificar rutas duplicadas
  const duplicateRoutes = allRoutes.filter((route, index) => allRoutes.indexOf(route) !== index);
  
  if (duplicateRoutes.length > 0) {
    warnings.push(`Rutas duplicadas encontradas: ${[...new Set(duplicateRoutes)].join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Valida la estructura completa del menú
 */
export const validateCompleteMenuStructure = (menuConfig: MenuSection[]): ValidationResult => {
  const configValidation = validateMenuConfig(menuConfig);
  const idsValidation = validateUniqueIds(menuConfig);
  const routesValidation = validateMenuRoutes(menuConfig);

  return {
    isValid: configValidation.isValid && idsValidation.isValid && routesValidation.isValid,
    errors: [
      ...configValidation.errors,
      ...idsValidation.errors,
      ...routesValidation.errors
    ],
    warnings: [
      ...configValidation.warnings,
      ...idsValidation.warnings,
      ...routesValidation.warnings
    ]
  };
};

/**
 * Valida los permisos del menú
 */
export const validateMenuPermissions = (menuConfig: MenuSection[]): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  menuConfig.forEach((section, sectionIndex) => {
    if (section.permissions && section.permissions.length === 0) {
      warnings.push(`Sección ${sectionIndex}: array de permisos vacío`);
    }

    section.items.forEach((item, itemIndex) => {
      if (item.permissions && item.permissions.length === 0) {
        warnings.push(`Sección ${sectionIndex}, Item ${itemIndex}: array de permisos vacío`);
      }

      if (item.links) {
        item.links.forEach((link, linkIndex) => {
          if (link.permissions && link.permissions.length === 0) {
            warnings.push(`Sección ${sectionIndex}, Item ${itemIndex}, Link ${linkIndex}: array de permisos vacío`);
          }
        });
      }
    });
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}; 