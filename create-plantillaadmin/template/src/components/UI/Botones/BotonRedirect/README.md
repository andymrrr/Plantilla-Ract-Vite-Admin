# Botón Redirect

Componente de botón que maneja navegación tanto interna como externa, con soporte para operaciones asíncronas antes del redirect.

## Estructura Modular

El componente ha sido refactorizado en una estructura modular:

### 📁 `types.ts`

Tipos TypeScript para el botón redirect:

- `PropiedadBotonRedirect` - Props principales
- `TipoBotonRedirect` - Tipos de botón (success, primary, delete, etc.)
- `VarianteBotonRedirect` - Tipos de variante
- `TamañoBotonRedirect` - Tipos de tamaño
- `AlineacionBotonRedirect` - Tipos de alineación
- `TargetBotonRedirect` - Tipos de target
- `NavegacionConfig` - Configuración de navegación

### 📁 `utils.ts`

Utilidades y constantes:

- `combinarClases()` - Función para combinar clases CSS
- `CLASES_BASE` - Clases base del botón
- `CLASES_TAMAÑO` - Clases por tamaño
- `CLASES_COLOR` - Clases por tipo y variante
- `CLASES_ALINEACION` - Clases de alineación
- `esUrlExterna()` - Determina si una URL es externa
- `obtenerAtributosRel()` - Obtiene atributos rel para links externos

### 📁 `hooks/useNavegacion.ts`

Hook personalizado para manejar la navegación:

- Manejo de operaciones asíncronas
- Estado de carga interno
- Navegación programática
- Manejo de errores

### 📁 `components/`

Componentes internos:

- `Spinner.tsx` - Componente de carga
- `ContenidoBoton.tsx` - Contenido del botón (icono, texto, spinner)
- `BotonExterno.tsx` - Botón para URLs externas
- `BotonInterno.tsx` - Botón para rutas internas (React Router)
- `BotonConWrapper.tsx` - Wrapper para alineación

### 📁 `BotonRedirect.tsx`

Componente principal que orquesta los demás componentes.

### 📁 `index.ts`

Archivo de barril que exporta todo.

## Uso

### Importación básica

```tsx
import { BotonRedirect } from "./BotonRedirect";

<BotonRedirect href="/dashboard" texto="Ir al Dashboard" />;
```

### Navegación externa

```tsx
<BotonRedirect
  href="https://google.com"
  texto="Ir a Google"
  target="_blank"
  tipo="info"
  variante="outline"
/>
```

### Con operación asíncrona

```tsx
<BotonRedirect
  href="/perfil"
  texto="Guardar y Continuar"
  tipo="success"
  onClickAsync={async () => {
    await guardarDatos();
    // La navegación ocurre automáticamente después
  }}
  cargando={isSaving}
/>
```

### Con todas las opciones

```tsx
<BotonRedirect
  href="/usuarios/123"
  texto="Ver Usuario"
  tipo="primary"
  variante="ghost"
  tamaño="grande"
  icono={<UserIcon />}
  cargando={isLoading}
  deshabilitar={isDisabled}
  alineacion="derecha"
  ajustarAlTexto={true}
  onClick={() => console.log("Click")}
  onClickAsync={async () => await fetchData()}
  target="_self"
  replace={true}
  state={{ from: "dashboard" }}
  aria-label="Ver detalles del usuario"
/>
```

## Props

| Prop             | Tipo                                                                  | Default     | Descripción                    |
| ---------------- | --------------------------------------------------------------------- | ----------- | ------------------------------ |
| `href`           | `string`                                                              | -           | URL de destino (requerido)     |
| `texto`          | `string`                                                              | -           | Texto del botón (requerido)    |
| `icono`          | `React.ReactNode`                                                     | -           | Icono del botón                |
| `tipo`           | `'success' \| 'primary' \| 'delete' \| 'warning' \| 'info' \| 'gray'` | `'primary'` | Tipo de botón                  |
| `variante`       | `'solido' \| 'outline' \| 'ghost'`                                    | `'solido'`  | Variante del botón             |
| `tamaño`         | `'pequeño' \| 'mediano' \| 'grande'`                                  | `'mediano'` | Tamaño del botón               |
| `alineacion`     | `'izquierda' \| 'centro' \| 'derecha'`                                | `'centro'`  | Alineación del botón           |
| `ajustarAlTexto` | `boolean`                                                             | `false`     | Si el botón se ajusta al texto |
| `deshabilitar`   | `boolean`                                                             | `false`     | Deshabilita el botón           |
| `cargando`       | `boolean`                                                             | `false`     | Estado de carga externo        |
| `onClick`        | `() => void`                                                          | -           | Función de click síncrona      |
| `onClickAsync`   | `() => Promise<void>`                                                 | -           | Función de click asíncrona     |
| `className`      | `string`                                                              | -           | Clases CSS adicionales         |
| `target`         | `'_blank' \| '_self'`                                                 | -           | Target del link                |
| `replace`        | `boolean`                                                             | `false`     | Reemplazar en historial        |
| `state`          | `any`                                                                 | -           | Estado para React Router       |
| `aria-label`     | `string`                                                              | -           | Label para accesibilidad       |

## Tipos de Botón

### Success (Verde)

```tsx
<BotonRedirect texto="Guardar" tipo="success" href="/guardado" />
```

### Primary (Azul)

```tsx
<BotonRedirect texto="Continuar" tipo="primary" href="/siguiente" />
```

### Delete (Rojo)

```tsx
<BotonRedirect texto="Eliminar" tipo="delete" href="/eliminar" />
```

### Warning (Amarillo)

```tsx
<BotonRedirect texto="Advertencia" tipo="warning" href="/warning" />
```

### Info (Azul claro)

```tsx
<BotonRedirect texto="Información" tipo="info" href="/info" />
```

### Gray (Gris)

```tsx
<BotonRedirect texto="Cancelar" tipo="gray" href="/cancelar" />
```

## Variantes

### Sólido (default)

```tsx
<BotonRedirect texto="Botón Sólido" tipo="primary" variante="solido" />
```

### Outline

```tsx
<BotonRedirect texto="Botón Outline" tipo="success" variante="outline" />
```

### Ghost

```tsx
<BotonRedirect texto="Botón Ghost" tipo="delete" variante="ghost" />
```

## Navegación

### Rutas Internas (React Router)

```tsx
<BotonRedirect
  href="/dashboard"
  texto="Dashboard"
  state={{ from: "login" }}
  replace={true}
/>
```

### URLs Externas

```tsx
<BotonRedirect
  href="https://api.example.com"
  texto="API Docs"
  target="_blank"
/>
```

### Con Estado

```tsx
<BotonRedirect
  href="/perfil"
  texto="Perfil"
  state={{
    userId: 123,
    returnTo: "/dashboard",
  }}
/>
```

## Operaciones Asíncronas

### Antes de Navegar

```tsx
<BotonRedirect
  href="/confirmacion"
  texto="Confirmar Pedido"
  onClickAsync={async () => {
    await procesarPedido();
    await enviarEmail();
  }}
  cargando={isProcessing}
/>
```

### Con Manejo de Errores

```tsx
<BotonRedirect
  href="/exito"
  texto="Finalizar"
  onClickAsync={async () => {
    try {
      await guardarDatos();
    } catch (error) {
      // El error se maneja automáticamente
      throw error; // Re-lanzar para evitar navegación
    }
  }}
/>
```

## Estados

### Cargando

```tsx
<BotonRedirect texto="Procesando..." cargando={true} deshabilitar={true} />
```

### Deshabilitado

```tsx
<BotonRedirect texto="No disponible" deshabilitar={true} />
```

### Con Icono

```tsx
<BotonRedirect texto="Descargar" icono={<DownloadIcon />} />
```

## Accesibilidad

El componente incluye:

- `aria-label` para lectores de pantalla
- `aria-disabled` para estado deshabilitado
- Focus visible con ring
- Navegación por teclado
- Atributos `rel` apropiados para links externos

## Hook Personalizado

### Uso del Hook useNavegacion

```tsx
import { useNavegacion } from "./BotonRedirect";

const { estaCargando, manejarClick, navegar } = useNavegacion({
  href: "/dashboard",
  onClickAsync: async () => await fetchData(),
  deshabilitar: false,
  cargando: false,
});
```

## Beneficios de la Refactorización

1. **Separación de Responsabilidades**: Cada componente tiene una función específica
2. **Reutilización**: Los componentes internos se pueden usar por separado
3. **Mantenibilidad**: Es más fácil modificar partes específicas
4. **Testabilidad**: Cada componente se puede testear independientemente
5. **Extensibilidad**: Fácil agregar nuevos tipos o variantes
6. **Tipado Fuerte**: TypeScript completo con tipos específicos
7. **Hook Personalizado**: Lógica de navegación reutilizable
8. **Mejor UX**: Manejo automático de estados de carga

## Uso Avanzado

### Usar componentes internos directamente

```tsx
import { BotonExterno, BotonInterno, Spinner } from './BotonRedirect';

// Botón externo personalizado
<BotonExterno
  href="https://example.com"
  texto="Externo"
  tipo="info"
  variante="outline"
/>

// Botón interno personalizado
<BotonInterno
  href="/ruta"
  texto="Interno"
  tipo="success"
  variante="ghost"
/>

// Spinner independiente
<Spinner tamaño="grande" />
```

### Extender funcionalidad

```tsx
import { CLASES_COLOR, combinarClases } from "./BotonRedirect";

// Crear nuevo tipo
const nuevoTipo = {
  solido: "bg-purple-500 hover:bg-purple-600 text-white",
  outline: "border-purple-500 text-purple-500",
  ghost: "text-purple-500 hover:bg-purple-50",
};
```
