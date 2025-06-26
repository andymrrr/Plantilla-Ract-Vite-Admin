import { AxiosError } from "axios";
import { Respuesta } from "../../Core/Domain/Model";


interface ErrorConMensaje {
    mensaje?: string;
}

export async function manejarError<T>(error: any): Promise<Respuesta<T>> {
   
    
    if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
            throw error; 
        }

        const errorResponse = {
            datos: null as T,
            completado: false,
            mensaje: error.response?.data?.mensaje || error.message || 'Error en la respuesta del servidor',
            errorTecnico: error.response?.data?.errorTecnico || error.message || null,
            errores: error.response?.data?.errores || null,
            tipoError: error.response?.status ? `HTTP_${error.response.status}` : 'SERVER_ERROR'
        };

        return errorResponse;
    } else if (error?.request) {
        const networkErrorDetails = {
            code: error.code,
            message: error.message,
            url: error.config?.url,
            method: error.config?.method,
            timeout: error.config?.timeout
        };
        
        return {
            datos: null as T,
            completado: false,
            mensaje: error.code === 'ECONNABORTED' 
                ? `Tiempo de espera agotado (${error.config?.timeout}ms)` 
                : 'Error de conexión - Servidor no disponible',
            errorTecnico: JSON.stringify(networkErrorDetails),
            errores: null,
            tipoError: 'NETWORK_ERROR'
        };
    } else {
        const unknownErrorResponse = {
            datos: null as T,
            completado: false,
            mensaje: error?.message || 'Error desconocido',
            errorTecnico: error?.message || JSON.stringify(error) || null,
            errores: null,
            tipoError: 'UNKNOWN_ERROR'
        };

        return unknownErrorResponse;
    }
}

export function procesarMensajeError(error: unknown): string {
    const axiosError = error as AxiosError<ErrorConMensaje>;
  
    if (axiosError?.isAxiosError) {
        const mensaje = axiosError.response?.data?.mensaje || axiosError.message || "Error desconocido del servidor";
        
        return mensaje;
    }
  
    
   return "Error inesperado en la aplicación";
}

export const ManejarError = manejarError; 