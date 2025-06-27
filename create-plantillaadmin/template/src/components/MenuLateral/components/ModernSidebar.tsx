import React from 'react';
import { menuConfig } from '../menuConfig';
import { SidebarProps } from '../types';
import { useSidebarState, useTheme, useMenuSearch, useAccordionHandlers } from '../hooks';
import { SidebarHeader } from './SidebarHeader';
import { SidebarSearch } from './SidebarSearch';
import { SidebarFooter } from './SidebarFooter';
import { MenuItemLink } from './MenuItemLink';
import { MenuItemAccordion } from './MenuItemAccordion';
import '../styles/ModernSidebar.css';

export const ModernSidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  // Hooks personalizados
  const { colorMode, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery, filteredMenu } = useMenuSearch(menuConfig);
  const {
    expandedSections,
    activeAccordionPopup,
    setActiveAccordionPopup,
    popupTimeoutRef,
    sidebarRef,
    toggleSection,
    isSectionExpanded,
  } = useSidebarState(sidebarOpen, setSidebarOpen);

  const accordionHandlers = useAccordionHandlers({
    sidebarOpen,
    activeAccordionPopup,
    setActiveAccordionPopup,
    popupTimeoutRef,
    toggleSection,
  });

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
        <SidebarHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Búsqueda */}
        <SidebarSearch 
          sidebarOpen={sidebarOpen} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

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
                    const isExpanded = isSectionExpanded(item.id);
                    const isPopupOpen = activeAccordionPopup === item.id;
                    
                    return (
                      <li key={itemIndex} className="relative">
                        {item.type === 'accordion' ? (
                          <MenuItemAccordion
                            item={item}
                            itemIndex={itemIndex}
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                            isExpanded={isExpanded}
                            isPopupOpen={isPopupOpen}
                            colorMode={colorMode}
                            {...accordionHandlers}
                          />
                        ) : (
                          <MenuItemLink
                            item={item}
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                          />
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
        <SidebarFooter 
          sidebarOpen={sidebarOpen} 
          colorMode={colorMode} 
          toggleTheme={toggleTheme} 
        />
      </div>
    </>
  );
}; 