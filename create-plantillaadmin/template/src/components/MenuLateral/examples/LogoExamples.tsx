import React from 'react';
import { LOGO_PRESETS, LogoConfig, getLogoSizeConfig } from '../config/logoConfig';

export const LogoExamples: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = React.useState<keyof typeof LOGO_PRESETS>('default');
  const [logoError, setLogoError] = React.useState<Record<string, boolean>>({});

  const renderLogoPreview = (presetName: string, config: LogoConfig) => {
    const sizeConfig = getLogoSizeConfig(config.size);
    const FallbackIcon = config.fallbackIcon;
    const hasError = logoError[presetName];

    return (
      <div 
        key={presetName}
        className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
          selectedPreset === presetName
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
        }`}
        onClick={() => setSelectedPreset(presetName)}
      >
        {/* Preview del Logo */}
        <div className="flex items-center mb-4">
          <div className="relative flex items-center justify-center group">
            {config.imagePath && !hasError ? (
              <img 
                src={config.imagePath}
                alt={config.altText}
                className={`${sizeConfig.logoSize} flex-shrink-0 rounded-lg shadow-lg border-2 border-white dark:border-gray-600`}
                onError={() => setLogoError(prev => ({ ...prev, [presetName]: true }))}
                loading="lazy"
              />
            ) : (
              <div className={`${sizeConfig.logoSize} flex items-center justify-center bg-gradient-to-br ${config.fallbackBgGradient.from} ${config.fallbackBgGradient.to} text-white rounded-lg shadow-lg border-2 border-white dark:border-gray-600`}>
                <FallbackIcon size={sizeConfig.iconSize} />
              </div>
            )}
            
            {config.showOnlineIndicator && (
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full ${
                config.enablePulseIndicator ? 'animate-pulse' : ''
              }`} />
            )}
          </div>

          <div className="ml-4">
            <div className={`${sizeConfig.titleSize} font-bold text-gray-900 dark:text-white leading-tight`}>
              {config.title}
            </div>
            {config.showSubtitle && config.subtitle && (
              <div className={`${sizeConfig.subtitleSize} text-gray-500 dark:text-gray-400 font-medium`}>
                {config.subtitle}
              </div>
            )}
          </div>
        </div>

        {/* Información del Preset */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Preset:</span>
            <span className="font-medium capitalize">{presetName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Tamaño:</span>
            <span className="font-medium uppercase">{config.size}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Efectos:</span>
            <span className="font-medium">{config.enableHoverEffects ? 'Sí' : 'No'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Indicador:</span>
            <span className="font-medium">{config.showOnlineIndicator ? 'Sí' : 'No'}</span>
          </div>
        </div>
      </div>
    );
  };

  const copyConfigCode = () => {
    const config = LOGO_PRESETS[selectedPreset];
    const code = `// Para usar esta configuración, actualiza logoConfig.ts:
export const ACTIVE_LOGO_CONFIG: LogoConfig = LOGO_PRESETS.${selectedPreset};

// O crea una configuración personalizada:
export const ACTIVE_LOGO_CONFIG: LogoConfig = {
  imagePath: '${config.imagePath || ''}',
  altText: '${config.altText}',
  fallbackIcon: ${config.fallbackIcon.name},
  fallbackBgGradient: {
    from: '${config.fallbackBgGradient.from}',
    to: '${config.fallbackBgGradient.to}'
  },
  title: '${config.title}',
  subtitle: '${config.subtitle || ''}',
  showSubtitle: ${config.showSubtitle},
  size: '${config.size}',
  showOnlineIndicator: ${config.showOnlineIndicator},
  showTooltip: ${config.showTooltip},
  enableHoverEffects: ${config.enableHoverEffects},
  enablePulseIndicator: ${config.enablePulseIndicator}
};`;

    navigator.clipboard.writeText(code);
    alert('¡Código copiado al portapapeles!');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          🎨 Configuraciones de Logo
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Selecciona una configuración y copia el código para usar en tu aplicación
        </p>
      </div>

      {/* Grid de Presets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(LOGO_PRESETS).map(([presetName, config]) => 
          renderLogoPreview(presetName, config)
        )}
      </div>

      {/* Botón para copiar configuración */}
      <div className="text-center">
        <button
          onClick={copyConfigCode}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          📋 Copiar Configuración: {selectedPreset}
        </button>
      </div>

      {/* Guía de Implementación */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          📚 Guía de Implementación
        </h3>
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">1. Cambiar Configuración Activa:</h4>
            <p>En <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">logoConfig.ts</code>, 
               modifica <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">ACTIVE_LOGO_CONFIG</code></p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2. Agregar Tu Logo:</h4>
            <p>Coloca tu archivo de logo en la carpeta <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/</code> 
               y actualiza <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">imagePath</code></p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3. Personalizar Preset:</h4>
            <p>Usa <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">createCustomLogoConfig()</code> 
               para crear configuraciones personalizadas</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 