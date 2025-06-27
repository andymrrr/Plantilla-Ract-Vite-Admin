import { FetchError, RequestOptions } from './types';

// ==================== UTILIDADES DE LOGGING FETCH ====================

export class FetchLogger {
  private static readonly isDev = import.meta.env.DEV;

  static logRequest(url: string, options: RequestOptions): void {
    if (!this.isDev) return;
    
      // Los requests se capturan automáticamente por globalErrorHandler
  }

  static logResponse(url: string, method: string, response: Response, data?: any): void {
    // Los responses se capturan automáticamente por globalErrorHandler
    return;
  }

  static logError(url: string, method: string, error: FetchError): void {
    // Los errores se capturan automáticamente por globalErrorHandler
    return;
  }
} 