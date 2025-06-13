import { ReactNode } from 'react';
import { ColumnsType } from 'antd/es/table';

// Tipos de operadores de búsqueda
export type OperadorBusqueda = 
  | 'contiene' 
  | 'igual' 
  | 'diferente' 
  | 'mayor' 
  | 'menor' 
  | 'mayorIgual' 
  | 'menorIgual' 
  | 'empiezaCon' 
  | 'terminaCon'
  | 'entre'
  | 'en'
  | 'noEn';

// Tipos de campos para búsqueda
export type TipoCampoBusqueda = 
  | 'texto' 
  | 'numero' 
  | 'fecha' 
  | 'select' 
  | 'multiselect' 
  | 'booleano'
  | 'rango';

// Configuración de un campo de búsqueda
export interface ConfiguracionCampoBusqueda<T> {
  /** Clave del campo en la entidad */
  campo: keyof T;
  /** Etiqueta a mostrar */
  etiqueta: string;
  /** Tipo de campo */
  tipo: TipoCampoBusqueda;
  /** Operadores permitidos para este campo */
  operadores?: OperadorBusqueda[];
  /** Opciones para campos select/multiselect */
  opciones?: Array<{ valor: any; etiqueta: string }>;
  /** Placeholder del campo */
  placeholder?: string;
  /** Si el campo es requerido */
  requerido?: boolean;
  /** Valor por defecto */
  valorDefecto?: any;
  /** Función de validación personalizada */
  validacion?: (valor: any) => string | null;
  /** Props adicionales para el componente */
  props?: Record<string, any>;
}

// Filtro de búsqueda aplicado
export interface FiltroBusqueda<T> {
  /** Campo al que se aplica el filtro */
  campo: keyof T;
  /** Operador de comparación */
  operador: OperadorBusqueda;
  /** Valor(es) del filtro */
  valor: any;
  /** Etiqueta legible del filtro */
  etiqueta?: string;
}

// Configuración del panel de búsqueda
export interface ConfiguracionBusquedaAvanzada<T> {
  /** Campos disponibles para búsqueda - OPCIONAL, se auto-genera si no se proporciona */
  campos?: ConfiguracionCampoBusqueda<T>[];
  /** Datos para auto-generar configuración de campos */
  datos?: T[];
  /** Campos a excluir de la búsqueda automática */
  camposExcluidos?: (keyof T)[];
  /** Si mostrar el panel expandido por defecto */
  expandidoPorDefecto?: boolean;
  /** Título del panel */
  titulo?: string;
  /** Filtros iniciales */
  filtrosIniciales?: FiltroBusqueda<T>[];
  /** Callback cuando cambian los filtros */
  onFiltrosChange?: (filtros: FiltroBusqueda<T>[]) => void;
  /** Si permitir guardar búsquedas */
  permitirGuardarBusquedas?: boolean;
  /** Búsquedas guardadas */
  busquedasGuardadas?: BusquedaGuardada<T>[];
  /** Si habilitar auto-detección de tipos */
  autoDeteccionTipos?: boolean;
}

// Búsqueda guardada
export interface BusquedaGuardada<T> {
  id: string;
  nombre: string;
  filtros: FiltroBusqueda<T>[];
  fechaCreacion: Date;
  descripcion?: string;
}

// Posición de botones mejorada
export type PosicionBoton = 
  | 'arriba-izquierda' 
  | 'arriba-derecha' 
  | 'abajo-izquierda' 
  | 'abajo-derecha' 
  | 'arriba-centro' 
  | 'abajo-centro';

export enum PosicionBotonTabla {
  ARRIBA_IZQUIERDA = 'arriba-izquierda',
  ARRIBA_CENTRO = 'arriba-centro', 
  ARRIBA_DERECHA = 'arriba-derecha',
  ABAJO_IZQUIERDA = 'abajo-izquierda',
  ABAJO_CENTRO = 'abajo-centro',
  ABAJO_DERECHA = 'abajo-derecha'
}

// Configuración de botón
export interface ConfiguracionBotonTabla {
  key: string;
  posicion: PosicionBoton;
  contenido: ReactNode;
  orden?: number;
  visible?: boolean;
  onClick?: () => void;
  propiedades?: Record<string, any>;
}

// Botones de acción predefinidos
export interface BotonesAccionTabla {
  agregar?: {
    visible?: boolean;
    texto?: string;
    href?: string;
    onClick?: () => void;
    posicion?: PosicionBoton;
  };
  refrescar?: {
    visible?: boolean;
    onClick?: () => void;
    cargando?: boolean;
    posicion?: PosicionBoton;
  };
  exportar?: {
    visible?: boolean;
    onClick?: () => void;
    formatos?: string[];
    posicion?: PosicionBoton;
  };
  configurar?: {
    visible?: boolean;
    onClick?: () => void;
    posicion?: PosicionBoton;
  };
}

// Props principales del componente TablaPaginada
export interface TablaPaginadaProps<T> {
  datos: T[]; 
  columnas: ColumnsType<T>;
  total: number;
  paginaActual: number; 
  tamanioPagina: number;
  onPageChange: (pagina: number, tamanioPagina: number) => void; 
  opcionesTamanioPagina?: string[]; 
  claveFila: string | ((registro: T) => string | number);
  acciones?: (registro: T) => React.ReactNode;
  
  // Configuración de botones
  botones?: ConfiguracionBotonTabla[];
  botonesAccion?: BotonesAccionTabla;
  
  // Búsqueda avanzada
  busquedaAvanzada?: ConfiguracionBusquedaAvanzada<T>;
  
  // Opciones de personalización
  mostrarHeader?: boolean;
  tituloTabla?: string;
  subtituloTabla?: string;
  espaciadoBotones?: 'small' | 'middle' | 'large';
  clasesPersonalizadas?: {
    contenedor?: string;
    header?: string;
    footer?: string;
    tabla?: string;
    panelBusqueda?: string;
  };
  
  // Loading y estados
  cargando?: boolean;
  error?: string | null;
}

// Resultado de búsqueda
export interface ResultadoBusqueda<T> {
  datos: T[];
  total: number;
  filtrosAplicados: FiltroBusqueda<T>[];
} 