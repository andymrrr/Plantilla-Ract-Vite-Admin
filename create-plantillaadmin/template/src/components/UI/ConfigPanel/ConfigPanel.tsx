import React from 'react';
import { 
  CloseOutlined, 
  SettingOutlined, 
  EyeOutlined, 
  ClockCircleOutlined,
  DashboardOutlined,
  BarChartOutlined,
  ExclamationCircleOutlined,
  TrophyOutlined
} from '@ant-design/icons';

type TipoVistaDashboard = 'ejecutivo' | 'operacional' | 'completo' | 'personalizado';

interface ConfiguracionDashboard {
  tipoVista: TipoVistaDashboard;
  diasAnalisis: number;
  autoRefresh: boolean;
  intervaloRefresh: number;
  mostrarAlertas: boolean;
  mostrarTendencias: boolean;
  mostrarPerformance: boolean;
}

interface ConfigPanelProps {
  visible: boolean;
  onClose: () => void;
  configuracion: ConfiguracionDashboard;
  onUpdate: (nuevaConfig: Partial<ConfiguracionDashboard>) => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  visible,
  onClose,
  configuracion,
  onUpdate
}) => {
  const tiposVista = [
    {
      value: 'completo' as const,
      label: 'Vista Completa',
      description: 'Muestra todos los paneles y métricas disponibles',
      icon: <DashboardOutlined />,
      color: 'text-blue-600'
    },
    {
      value: 'ejecutivo' as const,
      label: 'Vista Ejecutiva',
      description: 'Enfocada en KPIs y métricas de alto nivel',
      icon: <TrophyOutlined />,
      color: 'text-purple-600'
    },
    {
      value: 'operacional' as const,
      label: 'Vista Operacional',
      description: 'Centrada en operaciones y monitoreo en tiempo real',
      icon: <BarChartOutlined />,
      color: 'text-green-600'
    },
    {
      value: 'personalizado' as const,
      label: 'Vista Personalizada',
      description: 'Configuración personalizada del dashboard',
      icon: <SettingOutlined />,
      color: 'text-orange-600'
    }
  ];

  const intervalosRefresh = [
    { value: 30, label: '30 segundos' },
    { value: 60, label: '1 minuto' },
    { value: 120, label: '2 minutos' },
    { value: 300, label: '5 minutos' },
    { value: 600, label: '10 minutos' }
  ];

  const handleTipoVistaChange = (tipoVista: TipoVistaDashboard) => {
    if (tipoVista === 'ejecutivo') {
      onUpdate({
        tipoVista,
        diasAnalisis: 30,
        mostrarAlertas: true,
        mostrarTendencias: true,
        mostrarPerformance: false
      });
    } else if (tipoVista === 'operacional') {
      onUpdate({
        tipoVista,
        diasAnalisis: 7,
        mostrarAlertas: true,
        mostrarTendencias: false,
        mostrarPerformance: true
      });
    } else {
      onUpdate({ tipoVista });
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel deslizante */}
      <div className={`
        fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-boxdark 
        shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${visible ? 'translate-x-0' : 'translate-x-full'}
        overflow-y-auto
      `}>
        {/* Header del panel */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <SettingOutlined className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Configuración</h2>
                <p className="text-white/80 text-sm">Personaliza tu dashboard</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <CloseOutlined className="text-lg" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Tipo de Vista */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <EyeOutlined className="text-blue-600" />
              Tipo de Vista
            </h3>
            <div className="space-y-3">
              {tiposVista.map((tipo) => (
                <label key={tipo.value} className="block">
                  <div className={`
                    relative border-2 rounded-xl p-4 cursor-pointer transition-all duration-200
                    ${configuracion.tipoVista === tipo.value 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }
                  `}>
                    <input
                      type="radio"
                      name="tipoVista"
                      value={tipo.value}
                      checked={configuracion.tipoVista === tipo.value}
                      onChange={(e) => handleTipoVistaChange(e.target.value as any)}
                      className="sr-only"
                    />
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${tipo.color}`}>
                        {tipo.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {tipo.label}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {tipo.description}
                        </div>
                      </div>
                      {configuracion.tipoVista === tipo.value && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Período de Análisis */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <ClockCircleOutlined className="text-green-600" />
              Período de Análisis
            </h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Días de análisis: {configuracion.diasAnalisis} días
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={configuracion.diasAnalisis}
                onChange={(e) => onUpdate({ diasAnalisis: Number(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>1 día</span>
                <span>15 días</span>
                <span>30 días</span>
              </div>
            </div>
          </section>

          {/* Auto-refresh */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <ClockCircleOutlined className="text-orange-600" />
              Actualización Automática
            </h3>
            
            {/* Toggle principal */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Activar actualización automática
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    El dashboard se actualizará automáticamente
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={configuracion.autoRefresh}
                    onChange={(e) => onUpdate({ autoRefresh: e.target.checked })}
                    className="sr-only"
                  />
                  <div className={`
                    w-12 h-6 rounded-full transition-colors duration-200 ease-in-out
                    ${configuracion.autoRefresh ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}
                  `}>
                    <div className={`
                      w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out
                      ${configuracion.autoRefresh ? 'translate-x-6' : 'translate-x-0.5'}
                      mt-0.5
                    `} />
                  </div>
                </div>
              </label>
            </div>

            {/* Intervalo si está activo */}
            {configuracion.autoRefresh && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Intervalo de actualización
                </label>
                <select
                  value={configuracion.intervaloRefresh}
                  onChange={(e) => onUpdate({ intervaloRefresh: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {intervalosRefresh.map((intervalo) => (
                    <option key={intervalo.value} value={intervalo.value}>
                      {intervalo.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </section>

          {/* Elementos Visibles */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <EyeOutlined className="text-purple-600" />
              Elementos Visibles
            </h3>
            <div className="space-y-3">
              {/* Alertas */}
              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex items-center gap-3">
                  <ExclamationCircleOutlined className="text-red-500 text-lg" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Alertas Críticas</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Mostrar notificaciones importantes</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={configuracion.mostrarAlertas}
                  onChange={(e) => onUpdate({ mostrarAlertas: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              {/* Tendencias */}
              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex items-center gap-3">
                  <BarChartOutlined className="text-green-500 text-lg" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Gráficas de Tendencias</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Mostrar análisis históricos</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={configuracion.mostrarTendencias}
                  onChange={(e) => onUpdate({ mostrarTendencias: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              {/* Performance */}
              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex items-center gap-3">
                  <TrophyOutlined className="text-yellow-500 text-lg" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Métricas de Performance</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Mostrar tiempos y rendimiento</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={configuracion.mostrarPerformance}
                  onChange={(e) => onUpdate({ mostrarPerformance: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </section>

          {/* Resumen de configuración */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Resumen de Configuración
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Vista:</span>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {tiposVista.find(t => t.value === configuracion.tipoVista)?.label}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Período:</span>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {configuracion.diasAnalisis} días
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Auto-refresh:</span>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {configuracion.autoRefresh ? 'Activo' : 'Desactivado'}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Intervalo:</span>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {intervalosRefresh.find(i => i.value === configuracion.intervaloRefresh)?.label}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer con botón de cerrar */}
        <div className="sticky bottom-0 bg-white dark:bg-boxdark border-t border-gray-200 dark:border-gray-700 p-6">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-medium
                     hover:from-blue-700 hover:to-blue-800 transition-all duration-200 
                     focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Aplicar Configuración
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfigPanel; 