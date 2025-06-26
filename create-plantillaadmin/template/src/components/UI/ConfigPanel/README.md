# ConfigPanel

Panel de configuración deslizante para personalizar el Dashboard corporativo.

## Características

- **Panel deslizante**: Se desliza desde la derecha con animaciones suaves
- **Configuración de vista**: Múltiples tipos de vista predefinidos
- **Auto-refresh**: Control de actualización automática con intervalos configurables
- **Elementos visibles**: Toggle de visualización de componentes
- **Responsive**: Adapta a diferentes tamaños de pantalla
- **Tema**: Soporte para modo claro y oscuro

## Uso

```tsx
import ConfigPanel from '../components/UI/ConfigPanel/ConfigPanel';

const Dashboard = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [configuracion, setConfiguracion] = useState({
    tipoVista: 'completo',
    diasAnalisis: 7,
    autoRefresh: true,
    intervaloRefresh: 60,
    mostrarAlertas: true,
    mostrarTendencias: true,
    mostrarPerformance: true
  });

  const handleUpdateConfig = (nuevaConfig) => {
    setConfiguracion(prev => ({
      ...prev,
      ...nuevaConfig
    }));
  };

  return (
    <>
      <button onClick={() => setPanelVisible(true)}>
        Configuración
      </button>
      
      <ConfigPanel
        visible={panelVisible}
        onClose={() => setPanelVisible(false)}
        configuracion={configuracion}
        onUpdate={handleUpdateConfig}
      />
    </>
  );
};
```

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `visible` | `boolean` | Controla la visibilidad del panel |
| `onClose` | `() => void` | Función llamada al cerrar el panel |
| `configuracion` | `ConfiguracionDashboard` | Estado actual de la configuración |
| `onUpdate` | `(config: Partial<ConfiguracionDashboard>) => void` | Función para actualizar la configuración |

## ConfiguracionDashboard Interface

```typescript
interface ConfiguracionDashboard {
  tipoVista: 'ejecutivo' | 'operacional' | 'completo' | 'personalizado';
  diasAnalisis: number;  // 1-30 días
  autoRefresh: boolean;
  intervaloRefresh: number;  // segundos
  mostrarAlertas: boolean;
  mostrarTendencias: boolean;
  mostrarPerformance: boolean;
}
```

## Tipos de Vista

- **Vista Completa**: Muestra todos los paneles y métricas disponibles
- **Vista Ejecutiva**: Enfocada en KPIs y métricas de alto nivel (30 días)
- **Vista Operacional**: Centrada en operaciones y monitoreo (7 días)
- **Vista Personalizada**: Configuración personalizada del dashboard

## Intervalos de Actualización

- 30 segundos
- 1 minuto
- 2 minutos
- 5 minutos
- 10 minutos

## Funcionalidades

### Configuraciones Automáticas por Vista

Cada tipo de vista aplica configuraciones predefinidas:

- **Ejecutivo**: 30 días, alertas + tendencias activas
- **Operacional**: 7 días, alertas + performance activas

### Elementos Configurables

- Alertas críticas
- Gráficas de tendencias
- Métricas de performance

### Resumen Visual

El panel incluye un resumen de la configuración actual mostrando:
- Tipo de vista seleccionado
- Período de análisis
- Estado del auto-refresh
- Intervalo de actualización

## Estilos

- Header con gradiente corporativo
- Secciones organizadas con iconos
- Controles interactivos (toggles, sliders, radio buttons)
- Animaciones suaves de transición
- Responsive design con max-width de 448px
- Overlay con backdrop blur
- Sticky header y footer

## Accesibilidad

- Navegación por teclado
- Labels descriptivos
- Estados visuales focusables
- Controles ARIA compliant 