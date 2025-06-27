import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { MenuItem } from '../types';
import { ColorMode } from '../hooks/useTheme';

interface MenuItemAccordionProps {
  item: MenuItem;
  itemIndex: number;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isExpanded: boolean;
  isPopupOpen: boolean;
  colorMode: ColorMode;
  handleAccordionInteraction: (itemId: string, hasLinks: boolean) => void;
  handleMouseEnterAccordion: (itemId: string, hasLinks: boolean) => void;
  handleMouseLeaveAccordion: (itemId: string, hasLinks: boolean) => void;
  handleMouseEnterPopup: () => void;
  handleMouseLeavePopup: () => void;
}

export const MenuItemAccordion: React.FC<MenuItemAccordionProps> = ({
  item,
  itemIndex,
  sidebarOpen,
  setSidebarOpen,
  isExpanded,
  isPopupOpen,
  colorMode,
  handleAccordionInteraction,
  handleMouseEnterAccordion,
  handleMouseLeaveAccordion,
  handleMouseEnterPopup,
  handleMouseLeavePopup,
}) => {
  const IconComponent = item.icon;
  const hasLinks = item.links && item.links.length > 0;
  
  // ✨ NUEVO: Ref para calcular posición real del elemento
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [popupPosition, setPopupPosition] = React.useState({ top: 0, left: 85 });

  // ✨ NUEVO: Calcular posición dinámica del popup
  React.useEffect(() => {
    if (!sidebarOpen && isPopupOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const sidebar = buttonRef.current.closest('[data-sidebar]') as HTMLElement;
      const sidebarRect = sidebar?.getBoundingClientRect();
      
      const newPosition = {
        // Posición horizontal: al lado derecho del sidebar
        left: sidebarRect ? sidebarRect.right + 8 : 85,
        // Posición vertical: alineada con el botón que lo activa
        top: buttonRect.top
      };
      
      // Ajustar si se sale de la pantalla
      const popupHeight = 200; // Altura estimada del popup
      const windowHeight = window.innerHeight;
      
      if (newPosition.top + popupHeight > windowHeight) {
        newPosition.top = windowHeight - popupHeight - 20;
      }
      
      if (newPosition.top < 20) {
        newPosition.top = 20;
      }
      
      setPopupPosition(newPosition);
    }
  }, [sidebarOpen, isPopupOpen, itemIndex]);

  return (
    <div className="relative group" style={{ position: 'relative' }}>
      {/* Botón del accordion */}
      <button
        ref={buttonRef} // ✨ NUEVO: Ref para cálculos de posición
        onClick={() => handleAccordionInteraction(item.id, hasLinks || false)}
        onMouseEnter={() => handleMouseEnterAccordion(item.id, hasLinks || false)}
        onMouseLeave={() => handleMouseLeaveAccordion(item.id, hasLinks || false)}
        className={`
          w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
          text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          ${isPopupOpen ? 'bg-gray-100 dark:bg-gray-800' : ''}
        `}
        aria-expanded={sidebarOpen ? isExpanded : isPopupOpen}
        aria-haspopup={hasLinks ? 'true' : 'false'}
        aria-label={`${item.label}${hasLinks ? ' - Menú desplegable' : ''}`}
      >
        <div className="flex items-center min-w-0">
          {IconComponent && (
            <span className="flex-shrink-0 w-5 h-5 mr-3 text-current">
              <IconComponent />
            </span>
          )}
          {sidebarOpen && (
            <span className="truncate">{item.label}</span>
          )}
        </div>
        {sidebarOpen && hasLinks && (
          <span className="flex-shrink-0 ml-2 transition-transform duration-200">
            {isExpanded ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
          </span>
        )}
        {!sidebarOpen && hasLinks && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
            <FaChevronRight size={8} />
          </span>
        )}
      </button>

      {/* Contenido del accordion cuando está expandido y sidebar abierto */}
      {sidebarOpen && isExpanded && hasLinks && (
        <ul className="ml-6 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3" role="list">
          {item.links?.map((link, linkIndex) => {
            const LinkIconComponent = link.icon;
            return (
              <li key={linkIndex}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `
                    flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    ${isActive 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500 font-semibold' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                    }
                  `}
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setSidebarOpen(false);
                    }
                  }}
                >
                  {({ isActive }) => (
                    <>
                      {LinkIconComponent && (
                        <span className={`flex-shrink-0 w-4 h-4 mr-2 ${
                          isActive 
                            ? 'text-blue-600 dark:text-blue-300' 
                            : 'text-current'
                        }`}>
                          <LinkIconComponent />
                        </span>
                      )}
                      <span className="truncate">{link.label}</span>
                      {isActive && (
                        <span className="ml-auto text-xs text-blue-600 dark:text-blue-300">
                          ●
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}

      {/* ✨ MEJORADO: Popup para sidebar colapsado con posicionamiento dinámico */}
      {!sidebarOpen && hasLinks && isPopupOpen && (
        <div 
          style={{
            position: 'fixed',
            left: `${popupPosition.left}px`, // ✨ Posición dinámica
            top: `${popupPosition.top}px`,   // ✨ Posición dinámica
            zIndex: 9999,
            backgroundColor: colorMode === 'dark' ? '#1f2937' : '#ffffff',
            border: `1px solid ${colorMode === 'dark' ? '#374151' : '#e5e7eb'}`,
            borderRadius: '12px',
            minWidth: '260px',
            maxWidth: '320px',
            boxShadow: colorMode === 'dark' 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 10px 20px -5px rgba(0, 0, 0, 0.4)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            animation: 'fadeInScale 0.2s ease-out' // ✨ Animación suave
          }}
          onMouseEnter={handleMouseEnterPopup}
          onMouseLeave={handleMouseLeavePopup}
        >
          {/* Header elegante */}
          <div style={{
            padding: '16px 20px 12px',
            backgroundColor: colorMode === 'dark' ? '#374151' : '#f8fafc',
            borderBottom: `1px solid ${colorMode === 'dark' ? '#4b5563' : '#e2e8f0'}`,
            display: 'flex',
            alignItems: 'center'
          }}>
            {IconComponent && (
              <span style={{ 
                marginRight: '12px', 
                color: colorMode === 'dark' ? '#60a5fa' : '#3b82f6',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <IconComponent />
              </span>
            )}
            <span style={{
              fontSize: '15px',
              fontWeight: '600',
              color: colorMode === 'dark' ? '#f9fafb' : '#1f2937'
            }}>
              {item.label}
            </span>
          </div>
          
          {/* Enlaces elegantes */}
          <div style={{ padding: '8px 0' }}>
            {item.links?.map((link, linkIndex) => {
              const LinkIconComponent = link.icon;
              return (
                <NavLink
                  key={linkIndex}
                  to={link.to}
                  className={({ isActive }) => 
                    `flex items-center px-5 py-3 text-sm font-medium transition-all duration-200 border-l-3 ${
                      isActive 
                        ? `${colorMode === 'dark' ? 'bg-blue-900/50 text-blue-300 border-l-blue-400' : 'bg-blue-50 text-blue-700 border-l-blue-500'} font-semibold`
                        : `${colorMode === 'dark' ? 'text-gray-300 border-l-transparent hover:bg-gray-700 hover:text-white' : 'text-gray-700 border-l-transparent hover:bg-gray-100 hover:text-gray-900'}`
                    }`
                  }
                  onClick={() => {
                    handleMouseLeavePopup();
                    if (window.innerWidth <= 768) {
                      setSidebarOpen(false);
                    }
                  }}
                >
                  {({ isActive }) => (
                    <>
                      {LinkIconComponent && (
                        <span className={`mr-3 text-base flex items-center ${
                          isActive 
                            ? colorMode === 'dark' ? 'text-blue-300' : 'text-blue-600'
                            : colorMode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          <LinkIconComponent />
                        </span>
                      )}
                      <span className="truncate">{link.label}</span>
                      {isActive && (
                        <span className={`ml-auto text-xs ${
                          colorMode === 'dark' ? 'text-blue-300' : 'text-blue-600'
                        }`}>
                          ●
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* ✨ MEJORADO: Flecha indicadora con posición dinámica */}
          <div 
            style={{
              position: 'absolute',
              right: '100%',
              top: '20px', // Posición fija relativa al popup
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderRight: `8px solid ${colorMode === 'dark' ? '#1f2937' : '#ffffff'}`
            }}
          />
          <div 
            style={{
              position: 'absolute',
              right: '100%',
              top: '21px',
              width: 0,
              height: 0,
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              borderRight: `7px solid ${colorMode === 'dark' ? '#374151' : '#e5e7eb'}`
            }}
          />
        </div>
      )}

      {/* Tooltip simple para sidebar colapsado */}
      {!sidebarOpen && !hasLinks && (
        <div 
          className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 
                    bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                    whitespace-nowrap z-50 pointer-events-none"
        >
          {item.label}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-2 border-y-transparent border-r-2 border-r-gray-900 dark:border-r-gray-700" />
        </div>
      )}
    </div>
  );
}; 