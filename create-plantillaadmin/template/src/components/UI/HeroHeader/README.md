# 🎨 HeroHeader - Componente Header Genérico y Configurable

Un componente de header súper configurable y visualmente atractivo con gradientes animados, efectos glassmorphism, elementos flotantes y múltiples opciones de personalización.

## ✨ Características Principales

### 🎯 **Súper Configurable**
- ✅ **10 Gradientes predefinidos** + gradientes personalizados
- ✅ **4 Tamaños** (sm, md, lg, xl)
- ✅ **4 Variantes de iconos** (default, glassmorphism, neon, minimal)
- ✅ **Botones de acción** completamente personalizables
- ✅ **Indicadores de estado** con animaciones
- ✅ **Badges informativos** con colores
- ✅ **Elementos flotantes** configurables

### 🎪 **Efectos Visuales**
- 🌈 **Gradientes animados** con movimiento fluido
- 🪟 **Glassmorphism** con desenfoque de fondo
- ⚡ **Efectos neon** con brillos y sombras
- 💫 **Elementos flotantes** con animaciones
- 🎭 **Micro-interacciones** suaves

### 📱 **Responsive Design**
- 📱 **Mobile-first** con layouts adaptativos
- 💻 **Desktop optimizado** con distribución inteligente
- 🔄 **Layouts flexibles** (stacked, compact)

## 🚀 Uso Básico

```tsx
import HeroHeader from '@/components/UI/HeroHeader';
import { DashboardOutlined } from '@ant-design/icons';

// Uso simple
<HeroHeader
  title="Mi Dashboard"
  emoji="🚀"
  subtitle="Panel de Control"
  icon={<DashboardOutlined />}
  gradientPreset="blue-purple"
/>

// Uso avanzado
<HeroHeader
  title="Dashboard del Sistema"
  emoji="🚀"
  subtitle="Panel de Control Principal"
  description="Monitorea y gestiona todos los aspectos de tu aplicación"
  icon={<DashboardOutlined />}
  iconVariant="glassmorphism"
  gradientPreset="blue-purple"
  size="lg"
  statusIndicators={[
    { label: "Sistema Activo", status: "active", animate: true },
    { label: "Último sync: hace 2 min", status: "active" }
  ]}
  infoBadges={[
    { label: "Usuarios", value: "1,234", color: "primary" },
    { label: "Versión", value: "v2.1.0", color: "info" }
  ]}
  actionButtons={[
    { 
      label: "Actualizar", 
      icon: <ReloadOutlined />, 
      onClick: () => console.log('Actualizar'),
      variant: "primary"
    },
    { 
      label: "Configurar", 
      icon: <SettingOutlined />, 
      onClick: () => console.log('Configurar'),
      variant: "secondary"
    }
  ]}
  floatingElements={[
    { size: "lg", position: "top-right", color: "bg-blue-300/20", animation: "float" }
  ]}
/>
```

## 🎨 Gradientes Predefinidos

### Disponibles:
- **`blue-purple`**: Azul → Púrpura → Índigo (por defecto)
- **`purple-pink`**: Púrpura → Rosa → Rosa intenso
- **`green-blue`**: Verde → Teal → Cian
- **`orange-red`**: Naranja → Rojo → Rosa
- **`dark-light`**: Gris oscuro → Gris medio → Gris claro
- **`sunset`**: Amarillo → Naranja → Rojo
- **`ocean`**: Azul claro → Cian → Teal
- **`forest`**: Verde → Esmeralda → Teal oscuro
- **`fire`**: Rojo → Naranja → Amarillo
- **`space`**: Índigo oscuro → Púrpura oscuro → Rosa oscuro

### Gradiente Personalizado:
```tsx
<HeroHeader
  title="Mi Header"
  customGradient="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
/>
```

## 🎭 Variantes de Iconos

### `default`
Estilo glassmorphism básico con backdrop-blur

### `glassmorphism`
Efecto de vidrio esmerilado con resplandor

### `neon`
Efecto neón con bordes brillantes y sombras

### `minimal`
Estilo minimalista con transparencia sutil

## 📏 Tamaños Disponibles

| Tamaño | Título | Ícono | Botones | Espaciado |
|--------|--------|-------|---------|-----------|
| `sm`   | text-2xl | text-2xl | px-4 py-2 | gap-3 |
| `md`   | text-3xl | text-3xl | px-5 py-2.5 | gap-4 |
| `lg`   | text-4xl | text-4xl | px-6 py-3 | gap-6 |
| `xl`   | text-5xl | text-5xl | px-8 py-4 | gap-8 |

## 🎯 Indicadores de Estado

```tsx
statusIndicators={[
  { 
    label: "Sistema Activo", 
    status: "active", // 'active' | 'inactive' | 'warning' | 'error'
    animate: true, // Opcional: animación de pulso
    icon: <CheckIcon /> // Opcional: icono personalizado
  }
]}
```

### Estados Disponibles:
- **`active`**: Verde - Sistema funcionando
- **`inactive`**: Gris - Sistema inactivo
- **`warning`**: Amarillo - Advertencias
- **`error`**: Rojo - Errores críticos

## 🏷️ Badges Informativos

```tsx
infoBadges={[
  {
    label: "Usuarios",
    value: "1,234",
    color: "primary", // 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
    icon: <UserIcon /> // Opcional
  }
]}
```

## 🔘 Botones de Acción

```tsx
actionButtons={[
  {
    label: "Actualizar",
    icon: <ReloadOutlined />,
    onClick: () => console.log('Click'),
    variant: "primary", // 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
    loading: false, // Estado de carga
    disabled: false, // Estado deshabilitado
    active: false, // Estado activo
    className: "custom-class" // Clases CSS adicionales
  }
]}
```

## 🎈 Elementos Flotantes

```tsx
// Elementos por defecto (se pueden deshabilitar)
enableDefaultFloating={true}

// Elementos personalizados
floatingElements={[
  {
    size: "lg", // 'sm' | 'md' | 'lg'
    position: "top-right", // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
    color: "bg-blue-300/20", // Color personalizado
    animation: "float", // 'pulse' | 'bounce' | 'float' | 'none'
    delay: 1000 // Delay en ms (opcional)
  }
]}
```

## ⚙️ Props Completas

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | - | **Requerido**: Título principal |
| `subtitle` | `string` | - | Subtítulo opcional |
| `description` | `string` | - | Descripción detallada |
| `emoji` | `string` | - | Emoji para el título |
| `icon` | `ReactNode` | - | Icono principal |
| `iconVariant` | `'default' \| 'glassmorphism' \| 'neon' \| 'minimal'` | `'default'` | Variante del icono |
| `gradientPreset` | `GradientPreset` | `'blue-purple'` | Gradiente predefinido |
| `customGradient` | `string` | - | Gradiente personalizado |
| `overlayOpacity` | `number` | `0.1` | Opacidad del overlay |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Tamaño del header |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Padding interno |
| `enableAnimations` | `boolean` | `true` | Habilitar animaciones |
| `gradientAnimation` | `boolean` | `true` | Animar gradiente |
| `responsive` | `boolean` | `true` | Diseño responsive |
| `onTitleClick` | `() => void` | - | Callback al hacer click en el título |

## 🎪 Ejemplos de Uso

### Dashboard Empresarial
```tsx
<HeroHeader
  title="Dashboard Ejecutivo"
  emoji="📊"
  subtitle="Panel de Control Empresarial"
  icon={<DashboardOutlined />}
  gradientPreset="blue-purple"
  size="xl"
  statusIndicators={[
    { label: "Todos los sistemas operativos", status: "active", animate: true }
  ]}
  actionButtons={[
    { label: "Actualizar", icon: <ReloadOutlined />, onClick: refresh, variant: "primary" }
  ]}
/>
```

### Perfil de Usuario
```tsx
<HeroHeader
  title="Mi Perfil"
  emoji="👤"
  subtitle="Configuración Personal"
  icon={<UserOutlined />}
  iconVariant="glassmorphism"
  gradientPreset="purple-pink"
  size="md"
/>
```

### Página de Configuración
```tsx
<HeroHeader
  title="Configuración"
  emoji="⚙️"
  icon={<SettingOutlined />}
  iconVariant="neon"
  gradientPreset="dark-light"
  enableDefaultFloating={false}
/>
```

## 🎨 Personalización Avanzada

### Colores Personalizados
```tsx
<HeroHeader
  customGradient="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  overlayOpacity={0.3}
/>
```

### Elementos Flotantes Únicos
```tsx
<HeroHeader
  enableDefaultFloating={false}
  floatingElements={[
    { size: "lg", position: "top-left", color: "bg-yellow-300/30", animation: "bounce" },
    { size: "md", position: "bottom-right", color: "bg-pink-300/20", animation: "float", delay: 2000 }
  ]}
/>
```

### Sin Animaciones (Rendimiento)
```tsx
<HeroHeader
  enableAnimations={false}
  gradientAnimation={false}
  enableDefaultFloating={false}
/>
```

## 🚀 Migración desde Header Antiguo

Si tienes un header existente, la migración es muy simple:

```tsx
// Antes
<div className="header-old">
  <h1>Mi Título</h1>
  <button>Acción</button>
</div>

// Después
<HeroHeader
  title="Mi Título"
  actionButtons={[
    { label: "Acción", onClick: () => {} }
  ]}
/>
```

## 🎯 Performance

- ✅ **Lazy loading** de elementos flotantes
- ✅ **CSS Animations** optimizadas
- ✅ **Minimal re-renders** con React.memo
- ✅ **Tree-shaking** friendly

## 🎁 Próximas Características

- [ ] Themes predefinidos (light/dark)
- [ ] Más variantes de botones
- [ ] Soporte para videos de fondo
- [ ] Modo de alto contraste
- [ ] Integración con sistema de temas

¡Disfruta creando headers espectaculares! 🎉 