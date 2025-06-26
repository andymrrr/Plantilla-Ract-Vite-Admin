# CardDataStats - Componente Modular

Este directorio contiene el componente `CardDataStats` refactorizado en una estructura modular para mejor mantenibilidad y reutilización.

## Estructura del Directorio

```
CardData/
├── index.tsx                 # Componente principal
├── types.ts                 # Definiciones de tipos
├── config.ts                # Configuraciones de tamaño y color
├── utils.ts                 # Utilidades y funciones auxiliares
├── components/              # Sub-componentes
│   ├── index.ts            # Exportaciones de componentes
│   ├── LoadingSkeleton.tsx # Esqueleto de carga
│   ├── CardIcon.tsx        # Icono de la tarjeta
│   ├── CardBadge.tsx       # Badge opcional
│   ├── CardHeader.tsx      # Cabecera con icono y badge
│   ├── CardContent.tsx     # Contenido principal
│   ├── CardFooter.tsx      # Pie con tendencia
│   └── TrendIndicator.tsx  # Indicador de tendencia
└── README.md               # Documentación
```

## Componentes

### Componente Principal
- **index.tsx**: Componente principal que orquesta todos los sub-componentes

### Sub-componentes
- **LoadingSkeleton**: Componente de carga animado
- **CardIcon**: Maneja la visualización del icono con diferentes variantes
- **CardBadge**: Badge opcional para mostrar información adicional
- **CardHeader**: Cabecera que combina icono y badge
- **CardContent**: Contenido principal (título, número, subtítulo)
- **CardFooter**: Pie de página con indicadores de tendencia
- **TrendIndicator**: Indicadores visuales de tendencia (up/down/neutral)

### Archivos de Configuración
- **types.ts**: Definiciones de TypeScript para todas las interfaces y tipos
- **config.ts**: Configuraciones de tamaños, colores y estilos
- **utils.ts**: Funciones utilitarias para generar clases CSS

## Uso

```tsx
import CardDataStats from '@/components/UI/CardData';

// Uso básico
<CardDataStats
  title="Total Ventas"
  total={15420}
  rate="12%"
  trend="up"
  variant="default"
  size="md"
  color="primary"
/>

// Con icono y badge
<CardDataStats
  title="Usuarios Activos"
  total="1,245"
  subtitle="Últimas 24 horas"
  rate="5.3%"
  trend="up"
  variant="gradient"
  size="lg"
  color="success"
  icon={<UserIcon />}
  showBadge={true}
  badgeText="Nuevo"
/>
```

## Variantes Disponibles

- **default**: Estilo por defecto con fondo blanco/gris
- **gradient**: Fondo con gradiente
- **outlined**: Solo borde sin fondo
- **minimal**: Estilo minimalista
- **glassmorphism**: Efecto de vidrio esmerilado
- **neon**: Estilo neón con efectos de sombra

## Tamaños

- **sm**: Pequeño
- **md**: Mediano (por defecto)
- **lg**: Grande
- **xl**: Extra grande

## Colores

- **primary**: Azul (por defecto)
- **success**: Verde
- **warning**: Amarillo
- **danger**: Rojo
- **info**: Cian
- **purple**: Púrpura
- **indigo**: Índigo

## Beneficios de la Refactorización

1. **Mantenibilidad**: Cada sub-componente maneja una responsabilidad específica
2. **Reutilización**: Los sub-componentes pueden ser reutilizados individualmente
3. **Testabilidad**: Más fácil crear tests unitarios para cada componente
4. **Organización**: Código más organizado y fácil de navegar
5. **Performance**: Mejor tree-shaking y code-splitting
6. **Escalabilidad**: Más fácil agregar nuevas características sin afectar otros componentes 