# 🎨 Sistema de Skeleton Components

Un sistema completo y personalizable de componentes skeleton para mostrar estados de carga elegantes y profesionales.

## 📚 Tabla de Contenidos

- [Características](#-características)
- [Instalación](#-instalación)
- [Uso Básico](#-uso-básico)
- [Componentes Disponibles](#-componentes-disponibles)
- [Esquemas de Colores](#-esquemas-de-colores)
- [Animaciones](#-animaciones)
- [Ejemplos Avanzados](#-ejemplos-avanzados)
- [Mejores Prácticas](#-mejores-prácticas)

## ✨ Características

- 🎨 **Múltiples esquemas de colores** predefinidos + colores personalizados
- 🔄 **4 tipos de animaciones**: pulse, wave, shimmer, none
- 🎭 **Variantes de forma**: rectangular, circular, rounded, text
- 📱 **Completamente responsive** con soporte para dark mode
- 🍔 **Componentes específicos** para menú lateral, avatares, imágenes, etc.
- ⚡ **Alto rendimiento** con animaciones CSS optimizadas
- 🔧 **TypeScript completo** con tipos seguros
- ♿ **Accesible** con atributos ARIA correctos

## 🚀 Instalación

Los componentes ya están incluidos en el proyecto. Solo importa lo que necesites:

```tsx
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonImage,
  MenuSkeleton,
  SKELETON_COLOR_SCHEMES,
  SKELETON_ANIMATIONS,
} from "../UI/Skeleton";
```

## 🎯 Uso Básico

### Skeleton Simple

```tsx
<Skeleton width="100%" height="20px" variant="rounded" animation="pulse" />
```

### Skeleton de Texto

```tsx
<SkeletonText lines={3} lastLineWidth="75%" colorScheme="blue" />
```

### Skeleton de Avatar

```tsx
<SkeletonAvatar size="lg" animation="shimmer" />
```

## 🧩 Componentes Disponibles

### 1. `<Skeleton />` - Componente Base

El componente fundamental para crear cualquier tipo de skeleton.

```tsx
interface SkeletonProps {
  colorScheme?:
    | "default"
    | "light"
    | "dark"
    | "blue"
    | "green"
    | "purple"
    | "custom";
  customColors?: { base?: string; highlight?: string };
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "shimmer" | "none";
  variant?: "rectangular" | "circular" | "rounded" | "text";
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
```

### 2. `<SkeletonText />` - Para Texto

Ideal para párrafos y títulos.

```tsx
<SkeletonText
  lines={3}
  lineHeight="1.2rem"
  lastLineWidth="60%"
  colorScheme="default"
/>
```

### 3. `<SkeletonAvatar />` - Para Avatares

Círculos perfectos para imágenes de perfil.

```tsx
<SkeletonAvatar
  size="md" // 'sm' | 'md' | 'lg' | 'xl'
  animation="pulse"
/>
```

### 4. `<SkeletonImage />` - Para Imágenes

Con ratios de aspecto predefinidos.

```tsx
<SkeletonImage
  aspectRatio="video" // 'square' | 'video' | 'wide' | 'tall'
  width="100%"
/>
```

### 5. `<MenuSkeleton />` - Para Menú Lateral

Replica la estructura exacta de tu menú lateral.

```tsx
<MenuSkeleton
  sections={2}
  itemsPerSection={4}
  showHeader={true}
  showUserArea={true}
  showAccordions={true}
  variant="default"
/>
```

## 🎨 Esquemas de Colores

### Predefinidos

```tsx
// Esquemas disponibles
"default"; // Gris estándar
"light"; // Gris claro
"dark"; // Gris oscuro
"blue"; // Azul suave
"green"; // Verde suave
"purple"; // Púrpura suave
```

### Colores Personalizados

```tsx
<Skeleton
  colorScheme="custom"
  customColors={{
    base: "#f0f0f0",
    highlight: "#e0e0e0",
  }}
/>
```

## 🔄 Animaciones

### Tipos Disponibles

```tsx
"pulse"; // Pulsación suave (por defecto)
"wave"; // Onda que va y viene
"shimmer"; // Brillo que se desliza
"none"; // Sin animación
```

### Ejemplo de Animaciones

```tsx
{
  /* Pulsación suave */
}
<Skeleton animation="pulse" />;

{
  /* Efecto shimmer */
}
<Skeleton animation="shimmer" />;

{
  /* Sin animación */
}
<Skeleton animation="none" />;
```

## 🚀 Ejemplos Avanzados

### Skeleton de Tarjeta Completa

```tsx
const CardSkeleton = () => (
  <div className="p-4 border rounded-lg">
    {/* Header con avatar y texto */}
    <div className="flex items-center gap-3 mb-4">
      <SkeletonAvatar size="md" />
      <div className="flex-1">
        <SkeletonText lines={2} lastLineWidth="60%" />
      </div>
    </div>

    {/* Imagen principal */}
    <SkeletonImage aspectRatio="video" className="mb-4" />

    {/* Contenido */}
    <SkeletonText lines={3} lastLineWidth="80%" />
  </div>
);
```

### Skeleton de Lista

```tsx
const ListSkeleton = () => (
  <div className="space-y-4">
    {Array.from({ length: 5 }, (_, index) => (
      <div key={index} className="flex items-center gap-3 p-3">
        <SkeletonAvatar size="sm" />
        <div className="flex-1">
          <SkeletonText lines={2} />
        </div>
        <Skeleton width="80px" height="32px" variant="rounded" />
      </div>
    ))}
  </div>
);
```

### Menú con Loading Condicional

```tsx
const MenuConSkeleton = ({ isLoading, sidebarOpen, setSidebarOpen }) => {
  if (isLoading) {
    return (
      <MenuSkeleton
        colorScheme="blue"
        animation="shimmer"
        sections={2}
        itemsPerSection={4}
      />
    );
  }

  return (
    <MenuLateral sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  );
};
```

## 💡 Mejores Prácticas

### 1. Consistencia Visual

```tsx
// ✅ Mantén el mismo esquema de color en toda la aplicación
const APP_SKELETON_SCHEME = 'blue';

<Skeleton colorScheme={APP_SKELETON_SCHEME} />
<SkeletonText colorScheme={APP_SKELETON_SCHEME} />
```

### 2. Duración de Animación

```tsx
// ✅ Usa animaciones sutiles para mejor UX
<Skeleton animation="pulse" />  // Recomendado para la mayoría de casos
<Skeleton animation="shimmer" /> // Para elementos importantes
```

### 3. Responsive Design

```tsx
// ✅ Adapta el skeleton al contenido real
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {Array.from({ length: 6 }, (_, i) => (
    <Skeleton key={i} height="200px" variant="rounded" />
  ))}
</div>
```

### 4. Accesibilidad

```tsx
// ✅ Los componentes ya incluyen atributos ARIA
<Skeleton role="status" aria-label="Cargando contenido..." />
```

### 5. Performance

```tsx
// ✅ Usa React.memo para listas largas
const SkeletonItem = React.memo(() => <Skeleton width="100%" height="40px" />);
```

## 🎮 Showcase en Desarrollo

Para ver todos los componentes en acción, visita:

- **Ruta**: `/dev/skeleton-showcase`
- **Menú**: Desarrollo > Skeleton Showcase

El showcase incluye:

- 🎛️ Controles interactivos para probar todas las opciones
- 🎨 Selector de esquemas de colores
- 🔄 Selector de animaciones
- 📋 Código de ejemplo generado dinámicamente
- 🖼️ Vista previa en tiempo real

## 🔧 Personalización Avanzada

### Extender Esquemas de Color

```tsx
// En tu archivo de configuración
const CUSTOM_COLOR_SCHEMES = {
  ...SKELETON_COLOR_SCHEMES,
  brand: 'brand' as const,
};

// Agregar en tailwind.config.js
colors: {
  'skeleton-brand-base': '#your-color',
  'skeleton-brand-highlight': '#your-highlight-color',
}
```

### Nuevas Animaciones

```tsx
// En tailwind.config.js
keyframes: {
  'custom-bounce': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
  }
},
animation: {
  'custom-bounce': 'custom-bounce 1s ease-in-out infinite',
}
```

## 📱 Soporte Responsive

Los componentes skeleton están optimizados para todos los tamaños de pantalla:

- 📱 **Móvil**: Skeleton compacto y táctil
- 📊 **Tablet**: Skeleton adaptativo
- 🖥️ **Desktop**: Skeleton completo con todas las características

## 🌙 Soporte Dark Mode

Todos los esquemas de colores incluyen variantes para modo oscuro automáticamente:

```tsx
// Se adapta automáticamente al tema actual
<Skeleton colorScheme="default" /> // Gris claro en light, gris oscuro en dark
```

---

¡Disfruta creando experiencias de carga elegantes y profesionales! 🚀
