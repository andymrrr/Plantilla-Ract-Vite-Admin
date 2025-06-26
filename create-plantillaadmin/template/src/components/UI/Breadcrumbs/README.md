# Breadcrumb Component

Un componente de breadcrumb altamente configurable y modular para React con TypeScript.

## Características

- ✅ **Múltiples variantes de diseño**: default, minimal, detailed, compact
- ✅ **Navegación flexible**: soporte para links, botones y items estáticos
- ✅ **Iconos personalizables**: iconos para items, título y home
- ✅ **Truncamiento inteligente**: oculta items cuando hay demasiados
- ✅ **Accesibilidad**: etiquetas ARIA y navegación por teclado
- ✅ **Tema oscuro**: soporte completo para modo oscuro
- ✅ **Responsive**: se adapta a diferentes tamaños de pantalla
- ✅ **Modular**: componentes reutilizables y extensibles

## Uso Básico

```tsx
import { Breadcrumb } from '@/components/UI/Breadcrumbs';

// Uso simple
<Breadcrumb pageName="Mi Página" />

// Con items personalizados
<Breadcrumb
  pageName="Detalles del Usuario"
  items={[
    { label: 'Usuarios', href: '/usuarios' },
    { label: 'Lista', href: '/usuarios/lista' }
  ]}
/>
```

## Variantes de Diseño

### Default

```tsx
<Breadcrumb pageName="Dashboard" variant="default" />
```

### Minimal

```tsx
<Breadcrumb pageName="Configuración" variant="minimal" />
```

### Detailed

```tsx
<Breadcrumb pageName="Reportes" variant="detailed" titleIcon={<ChartIcon />} />
```

### Compact

```tsx
<Breadcrumb pageName="Perfil" variant="compact" />
```

## Props

### BreadcrumbProps

| Prop                 | Tipo                                                | Default             | Descripción                         |
| -------------------- | --------------------------------------------------- | ------------------- | ----------------------------------- |
| `items`              | `BreadcrumbItem[]`                                  | `[]`                | Items personalizados del breadcrumb |
| `pageName`           | `string`                                            | -                   | Nombre de la página actual          |
| `variant`            | `'default' \| 'minimal' \| 'detailed' \| 'compact'` | `'default'`         | Variante de diseño                  |
| `separator`          | `React.ReactNode`                                   | `<RightOutlined />` | Separador entre items               |
| `showHome`           | `boolean`                                           | `true`              | Mostrar item de home                |
| `homeIcon`           | `React.ReactNode`                                   | `<FaHome />`        | Icono del home                      |
| `homeLabel`          | `string`                                            | `'Dashboard'`       | Etiqueta del home                   |
| `homeHref`           | `string`                                            | `'/'`               | URL del home                        |
| `showTitle`          | `boolean`                                           | `true`              | Mostrar título de la página         |
| `titleIcon`          | `React.ReactNode`                                   | -                   | Icono del título                    |
| `maxItems`           | `number`                                            | -                   | Máximo número de items a mostrar    |
| `truncateItems`      | `boolean`                                           | `false`             | Habilitar truncamiento de items     |
| `className`          | `string`                                            | -                   | Clases CSS adicionales              |
| `containerClassName` | `string`                                            | -                   | Clases del contenedor               |
| `titleClassName`     | `string`                                            | -                   | Clases del título                   |
| `navClassName`       | `string`                                            | -                   | Clases de navegación                |

### BreadcrumbItem

| Prop       | Tipo              | Descripción                |
| ---------- | ----------------- | -------------------------- |
| `label`    | `string`          | Texto del item             |
| `href`     | `string`          | URL del link (opcional)    |
| `icon`     | `React.ReactNode` | Icono del item (opcional)  |
| `isActive` | `boolean`         | Si es el item activo       |
| `onClick`  | `() => void`      | Función onClick (opcional) |

## Ejemplos Avanzados

### Breadcrumb con Items Personalizados

```tsx
import { FaUsers, FaList, FaUser } from "react-icons/fa";

<Breadcrumb
  pageName="Detalles del Usuario"
  items={[
    {
      label: "Usuarios",
      href: "/usuarios",
      icon: <FaUsers />,
    },
    {
      label: "Lista",
      href: "/usuarios/lista",
      icon: <FaList />,
    },
  ]}
  titleIcon={<FaUser />}
/>;
```

### Breadcrumb con Truncamiento

```tsx
<Breadcrumb
  pageName="Configuración Avanzada"
  items={[
    { label: "Admin", href: "/admin" },
    { label: "Sistema", href: "/admin/sistema" },
    { label: "Configuración", href: "/admin/sistema/config" },
    { label: "Avanzada", href: "/admin/sistema/config/avanzada" },
  ]}
  maxItems={4}
  truncateItems={true}
/>
```

### Breadcrumb con Separador Personalizado

```tsx
import { FaChevronRight } from "react-icons/fa";

<Breadcrumb
  pageName="Mi Página"
  separator={<FaChevronRight />}
  variant="minimal"
/>;
```

### Breadcrumb sin Título

```tsx
<Breadcrumb pageName="Dashboard" showTitle={false} variant="compact" />
```

### Breadcrumb con Items con onClick

```tsx
<Breadcrumb
  pageName="Resultados"
  items={[
    {
      label: "Búsqueda",
      onClick: () => console.log("Volver a búsqueda"),
    },
  ]}
/>
```

## Componentes Internos

Para casos de uso avanzados, puedes usar los componentes internos directamente:

```tsx
import {
  BreadcrumbContainer,
  BreadcrumbTitle,
  BreadcrumbNavigation,
} from "@/components/UI/Breadcrumbs";

<BreadcrumbContainer variant="detailed">
  <BreadcrumbTitle pageName="Mi Página" variant="detailed" />
  <BreadcrumbNavigation items={items} variant="detailed" />
</BreadcrumbContainer>;
```

## Utilidades

El componente incluye utilidades para personalización:

```tsx
import {
  combinarClases,
  obtenerClasesContenedor,
  truncarItems,
} from "@/components/UI/Breadcrumbs";

// Combinar clases CSS
const clases = combinarClases("clase1", "clase2", undefined);

// Obtener clases por variante
const clasesContenedor = obtenerClasesContenedor("detailed");

// Truncar items
const itemsTruncados = truncarItems(items, 5);
```

## Estilos CSS

El componente usa Tailwind CSS y es completamente personalizable. Las clases se organizan por variante en el archivo `utils.ts`.

### Variables CSS Personalizables

```css
:root {
  --breadcrumb-primary: #3b82f6;
  --breadcrumb-text: #374151;
  --breadcrumb-bg: #ffffff;
  --breadcrumb-border: #e5e7eb;
}

.dark {
  --breadcrumb-primary: #60a5fa;
  --breadcrumb-text: #f9fafb;
  --breadcrumb-bg: #1f2937;
  --breadcrumb-border: #374151;
}
```

## Accesibilidad

- ✅ Etiqueta `aria-label="Breadcrumb"` en la navegación
- ✅ Navegación por teclado con Tab
- ✅ Roles semánticos apropiados
- ✅ Estados de foco visibles
- ✅ Textos descriptivos para lectores de pantalla

## Migración desde la Versión Anterior

Si estás migrando desde la versión anterior, el componente mantiene compatibilidad:

```tsx
// Antes
<Breadcrumb pageName="Mi Página" />

// Ahora (funciona igual)
<Breadcrumb pageName="Mi Página" />

// Nuevas opciones disponibles
<Breadcrumb
  pageName="Mi Página"
  variant="detailed"
  items={[...]}
  maxItems={5}
  truncateItems={true}
/>
```

## Contribución

Para contribuir al componente:

1. Los tipos están en `types.ts`
2. Las utilidades en `utils.ts`
3. Los componentes internos en `components/`
4. Documenta nuevos cambios en este README
5. Mantén la compatibilidad hacia atrás
