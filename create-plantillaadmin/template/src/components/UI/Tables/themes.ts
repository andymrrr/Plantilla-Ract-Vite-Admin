import { TablaTema, TablaTemaConfig, TablaTamanio, TablaDensidad } from './types';

/**
 * Configuraciones de temas predefinidos
 */
export const TABLA_TEMAS: Record<TablaTema, TablaTemaConfig> = {
  default: {
    tema: 'default',
    tamanio: 'medium',
    densidad: 'comfortable',
    conBordes: true,
    conSombras: true,
    conHover: true,
    conZebra: false
  },
  
  professional: {
    tema: 'professional',
    tamanio: 'medium',
    densidad: 'comfortable',
    conBordes: true,
    conSombras: true,
    conHover: true,
    conZebra: false,
    colorAcento: '#2563eb'
  },
  
  minimalist: {
    tema: 'minimalist',
    tamanio: 'medium',
    densidad: 'comfortable',
    conBordes: false,
    conSombras: false,
    conHover: true,
    conZebra: false
  },
  
  modern: {
    tema: 'modern',
    tamanio: 'medium',
    densidad: 'comfortable',
    conBordes: false,
    conSombras: true,
    conHover: true,
    conZebra: true,
    colorAcento: '#7c3aed'
  },
  
  elegant: {
    tema: 'elegant',
    tamanio: 'medium',
    densidad: 'comfortable',
    conBordes: true,
    conSombras: true,
    conHover: true,
    conZebra: false,
    colorAcento: '#059669'
  },
  
  bold: {
    tema: 'bold',
    tamanio: 'large',
    densidad: 'spacious',
    conBordes: true,
    conSombras: true,
    conHover: true,
    conZebra: true,
    colorAcento: '#dc2626'
  },
  
  soft: {
    tema: 'soft',
    tamanio: 'medium',
    densidad: 'spacious',
    conBordes: false,
    conSombras: false,
    conHover: true,
    conZebra: false,
    colorAcento: '#f59e0b'
  },
  
  dark: {
    tema: 'dark',
    tamanio: 'medium',
    densidad: 'comfortable',
    conBordes: true,
    conSombras: true,
    conHover: true,
    conZebra: false,
    colorAcento: '#8b5cf6'
  },
  
  colorful: {
    tema: 'colorful',
    tamanio: 'medium',
    densidad: 'comfortable',
    conBordes: false,
    conSombras: true,
    conHover: true,
    conZebra: true,
    colorAcento: '#ec4899'
  },
  
  clean: {
    tema: 'clean',
    tamanio: 'medium',
    densidad: 'compact',
    conBordes: false,
    conSombras: false,
    conHover: false,
    conZebra: false
  }
};

/**
 * Clases CSS para diferentes tamaños
 */
export const TAMANIO_CLASSES: Record<TablaTamanio, string> = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg'
};

/**
 * Clases CSS para diferentes densidades
 */
export const DENSIDAD_CLASSES: Record<TablaDensidad, string> = {
  compact: 'py-2',
  comfortable: 'py-3',
  spacious: 'py-4'
};

/**
 * Genera las clases CSS para un tema específico
 */
export const generarClasesTema = (config: TablaTemaConfig): string => {
  const {
    tema,
    tamanio = 'medium',
    densidad = 'comfortable',
    conBordes = true,
    conSombras = true,
    conHover = true,
    conZebra = false,
    colorAcento
  } = config;

  const clasesBase = [
    'rounded-xl overflow-hidden',
    TAMANIO_CLASSES[tamanio],
    DENSIDAD_CLASSES[densidad]
  ];

  // Clases específicas por tema
  const clasesTema = {
    default: [
      'bg-white',
      conBordes && 'border border-gray-200',
      conSombras && 'shadow-md',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-gray-50',
      '[&_.ant-table-thead>tr>th]:bg-gray-100',
      '[&_.ant-table-thead>tr>th]:text-gray-700',
      '[&_.ant-table-thead>tr>th]:font-semibold'
    ],
    
    professional: [
      'bg-white',
      conBordes && 'border border-gray-300',
      conSombras && 'shadow-lg',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-blue-50',
      '[&_.ant-table-thead>tr>th]:bg-blue-600',
      '[&_.ant-table-thead>tr>th]:text-white',
      '[&_.ant-table-thead>tr>th]:font-bold',
      '[&_.ant-table-thead>tr>th]:border-b-2',
      '[&_.ant-table-thead>tr>th]:border-blue-700'
    ],
    
    minimalist: [
      'bg-white',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-gray-50',
      '[&_.ant-table-thead>tr>th]:bg-white',
      '[&_.ant-table-thead>tr>th]:text-gray-900',
      '[&_.ant-table-thead>tr>th]:font-medium',
      '[&_.ant-table-thead>tr>th]:border-b',
      '[&_.ant-table-thead>tr>th]:border-gray-200'
    ],
    
    modern: [
      'bg-white',
      conSombras && 'shadow-xl',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-purple-50',
      conZebra && '[&_.ant-table-tbody>tr:nth-child(even)>td]:bg-gray-50',
      '[&_.ant-table-thead>tr>th]:bg-gradient-to-r',
      '[&_.ant-table-thead>tr>th]:from-purple-600',
      '[&_.ant-table-thead>tr>th]:to-purple-700',
      '[&_.ant-table-thead>tr>th]:text-white',
      '[&_.ant-table-thead>tr>th]:font-semibold'
    ],
    
    elegant: [
      'bg-white',
      conBordes && 'border border-gray-200',
      conSombras && 'shadow-lg',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-green-50',
      '[&_.ant-table-thead>tr>th]:bg-green-600',
      '[&_.ant-table-thead>tr>th]:text-white',
      '[&_.ant-table-thead>tr>th]:font-semibold',
      '[&_.ant-table-thead>tr>th]:border-b',
      '[&_.ant-table-thead>tr>th]:border-green-700'
    ],
    
    bold: [
      'bg-white',
      conBordes && 'border-2 border-gray-300',
      conSombras && 'shadow-2xl',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-red-50',
      conZebra && '[&_.ant-table-tbody>tr:nth-child(even)>td]:bg-gray-100',
      '[&_.ant-table-thead>tr>th]:bg-red-600',
      '[&_.ant-table-thead>tr>th]:text-white',
      '[&_.ant-table-thead>tr>th]:font-bold',
      '[&_.ant-table-thead>tr>th]:text-lg'
    ],
    
    soft: [
      'bg-gray-50',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-yellow-50',
      '[&_.ant-table-thead>tr>th]:bg-yellow-100',
      '[&_.ant-table-thead>tr>th]:text-yellow-800',
      '[&_.ant-table-thead>tr>th]:font-medium',
      '[&_.ant-table-tbody>tr>td]:bg-white'
    ],
    
    dark: [
      'bg-gray-900',
      conBordes && 'border border-gray-700',
      conSombras && 'shadow-2xl',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-gray-800',
      '[&_.ant-table-thead>tr>th]:bg-gray-800',
      '[&_.ant-table-thead>tr>th]:text-white',
      '[&_.ant-table-thead>tr>th]:font-semibold',
      '[&_.ant-table-tbody>tr>td]:text-gray-300',
      '[&_.ant-table-tbody>tr>td]:bg-gray-900'
    ],
    
    colorful: [
      'bg-white',
      conSombras && 'shadow-lg',
      conHover && '[&_.ant-table-tbody>tr:hover>td]:bg-pink-50',
      conZebra && '[&_.ant-table-tbody>tr:nth-child(even)>td]:bg-pink-50',
      '[&_.ant-table-thead>tr>th]:bg-gradient-to-r',
      '[&_.ant-table-thead>tr>th]:from-pink-500',
      '[&_.ant-table-thead>tr>th]:to-purple-500',
      '[&_.ant-table-thead>tr>th]:text-white',
      '[&_.ant-table-thead>tr>th]:font-semibold'
    ],
    
    clean: [
      'bg-white',
      '[&_.ant-table-thead>tr>th]:bg-white',
      '[&_.ant-table-thead>tr>th]:text-gray-900',
      '[&_.ant-table-thead>tr>th]:font-medium',
      '[&_.ant-table-thead>tr>th]:border-b',
      '[&_.ant-table-thead>tr>th]:border-gray-200'
    ]
  };

  return [
    ...clasesBase,
    ...clasesTema[tema].filter(Boolean)
  ].join(' ');
};

/**
 * Normaliza la configuración del tema
 */
export const normalizarTema = (tema: TablaTema | TablaTemaConfig): TablaTemaConfig => {
  if (typeof tema === 'string') {
    return TABLA_TEMAS[tema];
  }
  
  // Combinar con el tema base
  const temaBase = TABLA_TEMAS[tema.tema];
  return {
    ...temaBase,
    ...tema
  };
}; 