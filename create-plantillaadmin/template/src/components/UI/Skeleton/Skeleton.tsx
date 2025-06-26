import React from 'react';

export interface SkeletonProps {
  /**
   * 🎨 Esquema de colores del skeleton
   */
  colorScheme?: 'default' | 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'custom';
  
  /**
   * 🎯 Colores personalizados (solo si colorScheme es 'custom')
   */
  customColors?: {
    base?: string;
    highlight?: string;
  };
  
  /**
   * 📏 Dimensiones
   */
  width?: string | number;
  height?: string | number;
  
  /**
   * 🔄 Tipo de animación
   */
  animation?: 'pulse' | 'wave' | 'shimmer' | 'none';
  
  /**
   * 🎭 Forma del skeleton
   */
  variant?: 'rectangular' | 'circular' | 'rounded' | 'text';
  
  /**
   * 📱 Clases CSS adicionales
   */
  className?: string;
  
  /**
   * 🔧 Props adicionales
   */
  style?: React.CSSProperties;
  
  /**
   * 👶 Elementos hijos (para skeletons complejos)
   */
  children?: React.ReactNode;
}

/**
 * 🎨 Esquemas de colores predefinidos
 */
const COLOR_SCHEMES = {
  default: {
    base: 'bg-gray-200 dark:bg-gray-700',
    highlight: 'bg-gray-300 dark:bg-gray-600'
  },
  light: {
    base: 'bg-gray-100 dark:bg-gray-800',
    highlight: 'bg-gray-200 dark:bg-gray-700'
  },
  dark: {
    base: 'bg-gray-800 dark:bg-gray-900',
    highlight: 'bg-gray-700 dark:bg-gray-800'
  },
  blue: {
    base: 'bg-blue-100 dark:bg-blue-900/30',
    highlight: 'bg-blue-200 dark:bg-blue-800/40'
  },
  green: {
    base: 'bg-green-100 dark:bg-green-900/30',
    highlight: 'bg-green-200 dark:bg-green-800/40'
  },
  purple: {
    base: 'bg-purple-100 dark:bg-purple-900/30',
    highlight: 'bg-purple-200 dark:bg-purple-800/40'
  }
} as const;

/**
 * 🔄 Clases de animación
 */
const ANIMATIONS = {
  pulse: 'animate-pulse',
  wave: 'animate-wave',
  shimmer: 'animate-shimmer',
  none: ''
} as const;

/**
 * 🎭 Variantes de forma
 */
const VARIANTS = {
  rectangular: '',
  circular: 'rounded-full',
  rounded: 'rounded-md',
  text: 'rounded-sm'
} as const;

/**
 * 🎯 Componente Skeleton base
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  colorScheme = 'default',
  customColors,
  width,
  height,
  animation = 'pulse',
  variant = 'rectangular',
  className = '',
  style,
  children,
}) => {
  // 🎨 Obtener colores
  const getColors = () => {
    if (colorScheme === 'custom' && customColors) {
      return {
        base: customColors.base || COLOR_SCHEMES.default.base,
        highlight: customColors.highlight || COLOR_SCHEMES.default.highlight
      };
    }
    return COLOR_SCHEMES[colorScheme as keyof typeof COLOR_SCHEMES] || COLOR_SCHEMES.default;
  };

  const colors = getColors();
  
  // 📏 Estilos dinámicos
  const dynamicStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...style,
  };

  // 🎯 Clases CSS combinadas
  const combinedClasses = [
    colors.base,
    ANIMATIONS[animation],
    VARIANTS[variant],
    'relative overflow-hidden',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClasses}
      style={dynamicStyle}
      role="status"
      aria-label="Cargando contenido..."
    >
      {/* 🌊 Efecto shimmer/wave */}
      {animation === 'shimmer' && (
        <div className={`
          absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          animate-shimmer
        `} />
      )}
      
      {/* 👶 Contenido hijo */}
      {children}
    </div>
  );
};

/**
 * 📝 Skeleton para texto
 */
export const SkeletonText: React.FC<Omit<SkeletonProps, 'variant'> & {
  lines?: number;
  lineHeight?: string;
  lastLineWidth?: string;
}> = ({
  lines = 1,
  lineHeight = '1rem',
  lastLineWidth = '75%',
  ...props
}) => {
  if (lines === 1) {
    return (
      <Skeleton
        {...props}
        variant="text"
        height={lineHeight}
      />
    );
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton
          key={index}
          {...props}
          variant="text"
          height={lineHeight}
          width={index === lines - 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
};

/**
 * 👤 Skeleton para avatar
 */
export const SkeletonAvatar: React.FC<Omit<SkeletonProps, 'variant'> & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({
  size = 'md',
  ...props
}) => {
  const sizes = {
    sm: { width: '2rem', height: '2rem' },
    md: { width: '3rem', height: '3rem' },
    lg: { width: '4rem', height: '4rem' },
    xl: { width: '5rem', height: '5rem' }
  };

  return (
    <Skeleton
      {...props}
      variant="circular"
      width={sizes[size].width}
      height={sizes[size].height}
    />
  );
};

/**
 * 🖼️ Skeleton para imagen
 */
export const SkeletonImage: React.FC<Omit<SkeletonProps, 'variant'> & {
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall';
}> = ({
  aspectRatio = 'square',
  width = '100%',
  ...props
}) => {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]',
    tall: 'aspect-[3/4]'
  };

  return (
    <Skeleton
      {...props}
      variant="rounded"
      width={width}
      className={`${aspectRatios[aspectRatio]} ${props.className || ''}`}
    />
  );
}; 