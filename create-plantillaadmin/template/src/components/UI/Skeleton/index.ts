// 🎯 Componentes base de skeleton
export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonImage,
  type SkeletonProps
} from './Skeleton';

// 🍔 Componentes específicos del menú
export {
  MenuSkeleton,
  MenuSkeletonMobile,
  MenuSkeletonDesktop
} from './MenuSkeleton';

// 🎨 Esquemas de colores predefinidos para fácil uso
export const SKELETON_COLOR_SCHEMES = {
  default: 'default' as const,
  light: 'light' as const,
  dark: 'dark' as const,
  blue: 'blue' as const,
  green: 'green' as const,
  purple: 'purple' as const,
  custom: 'custom' as const,
};

// 🔄 Tipos de animación disponibles
export const SKELETON_ANIMATIONS = {
  pulse: 'pulse' as const,
  wave: 'wave' as const,
  shimmer: 'shimmer' as const,
  none: 'none' as const,
};

// 🎭 Variantes de forma disponibles
export const SKELETON_VARIANTS = {
  rectangular: 'rectangular' as const,
  circular: 'circular' as const,
  rounded: 'rounded' as const,
  text: 'text' as const,
}; 