# Componente Contenedor

Un componente flexible y responsive para organizar contenido con múltiples opciones de layout, espaciado y personalización.

## Características

- ✅ **Completamente compatible** con el uso actual
- ✅ **Múltiples layouts**: Grid, Flex y Block
- ✅ **Espaciado configurable**: 6 niveles de espaciado
- ✅ **Padding personalizable**: 5 niveles de padding
- ✅ **Columnas flexibles**: 1, 2, 3, 4, 6, 12 columnas
- ✅ **Responsive por defecto**
- ✅ **Accesibilidad integrada**
- ✅ **TypeScript completo**
- ✅ **Documentación JSDoc**

## Uso Básico

```tsx
import { Contenedor } from "../../components/UI/Contenedor";

// Uso básico - Compatible con el código actual
<Contenedor>
  <div>Contenido 1</div>
  <div>Contenido 2</div>
  <div>Contenido 3</div>
</Contenedor>;
```

## Props

| Prop               | Tipo                          | Por defecto | Descripción                    |
| ------------------ | ----------------------------- | ----------- | ------------------------------ |
| `children`         | `ReactNode`                   | -           | Contenido del contenedor       |
| `spacing`          | `ContenedorSpacing`           | `'md'`      | Espaciado entre elementos      |
| `padding`          | `ContenedorPadding`           | `'none'`    | Padding interno                |
| `layout`           | `ContenedorLayout`            | `'grid'`    | Tipo de layout                 |
| `columns`          | `1 \| 2 \| 3 \| 4 \| 6 \| 12` | `12`        | Número de columnas             |
| `className`        | `string`                      | `''`        | Clases CSS adicionales         |
| `id`               | `string`                      | -           | ID del elemento                |
| `aria-label`       | `string`                      | -           | Título para accesibilidad      |
| `aria-describedby` | `string`                      | -           | Descripción para accesibilidad |
| `responsive`       | `boolean`                     | `true`      | Si debe ser responsive         |
| `center`           | `boolean`                     | `false`     | Si debe centrar contenido      |
| `fullHeight`       | `boolean`                     | `false`     | Si debe tener altura completa  |
| `fullWidth`        | `boolean`                     | `true`      | Si debe tener ancho completo   |

## Tipos

### ContenedorSpacing

```tsx
type ContenedorSpacing = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
```

### ContenedorPadding

```tsx
type ContenedorPadding = "none" | "sm" | "md" | "lg" | "xl";
```

### ContenedorLayout

```tsx
type ContenedorLayout = "grid" | "flex" | "block";
```

## Ejemplos de Uso

### Layout Grid con 3 Columnas

```tsx
<Contenedor layout="grid" columns={3} spacing="lg">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</Contenedor>
```

### Layout Flex Centrado

```tsx
<Contenedor layout="flex" spacing="md" padding="lg" center>
  <div>Elemento centrado 1</div>
  <div>Elemento centrado 2</div>
</Contenedor>
```

### Con Padding y Clases Personalizadas

```tsx
<Contenedor
  columns={4}
  spacing="md"
  padding="lg"
  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
>
  <div className="bg-white p-4 rounded shadow">Elemento 1</div>
  <div className="bg-white p-4 rounded shadow">Elemento 2</div>
  <div className="bg-white p-4 rounded shadow">Elemento 3</div>
  <div className="bg-white p-4 rounded shadow">Elemento 4</div>
</Contenedor>
```

### Con Accesibilidad

```tsx
<Contenedor
  columns={2}
  spacing="md"
  aria-label="Sección de productos"
  aria-describedby="desc-productos"
  id="productos-contenedor"
>
  <div>Producto 1</div>
  <div>Producto 2</div>
</Contenedor>
<p id="desc-productos" className="text-sm text-gray-600">
  Lista de productos disponibles
</p>
```

## Migración desde el Componente Anterior

El componente es **completamente compatible** con el uso anterior. No necesitas cambiar nada en tu código existente:

```tsx
// Código anterior - Sigue funcionando
<Contenedor>
  <div>Contenido</div>
</Contenedor>

// Nuevas opciones disponibles
<Contenedor
  spacing="lg"
  padding="md"
  columns={3}
>
  <div>Contenido</div>
</Contenedor>
```

## Clases CSS Generadas

### Espaciado

- `xs`: `gap-2`
- `sm`: `gap-3`
- `md`: `gap-4`
- `lg`: `gap-6`
- `xl`: `gap-8`
- `2xl`: `gap-10`

### Padding

- `none`: `''`
- `sm`: `p-2`
- `md`: `p-4`
- `lg`: `p-6`
- `xl`: `p-8`

### Layout

- `grid`: `grid`
- `flex`: `flex flex-wrap`
- `block`: `block`

### Columnas

- `1`: `grid-cols-1`
- `2`: `grid-cols-1 md:grid-cols-2`
- `3`: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `4`: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- `6`: `grid-cols-2 md:grid-cols-3 lg:grid-cols-6`
- `12`: `grid-cols-12`

## Mejoras Implementadas

### Antes

```tsx
// Componente básico con layout fijo
export const Contenedor = ({ children }: ContenedorPropiedad) => {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
      <div className="col-span-12">{children}</div>
    </div>
  );
};
```

### Después

```tsx
// Componente flexible con múltiples opciones
export const Contenedor = forwardRef<HTMLDivElement, ContenedorProps>(
  (
    {
      children,
      spacing = "md",
      padding = "none",
      layout = "grid",
      columns = 12,
      className = "",
      // ... más props
    },
    ref
  ) => {
    // Lógica dinámica para construir clases CSS
    // Soporte para accesibilidad
    // Ref forwarding
    // TypeScript completo
  }
);
```

## Beneficios

1. **Flexibilidad**: Múltiples opciones de layout y espaciado
2. **Compatibilidad**: No rompe el código existente
3. **Accesibilidad**: Atributos ARIA integrados
4. **TypeScript**: Tipado completo y seguro
5. **Performance**: Optimizado con forwardRef
6. **Mantenibilidad**: Código bien documentado y estructurado
7. **Responsive**: Diseño adaptativo por defecto
8. **Personalizable**: Clases CSS adicionales soportadas
