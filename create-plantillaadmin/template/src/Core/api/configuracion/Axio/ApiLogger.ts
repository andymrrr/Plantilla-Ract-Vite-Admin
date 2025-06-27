import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ApiError } from './types';

export class ApiLogger {
  private static readonly isDev = import.meta.env.DEV;

  static logRequest(config: AxiosRequestConfig): void {
    // Los requests se capturan automáticamente por DebugApiMiddleware
    return;
  }

  static logResponse(response: AxiosResponse): void {
    // Los responses se capturan automáticamente por DebugApiMiddleware
    return;
  }

  static logError(error: AxiosError, apiError: ApiError): void {
    // Los errores se capturan automáticamente por DebugApiMiddleware
    return;
  }
} 