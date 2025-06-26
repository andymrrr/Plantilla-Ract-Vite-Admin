import React from 'react';
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonProps } from './Skeleton';

interface MenuSkeletonProps {
  /**
   * 🎨 Esquema de colores del skeleton
   */
  colorScheme?: SkeletonProps['colorScheme'];
  
  /**
   * 🎯 Colores personalizados
   */
  customColors?: SkeletonProps['customColors'];
  
  /**
   * 🔄 Tipo de animación
   */
  animation?: SkeletonProps['animation'];
  
  /**
   * 📊 Número de secciones del menú
   */
  sections?: number;
  
  /**
   * 📋 Número de items por sección
   */
  itemsPerSection?: number;
  
  /**
   * 📱 Mostrar header del sidebar
   */
  showHeader?: boolean;
  
  /**
   * 👤 Mostrar área de usuario
   */
  showUserArea?: boolean;
  
  /**
   * 📂 Mostrar algunos items como acordeones
   */
  showAccordions?: boolean;
  
  /**
   * 🎭 Variante del skeleton del menú
   */
  variant?: 'default' | 'compact' | 'detailed';
}

/**
 * 🍔 Skeleton del Header del Sidebar
 */
const SidebarHeaderSkeleton: React.FC<Pick<MenuSkeletonProps, 'colorScheme' | 'customColors' | 'animation'>> = ({
  colorScheme,
  customColors,
  animation
}) => (
  <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 border-b border-gray-200 dark:border-gray-700">
    {/* 🎨 Logo skeleton */}
    <Skeleton
      colorScheme={colorScheme}
      customColors={customColors}
      animation={animation}
      width="120px"
      height="32px"
      variant="rounded"
    />
    
    {/* 🍔 Hamburger button (solo móvil) */}
    <Skeleton
      colorScheme={colorScheme}
      customColors={customColors}
      animation={animation}
      width="40px"
      height="40px"
      variant="rounded"
      className="lg:hidden"
    />
  </div>
);

/**
 * 📋 Skeleton de Sección del Menú
 */
const MenuSectionSkeleton: React.FC<Pick<MenuSkeletonProps, 'colorScheme' | 'customColors' | 'animation' | 'itemsPerSection' | 'showAccordions' | 'variant'>> = ({
  colorScheme,
  customColors,
  animation,
  itemsPerSection = 3,
  showAccordions = false,
  variant = 'default'
}) => (
  <div className="mb-6">
    {/* 📊 Título de sección */}
    <div className="mb-4 ml-4">
      <SkeletonText
        colorScheme={colorScheme}
        customColors={customColors}
        animation={animation}
        width="80px"
        height="14px"
      />
    </div>
    
    {/* 📋 Items del menú */}
    <ul className="flex flex-col gap-1.5">
      {Array.from({ length: itemsPerSection }, (_, index) => {
        const isAccordion = showAccordions && index === Math.floor(itemsPerSection / 2);
        
        return (
          <li key={index}>
            <MenuItemSkeleton
              colorScheme={colorScheme}
              customColors={customColors}
              animation={animation}
              isAccordion={isAccordion}
              variant={variant}
            />
          </li>
        );
      })}
    </ul>
  </div>
);

/**
 * 🔗 Skeleton de Item del Menú
 */
const MenuItemSkeleton: React.FC<Pick<MenuSkeletonProps, 'colorScheme' | 'customColors' | 'animation' | 'variant'> & {
  isAccordion?: boolean;
}> = ({
  colorScheme,
  customColors,
  animation,
  variant = 'default',
  isAccordion = false
}) => {
  const getItemHeight = () => {
    switch (variant) {
      case 'compact': return '36px';
      case 'detailed': return '48px';
      default: return '40px';
    }
  };

  const getIconSize = () => {
    switch (variant) {
      case 'compact': return '16px';
      case 'detailed': return '24px';
      default: return '20px';
    }
  };

  return (
    <div>
      {/* 🎯 Item principal */}
      <div className="flex items-center gap-2.5 rounded-sm py-2 px-4">
        {/* 🎨 Icono */}
        <Skeleton
          colorScheme={colorScheme}
          customColors={customColors}
          animation={animation}
          width={getIconSize()}
          height={getIconSize()}
          variant="rounded"
        />
        
        {/* 📝 Texto */}
        <div className="flex-1">
          <SkeletonText
            colorScheme={colorScheme}
            customColors={customColors}
            animation={animation}
            width={`${60 + Math.random() * 40}%`}
            height={variant === 'detailed' ? '16px' : '14px'}
          />
        </div>
        
        {/* ↕️ Flecha de acordeón */}
        {isAccordion && (
          <Skeleton
            colorScheme={colorScheme}
            customColors={customColors}
            animation={animation}
            width="12px"
            height="12px"
            variant="rounded"
          />
        )}
      </div>
      
      {/* 📂 Contenido del acordeón */}
      {isAccordion && (
        <div className="ml-6 mt-2 space-y-1">
          {Array.from({ length: 2 }, (_, subIndex) => (
            <div key={subIndex} className="flex items-center gap-2 py-1.5 px-4">
              <Skeleton
                colorScheme={colorScheme}
                customColors={customColors}
                animation={animation}
                width="14px"
                height="14px"
                variant="rounded"
              />
              <SkeletonText
                colorScheme={colorScheme}
                customColors={customColors}
                animation={animation}
                width={`${50 + Math.random() * 30}%`}
                height="12px"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * 👤 Skeleton del Área de Usuario
 */
const UserAreaSkeleton: React.FC<Pick<MenuSkeletonProps, 'colorScheme' | 'customColors' | 'animation' | 'variant'>> = ({
  colorScheme,
  customColors,
  animation,
  variant = 'default'
}) => (
  <div className="mt-auto border-t border-gray-200 dark:border-gray-700 p-4">
    <div className="flex items-center gap-3">
      {/* 👤 Avatar */}
      <SkeletonAvatar
        colorScheme={colorScheme}
        customColors={customColors}
        animation={animation}
        size={variant === 'compact' ? 'sm' : 'md'}
      />
      
      {/* 📝 Info del usuario */}
      <div className="flex-1 space-y-1">
        <SkeletonText
          colorScheme={colorScheme}
          customColors={customColors}
          animation={animation}
          width="80%"
          height="14px"
        />
        <SkeletonText
          colorScheme={colorScheme}
          customColors={customColors}
          animation={animation}
          width="60%"
          height="12px"
        />
      </div>
      
      {/* ⚙️ Botón de configuración */}
      <Skeleton
        colorScheme={colorScheme}
        customColors={customColors}
        animation={animation}
        width="24px"
        height="24px"
        variant="rounded"
      />
    </div>
  </div>
);

/**
 * 🎯 Componente principal del Menu Skeleton
 */
export const MenuSkeleton: React.FC<MenuSkeletonProps> = ({
  colorScheme = 'default',
  customColors,
  animation = 'pulse',
  sections = 2,
  itemsPerSection = 4,
  showHeader = true,
  showUserArea = true,
  showAccordions = true,
  variant = 'default'
}) => {
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white dark:bg-boxdark lg:static lg:translate-x-0">
      {/* 🍔 Header */}
      {showHeader && (
        <SidebarHeaderSkeleton
          colorScheme={colorScheme}
          customColors={customColors}
          animation={animation}
        />
      )}
      
      {/* 🧭 Área de navegación */}
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {Array.from({ length: sections }, (_, index) => (
            <MenuSectionSkeleton
              key={index}
              colorScheme={colorScheme}
              customColors={customColors}
              animation={animation}
              itemsPerSection={itemsPerSection}
              showAccordions={showAccordions && index === 0}
              variant={variant}
            />
          ))}
        </nav>
      </div>
      
      {/* 👤 Área de usuario */}
      {showUserArea && (
        <UserAreaSkeleton
          colorScheme={colorScheme}
          customColors={customColors}
          animation={animation}
          variant={variant}
        />
      )}
    </aside>
  );
};

/**
 * 📱 Skeleton compacto para móviles
 */
export const MenuSkeletonMobile: React.FC<Omit<MenuSkeletonProps, 'variant' | 'showUserArea'>> = (props) => (
  <MenuSkeleton
    {...props}
    variant="compact"
    showUserArea={false}
    sections={1}
    itemsPerSection={5}
  />
);

/**
 * 🖥️ Skeleton detallado para desktop
 */
export const MenuSkeletonDesktop: React.FC<Omit<MenuSkeletonProps, 'variant'>> = (props) => (
  <MenuSkeleton
    {...props}
    variant="detailed"
    sections={3}
    itemsPerSection={4}
  />
); 