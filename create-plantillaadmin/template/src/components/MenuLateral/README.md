# 🚀 Sidebar Moderno - Documentación

**¡El sidebar moderno es ahora el componente principal!** Un sidebar super tipado y altamente configurable para aplicaciones React con TypeScript.

## ✨ Características

- **Super Tipado**: TypeScript completo con tipos estrictos y extensibles
- **Altamente Configurable**: Temas, animaciones, comportamientos personalizables
- **Responsive**: Adaptable a móviles, tablets y desktop
- **Accesible**: ARIA labels, navegación por teclado, lectores de pantalla
- **Búsqueda**: Filtrado en tiempo real con resaltado
- **Permisos**: Control de acceso por roles y permisos
- **Eventos**: Sistema de callbacks extensible
- **Plugins**: Arquitectura extensible para funcionalidades adicionales
- **Múltiples Tipos de Items**: Links, accordions, dividers, headers, custom components

## 🚀 Uso Básico (Ahora es el Principal)

```tsx
import React, { useState } from "react";
import Sidebar from "./components/MenuLateral"; // ← Ahora importa el sidebar moderno

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main style={{ flex: 1, padding: "2rem" }}>
        <h1>Mi Aplicación</h1>
        <p>Contenido principal aquí...</p>
      </main>
    </div>
  );
};
```

## 🔄 Migración desde el Sidebar Original

### Cambios Automáticos

- **Importación**: Ahora `import Sidebar from './components/MenuLateral'` importa el sidebar moderno
- **API**: Mantiene la misma API para facilitar la migración
- **Compatibilidad**: El sidebar original sigue disponible como `LegacySidebar`

### Si Necesitas el Sidebar Original

```tsx
import { LegacySidebar } from "./components/MenuLateral";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <LegacySidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  );
};
```

## 🏗️ Arquitectura

```
MenuLateral/
├── types/                    # Tipos TypeScript
│   └── index.ts             # Definiciones de tipos
├── hooks/                   # Hooks personalizados
│   ├── useSidebar.ts        # Hook original
│   └── useModernSidebar.ts  # Hook moderno
├── components/              # Componentes del sidebar
│   ├── ModernSidebar.tsx    # Componente principal
│   ├── ModernSidebarHeader.tsx
│   ├── ModernSidebarContent.tsx
│   ├── ModernSidebarSearch.tsx
│   ├── ModernSidebarFooter.tsx
│   ├── ModernSidebarOverlay.tsx
│   ├── ModernMenuSection.tsx
│   ├── ModernMenuItem.tsx
│   ├── ModernMenuItemLink.tsx
│   ├── ModernMenuItemAccordion.tsx
│   ├── ModernMenuItemDivider.tsx
│   ├── ModernMenuItemHeader.tsx
│   └── ModernMenuItemCustom.tsx
├── config/                  # Configuraciones
│   └── modernMenuConfig.ts  # Configuración moderna
├── styles/                  # Estilos CSS
│   └── ModernSidebar.css    # Estilos del sidebar
├── examples/                # Ejemplos de uso
│   └── SimpleExample.tsx
├── index.tsx               # Exportaciones principales
├── index.ts                # Exportaciones organizadas
└── README.md              # Esta documentación
```

## ⚙️ Configuración Avanzada

### Configuración Personalizada

```tsx
import {
  modernSidebarConfig,
  modernMenuSections,
} from "./config/modernMenuConfig";
import { SidebarConfig } from "./types";

const customConfig: SidebarConfig = {
  ...modernSidebarConfig,
  id: "my-sidebar",
  title: "Mi Aplicación",

  // Comportamiento
  behavior: {
    collapsible: true,
    defaultCollapsed: false,
    rememberState: true,
    autoCollapseOnMobile: true,
    closeOnClickOutside: true,
    closeOnEscape: true,
    preventBodyScroll: true,
  },

  // Apariencia
  appearance: {
    theme: "dark",
    width: {
      expanded: "320px",
      collapsed: "80px",
    },
    position: "left",
    zIndex: 1000,
    shadow: true,
    border: true,
  },

  // Animaciones
  animations: {
    sidebar: { type: "slide", duration: 300, easing: "ease-in-out" },
    items: { type: "fade", duration: 200, easing: "ease-in-out", stagger: 50 },
    accordion: { type: "slide", duration: 250, easing: "ease-in-out" },
  },

  // Responsive
  responsive: {
    breakpoint: "768",
    mobileBehavior: "overlay",
    tabletBehavior: "overlay",
  },

  // Funcionalidades
  features: {
    search: true,
    shortcuts: true,
    breadcrumbs: true,
    backToTop: true,
    footer: true,
  },

  // Callbacks
  callbacks: {
    onItemClick: (item, context) => {
      console.log("Item clicked:", item.label);
      if (context.isMobile) {
        // Cerrar sidebar en móvil
      }
    },
    onSectionToggle: (section, context) => {
      console.log("Section toggled:", section.title);
    },
    onSidebarToggle: (expanded, context) => {
      console.log("Sidebar toggled:", expanded);
    },
    onThemeChange: (theme) => {
      console.log("Theme changed:", theme);
      document.documentElement.setAttribute("data-theme", theme);
    },
  },
};
```

### Secciones Personalizadas

```tsx
import { MenuSection } from "./types";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const customSections: MenuSection[] = [
  {
    id: "main",
    title: "MENU PRINCIPAL",
    description: "Navegación principal",
    order: 1,
    items: [
      {
        id: "home",
        type: "link",
        to: "/",
        icon: FaHome,
        label: "Inicio",
        variant: "primary",
        tooltip: "Página principal",
      },
      {
        id: "profile",
        type: "link",
        to: "/profile",
        icon: FaUser,
        label: "Perfil",
        badge: {
          text: "Nuevo",
          variant: "success",
          count: 3,
        },
      },
    ],
  },
  {
    id: "settings",
    title: "CONFIGURACIÓN",
    description: "Ajustes del sistema",
    order: 2,
    collapsible: true,
    defaultOpen: true,
    items: [
      {
        id: "settings-accordion",
        type: "accordion",
        icon: FaCog,
        label: "Configuración",
        defaultOpen: true,
        links: [
          {
            id: "general",
            type: "link",
            to: "/settings/general",
            icon: FaCog,
            label: "General",
          },
          {
            id: "security",
            type: "link",
            to: "/settings/security",
            icon: FaCog,
            label: "Seguridad",
          },
        ],
      },
    ],
  },
];
```

## 🎨 Tipos de Items

### 1. Link Item

```tsx
{
  id: 'dashboard',
  type: 'link',
  to: '/dashboard',
  icon: FaTachometerAlt,
  label: 'Dashboard',
  variant: 'primary',
  tooltip: 'Panel principal',
  badge: {
    text: 'Nuevo',
    variant: 'success',
    count: 5
  },
  external: false,
  target: '_self',
  exact: true
}
```

### 2. Accordion Item

```tsx
{
  id: 'forms',
  type: 'accordion',
  icon: FaWpforms,
  label: 'Formularios',
  defaultOpen: true,
  singleOpen: false,
  links: [
    {
      id: 'form-elements',
      type: 'link',
      to: '/forms/elements',
      icon: FaEdit,
      label: 'Elementos'
    }
  ]
}
```

### 3. Divider Item

```tsx
{
  id: 'divider-1',
  type: 'divider',
  label: 'Separador',
  orientation: 'horizontal'
}
```

### 4. Header Item

```tsx
{
  id: 'welcome',
  type: 'header',
  icon: '🎉',
  label: '¡Bienvenido!',
  description: 'Esta es una descripción',
  action: {
    icon: '⭐',
    label: 'Acción',
    onClick: (context) => {
      console.log('Acción ejecutada', context);
    }
  }
}
```

### 5. Custom Item

```tsx
{
  id: 'custom',
  type: 'custom',
  icon: '🔧',
  label: 'Componente Personalizado',
  component: ({ item, context, isActive, isExpanded }) => (
    <div style={{ padding: '1rem', background: '#f0f0f0' }}>
      <h4>Mi Componente</h4>
      <p>Active: {isActive ? 'Sí' : 'No'}</p>
      <p>Expanded: {isExpanded ? 'Sí' : 'No'}</p>
    </div>
  ),
  props: {
    customProp: 'valor'
  }
}
```

## 🎯 Temas y Estilos

### Temas Predefinidos

```tsx
// Tema claro
const lightTheme: MenuThemeConfig = {
  name: "light",
  colors: {
    background: "#ffffff",
    backgroundHover: "#f8f9fa",
    backgroundActive: "#e9ecef",
    text: "#212529",
    textHover: "#495057",
    textActive: "#000000",
    border: "#dee2e6",
    icon: "#6c757d",
    iconHover: "#495057",
    iconActive: "#000000",
    divider: "#dee2e6",
  },
};

// Tema oscuro
const darkTheme: MenuThemeConfig = {
  name: "dark",
  colors: {
    background: "#1a1a1a",
    backgroundHover: "#2d2d2d",
    backgroundActive: "#404040",
    text: "#e5e5e5",
    textHover: "#ffffff",
    textActive: "#ffffff",
    border: "#404040",
    icon: "#a0a0a0",
    iconHover: "#e5e5e5",
    iconActive: "#ffffff",
    divider: "#404040",
  },
};
```

### CSS Personalizado

```css
/* Variables CSS personalizadas */
:root {
  --sidebar-width-expanded: 320px;
  --sidebar-width-collapsed: 80px;
  --sidebar-bg: #ffffff;
  --sidebar-text: #212529;
  /* ... más variables */
}

/* Tema oscuro */
[data-theme="dark"] {
  --sidebar-bg: #1a1a1a;
  --sidebar-text: #e5e5e5;
  /* ... más variables */
}
```

## 🔧 Hooks Personalizados

### useModernSidebar

```tsx
import { useModernSidebar } from "./hooks/useModernSidebar";

const MyComponent = () => {
  const {
    state,
    context,
    toggleSidebar,
    expandSidebar,
    collapseSidebar,
    setSearchQuery,
    toggleSection,
    setTheme,
    isActiveItem,
    getFilteredSections,
  } = useModernSidebar({
    config: modernSidebarConfig,
    sections: modernMenuSections,
    sidebarOpen,
    setSidebarOpen,
  });

  return (
    <div>
      <button onClick={toggleSidebar}>
        {state.expanded ? "Colapsar" : "Expandir"}
      </button>

      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setSearchQuery(e.target.value)}
        value={state.searchQuery}
      />
    </div>
  );
};
```

## 🎮 Eventos y Callbacks

### Sistema de Eventos

```tsx
const config: SidebarConfig = {
  // ... otras configuraciones
  callbacks: {
    onItemClick: (item, context) => {
      // Se ejecuta cuando se hace clic en un item
      console.log("Item clicked:", item.label);

      // Cerrar sidebar en móvil
      if (context.isMobile) {
        setSidebarOpen(false);
      }

      // Navegar programáticamente
      if (item.type === "link") {
        navigate(item.to);
      }
    },

    onSectionToggle: (section, context) => {
      // Se ejecuta cuando se expande/colapsa una sección
      console.log("Section toggled:", section.title);

      // Analytics
      analytics.track("sidebar_section_toggle", {
        section: section.title,
        expanded: !context.sidebarExpanded,
      });
    },

    onSidebarToggle: (expanded, context) => {
      // Se ejecuta cuando se expande/colapsa el sidebar
      console.log("Sidebar toggled:", expanded);

      // Guardar preferencia
      localStorage.setItem("sidebar-expanded", expanded.toString());
    },

    onThemeChange: (theme) => {
      // Se ejecuta cuando cambia el tema
      console.log("Theme changed:", theme);

      // Aplicar tema global
      document.documentElement.setAttribute("data-theme", theme);

      // Guardar preferencia
      localStorage.setItem("theme", theme);
    },
  },
};
```

## 🔐 Permisos y Roles

### Control de Acceso

```tsx
const sectionsWithPermissions: MenuSection[] = [
  {
    id: "admin",
    title: "ADMINISTRACIÓN",
    permissions: {
      roles: ["admin", "super-admin"],
      permissions: ["admin:read", "admin:write"],
    },
    items: [
      {
        id: "users",
        type: "link",
        to: "/admin/users",
        icon: FaUsers,
        label: "Usuarios",
        permissions: {
          roles: ["admin"],
          permissions: ["users:read"],
        },
      },
      {
        id: "settings",
        type: "link",
        to: "/admin/settings",
        icon: FaCog,
        label: "Configuración",
        permissions: {
          roles: ["super-admin"],
          conditions: (context) =>
            context.isAuthenticated && context.userRole === "super-admin",
        },
      },
    ],
  },
];
```

## 📱 Responsive Design

### Comportamientos por Dispositivo

```tsx
const config: SidebarConfig = {
  // ... otras configuraciones
  responsive: {
    breakpoint: "768", // px
    mobileBehavior: "overlay", // overlay | push | replace
    tabletBehavior: "overlay", // overlay | push | replace
  },
};
```

### Detección de Dispositivo

```tsx
const context: MenuContext = {
  isAuthenticated: true,
  userRole: "admin",
  userPermissions: ["read", "write"],
  currentPath: "/dashboard",
  sidebarExpanded: true,
  isMobile: window.innerWidth < 768, // Se detecta automáticamente
};
```

## 🎨 Animaciones

### Configuración de Animaciones

```tsx
const animations = {
  sidebar: {
    type: "slide", // slide | fade | scale | none
    duration: 300,
    easing: "ease-in-out",
    delay: 0,
  },
  items: {
    type: "fade",
    duration: 200,
    easing: "ease-in-out",
    stagger: 50, // ms entre cada item
  },
  accordion: {
    type: "slide",
    duration: 250,
    easing: "ease-in-out",
  },
};
```

## 🔌 Plugins

### Sistema de Plugins

```tsx
import { MenuPlugin } from "./types";

const searchPlugin: MenuPlugin = {
  name: "search",
  version: "1.0.0",
  install: (config) => ({
    ...config,
    features: {
      ...config.features,
      search: true,
    },
  }),
  uninstall: (config) => ({
    ...config,
    features: {
      ...config.features,
      search: false,
    },
  }),
};

// Aplicar plugin
const configWithSearch = searchPlugin.install(modernSidebarConfig);
```

## 🧪 Testing

### Ejemplo de Test

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./components/MenuLateral";

describe("Sidebar", () => {
  it("should render sidebar with correct items", () => {
    const setSidebarOpen = jest.fn();

    render(<Sidebar sidebarOpen={true} setSidebarOpen={setSidebarOpen} />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Formularios")).toBeInTheDocument();
  });

  it("should close sidebar when overlay is clicked", () => {
    const setSidebarOpen = jest.fn();

    render(<Sidebar sidebarOpen={true} setSidebarOpen={setSidebarOpen} />);

    const overlay = screen.getByRole("presentation");
    fireEvent.click(overlay);

    expect(setSidebarOpen).toHaveBeenCalledWith(false);
  });
});
```

## 📚 API Reference

### Tipos Principales

```tsx
// Configuración del sidebar
interface SidebarConfig {
  id: string;
  title?: string;
  behavior: SidebarBehavior;
  appearance: SidebarAppearance;
  animations: SidebarAnimations;
  responsive: SidebarResponsive;
  features: SidebarFeatures;
  callbacks: SidebarCallbacks;
  customizations: SidebarCustomizations;
}

// Item de menú
type MenuItem =
  | MenuLinkItem
  | MenuAccordionItem
  | MenuDividerItem
  | MenuHeaderItem
  | MenuCustomItem;

// Contexto del menú
interface MenuContext {
  isAuthenticated: boolean;
  userRole?: string;
  userPermissions?: string[];
  currentPath: string;
  sidebarExpanded: boolean;
  isMobile: boolean;
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes alguna pregunta o necesitas ayuda:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles de tu problema

---

¡Disfruta usando el Sidebar Moderno como componente principal! 🚀
