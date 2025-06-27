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
├── examples/             # Ejemplos de uso
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
