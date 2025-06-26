import React, { ReactNode } from 'react';

interface HeaderIconProps {
  icon: ReactNode;
  variant: 'default' | 'glassmorphism' | 'neon' | 'minimal';
  size: string;
  animate?: boolean;
}

const HeaderIcon: React.FC<HeaderIconProps> = ({
  icon,
  variant,
  size,
  animate = true
}) => {
  const getVariantClasses = () => {
    switch (variant) {
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

  const getGlowEffect = () => {
    if (variant === 'neon') {
      return 'before:absolute before:inset-0 before:bg-white/30 before:rounded-2xl before:blur-lg before:-z-10';
    }
    return '';
  };

  return (
    <div className="relative">
      {/* Efecto de resplandor para glassmorphism */}
      {variant === 'glassmorphism' && (
        <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg"></div>
      )}
      
      {/* Contenedor del icono */}
      <div 
        className={`
          relative ${size} ${getVariantClasses()} rounded-2xl 
          flex items-center justify-center text-white drop-shadow-lg
          ${animate ? 'transition-all duration-300 hover:scale-110' : ''}
          ${getGlowEffect()}
        `}
      >
        {icon}
      </div>
    </div>
  );
};

export default HeaderIcon; 