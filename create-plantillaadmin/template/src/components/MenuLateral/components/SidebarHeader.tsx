import React from 'react';
import { FaBars, FaChevronLeft } from 'react-icons/fa';
import { ACTIVE_LOGO_CONFIG, getLogoSizeConfig } from '../config/logoConfig';

interface SidebarHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const [logoError, setLogoError] = React.useState(false);
  const config = ACTIVE_LOGO_CONFIG;
  const sizeConfig = getLogoSizeConfig(config.size);
  const FallbackIcon = config.fallbackIcon;

  return (
    <div className={`flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'} ${sidebarOpen ? sizeConfig.padding : 'p-2'} border-b border-gray-200 dark:border-gray-700 flex-shrink-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900`}>
      {sidebarOpen && (
        <div className="flex items-center transition-all duration-300 opacity-100 scale-100">
          <div className="relative flex items-center justify-center group">
            {config.imagePath && !logoError ? (
              <img 
                src={config.imagePath}
                alt={config.altText}
                className={`${sizeConfig.logoSize} flex-shrink-0 rounded-lg shadow-lg border-2 border-white dark:border-gray-600 ${
                  config.enableHoverEffects 
                    ? 'transition-transform duration-200 hover:scale-105' 
                    : ''
                }`}
                onError={() => setLogoError(true)}
                loading="lazy"
              />
            ) : (
              <div className={`${sizeConfig.logoSize} flex items-center justify-center bg-gradient-to-br ${config.fallbackBgGradient.from} ${config.fallbackBgGradient.to} text-white rounded-lg shadow-lg border-2 border-white dark:border-gray-600 ${
                config.enableHoverEffects 
                  ? 'transition-transform duration-200 hover:scale-105' 
                  : ''
              }`}>
                <FallbackIcon size={sizeConfig.iconSize} />
              </div>
            )}
            
            {config.showOnlineIndicator && (
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full ${
                config.enablePulseIndicator ? 'animate-pulse' : ''
              }`} />
            )}

            {config.showTooltip && !sidebarOpen && (
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
                {config.title}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-gray-900 dark:border-r-gray-700" />
              </div>
            )}
          </div>

          <div className="ml-4 transition-all duration-300">
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
      )}

      <button
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
        className={`group rounded-xl hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md border border-transparent hover:border-gray-200 dark:hover:border-gray-600 ${
          sidebarOpen 
            ? 'p-3' 
            : 'p-4 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-lg scale-110' 
        }`}
        aria-label={sidebarOpen ? 'Colapsar menú' : 'Abrir menú'}
      >
        <div className="relative group">
          {sidebarOpen ? (
            <FaChevronLeft 
              size={24} 
              className={config.enableHoverEffects ? "transform group-hover:-translate-x-1 transition-transform duration-200" : ""} 
            />
          ) : (
            <>
              <FaBars 
                size={28} 
                className={config.enableHoverEffects ? "transform group-hover:scale-110 transition-transform duration-200" : ""} 
              />
              
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
                Abrir menú
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-gray-900 dark:border-r-gray-700" />
              </div>
            </>
          )}
        </div>
      </button>
    </div>
  );
}; 