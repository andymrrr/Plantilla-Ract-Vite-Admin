# Componente Contenedor

Un componente flexible y responsive para organizar contenido con múltiples opciones de layout, espaciado y personalización.

## Estructura del Proyecto

```
Contenedor/
├── Contenedor.tsx      # Componente principal
├── types.ts           # Tipos y interfaces
├── constants.ts       # Constantes y mapeos de clases CSS
├── utils.ts           # Funciones utilitarias
├── index.ts           # Punto de entrada para exportaciones
└── README.md          # Documentación
```

## Archivos

### `Contenedor.tsx`

El componente principal que renderiza el contenedor con todas las funcionalidades.

### `types.ts`

Contiene todas las definiciones de tipos e interfaces:

- `ContenedorSpacing`: Variantes de espaciado
- `ContenedorPadding`: Variantes de padding
- `ContenedorLayout`: Tipos de layout
- `ContenedorProps`: Propiedades del componente

### `constants.ts`

Mapeos de clases CSS para diferentes configuraciones:

- `spacingClasses`: Mapeo de espaciados
- `paddingClasses`: Mapeo de paddings
- `layoutClasses`: Mapeo de layouts
- `columnClasses`: Mapeo de columnas para grid

### `utils.ts`

Funciones utilitarias:

- `buildContainerClasses`: Construye las clases CSS dinámicamente

### `index.ts`

Punto de entrada que exporta todo lo necesario para usar el componente.

## Uso

```tsx
import { Contenedor } from './components/UI/Contenedor'

// Uso básico
<Contenedor>
  <div>Contenido</div>
</Contenedor>

// Con opciones personalizadas
<Contenedor
  spacing="lg"
  padding="md"
  layout="grid"
  columns={3}
  center
>
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</Contenedor>
```

## Beneficios de esta Estructura

1. **Separación de responsabilidades**: Cada archivo tiene una función específica
2. **Mantenibilidad**: Es más fácil encontrar y modificar código específico
3. **Reutilización**: Los tipos y utilidades pueden ser reutilizados
4. **Testabilidad**: Cada parte puede ser testeada independientemente
5. **Legibilidad**: El código es más fácil de entender y navegar
