import type { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

export type TipoAlerta = SweetAlertIcon | 'confirm';
export type PosicionAlerta = SweetAlertPosition;

export interface ConfiguracionAlerta {
  titulo?: string;
  mensaje?: string;
  tipo?: TipoAlerta;
  posicion?: PosicionAlerta;
  mostrarBotonCancelar?: boolean;
  textoConfirmar?: string;
  textoCancelar?: string;
  colorBotonConfirmar?: string;
  colorBotonCancelar?: string;
  centrado?: boolean;
  permitirClickFuera?: boolean;
  permitirEscape?: boolean;
  mostrarCloseButton?: boolean;
  timer?: number;
  timerProgressBar?: boolean;
  input?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'range' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'file' | 'url';
  inputPlaceholder?: string;
  inputValue?: string;
  inputOptions?: Record<string, string>;
  inputValidator?: (value: string) => Promise<string | null> | string | null;
  width?: string | number;
  padding?: string;
  background?: string;
  customClass?: {
    container?: string;
    popup?: string;
    header?: string;
    title?: string;
    closeButton?: string;
    icon?: string;
    image?: string;
    content?: string;
    htmlContainer?: string;
    input?: string;
    inputLabel?: string;
    validationMessage?: string;
    actions?: string;
    confirmButton?: string;
    denyButton?: string;
    cancelButton?: string;
    loader?: string;
    footer?: string;
    timerProgressBar?: string;
  };
}

export interface ConfiguracionConfirmacion extends ConfiguracionAlerta {
  onConfirmar?: () => Promise<void> | void;
  onCancelar?: () => Promise<void> | void;
}

export interface ConfiguracionNotificacion extends ConfiguracionAlerta {
  posicion?: PosicionAlerta;
  toast?: boolean;
  timer?: number;
}

export interface ResultadoAlerta {
  isConfirmed: boolean;
  isDenied: boolean;
  isDismissed: boolean;
  value?: any;
}

export interface ConfiguracionInput extends ConfiguracionAlerta {
  inputType: NonNullable<ConfiguracionAlerta['input']>;
  inputPlaceholder?: string;
  inputValue?: string;
  inputOptions?: Record<string, string>;
  inputValidator?: (value: string) => Promise<string | null> | string | null;
} 