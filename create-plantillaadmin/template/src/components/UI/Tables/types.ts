import { ColumnsType } from 'antd/es/table';
import { ReactNode } from 'react';

/**
 * Temas disponibles para la tabla
 */
export type TablaTema = 
  | 'default'      // Estilo por defecto
  | 'professional' // Estilo profesional/corporativo
  | 'minimalist'   // Estilo minimalista
  | 'modern'       // Estilo moderno
  | 'elegant'      // Estilo elegante
  | 'bold'         // Estilo audaz
  | 'soft'         // Estilo suave
  | 'dark'         // Estilo oscuro
  | 'colorful'     // Estilo colorido
  | 'clean';       // Estilo limpio

/**
 * Variantes de tamaño de la tabla
 */
export type TablaTamanio = 'small' | 'medium' | 'large';

/**
 * Variantes de densidad de la tabla
 */
export type TablaDensidad = 'compact' | 'comfortable' | 'spacious';

/**
 * Configuración de tema para la tabla
 */
export interface TablaTemaConfig {
  /** Tema principal */
  tema: TablaTema;
  /** Tamaño de la tabla */
  tamanio?: TablaTamanio;
  /** Densidad de filas */
  densidad?: TablaDensidad;
  /** Si mostrar bordes */
  conBordes?: boolean;
  /** Si mostrar sombras */
  conSombras?: boolean;
  /** Si mostrar hover effects */
  conHover?: boolean;
  /** Si mostrar zebra striping */
  conZebra?: boolean;
  /** Color de acento personalizado */
  colorAcento?: string;
}

/**
 * Posiciones disponibles para los botones en la tabla
 */
export type PosicionBoton = 'arriba-izquierda' | 'arriba-derecha' | 'abajo-izquierda' | 'abajo-derecha' | 'arriba-centro' | 'abajo-centro';

/**
 * Enum para mayor claridad en las posiciones de botones
 */
export enum PosicionBotonTabla {
  ARRIBA_IZQUIERDA = 'arriba-izquierda',
  ARRIBA_CENTRO = 'arriba-centro', 
  ARRIBA_DERECHA = 'arriba-derecha',
  ABAJO_IZQUIERDA = 'abajo-izquierda',
  ABAJO_CENTRO = 'abajo-centro',
  ABAJO_DERECHA = 'abajo-derecha'
}

/**
 * Configuración de botones personalizados para la tabla
 */
export interface ConfiguracionBotonTabla {
  /** Identificador único del botón */
  key: string;
  /** Posición donde se mostrará el botón */
  posicion: PosicionBoton;
  /** Contenido del botón (componente React) */
  contenido: ReactNode;
  /** Orden de aparición en la posición (opcional) */
  orden?: number;
  /** Si el botón debe estar visible */
  visible?: boolean;
  /** Función de callback para eventos del botón */
  onClick?: () => void;
  /** Props adicionales para el botón */
  propiedades?: Record<string, any>;
}

/**
 * Botones predefinidos de acciones comunes
 */
export interface BotonesAccionTabla {
  /** Botón para agregar nuevos elementos */
  agregar?: {
    visible?: boolean;
    texto?: string;
    href?: string;
    onClick?: () => void;
    posicion?: PosicionBoton;
  };
  /** Botón para refrescar/recargar datos */
  refrescar?: {
    visible?: boolean;
    onClick?: () => void;
    cargando?: boolean;
    posicion?: PosicionBoton;
  };
  /** Botón para exportar datos */
  exportar?: {
    visible?: boolean;
    onClick?: () => void;
    formatos?: string[];
    posicion?: PosicionBoton;
  };
  /** Botón para configurar tabla */
  configurar?: {
    visible?: boolean;
    onClick?: () => void;
    posicion?: PosicionBoton;
  };
}

/**
 * Clases CSS personalizables para diferentes secciones de la tabla
 */
export interface ClasesPersonalizadasTabla {
  contenedor?: string;
  header?: string;
  footer?: string;
  tabla?: string;
}

/**
 * Propiedades principales del componente TablaPaginada
 */
export interface TablaPaginadaProps<T> {
  /** Datos a mostrar en la tabla */
  datos: T[]; 
  /** Configuración de columnas */
  columnas: ColumnsType<T>;
  /** Total de registros para paginación */
  total: number;
  /** Página actual */
  paginaActual: number; 
  /** Tamaño de página */
  tamanioPagina: number;
  /** Callback para cambios de página */
  onPageChange: (pagina: number, tamanioPagina: number) => void; 
  /** Opciones de tamaño de página */
  opcionesTamanioPagina?: string[]; 
  /** Clave única para cada fila */
  claveFila: string | ((registro: T) => string | number);
  /** Renderizado de acciones por fila */
  acciones?: (registro: T) => React.ReactNode;
  
  /** Contenido del header (opcional) */
  header?: ReactNode;
  /** Contenido del footer (opcional) */
  footer?: ReactNode;
  
  /** Opciones de personalización */
  mostrarHeader?: boolean;
  tituloTabla?: string;
  subtituloTabla?: string;
  clasesPersonalizadas?: ClasesPersonalizadasTabla;
  
  /** Configuración de tema y estilo */
  tema?: TablaTema | TablaTemaConfig;
  
  /** Props adicionales para la tabla de Ant Design */
  tablaProps?: Record<string, any>;
}

/**
 * Props para el componente SeccionBotones
 */
export interface SeccionBotonesProps {
  posicion: PosicionBoton;
  justify: 'flex-start' | 'center' | 'flex-end';
  botones: ConfiguracionBotonTabla[];
  espaciadoBotones: 'small' | 'middle' | 'large';
} 