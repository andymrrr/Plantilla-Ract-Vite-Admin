import React from 'react';
import { HeroHeaderProps } from './types';
import { 
  gradientPresets, 
  sizeConfig, 
  paddingConfig, 
  statusColors, 
  badgeColors, 
  buttonVariants,
  floatingElementPositions,
  floatingElementSizes,
  floatingElementAnimations
} from './config';

const HeroHeader: React.FC<HeroHeaderProps> = ({
  // Contenido principal
  title,
  subtitle,
  description,
  emoji,
  
  // Icono principal
  icon,
  iconVariant = 'default',
  
  // Gradientes y colores
  gradientPreset = 'blue-purple',
  customGradient,
  overlayOpacity = 0.1,
  
  // Tamaño y espaciado
  size = 'lg',
  padding = 'lg',
  
  // Elementos flotantes
  floatingElements = [],
  enableDefaultFloating = true,
  
  // Indicadores de estado
  statusIndicators = [],
  
  // Badges informativos
  infoBadges = [],
  
  // Botones de acción
  actionButtons = [],
  
  // Animaciones
  enableAnimations = true,
  gradientAnimation = true,
  
  // Personalización
  className = '',
  containerClassName = '',
  contentClassName = '',
  
  // Responsive
  responsive = true,
  mobileLayout = 'stacked',
  
  // Eventos
  onTitleClick
}) => {
  const currentSize = sizeConfig[size];
  const currentPadding = paddingConfig[padding];
  
  // Obtener gradiente
  const getGradientClasses = () => {
    if (customGradient) {
      return customGradient;
    }
    
    const preset = gradientPresets[gradientPreset];
    return `bg-gradient-${preset.direction} ${preset.from} ${preset.via ? preset.via : ''} ${preset.to}`;
  };

  // Renderizar elementos flotantes por defecto
  const renderDefaultFloatingElements = () => {
    if (!enableDefaultFloating) return null;
    
    return (
      <>
        <div className="absolute top-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-300/15 rounded-full blur-xl animate-bounce"></div>
      </>
    );
  };

  // Renderizar elementos flotantes personalizados
  const renderCustomFloatingElements = () => {
    return floatingElements.map((element, index) => (
      <div
        key={index}
        className={`
          absolute ${floatingElementPositions[element.position]}
          ${floatingElementSizes[element.size]}
          ${element.color || 'bg-white/10'}
          rounded-full blur-2xl
          ${floatingElementAnimations[element.animation || 'pulse']}
          ${element.delay ? `delay-${element.delay}` : ''}
        `}
      />
    ));
  };

  // Renderizar icono principal
  const renderMainIcon = () => {
    if (!icon) return null;

    const getIconVariantClasses = () => {
      switch (iconVariant) {
        case 'glassmorphism':
          return 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg';
        case 'neon':
          return 'bg-white/10 border-2 border-white/50 shadow-2xl shadow-white/25';
        case 'minimal':
          return 'bg-white/10 border border-white/20';
        default:
          return 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg';
      }
    };

    return (
      <div className="relative">
        {iconVariant === 'glassmorphism' && (
          <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg"></div>
        )}
        <div 
          className={`
            relative ${currentSize.icon} ${getIconVariantClasses()} rounded-2xl 
            flex items-center justify-center text-white drop-shadow-lg
            ${enableAnimations ? 'transition-all duration-300 hover:scale-110' : ''}
          `}
        >
          {icon}
        </div>
      </div>
    );
  };

  // Renderizar indicadores de estado
  const renderStatusIndicators = () => {
    return statusIndicators.map((indicator, index) => (
      <div key={index} className="flex items-center gap-2">
        <div 
          className={`
            w-2 h-2 rounded-full ${statusColors[indicator.status].dot}
            ${indicator.animate ? 'animate-pulse' : ''}
          `}
        />
        {indicator.icon}
        <span className={`font-medium text-sm ${statusColors[indicator.status].text}`}>
          {indicator.label}
        </span>
      </div>
    ));
  };

  // Renderizar badges informativos
  const renderInfoBadges = () => {
    return infoBadges.map((badge, index) => (
      <div key={index} className={`
        flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium
        ${badgeColors[badge.color || 'default']}
      `}>
        {badge.icon}
        <span>{badge.label}: {badge.value}</span>
      </div>
    ));
  };

  // Renderizar botones de acción
  const renderActionButtons = () => {
    return actionButtons.map((button, index) => (
      <button
        key={index}
        onClick={button.onClick}
        disabled={button.disabled || button.loading}
        className={`
          group relative ${currentSize.buttons} backdrop-blur-md rounded-xl border
          transition-all duration-300 hover:scale-105 hover:shadow-xl
          disabled:opacity-50 disabled:cursor-not-allowed
          ${buttonVariants[button.variant || 'primary']}
          ${button.active ? 'bg-white/30 border-white/50' : ''}
          ${button.className || ''}
        `}
      >
        <div className="flex items-center gap-2 font-medium">
          {button.icon && (
            <span className={`
              ${button.loading ? 'animate-spin' : enableAnimations ? 'group-hover:rotate-45 transition-transform duration-300' : ''}
            `}>
              {button.icon}
            </span>
          )}
          <span>{button.loading ? 'Cargando...' : button.label}</span>
        </div>
      </button>
    ));
  };

  return (
    <div className={`relative mb-8 overflow-hidden ${containerClassName}`}>
      {/* Fondo con gradiente */}
      <div className={`
        absolute inset-0 ${getGradientClasses()}
        ${gradientAnimation ? 'animate-gradient-x' : ''}
      `} />
      
      {/* Overlay adicional */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Efectos de fondo flotantes */}
      <div className="absolute top-0 left-0 w-full h-full">
        {renderDefaultFloatingElements()}
        {renderCustomFloatingElements()}
      </div>

      {/* Contenido del header */}
      <div className={`
        relative z-10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl
        ${currentPadding} ${contentClassName}
      `}>
        <div className={`
          ${responsive ? `flex flex-col ${mobileLayout === 'compact' ? 'lg:flex-row lg:items-center' : 'lg:flex-row lg:items-start'} lg:justify-between` : 'flex items-center justify-between'}
          ${currentSize.spacing}
        `}>
          {/* Información principal */}
          <div className={`flex items-center ${currentSize.spacing}`}>
            {/* Icono principal */}
            {renderMainIcon()}
            
            {/* Textos del header */}
            <div className="text-white">
              <h1 
                className={`
                  ${currentSize.title} font-black mb-2 drop-shadow-lg
                  ${onTitleClick ? 'cursor-pointer hover:text-white/90 transition-colors' : ''}
                `}
                onClick={onTitleClick}
              >
                {emoji && <span className="mr-2">{emoji}</span>}
                {title}
              </h1>
              
              {subtitle && (
                <h2 className={`${currentSize.subtitle} text-white/90 mb-2`}>
                  {subtitle}
                </h2>
              )}
              
              {description && (
                <p className="text-white/80 mb-4">
                  {description}
                </p>
              )}
              
              {/* Indicadores y badges */}
              <div className={`flex flex-wrap items-center ${currentSize.spacing} text-white/90`}>
                {renderStatusIndicators()}
                {statusIndicators.length > 0 && infoBadges.length > 0 && (
                  <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
                )}
                {renderInfoBadges()}
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          {actionButtons.length > 0 && (
            <div className="flex flex-wrap gap-3 lg:flex-nowrap">
              {renderActionButtons()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;

// Re-exportar tipos
export * from './types'; 