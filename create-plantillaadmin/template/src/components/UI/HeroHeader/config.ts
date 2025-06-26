import { GradientPreset, GradientConfig, HeaderSize } from './types';

export const gradientPresets: Record<GradientPreset, GradientConfig> = {
  'blue-purple': {
    from: 'from-blue-600',
    via: 'via-purple-600',
    to: 'to-indigo-800',
    direction: 'to-br'
  },
  'purple-pink': {
    from: 'from-purple-600',
    via: 'via-pink-600',
    to: 'to-rose-800',
    direction: 'to-br'
  },
  'green-blue': {
    from: 'from-emerald-600',
    via: 'via-teal-600',
    to: 'to-cyan-800',
    direction: 'to-br'
  },
  'orange-red': {
    from: 'from-orange-600',
    via: 'via-red-600',
    to: 'to-pink-800',
    direction: 'to-br'
  },
  'dark-light': {
    from: 'from-gray-900',
    via: 'via-gray-800',
    to: 'to-gray-700',
    direction: 'to-br'
  },
  'sunset': {
    from: 'from-yellow-400',
    via: 'via-orange-500',
    to: 'to-red-600',
    direction: 'to-br'
  },
  'ocean': {
    from: 'from-blue-400',
    via: 'via-cyan-500',
    to: 'to-teal-600',
    direction: 'to-br'
  },
  'forest': {
    from: 'from-green-600',
    via: 'via-emerald-600',
    to: 'to-teal-800',
    direction: 'to-br'
  },
  'fire': {
    from: 'from-red-500',
    via: 'via-orange-600',
    to: 'to-yellow-600',
    direction: 'to-br'
  },
  'space': {
    from: 'from-indigo-900',
    via: 'via-purple-900',
    to: 'to-pink-900',
    direction: 'to-br'
  },
  'corporate': {
    from: 'from-slate-700',
    via: 'via-slate-800',
    to: 'to-slate-900',
    direction: 'to-br'
  },
  'business': {
    from: 'from-gray-600',
    via: 'via-blue-gray-700',
    to: 'to-slate-800',
    direction: 'to-br'
  },
  'executive': {
    from: 'from-blue-900',
    via: 'via-slate-800',
    to: 'to-gray-900',
    direction: 'to-br'
  }
};

export const sizeConfig = {
  sm: {
    container: 'p-4',
    title: 'text-2xl',
    subtitle: 'text-sm',
    icon: 'text-2xl p-2',
    spacing: 'gap-3',
    buttons: 'px-4 py-2 text-sm'
  },
  md: {
    container: 'p-6',
    title: 'text-3xl',
    subtitle: 'text-base',
    icon: 'text-3xl p-3',
    spacing: 'gap-4',
    buttons: 'px-5 py-2.5 text-sm'
  },
  lg: {
    container: 'p-8',
    title: 'text-4xl',
    subtitle: 'text-lg',
    icon: 'text-4xl p-4',
    spacing: 'gap-6',
    buttons: 'px-6 py-3 text-base'
  },
  xl: {
    container: 'p-10',
    title: 'text-5xl',
    subtitle: 'text-xl',
    icon: 'text-5xl p-5',
    spacing: 'gap-8',
    buttons: 'px-8 py-4 text-lg'
  }
} satisfies Record<HeaderSize, any>;

export const paddingConfig = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-12'
};

export const statusColors = {
  active: {
    dot: 'bg-green-400',
    text: 'text-green-300'
  },
  inactive: {
    dot: 'bg-gray-400',
    text: 'text-gray-300'
  },
  warning: {
    dot: 'bg-yellow-400',
    text: 'text-yellow-300'
  },
  error: {
    dot: 'bg-red-400',
    text: 'text-red-300'
  }
};

export const badgeColors = {
  default: 'bg-white/20 text-white border-white/30',
  primary: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
  success: 'bg-green-500/20 text-green-200 border-green-400/30',
  warning: 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30',
  danger: 'bg-red-500/20 text-red-200 border-red-400/30',
  info: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30'
};

export const buttonVariants = {
  primary: 'bg-white/20 hover:bg-white/30 text-white border-white/30',
  secondary: 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-200 border-gray-400/30',
  success: 'bg-green-500/20 hover:bg-green-500/30 text-green-200 border-green-400/30',
  warning: 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-200 border-yellow-400/30',
  danger: 'bg-red-500/20 hover:bg-red-500/30 text-red-200 border-red-400/30'
};

export const floatingElementPositions = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
};

export const floatingElementSizes = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32'
};

export const floatingElementAnimations = {
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  float: 'animate-float',
  none: ''
}; 