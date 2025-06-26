import { useCallback } from 'react';
import { sweetAlert } from '../SweetAlertService';
import type { 
  ConfiguracionAlerta, 
  ConfiguracionConfirmacion, 
  ConfiguracionNotificacion,
  ConfiguracionInput,
  ResultadoAlerta 
} from '../types';

export const useSweetAlert = () => {
  // Métodos básicos
  const mostrar = useCallback(async (config: ConfiguracionAlerta): Promise<ResultadoAlerta> => {
    return await sweetAlert.mostrar(config);
  }, []);

  const confirmar = useCallback(async (config: ConfiguracionConfirmacion): Promise<boolean> => {
    return await sweetAlert.confirmar(config);
  }, []);

  const notificar = useCallback(async (config: ConfiguracionNotificacion): Promise<void> => {
    return await sweetAlert.notificar(config);
  }, []);

  const solicitarInput = useCallback(async (config: ConfiguracionInput): Promise<string | null> => {
    return await sweetAlert.solicitarInput(config);
  }, []);

  // Métodos de conveniencia
  const exito = useCallback(async (titulo: string, mensaje?: string): Promise<void> => {
    return await sweetAlert.exito(titulo, mensaje);
  }, []);

  const error = useCallback(async (titulo: string, mensaje?: string): Promise<void> => {
    return await sweetAlert.error(titulo, mensaje);
  }, []);

  const advertencia = useCallback(async (titulo: string, mensaje?: string): Promise<void> => {
    return await sweetAlert.advertencia(titulo, mensaje);
  }, []);

  const informacion = useCallback(async (titulo: string, mensaje?: string): Promise<void> => {
    return await sweetAlert.informacion(titulo, mensaje);
  }, []);

  // Confirmaciones específicas
  const confirmarEliminacion = useCallback(async (elemento: string): Promise<boolean> => {
    return await sweetAlert.confirmarEliminacion(elemento);
  }, []);

  const confirmarDesactivacion = useCallback(async (elemento: string): Promise<boolean> => {
    return await sweetAlert.confirmarDesactivacion(elemento);
  }, []);

  const confirmarActivacion = useCallback(async (elemento: string): Promise<boolean> => {
    return await sweetAlert.confirmarActivacion(elemento);
  }, []);

  // Hook personalizado para cambio de estado de jobs
  const confirmarCambioEstadoJob = useCallback(async (
    nombreJob: string, 
    estaHabilitado: boolean,
    onConfirmar: () => Promise<void> | void
  ): Promise<void> => {
    const accion = estaHabilitado ? 'desactivar' : 'activar';
    const metodoConfirmacion = estaHabilitado ? confirmarDesactivacion : confirmarActivacion;
    
    const confirmado = await metodoConfirmacion(nombreJob);
    
    if (confirmado) {
      await onConfirmar();
    }
  }, [confirmarDesactivacion, confirmarActivacion]);

  return {
    // Métodos básicos
    mostrar,
    confirmar,
    notificar,
    solicitarInput,
    
    // Métodos de conveniencia
    exito,
    error,
    advertencia,
    informacion,
    
    // Confirmaciones específicas
    confirmarEliminacion,
    confirmarDesactivacion,
    confirmarActivacion,
    
    // Hook personalizado para jobs
    confirmarCambioEstadoJob
  };
}; 