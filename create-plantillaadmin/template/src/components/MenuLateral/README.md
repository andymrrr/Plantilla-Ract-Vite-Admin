# MenuLateral - Sidebar Moderno

Un sistema de navegación lateral moderno, completamente tipado y altamente configurable para aplicaciones React con TypeScript.

## 🚀 Características Principales

- **✨ Diseño Moderno**: Interfaz elegante con modo oscuro/claro
- **📱 Responsive**: Adaptado para móvil, tablet y desktop
- **🎯 Totalmente Tipado**: TypeScript con tipos estrictos
- **🔍 Búsqueda en Tiempo Real**: Filtrado dinámico de elementos del menú
- **🎨 Temas**: Soporte para modo claro y oscuro con persistencia
- **📂 Accordions Inteligentes**: Comportamiento diferente según el estado del sidebar
- **♿ Accesible**: Cumple con estándares de accesibilidad
- **🎭 Animaciones Suaves**: Transiciones fluidas y profesionales
- **🏗️ Arquitectura Modular**: Componentes separados y hooks personalizados
- **🏢 Logo Dinámico**: Sistema de logo completamente personalizable con múltiples presets

## 📁 Estructura del Proyecto

```
MenuLateral/
├── components/           # Componentes React
│   ├── ModernSidebar.tsx        # Componente principal
│   ├── SidebarHeader.tsx        # Header con logo y toggle
│   ├── SidebarSearch.tsx        # Barra de búsqueda
│   ├── SidebarFooter.tsx        # Footer con tema y versión
│   ├── MenuItemLink.tsx         # Items de menú tipo enlace
│   ├── MenuItemAccordion.tsx    # Items de menú tipo acordeón
│   └── index.ts                 # Exportaciones de componentes
├── hooks/                # Hooks personalizados
│   ├── useSidebarState.ts       # Estado del sidebar
│   ├── useTheme.ts              # Gestión de temas
│   ├── useMenuSearch.ts         # Búsqueda del menú
│   ├── useAccordionHandlers.ts  # Handlers de acordeones
│   └── index.ts                 # Exportaciones de hooks
├── types/                # Definiciones de tipos
│   └── index.ts                 # Todos los tipos TypeScript
├── styles/               # Estilos CSS
│   └── ModernSidebar.css        # Estilos específicos del sidebar
├── config/               # Configuraciones
│   ├── logoConfig.ts            # Configuración de logos con presets
│   └── sidebarConfig.ts         # Configuración general del sidebar
├── examples/             # Ejemplos de uso
│   └── LogoExamples.tsx         # Demostración de logos
├── menuConfig.ts         # Configuración del menú
├── index.tsx            # Punto de entrada principal
└── README.md            # Esta documentación
```

## 🛠️ Uso Básico

### Importación Simple

```tsx
import Sidebar from "./components/MenuLateral";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1">{/* Tu contenido principal */}</main>
    </div>
  );
}
```

### Configuración del Menú

Edita `menuConfig.ts` para personalizar tu menú:

```tsx
export const menuConfig: MenuSection[] = [
  {
    title: "MENU PRINCIPAL",
    items: [
      {
        id: "dashboard",
        to: "/",
        icon: FaTachometerAlt,
        label: "Dashboard",
        type: "link",
      },
      {
        id: "forms",
        icon: FaWpforms,
        label: "Forms",
        type: "accordion",
        links: [
          { to: "/forms/basic", label: "Basic Form", icon: FaEdit },
          { to: "/forms/advanced", label: "Advanced Form", icon: FaCog },
        ],
      },
    ],
  },
];
```

## 🏢 Sistema de Logo Dinámico

El MenuLateral incluye un sistema avanzado de configuración de logos con múltiples presets predefinidos.

### Configuración Rápida

Cambia el preset activo en `config/logoConfig.ts`:

```tsx
// Cambiar a cualquier preset disponible
export const ACTIVE_LOGO_CONFIG: LogoConfig = LOGO_PRESETS.corporate;
// o LOGO_PRESETS.analytics, LOGO_PRESETS.ecommerce, etc.
```

### Presets Disponibles

| Preset       | Descripción             | Tamaño | Características                 |
| ------------ | ----------------------- | ------ | ------------------------------- |
| `default`    | Admin Panel genérico    | lg     | Indicador online, efectos hover |
| `corporate`  | Empresarial profesional | lg     | Sin indicador, efectos suaves   |
| `analytics`  | Dashboard de análisis   | md     | Verde, ideal para datos         |
| `ecommerce`  | Tienda online           | lg     | Púrpura/rosa, comercial         |
| `education`  | Plataforma educativa    | lg     | Azul/cyan, académico            |
| `healthcare` | Sistema de salud        | lg     | Rojo/rosa, médico               |
| `startup`    | Startup/innovación      | lg     | Naranja/rojo, dinámico          |
| `security`   | Panel de seguridad      | lg     | Amarillo/naranja, seguridad     |
| `premium`    | Dashboard premium       | xl     | Dorado, lujoso                  |
| `minimal`    | Diseño minimalista      | sm     | Sin efectos, simple             |

### Configuración Personalizada

```tsx
import { createCustomLogoConfig, LOGO_PRESETS } from "./config/logoConfig";

// Crear configuración personalizada basada en un preset
export const ACTIVE_LOGO_CONFIG = createCustomLogoConfig("corporate", {
  title: "Mi Empresa",
  subtitle: "Dashboard",
  imagePath: "/mi-logo.svg",
  size: "xl",
  showOnlineIndicator: true,
});
```

### Configuración Completa

```tsx
export const ACTIVE_LOGO_CONFIG: LogoConfig = {
  // Imagen del logo (opcional)
  imagePath: "/mi-logo.svg",
  altText: "Mi Logo",

  // Icono de fallback si la imagen falla
  fallbackIcon: FaBuilding,
  fallbackBgGradient: {
    from: "from-blue-500",
    to: "to-indigo-600",
  },

  // Textos
  title: "Mi Aplicación",
  subtitle: "Dashboard",
  showSubtitle: true,

  // Configuración visual
  size: "lg", // 'sm' | 'md' | 'lg' | 'xl'
  showOnlineIndicator: true,
  showTooltip: true,

  // Animaciones
  enableHoverEffects: true,
  enablePulseIndicator: true,
};
```

### Componente de Demostración

Usa `LogoExamples` para probar diferentes configuraciones:

```tsx
import { LogoExamples } from "./components/MenuLateral/examples/LogoExamples";

function ConfigPage() {
  return <LogoExamples />;
}
```

## 🎨 Tipos de Items de Menú

### 1. Enlaces Simples (`type: 'link'`)

```tsx
{
  id: "dashboard",
  to: "/dashboard",
  icon: FaTachometerAlt,
  label: "Dashboard",
  type: "link",
}
```

### 2. Acordeones (`type: 'accordion'`)

```tsx
{
  id: "forms",
  icon: FaWpforms,
  label: "Forms",
  type: "accordion",
  links: [
    { to: "/forms/basic", label: "Basic Form", icon: FaEdit },
    { to: "/forms/advanced", label: "Advanced Form", icon: FaCog },
  ],
}
```

## 🔧 Hooks Personalizados

### `useSidebarState`

Gestiona el estado completo del sidebar:

- Secciones expandidas
- Popups de acordeones
- Referencias DOM
- Event listeners

### `useTheme`

Maneja el tema de la aplicación:

- Modo claro/oscuro
- Persistencia en localStorage
- Aplicación automática de clases CSS

### `useMenuSearch`

Implementa la búsqueda en tiempo real:

- Filtrado por texto
- Búsqueda en enlaces anidados
- Memorización de resultados

### `useAccordionHandlers`

Gestiona la interacción con acordeones:

- Comportamiento diferente según estado del sidebar
- Manejo de hover para popups
- Timeouts y limpieza

## 🎯 Componentes Especializados

### `SidebarHeader`

- Logo y título de la aplicación
- Botón toggle para expandir/colapsar
- Responsive design

### `SidebarSearch`

- Input de búsqueda con icono
- Filtrado en tiempo real
- Accesibilidad completa

### `MenuItemLink`

- Enlaces simples de navegación
- Estados activos
- Tooltips en modo colapsado

### `MenuItemAccordion`

- Acordeones con sub-enlaces
- Popups elegantes en modo colapsado
- Gestión completa de estados

### `SidebarFooter`

- Toggle de tema claro/oscuro
- Información de versión
- Controles adicionales

## 📱 Comportamiento Responsive

### Desktop (≥ 1024px)

- Sidebar siempre visible
- Modo expandido/colapsado
- Popups para acordeones en modo colapsado

### Tablet/Mobile (< 1024px)

- Sidebar como overlay
- Cierre automático al seleccionar
- Backdrop oscuro

## ♿ Accesibilidad

- **ARIA Labels**: Todos los elementos interactivos
- **Keyboard Navigation**: Soporte completo de teclado
- **Screen Readers**: Compatibilidad total
- **Focus Management**: Indicadores visuales claros
- **Semantic HTML**: Estructura semántica correcta

## 🎨 Personalización de Estilos

### Variables CSS Personalizadas

```css
.sidebar-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.sidebar-scroll::-webkit-scrollbar {
  display: none;
}
```

### Temas Personalizados

El sistema usa Tailwind CSS con soporte para modo oscuro:

```css
/* Modo claro */
.bg-white dark:bg-gray-900

/* Modo oscuro automático */
.text-gray-900 dark:text-white
```

## 🔧 Configuración Avanzada

### Personalizar Iconos

```tsx
import { FaCustomIcon } from "react-icons/fa";

const customMenuItem = {
  id: "custom",
  icon: FaCustomIcon,
  label: "Custom Item",
  type: "link" as const,
  to: "/custom",
};
```

### Eventos Personalizados

```tsx
const handleCustomClick = (itemId: string) => {
  console.log(`Clicked on ${itemId}`);
  // Tu lógica personalizada
};
```

## 🚀 Mejores Prácticas

1. **Organización**: Mantén el `menuConfig.ts` organizado por secciones lógicas
2. **Iconos**: Usa iconos consistentes de la misma librería (react-icons)
3. **Rutas**: Asegúrate de que todas las rutas estén definidas en tu router
4. **Tipos**: Aprovecha los tipos TypeScript para evitar errores
5. **Performance**: Los hooks están optimizados con `useMemo` y `useCallback`

## 🔄 Migración desde Versión Legacy

Si vienes de una versión anterior:

1. Actualiza las importaciones:

   ```tsx
   // Antes
   import { LegacySidebar } from "./MenuLateral/LegacySidebar";

   // Ahora
   import Sidebar from "./components/MenuLateral";
   ```

2. Actualiza la configuración del menú según el nuevo formato

3. Los props principales se mantienen compatibles

## 🐛 Troubleshooting

### El sidebar no aparece

- Verifica que las clases de Tailwind CSS estén disponibles
- Revisa que el z-index no esté siendo sobrescrito

### Los accordeones no funcionan

- Asegúrate de que `type: 'accordion'` esté correctamente configurado
- Verifica que el array `links` esté presente y no vacío

### Los popups se ven mal

- Revisa que el `colorMode` se esté pasando correctamente
- Verifica que no hay conflictos de z-index

### La búsqueda no funciona

- Confirma que `searchQuery` se está actualizando
- Revisa la configuración del menú para campos faltantes

## 📈 Rendimiento

- **Lazy Loading**: Los componentes se cargan bajo demanda
- **Memoización**: Hooks optimizados con React.memo
- **Event Listeners**: Limpieza automática para evitar memory leaks
- **CSS Optimizado**: Transiciones GPU-accelerated

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para la comunidad React + TypeScript**

# 🎯 MenuLateral - Análisis y Mejoras Implementadas

## 📋 **RESUMEN DEL ANÁLISIS**

Se realizó un análisis profundo del componente MenuLateral y se implementaron mejoras organizacionales significativas aplicando buenas prácticas de desarrollo.

## ✅ **PROBLEMAS IDENTIFICADOS Y SOLUCIONADOS**

### **1. ERROR TÉCNICO CORREGIDO** ❌➡️✅

- **Problema**: Error `Cannot find namespace 'NodeJS'` en el debounce
- **Solución**: Cambio de `NodeJS.Timeout` a `number` para compatibilidad con navegadores

### **2. DUPLICACIÓN DE TIPOS** ❌➡️✅

- **Problema**: Tipos duplicados en `types/index.ts` y `menuConfig.ts`
- **Solución**: Centralización en `core/types.ts` con tipos mejorados

### **3. FALTA DE SEPARACIÓN DE RESPONSABILIDADES** ❌➡️✅

- **Problema**: Utilidades mezcladas en un solo archivo grande
- **Solución**: Separación por funcionalidad en carpetas específicas

### **4. CONFIGURACIÓN MEZCLADA CON LÓGICA** ❌➡️✅

- **Problema**: `menuConfig.ts` contenía tipos y configuración
- **Solución**: Separación clara entre `config/` y `core/`

### **5. FALTA DE SERVICIOS DE DOMINIO** ❌➡️✅

- **Problema**: Lógica de negocio esparcida
- **Solución**: Creación de `MenuService` con patrón Singleton

## 🏗️ **NUEVA ESTRUCTURA ORGANIZADA**

```
📁 MenuLateral/
├── 📁 core/                      # ✨ NUEVO: Lógica de negocio central
│   └── types.ts                  # ✨ Tipos centralizados y mejorados
├── 📁 config/                    # ✨ NUEVO: Configuraciones separadas
│   └── menuConfig.ts             # ✨ Solo configuración, sin tipos
├── 📁 services/                  # ✨ NUEVO: Servicios de dominio
│   └── MenuService.ts            # ✨ Lógica de negocio centralizada
├── 📁 utils/                     # ✨ MEJORADO: Utilidades organizadas
│   ├── index.ts                  # ✨ Solo exportaciones limpias
│   ├── 📁 menu/                  # ✨ NUEVO: Utilidades específicas del menú
│   │   ├── menuUtils.ts          # ✨ Operaciones sobre menú
│   │   └── validationUtils.ts    # ✨ Validaciones específicas
│   ├── 📁 search/                # ✨ NUEVO: Utilidades de búsqueda
│   │   └── searchUtils.ts        # ✨ Búsqueda avanzada con relevancia
│   ├── 📁 performance/           # ✨ NUEVO: Optimizaciones de rendimiento
│   │   └── performanceUtils.ts   # ✨ Debounce, throttle, memoización
│   ├── 📁 responsive/            # ✨ NUEVO: Utilidades responsive
│   │   └── responsiveUtils.ts    # ✨ Breakpoints y detección de dispositivo
│   ├── 📁 theme/                 # ✨ NUEVO: Gestión de temas
│   │   └── themeUtils.ts         # ✨ Manejo avanzado de temas
│   └── 📁 positioning/           # ✨ NUEVO: Cálculos de posición
│       └── positioningUtils.ts   # ✨ Posicionamiento inteligente de popups
├── 📁 hooks/                     # ✅ MANTENIDO: Hooks existentes
├── 📁 components/                # ✅ MANTENIDO: Componentes existentes
└── 📁 constants/                 # ✅ MANTENIDO: Constantes existentes
```

## 🚀 **MEJORAS IMPLEMENTADAS**

### **1. TIPOS MEJORADOS Y CENTRALIZADOS**

```typescript
// ✨ ANTES: Tipos duplicados
// ❌ types/index.ts + menuConfig.ts

// ✨ DESPUÉS: Tipos centralizados con mejoras
// ✅ core/types.ts
export interface MenuItem {
  id: string;
  // ... propiedades existentes
  badge?: {
    text: string;
    variant: "default" | "success" | "warning" | "error";
  };
  permissions?: string[];
}
```

### **2. SERVICIO DE MENÚ CON PATRÓN SINGLETON**

```typescript
// ✨ NUEVO: Servicio centralizado
export class MenuService {
  public validateMenuConfig(config: MenuConfig): ValidationResult;
  public filterByPermissions(userPermissions: string[]): MenuSection[];
  public findItemById(itemId: string): MenuItem | null;
  public getMenuStats(): MenuStats;
}
```

### **3. UTILIDADES ESPECIALIZADAS**

#### **Búsqueda Avanzada**

```typescript
// ✨ NUEVO: Búsqueda con relevancia
export const calculateSearchRelevance = (itemText: string, searchQuery: string): number;
export const sortBySearchRelevance = <T>(items: T[], searchQuery: string): T[];
```

#### **Performance Optimizada**

```typescript
// ✨ MEJORADO: Sin errores de NodeJS
export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number);
export const memoize = <TArgs, TReturn>(fn: (...args: TArgs) => TReturn);
```

#### **Posicionamiento Inteligente**

```typescript
// ✨ NUEVO: Posicionamiento avanzado
export const calculateTooltipPosition = (element: HTMLElement, ...);
export const adjustPopupToFitScreen = (top: number, left: number, ...);
```

### **4. CONFIGURACIÓN MEJORADA**

```typescript
// ✨ NUEVO: Configuración estructurada
export const menuConfig: MenuConfig = {
  version: '1.0.0',
  lastUpdated: new Date(),
  sections: [...] // Configuración con IDs únicos y badges
};
```

## 📊 **BENEFICIOS DE LAS MEJORAS**

### **🔧 Mantenibilidad**

- ✅ Código más organizado y fácil de encontrar
- ✅ Separación clara de responsabilidades
- ✅ Reutilización mejorada de componentes

### **🚀 Escalabilidad**

- ✅ Fácil agregar nuevas funcionalidades
- ✅ Estructura preparada para crecimiento
- ✅ Servicios centralizados para lógica compleja

### **🛡️ Robustez**

- ✅ Validaciones centralizadas
- ✅ Manejo de errores mejorado
- ✅ Tipos más específicos y seguros

### **⚡ Performance**

- ✅ Utilidades de optimización organizadas
- ✅ Funciones de debounce/throttle corregidas
- ✅ Memoización para operaciones costosas

### **🎨 Experiencia de Usuario**

- ✅ Búsqueda con relevancia
- ✅ Posicionamiento inteligente de popups
- ✅ Soporte para badges y permisos

## 🔄 **COMPATIBILIDAD**

### **✅ Retrocompatibilidad Mantenida**

- Todas las exportaciones existentes siguen funcionando
- Los hooks existentes no requieren cambios
- Los componentes mantienen sus interfaces

### **📈 Migración Gradual**

```typescript
// ✅ Uso antiguo (aún funciona)
import { findMenuItemById } from "../utils";

// ✨ Uso nuevo (recomendado)
import { menuService } from "../services/MenuService";
const item = menuService.findItemById("dashboard");
```

## 🎯 **PRÓXIMOS PASOS RECOMENDADOS**

1. **Implementar sistema de permisos completo**
2. **Agregar lazy loading para secciones grandes**
3. **Implementar analytics de uso del menú**
4. **Agregar soporte para temas personalizados**
5. **Crear tests unitarios para los servicios**

## ✨ **CONCLUSIÓN**

La reorganización implementada transforma el MenuLateral de un componente funcional a una **arquitectura escalable y mantenible** que sigue las mejores prácticas de desarrollo, eliminando código duplicado, mejorando la organización y preparando el componente para futuras expansiones.

**¡El error original fue corregido y el componente ahora está significativamente mejor organizado!** 🎉
