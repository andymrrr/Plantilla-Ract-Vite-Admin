import { toast, ToastOptions, ToastContent, Id } from 'react-toastify';

const defaultOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

const successOptions: ToastOptions = {
  ...defaultOptions,
  autoClose: 3000,
};

const errorOptions: ToastOptions = {
  ...defaultOptions,
  autoClose: 8000,
  closeOnClick: true,
};

const loadingOptions: ToastOptions = {
  ...defaultOptions,
  autoClose: false,
  closeOnClick: false,
  hideProgressBar: true,
};

export const TiposNotificacion = {
  JOB_AGREGADO: {
    titulo: '¡Job Agregado Exitosamente!',
    mensaje: 'El job programado se ha creado correctamente y está listo para ejecutarse.',
    icono: '✅'
  },
  JOB_ERROR: {
    titulo: 'Error al Agregar Job',
    mensaje: 'Hubo un problema al crear el job programado. Por favor, intenta nuevamente.',
    icono: '❌'
  },
  JOB_VALIDACION: {
    titulo: 'Datos Incompletos',
    mensaje: 'Por favor, completa todos los campos requeridos antes de continuar.',
    icono: '⚠️'
  },
  JOB_PROCESANDO: {
    titulo: 'Creando Job...',
    mensaje: 'Por favor espera mientras se procesa tu solicitud.',
    icono: '⏳'
  },
  
  JOB_ACTUALIZADO: {
    titulo: '¡Job Actualizado Exitosamente!',
    mensaje: 'Los cambios en el job programado se han guardado correctamente.',
    icono: '✅'
  },
  JOB_ERROR_ACTUALIZAR: {
    titulo: 'Error al Actualizar Job',
    mensaje: 'Hubo un problema al guardar los cambios. Por favor, intenta nuevamente.',
    icono: '❌'
  },
  JOB_ACTUALIZANDO: {
    titulo: 'Actualizando Job...',
    mensaje: 'Por favor espera mientras se guardan los cambios.',
    icono: '⏳'
  },
  JOB_CARGANDO: {
    titulo: 'Cargando Job...',
    mensaje: 'Obteniendo los datos del job programado.',
    icono: '📋'
  },
  JOB_ERROR_CARGAR: {
    titulo: 'Error al Cargar Job',
    mensaje: 'No se pudo cargar la información del job programado.',
    icono: '❌'
  }
} as const;

export interface NotificacionPersonalizada {
  titulo?: string;
  mensaje: string;
  icono?: string;
  duracion?: number;
}

export const Mensajeria = {
  success: (mensaje: string, options: ToastOptions = {}) => {
    return toast.success(mensaje, { ...successOptions, ...options });
  },

  error: (mensaje: string, options: ToastOptions = {}) => {
    return toast.error(mensaje, { ...errorOptions, ...options });
  },

  warn: (mensaje: string, options: ToastOptions = {}) => {
    return toast.warn(mensaje, { ...defaultOptions, ...options });
  },

  info: (mensaje: string, options: ToastOptions = {}) => {
    return toast.info(mensaje, { ...defaultOptions, ...options });
  },

  default: (mensaje: string, options: ToastOptions = {}) => {
    return toast(mensaje, { ...defaultOptions, ...options });
  },

  loading: (mensaje: string = 'Cargando...', options: ToastOptions = {}) => {
    return toast.loading(mensaje, { ...loadingOptions, ...options });
  },

  update: (toastId: Id, content: ToastContent, options: ToastOptions = {}) => {
    return toast.update(toastId, { ...defaultOptions, ...options, render: content });
  },

  personalizada: (config: NotificacionPersonalizada, tipo: 'success' | 'error' | 'warn' | 'info' = 'info') => {
    const { titulo, mensaje, icono, duracion } = config;
    
    const contenidoTexto = `${icono ? icono + ' ' : ''}${titulo ? titulo + '\n' : ''}${mensaje}`;

    const opciones: ToastOptions = {
      ...defaultOptions,
      autoClose: duracion || defaultOptions.autoClose,
    };

    switch (tipo) {
      case 'success':
        return toast.success(contenidoTexto, opciones);
      case 'error':
        return toast.error(contenidoTexto, opciones);
      case 'warn':
        return toast.warn(contenidoTexto, opciones);
      default:
        return toast.info(contenidoTexto, opciones);
    }
  },

  job: {
    agregadoExitoso: (nombreJob?: string) => {
      const config = TiposNotificacion.JOB_AGREGADO;
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje: nombreJob 
          ? `El job "${nombreJob}" se ha creado correctamente y está listo para ejecutarse.`
          : config.mensaje,
        icono: config.icono,
        duracion: 4000
      }, 'success');
    },

    errorAlAgregar: (error?: string) => {
      const config = TiposNotificacion.JOB_ERROR;
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje: error || config.mensaje,
        icono: config.icono,
        duracion: 7000
      }, 'error');
    },

    procesando: (nombreJob?: string) => {
      const config = TiposNotificacion.JOB_PROCESANDO;
      return Mensajeria.loading(
        nombreJob ? `Creando job "${nombreJob}"...` : config.mensaje
      );
    },

    editadoExitoso: (nombreJob?: string) => {
      const config = TiposNotificacion.JOB_ACTUALIZADO;
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje: nombreJob 
          ? `Los cambios en el job "${nombreJob}" se han guardado correctamente.`
          : config.mensaje,
        icono: config.icono,
        duracion: 4000
      }, 'success');
    },

    actualizadoExitoso: (nombreJob?: string) => {
      const config = TiposNotificacion.JOB_ACTUALIZADO;
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje: nombreJob 
          ? `Los cambios en el job "${nombreJob}" se han guardado correctamente.`
          : config.mensaje,
        icono: config.icono,
        duracion: 4000
      }, 'success');
    },

    errorAlEditar: (error?: string) => {
      const config = TiposNotificacion.JOB_ERROR_ACTUALIZAR;
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje: error || config.mensaje,
        icono: config.icono,
        duracion: 7000
      }, 'error');
    },

    errorAlActualizar: (error?: string) => {
      const config = TiposNotificacion.JOB_ERROR_ACTUALIZAR;
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje: error || config.mensaje,
        icono: config.icono,
        duracion: 7000
      }, 'error');
    },

    actualizando: (nombreJob?: string) => {
      const config = TiposNotificacion.JOB_ACTUALIZANDO;
      return Mensajeria.loading(
        nombreJob ? `Actualizando job "${nombreJob}"...` : config.mensaje
      );
    },

    cargando: (nombreJob?: string) => {
      const config = TiposNotificacion.JOB_CARGANDO;
      return Mensajeria.loading(
        nombreJob ? `Cargando job "${nombreJob}"...` : config.mensaje
      );
    },

    errorAlCargar: (error?: string) => {
      const config = TiposNotificacion.JOB_ERROR_CARGAR;
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje: error || config.mensaje,
        icono: config.icono,
        duracion: 7000
      }, 'error');
    },

    validacionError: (camposFaltantes?: string[]) => {
      const config = TiposNotificacion.JOB_VALIDACION;
      const mensaje = camposFaltantes?.length
        ? `Campos requeridos: ${camposFaltantes.join(', ')}`
        : config.mensaje;
      
      return Mensajeria.personalizada({
        titulo: config.titulo,
        mensaje,
        icono: config.icono,
        duracion: 6000
      }, 'warn');
    }
  },

  dismiss: (toastId?: Id) => {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  },

  dismissAll: () => {
    toast.dismiss();
  }
};

