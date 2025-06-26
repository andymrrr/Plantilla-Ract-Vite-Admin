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

  // Simplificar la gestión del accordion
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
                              onMouseEnter={() => !sidebarOpen && hasLinks && setActiveAccordionPopup(item.id)}
                              onMouseLeave={() => !sidebarOpen && hasLinks && setActiveAccordionPopup(null)}
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

                            {/* Popup para sidebar colapsado - VERSIÓN SUPER VISIBLE */}
                            {!sidebarOpen && hasLinks && isPopupOpen && (
                              <div 
                                style={{
                                  position: 'fixed',
                                  left: '90px',
                                  top: '200px',
                                  zIndex: 99999,
                                  backgroundColor: 'red',
                                  border: '3px solid black',
                                  borderRadius: '8px',
                                  padding: '20px',
                                  minWidth: '300px',
                                  maxHeight: '400px',
                                  overflow: 'auto',
                                  boxShadow: '0 0 20px rgba(0,0,0,0.8)'
                                }}
                                onMouseEnter={() => setActiveAccordionPopup(item.id)}
                                onMouseLeave={() => setActiveAccordionPopup(null)}
                              >
                                <div style={{
                                  color: 'white',
                                  fontSize: '16px',
                                  fontWeight: 'bold',
                                  marginBottom: '15px',
                                  textAlign: 'center'
                                }}>
                                  🚀 {item.label} - POPUP FUNCIONANDO! 🚀
                                </div>
                                
                                {item.links?.map((link, linkIndex) => (
                                  <div key={linkIndex} style={{
                                    backgroundColor: 'white',
                                    margin: '8px 0',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    border: '2px solid black'
                                  }}>
                                    <NavLink
                                      to={link.to}
                                      style={{
                                        color: 'black',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        display: 'block'
                                      }}
                                      onClick={() => {
                                        setActiveAccordionPopup(null);
                                        if (window.innerWidth <= 768) {
                                          setSidebarOpen(false);
                                        }
                                      }}
                                    >
                                      ▶️ {link.label}
                                    </NavLink>
                                  </div>
                                ))}
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