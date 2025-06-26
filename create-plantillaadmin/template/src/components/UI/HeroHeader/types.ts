import { ReactNode } from 'react';

export type GradientPreset = 
  | 'blue-purple' 
  | 'purple-pink' 
  | 'green-blue' 
  | 'orange-red' 
  | 'dark-light' 
  | 'sunset' 
  | 'ocean' 
  | 'forest' 
  | 'fire' 
  | 'space'
  | 'corporate'
  | 'business'
  | 'executive';

export type HeaderSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ActionButton {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  active?: boolean;
}

export interface StatusIndicator {
  label: string;
  status: 'active' | 'inactive' | 'warning' | 'error';
  icon?: ReactNode;
  animate?: boolean;
}

export interface InfoBadge {
  label: string;
  value: string;
  icon?: ReactNode;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

export interface FloatingElement {
  size: 'sm' | 'md' | 'lg';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  color?: string;
  animation?: 'pulse' | 'bounce' | 'float' | 'none';
  delay?: number;
}

export interface HeroHeaderProps {
  // Contenido principal
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
  
  // Icono principal
  icon?: ReactNode;
  iconVariant?: 'default' | 'glassmorphism' | 'neon' | 'minimal';
  
  // Gradientes y colores
  gradientPreset?: GradientPreset;
  customGradient?: string;
  overlayOpacity?: number;
  
  // Tamaño y espaciado
  size?: HeaderSize;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Elementos flotantes
  floatingElements?: FloatingElement[];
  enableDefaultFloating?: boolean;
  
  // Indicadores de estado
  statusIndicators?: StatusIndicator[];
  
  // Badges informativos
  infoBadges?: InfoBadge[];
  
  // Botones de acción
  actionButtons?: ActionButton[];
  
  // Animaciones
  enableAnimations?: boolean;
  gradientAnimation?: boolean;
  
  // Personalización
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  
  // Responsive
  responsive?: boolean;
  mobileLayout?: 'stacked' | 'compact';
  
  // Eventos
  onTitleClick?: () => void;
}

export interface GradientConfig {
  from: string;
  via?: string;
  to: string;
  direction: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-br' | 'to-bl' | 'to-tr' | 'to-tl';
} 