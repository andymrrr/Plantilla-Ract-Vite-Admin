import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaMoon, FaSun, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { menuConfig } from '../menuConfig';
import '../styles/ModernSidebar.css';

interface ModernSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const ModernSidebar: React.FC<ModernSidebarProps> = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [activeAccordionPopup, setActiveAccordionPopup] = React.useState<string | null>(null);
  const popupTimeoutRef = useRef<number | null>(null);

  // Cargar tema desde localStorage al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme') as 'light' | 'dark';
    if (savedTheme) {
      setColorMode(savedTheme);
    }
  }, []);

  // Aplicar tema al body
  useEffect(() => {
    const bodyClass = window.document.body.classList;
    if (colorMode === 'dark') {
      bodyClass.add('dark');
    } else {
      bodyClass.remove('dark');
    }
    localStorage.setItem('color-theme', colorMode);
  }, [colorMode]);

  // Cerrar sidebar al hacer clic fuera en móvil
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        if (window.innerWidth <= 768) {
          setSidebarOpen(false);
        }
        // Cerrar popup de acordeón si está abierto
        setActiveAccordionPopup(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setSidebarOpen]);

  // Cerrar sidebar con Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
        setActiveAccordionPopup(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setSidebarOpen]);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
    };
  }, []);

  // Filtrar menú por búsqueda
  const filteredMenu = React.useMemo(() => {
    if (!searchQuery) return menuConfig;
    
    return menuConfig.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.to?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.links?.some(link => 
          link.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link.to.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    })).filter(section => section.items.length > 0);
  }, [searchQuery]);

  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  const toggleSection = (itemId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isSectionExpanded = (itemId: string) => expandedSections.has(itemId);

  // Gestión mejorada del accordion con delays
  const handleAccordionInteraction = (itemId: string, hasLinks: boolean) => {
    if (sidebarOpen) {
      // Comportamiento normal cuando está expandido
      if (hasLinks) {
        toggleSection(itemId);
      }
    } else {
      // Cuando está colapsado, alternar popup
      if (hasLinks) {
        setActiveAccordionPopup(activeAccordionPopup === itemId ? null : itemId);
      }
    }
  };

  const handleMouseEnterAccordion = (itemId: string, hasLinks: boolean) => {
    if (!sidebarOpen && hasLinks) {
      // Limpiar cualquier timeout pendiente
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
      setActiveAccordionPopup(itemId);
    }
  };

  const handleMouseLeaveAccordion = (itemId: string, hasLinks: boolean) => {
    if (!sidebarOpen && hasLinks) {
      // Delay antes de cerrar para permitir mover al popup
      popupTimeoutRef.current = window.setTimeout(() => {
        setActiveAccordionPopup(null);
      }, 300);
    }
  };

  const handleMouseEnterPopup = () => {
    // Cancelar el cierre del popup
    if (popupTimeoutRef.current) {
      clearTimeout(popupTimeoutRef.current);
    }
  };

  const handleMouseLeavePopup = () => {
    // Cerrar inmediatamente al salir del popup
    setActiveAccordionPopup(null);
  };

  return (
    <>
      {/* Overlay para móvil */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 z-50 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0 lg:w-20'}
          lg:relative lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          {/* Logo */}
          <div className={`flex items-center transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
            <img 
              src="/src/images/logo/logo.svg" 
              alt="Logo" 
              className="w-8 h-8 flex-shrink-0"
            />
            {sidebarOpen && (
              <span className="ml-3 text-lg font-semibold text-gray-900 dark:text-white transition-all duration-300">
                Admin
              </span>
            )}
          </div>

          {/* Botón toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
            aria-label={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Búsqueda */}
        <div className={`p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder={sidebarOpen ? "Buscar..." : ""}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              aria-label="Buscar en el menú"
            />
          </div>
        </div>

        {/* Navegación con scroll */}
        <nav 
          className="flex-1 overflow-y-auto overflow-x-hidden sidebar-scroll"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            maxHeight: 'calc(100vh - 200px)',
            minHeight: '400px'
          }}
          role="navigation"
          aria-label="Menú principal"
        >
          <div className="p-4">
            {filteredMenu.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                {/* Título de sección */}
                {sidebarOpen && section.title && (
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                )}

                {/* Items */}
                <ul className="space-y-1" role="list">
                  {section.items.map((item, itemIndex) => {
                    const IconComponent = item.icon;
                    const isExpanded = isSectionExpanded(item.id);
                    const hasLinks = item.links && item.links.length > 0;
                    const isPopupOpen = activeAccordionPopup === item.id;
                    
                    return (
                      <li key={itemIndex} className="relative">
                        {item.type === 'accordion' ? (
                          <div className="relative group" style={{ position: 'relative' }}>
                            {/* Botón del accordion */}
                                                          <button
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
                                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                                          }
                                        `}
                                        onClick={() => {
                                          if (window.innerWidth <= 768) {
                                            setSidebarOpen(false);
                                          }
                                        }}
                                      >
                                        {LinkIconComponent && (
                                          <span className="flex-shrink-0 w-4 h-4 mr-2">
                                            <LinkIconComponent />
                                          </span>
                                        )}
                                        <span className="truncate">{link.label}</span>
                                      </NavLink>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}

                            {/* Popup para sidebar colapsado - DISEÑO ELEGANTE */}
                            {!sidebarOpen && hasLinks && isPopupOpen && (
                              <div 
                                style={{
                                  position: 'fixed',
                                  left: '85px',
                                  top: `${160 + (itemIndex * 48)}px`,
                                  zIndex: 9999,
                                  backgroundColor: colorMode === 'dark' ? '#1f2937' : '#ffffff',
                                  border: `1px solid ${colorMode === 'dark' ? '#374151' : '#e5e7eb'}`,
                                  borderRadius: '12px',
                                  minWidth: '260px',
                                  maxWidth: '320px',
                                  boxShadow: colorMode === 'dark' 
                                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 10px 20px -5px rgba(0, 0, 0, 0.4)'
                                    : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)',
                                  overflow: 'hidden'
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
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          padding: '12px 20px',
                                          color: colorMode === 'dark' ? '#d1d5db' : '#374151',
                                          textDecoration: 'none',
                                          fontSize: '14px',
                                          fontWeight: '500',
                                          transition: 'all 0.2s ease',
                                          borderLeft: '3px solid transparent'
                                        }}
                                        onMouseEnter={(e) => {
                                          const target = e.currentTarget as HTMLElement;
                                          target.style.backgroundColor = colorMode === 'dark' ? '#374151' : '#f1f5f9';
                                          target.style.borderLeftColor = colorMode === 'dark' ? '#60a5fa' : '#3b82f6';
                                        }}
                                        onMouseLeave={(e) => {
                                          const target = e.currentTarget as HTMLElement;
                                          target.style.backgroundColor = 'transparent';
                                          target.style.borderLeftColor = 'transparent';
                                        }}
                                        onClick={() => {
                                          setActiveAccordionPopup(null);
                                          if (window.innerWidth <= 768) {
                                            setSidebarOpen(false);
                                          }
                                        }}
                                      >
                                        {LinkIconComponent && (
                                          <span style={{ 
                                            marginRight: '12px',
                                            fontSize: '16px',
                                            color: colorMode === 'dark' ? '#9ca3af' : '#6b7280',
                                            display: 'flex',
                                            alignItems: 'center'
                                          }}>
                                            <LinkIconComponent />
                                          </span>
                                        )}
                                        {link.label}
                                      </NavLink>
                                    );
                                  })}
                                </div>

                                {/* Flecha indicadora elegante */}
                                <div 
                                  style={{
                                    position: 'absolute',
                                    right: '100%',
                                    top: '24px',
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
                                    top: '25px',
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
                        ) : (
                          <div className="relative group">
                            <NavLink
                              to={item.to || '#'}
                              className={({ isActive }) => `
                                flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                                ${isActive 
                                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }
                              `}
                              onClick={() => window.innerWidth <= 768 && setSidebarOpen(false)}
                            >
                              {IconComponent && (
                                <span className="flex-shrink-0 w-5 h-5 mr-3">
                                  <IconComponent />
                                </span>
                              )}
                              {sidebarOpen && (
                                <span className="truncate">{item.label}</span>
                              )}
                            </NavLink>
                            {!sidebarOpen && (
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
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className={`flex items-center justify-between transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
              title={colorMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label={colorMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {colorMode === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            
            {sidebarOpen && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                v1.0.0
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}; 