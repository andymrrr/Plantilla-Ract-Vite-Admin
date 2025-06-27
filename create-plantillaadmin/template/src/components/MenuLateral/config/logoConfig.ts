import { IconType } from 'react-icons';
import { 
  FaUserShield, 
  FaCog, 
  FaBuilding, 
  FaChartLine, 
  FaShoppingBag,
  FaGraduationCap,
  FaHeart,
  FaRocket,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';


export interface LogoConfig {

  imagePath?: string;
  altText: string;

  fallbackIcon: IconType;
  fallbackBgGradient: {
    from: string;
    to: string;
  };
  
  
  title: string;
  subtitle?: string;
  showSubtitle: boolean;

  
  size: 'sm' | 'md' | 'lg' | 'xl';
  showOnlineIndicator: boolean;
  showTooltip: boolean;
  
  
  enableHoverEffects: boolean;
  enablePulseIndicator: boolean;
}



export const LOGO_SIZES = {
  sm: {
    logoSize: 'w-8 h-8',
    iconSize: 16,
    titleSize: 'text-base',
    subtitleSize: 'text-xs',
    padding: 'p-4'
  },
  md: {
    logoSize: 'w-10 h-10',
    iconSize: 20,
    titleSize: 'text-lg',
    subtitleSize: 'text-sm',
    padding: 'p-5'
  },
  lg: {
    logoSize: 'w-12 h-12',
    iconSize: 24,
    titleSize: 'text-xl',
    subtitleSize: 'text-sm',
    padding: 'p-6'
  },
  xl: {
    logoSize: 'w-16 h-16',
    iconSize: 32,
    titleSize: 'text-2xl',
    subtitleSize: 'text-base',
    padding: 'p-7'
  }
} as const;



export const LOGO_PRESETS: Record<string, LogoConfig> = {
  default: {
    imagePath: '/Logo.png',
    altText: 'Plantilla',
    fallbackIcon: FaUserShield,
    fallbackBgGradient: {
      from: 'from-blue-500',
      to: 'to-indigo-600'
    },
    title: 'Admin Panel',
    subtitle: 'Dashboard',
    showSubtitle: true,
    size: 'lg',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  corporate: {
    imagePath: '/logo-corporate.svg',
    altText: 'Logo Corporativo',
    fallbackIcon: FaBuilding,
    fallbackBgGradient: {
      from: 'from-gray-700',
      to: 'to-gray-900'
    },
    title: 'Enterprise',
    subtitle: 'Management',
    showSubtitle: true,
    size: 'lg',
    showOnlineIndicator: false,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: false
  },

  analytics: {
    imagePath: '/logo-analytics.svg',
    altText: 'Analytics Dashboard',
    fallbackIcon: FaChartLine,
    fallbackBgGradient: {
      from: 'from-green-500',
      to: 'to-emerald-600'
    },
    title: 'Analytics',
    subtitle: 'Pro',
    showSubtitle: true,
    size: 'md',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  ecommerce: {
    imagePath: '/logo-shop.svg',
    altText: 'Tienda Online',
    fallbackIcon: FaShoppingBag,
    fallbackBgGradient: {
      from: 'from-purple-500',
      to: 'to-pink-600'
    },
    title: 'E-Commerce',
    subtitle: 'Admin',
    showSubtitle: true,
    size: 'lg',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  education: {
    imagePath: '/logo-education.svg',
    altText: 'Plataforma Educativa',
    fallbackIcon: FaGraduationCap,
    fallbackBgGradient: {
      from: 'from-blue-600',
      to: 'to-cyan-600'
    },
    title: 'EduPlatform',
    subtitle: 'Learning',
    showSubtitle: true,
    size: 'lg',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  healthcare: {
    imagePath: '/logo-health.svg',
    altText: 'Sistema de Salud',
    fallbackIcon: FaHeart,
    fallbackBgGradient: {
      from: 'from-red-500',
      to: 'to-rose-600'
    },
    title: 'HealthCare',
    subtitle: 'System',
    showSubtitle: true,
    size: 'lg',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  startup: {
    imagePath: '/logo-startup.svg',
    altText: 'Startup Dashboard',
    fallbackIcon: FaRocket,
    fallbackBgGradient: {
      from: 'from-orange-500',
      to: 'to-red-600'
    },
    title: 'StartupOS',
    subtitle: 'Beta',
    showSubtitle: true,
    size: 'lg',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  security: {
    imagePath: '/logo-security.svg',
    altText: 'Panel de Seguridad',
    fallbackIcon: FaShieldAlt,
    fallbackBgGradient: {
      from: 'from-yellow-500',
      to: 'to-orange-600'
    },
    title: 'SecureApp',
    subtitle: 'Pro',
    showSubtitle: true,
    size: 'lg',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  premium: {
    imagePath: '/logo-premium.svg',
    altText: 'Premium Dashboard',
    fallbackIcon: FaStar,
    fallbackBgGradient: {
      from: 'from-yellow-400',
      to: 'to-amber-600'
    },
    title: 'Premium',
    subtitle: 'Suite',
    showSubtitle: true,
    size: 'xl',
    showOnlineIndicator: true,
    showTooltip: true,
    enableHoverEffects: true,
    enablePulseIndicator: true
  },

  minimal: {
    imagePath: '/logo-minimal.svg',
    altText: 'Logo Minimal',
    fallbackIcon: FaCog,
    fallbackBgGradient: {
      from: 'from-gray-500',
      to: 'to-gray-700'
    },
    title: 'Admin',
    showSubtitle: false,
    size: 'sm',
    showOnlineIndicator: false,
    showTooltip: false,
    enableHoverEffects: false,
    enablePulseIndicator: false
  }
};


export const ACTIVE_LOGO_CONFIG: LogoConfig = LOGO_PRESETS.default;




export const getLogoSizeConfig = (size: LogoConfig['size']) => {
  return LOGO_SIZES[size];
};


export const createCustomLogoConfig = (
  basePreset: keyof typeof LOGO_PRESETS,
  overrides: Partial<LogoConfig>
): LogoConfig => {
  return {
    ...LOGO_PRESETS[basePreset],
    ...overrides
  };
};


export const validateLogoConfig = (config: LogoConfig): boolean => {
  try {
    return (
      config.title.trim().length > 0 &&
      typeof config.fallbackIcon === 'function' &&
      ['sm', 'md', 'lg', 'xl'].includes(config.size)
    );
  } catch {
    return false;
  }
}; 