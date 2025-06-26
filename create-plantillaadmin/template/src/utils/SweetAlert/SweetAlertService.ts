import Swal from 'sweetalert2';
import type { 
  ConfiguracionAlerta, 
  ConfiguracionConfirmacion, 
  ConfiguracionNotificacion,
  ConfiguracionInput,
  ResultadoAlerta
} from './types';

class SweetAlertService {
  
  private readonly configDefecto: Partial<ConfiguracionAlerta> = {
    centrado: true,
    permitirClickFuera: false,
    permitirEscape: true,
    mostrarCloseButton: false,
    colorBotonConfirmar: '#3B82F6', 
    colorBotonCancelar: '#6B7280', 
    textoConfirmar: 'Confirmar',
    textoCancelar: 'Cancelar'
  };

  
  private readonly coloresPorTipo: Record<string, string> = {
    success: '#10B981', 
    error: '#EF4444',   
    warning: '#F59E0B', 
    info: '#3B82F6',    
    question: '#8B5CF6',
    confirm: '#F59E0B' 
  };

  
  async mostrar(config: ConfiguracionAlerta): Promise<ResultadoAlerta> {
    const configuracion = this.prepararConfiguracion(config);
    const resultado = await Swal.fire(configuracion);
    
    return {
      isConfirmed: resultado.isConfirmed,
      isDenied: resultado.isDenied,
      isDismissed: resultado.isDismissed,
      value: resultado.value
    };
  }

  
  async confirmar(config: ConfiguracionConfirmacion): Promise<boolean> {
    const configuracion = this.prepararConfiguracion({
      ...config,
      tipo: config.tipo || 'question',
      mostrarBotonCancelar: true
    });

    const resultado = await Swal.fire(configuracion);

    if (resultado.isConfirmed && config.onConfirmar) {
      await config.onConfirmar();
    } else if (resultado.dismiss && config.onCancelar) {
      await config.onCancelar();
    }

    return resultado.isConfirmed;
  }

  
  async notificar(config: ConfiguracionNotificacion): Promise<void> {
    const Toast = Swal.mixin({
      toast: config.toast ?? true,
      position: config.posicion || 'top-end',
      showConfirmButton: false,
      timer: config.timer || 3000,
      timerProgressBar: config.timerProgressBar ?? true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    await Toast.fire({
      icon: config.tipo === 'confirm' ? 'question' : config.tipo,
      title: config.titulo,
      text: config.mensaje
    });
  }

  
  async solicitarInput(config: ConfiguracionInput): Promise<string | null> {
    const configuracion = this.prepararConfiguracion({
      ...config,
      input: config.inputType,
      inputPlaceholder: config.inputPlaceholder,
      inputValue: config.inputValue,
      inputOptions: config.inputOptions,
      inputValidator: config.inputValidator,
      mostrarBotonCancelar: true
    });

    const resultado = await Swal.fire(configuracion);
    return resultado.isConfirmed ? resultado.value : null;
  }

 
  async exito(titulo: string, mensaje?: string): Promise<void> {
    await this.notificar({
      tipo: 'success',
      titulo,
      mensaje,
      timer: 3000
    });
  }

  async error(titulo: string, mensaje?: string): Promise<void> {
    await this.notificar({
      tipo: 'error',
      titulo,
      mensaje,
      timer: 4000
    });
  }

  async advertencia(titulo: string, mensaje?: string): Promise<void> {
    await this.notificar({
      tipo: 'warning',
      titulo,
      mensaje,
      timer: 3500
    });
  }

  async informacion(titulo: string, mensaje?: string): Promise<void> {
    await this.notificar({
      tipo: 'info',
      titulo,
      mensaje,
      timer: 3000
    });
  }


  async confirmarEliminacion(elemento: string): Promise<boolean> {
    return await this.confirmar({
      titulo: '¿Eliminar elemento?',
      mensaje: `¿Estás seguro de que quieres eliminar "${elemento}"? Esta acción no se puede deshacer.`,
      tipo: 'warning',
      textoConfirmar: 'Sí, eliminar',
      textoCancelar: 'Cancelar',
      colorBotonConfirmar: '#EF4444' 
    });
  }

  async confirmarDesactivacion(elemento: string): Promise<boolean> {
    return await this.confirmar({
      titulo: '¿Desactivar elemento?',
      mensaje: `¿Estás seguro de que quieres desactivar "${elemento}"?`,
      tipo: 'warning',
      textoConfirmar: 'Sí, desactivar',
      textoCancelar: 'Cancelar',
      colorBotonConfirmar: '#F59E0B' 
    });
  }

  async confirmarActivacion(elemento: string): Promise<boolean> {
    return await this.confirmar({
      titulo: '¿Activar elemento?',
      mensaje: `¿Estás seguro de que quieres activar "${elemento}"?`,
      tipo: 'question',
      textoConfirmar: 'Sí, activar',
      textoCancelar: 'Cancelar',
      colorBotonConfirmar: '#10B981' 
    });
  }

  
  private prepararConfiguracion(config: ConfiguracionAlerta): any {
    const configuracionFinal = { ...this.configDefecto, ...config };
    const tipo = configuracionFinal.tipo === 'confirm' ? 'question' : configuracionFinal.tipo;
    const colorBoton = configuracionFinal.colorBotonConfirmar || this.coloresPorTipo[configuracionFinal.tipo || 'info'];

    return {
      title: configuracionFinal.titulo,
      text: configuracionFinal.mensaje,
      icon: tipo,
      showCancelButton: configuracionFinal.mostrarBotonCancelar,
      confirmButtonText: configuracionFinal.textoConfirmar,
      cancelButtonText: configuracionFinal.textoCancelar,
      confirmButtonColor: colorBoton,
      cancelButtonColor: configuracionFinal.colorBotonCancelar,
      centerContent: configuracionFinal.centrado,
      allowOutsideClick: configuracionFinal.permitirClickFuera,
      allowEscapeKey: configuracionFinal.permitirEscape,
      showCloseButton: configuracionFinal.mostrarCloseButton,
      timer: configuracionFinal.timer,
      timerProgressBar: configuracionFinal.timerProgressBar,
      input: configuracionFinal.input,
      inputPlaceholder: configuracionFinal.inputPlaceholder,
      inputValue: configuracionFinal.inputValue,
      inputOptions: configuracionFinal.inputOptions,
      inputValidator: configuracionFinal.inputValidator,
      width: configuracionFinal.width,
      padding: configuracionFinal.padding,
      background: configuracionFinal.background,
      customClass: configuracionFinal.customClass,
      reverseButtons: true,
      focusConfirm: false,
      focusCancel: true
    };
  }
}

export const sweetAlert = new SweetAlertService();

export default sweetAlert; 