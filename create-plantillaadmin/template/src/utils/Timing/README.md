# Utilidades de Timing

Este módulo proporciona funciones para manejar operaciones asíncronas, delays, debounce, throttle y más.

## Estructura Modular

El módulo ha sido refactorizado en archivos más pequeños y específicos:

### 📁 `types.ts` (57 líneas)

Contiene todas las interfaces y tipos TypeScript utilizados en el módulo.

### 📁 `delay.ts` (115 líneas)

Funciones básicas de delay:

- `delay()` - Crea una promesa que se resuelve después de un tiempo
- `ejecutarConDelay()` - Ejecuta una función después de un delay
- `createCancelableDelay()` - Crea un delay que se puede cancelar

### 📁 `debounce.ts` (175 líneas)

Funciones de control de frecuencia:

- `debounce()` - Retrasa la ejecución de una función
- `throttle()` - Limita la frecuencia de ejecución

### 📁 `async.ts` (164 líneas)

Funciones asíncronas avanzadas:

- `repeat()` - Ejecuta una función repetidamente
- `sequence()` - Ejecuta funciones en secuencia
- `timeout()` - Aplica timeout a promesas
- `retry()` - Reintenta funciones con backoff exponencial

### 📁 `index.ts` (24 líneas)

Archivo de barril que re-exporta todas las funciones.

### 📁 `delayUtils.ts` (14 líneas)

Archivo de compatibilidad que re-exporta todo (deprecated).

## Uso

### Importación desde módulos específicos (recomendado)

```typescript
// Funciones básicas de delay
import { delay, ejecutarConDelay } from "./delay";

// Debounce y throttle
import { debounce, throttle } from "./debounce";

// Funciones asíncronas
import { repeat, sequence, timeout, retry } from "./async";

// Tipos
import { CancelableDelay, DebounceOptions } from "./types";
```

### Importación desde el archivo index

```typescript
import {
  delay,
  debounce,
  throttle,
  repeat,
  sequence,
  timeout,
  retry,
} from "./index";
```

### Importación desde delayUtils (deprecated)

```typescript
// ⚠️ Deprecated - Usar importaciones específicas
import { delay, debounce } from "./delayUtils";
```

## Beneficios de la Refactorización

1. **Archivos más pequeños**: Cada archivo tiene una responsabilidad específica
2. **Mejor mantenibilidad**: Es más fácil encontrar y modificar funciones específicas
3. **Tree-shaking**: Permite importar solo lo que necesitas
4. **Mejor organización**: Código agrupado por funcionalidad
5. **Compatibilidad**: El archivo original sigue funcionando

## Migración

Si tienes código existente que importa desde `delayUtils.ts`, puedes:

1. **Mantener el código actual** - seguirá funcionando
2. **Migrar gradualmente** - cambiar las importaciones a módulos específicos
3. **Usar el archivo index** - para una transición más suave

## Ejemplos de Uso

### Delay básico

```typescript
import { delay } from "./delay";

// Esperar 1 segundo
await delay(1000);
```

### Debounce para búsqueda

```typescript
import { debounce } from "./debounce";

const searchDebounced = debounce((query: string) => {
  // Realizar búsqueda
  performSearch(query);
}, 300);
```

### Retry con backoff

```typescript
import { retry } from "./async";

const result = await retry(() => fetch("/api/data"), {
  maxAttempts: 3,
  initialDelay: 1000,
});
```
