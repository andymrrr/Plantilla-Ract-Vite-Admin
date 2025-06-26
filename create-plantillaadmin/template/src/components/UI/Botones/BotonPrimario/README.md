# Botón Primario

Componente de botón modular y reutilizable con múltiples variantes, colores y estados.

## Estructura Modular

El componente ha sido refactorizado en una estructura modular:

### 📁 `types.ts`

Tipos TypeScript para el botón:

- `PropiedadBotonPrimario` - Props principales
- `TamañoBoton` - Tipos de tamaño
- `ColorBoton` - Tipos de color
- `VarianteBoton` - Tipos de variante
- `AlineacionBoton` - Tipos de alineación

### 📁 `utils.ts`

Utilidades y constantes:

- `combinarClases()` - Función para combinar clases CSS
- `CLASES_BASE` - Clases base del botón
- `CLASES_TAMAÑO` - Clases por tamaño
- `CLASES_COLOR` - Clases por color y variante
- `CLASES_ALINEACION` - Clases de alineación

### 📁 `components/`

Componentes internos:

- `Spinner.tsx` - Componente de carga
- `ContenidoBoton.tsx` - Contenido del botón (icono, texto, spinner)
- `BotonBase.tsx` - Botón base sin wrapper
- `BotonConWrapper.tsx` - Botón con wrapper de alineación

### 📁 `BotonPrimario.tsx`

Componente principal que orquesta los demás componentes.

### 📁 `index.ts`

Archivo de barril que exporta todo.

## Uso

### Importación básica

```tsx
import { BotonPrimario } from "./BotonPrimario";

<BotonPrimario texto="Guardar" onClick={() => console.log("Guardado")} />;
```

### Con todas las opciones

```tsx
<BotonPrimario
  texto="Eliminar"
  color="red"
  variante="outline"
  tamaño="grande"
  icono={<TrashIcon />}
  cargando={isLoading}
  deshabilitar={isDisabled}
  alineacion="derecha"
  ajustarAlTexto={true}
  onClick={handleDelete}
  aria-label="Eliminar elemento"
/>
```

## Props

| Prop             | Tipo                                                     | Default     | Descripción                    |
| ---------------- | -------------------------------------------------------- | ----------- | ------------------------------ |
| `texto`          | `string`                                                 | -           | Texto del botón (requerido)    |
| `deshabilitar`   | `boolean`                                                | `false`     | Deshabilita el botón           |
| `tipo`           | `'button' \| 'submit' \| 'reset'`                        | `'button'`  | Tipo de botón HTML             |
| `alineacion`     | `'izquierda' \| 'centro' \| 'derecha'`                   | `'centro'`  | Alineación del botón           |
| `tamaño`         | `'pequeño' \| 'mediano' \| 'grande'`                     | `'mediano'` | Tamaño del botón               |
| `ajustarAlTexto` | `boolean`                                                | `false`     | Si el botón se ajusta al texto |
| `onClick`        | `() => void`                                             | -           | Función de click               |
| `color`          | `'primary' \| 'green' \| 'red' \| 'gray' \| 'lightBlue'` | `'primary'` | Color del botón                |
| `variante`       | `'solido' \| 'outline' \| 'ghost'`                       | `'solido'`  | Variante del botón             |
| `icono`          | `React.ReactNode`                                        | -           | Icono del botón                |
| `cargando`       | `boolean`                                                | `false`     | Estado de carga                |
| `className`      | `string`                                                 | -           | Clases CSS adicionales         |
| `aria-label`     | `string`                                                 | -           | Label para accesibilidad       |

## Variantes

### Sólido (default)

```tsx
<BotonPrimario texto="Botón Sólido" color="primary" variante="solido" />
```

### Outline

```tsx
<BotonPrimario texto="Botón Outline" color="green" variante="outline" />
```

### Ghost

```tsx
<BotonPrimario texto="Botón Ghost" color="red" variante="ghost" />
```

## Colores

- `primary` - Azul principal
- `green` - Verde
- `red` - Rojo
- `gray` - Gris
- `lightBlue` - Azul claro

## Tamaños

- `pequeño` - Padding pequeño, texto pequeño
- `mediano` - Padding mediano, texto base (default)
- `grande` - Padding grande, texto grande

## Estados

### Cargando

```tsx
<BotonPrimario texto="Guardando..." cargando={true} deshabilitar={true} />
```

### Deshabilitado

```tsx
<BotonPrimario texto="No disponible" deshabilitar={true} />
```

### Con icono

```tsx
<BotonPrimario texto="Descargar" icono={<DownloadIcon />} />
```

## Alineación

### Ajustar al texto

```tsx
<BotonPrimario texto="Botón pequeño" ajustarAlTexto={true} />
```

### Con alineación

```tsx
<BotonPrimario texto="Botón alineado" alineacion="derecha" />
```

## Accesibilidad

El componente incluye:

- `aria-label` para lectores de pantalla
- `aria-disabled` para estado deshabilitado
- Focus visible con ring
- Navegación por teclado

## Beneficios de la Refactorización

1. **Modularidad**: Cada componente tiene una responsabilidad específica
2. **Reutilización**: Los componentes internos se pueden usar por separado
3. **Mantenibilidad**: Es más fácil modificar partes específicas
4. **Testabilidad**: Cada componente se puede testear independientemente
5. **Extensibilidad**: Fácil agregar nuevas variantes o colores
6. **Tipado fuerte**: TypeScript completo con tipos específicos

## Uso Avanzado

### Usar componentes internos directamente

```tsx
import { BotonBase, Spinner } from './BotonPrimario';

// Botón base sin wrapper
<BotonBase texto="Personalizado" color="red" variante="outline" />

// Spinner independiente
<Spinner tamaño="grande" />
```

### Extender funcionalidad

```tsx
import { CLASES_COLOR, combinarClases } from "./BotonPrimario";

// Crear nuevo color
const nuevoColor = {
  solido: "bg-purple-500 hover:bg-purple-600 text-white",
  outline: "border-purple-500 text-purple-500",
  ghost: "text-purple-500 hover:bg-purple-50",
};
```
