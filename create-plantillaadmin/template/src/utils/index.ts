export { FormatterService } from './Fecha/FormatterService';
export { DateFormatter } from './Fecha/DateFormatter';
export { TextFormatter } from './Texto/TextFormatter';
export { NumberFormatter } from './Numeros/NumberFormatter';
export { UrlValidator } from './Validaciones/UrlValidator';
export * from './Api/errorHandler';
export * from './Api/urlBuilder';
export * from './Api/queryParamsBuilder';
export * from './FormData/formDataBuilder';
export * from './Timing/delayUtils';
export * from './Fecha/FormatterService';
export * from './Fecha/DateFormatter';
export * from './Numeros/NumberFormatter';
export * from './Texto/TextFormatter';
export * from './Validaciones/UrlValidator';
export * from './SistemaDebug';
export * from './Notificacion';
export * from './jobParametrosUtils';
export * from './Archivos/descargarArchivo';
import { manejarError, procesarMensajeError } from './Api/errorHandler';
import { construirQueryParams } from './Api/urlBuilder';
import { prepararParametrosPaginacionJobs, prepararParametrosConsulta } from './Api/queryParamsBuilder';
import { ejecutarConDelay } from './Timing/delayUtils';
import { 
    construirFormulario, 
    construirFormularioAutomatico, 
    construirFormularioConArraysComplejos 
} from './FormData/formDataBuilder';

/**
 * @deprecated Usa las importaciones directas de los módulos específicos
 * Este objeto se mantiene para compatibilidad hacia atrás
 */
export const Utilitarios = {
    ManejarError: manejarError,
    ConstruirQueryParams: construirQueryParams,
    PrepararParametrosPaginacionJobs: prepararParametrosPaginacionJobs,
    PrepararParametrosConsulta: prepararParametrosConsulta,
    EjecutarConDelay: ejecutarConDelay,
    construirFormulario,
    construirFormularioAutomatico,
    construirFormularioConArraysComplejos,
    procesarMensajeError
}; 