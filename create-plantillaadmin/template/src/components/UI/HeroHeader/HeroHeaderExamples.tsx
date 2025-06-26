import React from 'react';
import { 
  DashboardOutlined, 
  UserOutlined, 
  SettingOutlined, 
  ReloadOutlined,
  SaveOutlined,
  PlusOutlined,
  SearchOutlined
} from '@ant-design/icons';
import HeroHeader from './index';

const HeroHeaderExamples: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        🎨 Ejemplos de HeroHeader
      </h1>

      {/* Ejemplo 1: Dashboard básico */}
      <div>
        <h2 className="text-xl font-semibold mb-4">📊 Dashboard Básico</h2>
        <HeroHeader
          title="Dashboard del Sistema"
          emoji="🚀"
          subtitle="Panel de Control Principal"
          description="Monitorea y gestiona todos los aspectos de tu aplicación desde aquí"
          icon={<DashboardOutlined />}
          gradientPreset="blue-purple"
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
        />
      </div>

      {/* Ejemplo 2: Perfil de usuario */}
      <div>
        <h2 className="text-xl font-semibold mb-4">👤 Perfil de Usuario</h2>
        <HeroHeader
          title="Perfil de Usuario"
          emoji="👋"
          subtitle="Bienvenido de vuelta, Juan"
          description="Gestiona tu información personal y preferencias"
          icon={<UserOutlined />}
          iconVariant="glassmorphism"
          gradientPreset="purple-pink"
          size="md"
          statusIndicators={[
            { label: "Perfil completo", status: "active" },
            { label: "Verificado", status: "active" }
          ]}
          actionButtons={[
            { 
              label: "Editar Perfil", 
              icon: <SettingOutlined />, 
              onClick: () => console.log('Editar'),
              variant: "primary"
            }
          ]}
        />
      </div>

      {/* Ejemplo 3: Página de configuración */}
      <div>
        <h2 className="text-xl font-semibold mb-4">⚙️ Configuración</h2>
        <HeroHeader
          title="Configuración del Sistema"
          emoji="⚙️"
          subtitle="Personaliza tu experiencia"
          icon={<SettingOutlined />}
          iconVariant="neon"
          gradientPreset="dark-light"
          size="sm"
          enableDefaultFloating={false}
          floatingElements={[
            { size: "md", position: "top-right", color: "bg-gray-300/10", animation: "float" },
            { size: "sm", position: "bottom-left", color: "bg-gray-400/10", animation: "pulse", delay: 500 }
          ]}
          actionButtons={[
            { 
              label: "Guardar", 
              icon: <SaveOutlined />, 
              onClick: () => console.log('Guardar'),
              variant: "success"
            },
            { 
              label: "Restablecer", 
              onClick: () => console.log('Restablecer'),
              variant: "danger"
            }
          ]}
        />
      </div>

      {/* Ejemplo 4: Página de proyecto */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎯 Proyecto</h2>
        <HeroHeader
          title="Proyecto Alpha"
          emoji="🎯"
          subtitle="Sistema de Gestión Empresarial"
          description="Desarrollo de plataforma integral para la gestión de recursos humanos y operaciones"
          gradientPreset="green-blue"
          size="xl"
          statusIndicators={[
            { label: "En desarrollo", status: "warning", animate: true },
            { label: "75% completado", status: "active" }
          ]}
          infoBadges={[
            { label: "Sprint", value: "Sprint 8", color: "success" },
            { label: "Deadline", value: "15 días", color: "warning" },
            { label: "Team", value: "6 devs", color: "info" }
          ]}
          actionButtons={[
            { 
              label: "Nuevo Task", 
              icon: <PlusOutlined />, 
              onClick: () => console.log('Nuevo task'),
              variant: "success"
            },
            { 
              label: "Ver Backlog", 
              icon: <SearchOutlined />, 
              onClick: () => console.log('Ver backlog'),
              variant: "primary"
            }
          ]}
        />
      </div>

      {/* Ejemplo 5: Header minimalista */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🌅 Minimalista</h2>
        <HeroHeader
          title="Analytics"
          subtitle="Reportes y métricas"
          gradientPreset="sunset"
          iconVariant="minimal"
          size="sm"
          enableDefaultFloating={false}
          actionButtons={[
            { 
              label: "Exportar", 
              onClick: () => console.log('Exportar'),
              variant: "primary"
            }
          ]}
        />
      </div>

      {/* Ejemplo 6: Header con gradiente personalizado */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🌈 Gradiente Personalizado</h2>
        <HeroHeader
          title="Diseño Personalizado"
          emoji="🎨"
          subtitle="Header con colores únicos"
          customGradient="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
          overlayOpacity={0.2}
          gradientAnimation={true}
          enableAnimations={true}
          actionButtons={[
            { 
              label: "Personalizar", 
              icon: <SettingOutlined />, 
              onClick: () => console.log('Personalizar'),
              variant: "primary"
            }
          ]}
        />
      </div>

      {/* Ejemplo 7: Header sin animaciones */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🔇 Sin Animaciones</h2>
        <HeroHeader
          title="Modo de Alto Rendimiento"
          subtitle="Optimizado para dispositivos lentos"
          gradientPreset="ocean"
          enableAnimations={false}
          gradientAnimation={false}
          enableDefaultFloating={false}
          statusIndicators={[
            { label: "Modo rendimiento", status: "active" }
          ]}
        />
      </div>

      {/* Código de ejemplo */}
      <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">📋 Ejemplo de Uso</h2>
        <pre className="text-sm overflow-x-auto">
{`<HeroHeader
  title="Mi Aplicación"
  emoji="🚀"
  subtitle="Dashboard Principal"
  description="Descripción opcional"
  icon={<DashboardOutlined />}
  gradientPreset="blue-purple"
  size="lg"
  statusIndicators={[
    { label: "Activo", status: "active", animate: true }
  ]}
  actionButtons={[
    { 
      label: "Acción", 
      icon: <SettingOutlined />, 
      onClick: () => console.log('click'),
      variant: "primary"
    }
  ]}
/>`}
        </pre>
      </div>
    </div>
  );
};

export default HeroHeaderExamples; 