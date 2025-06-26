import { Debug, DebugAPI } from './debugSystem';

export interface GlobalErrorConfig {
  captureUnhandledRejections: boolean;
  captureConsoleErrors: boolean;
  captureNetworkErrors: boolean;
  captureReactErrors: boolean;
  maxStackDepth: number;
  enableStackTrace: boolean;
}

export class GlobalErrorHandler {
  private static instance: GlobalErrorHandler;
  private config: GlobalErrorConfig;
  private originalConsoleError: typeof console.error;
  private originalConsoleWarn: typeof console.warn;
  private isInitialized = false;

  private constructor() {
    this.config = {
      captureUnhandledRejections: true,
      captureConsoleErrors: true,
      captureNetworkErrors: true,
      captureReactErrors: true,
      maxStackDepth: 10,
      enableStackTrace: true
    };

    // Guardamos las referencias originales
    this.originalConsoleError = console.error.bind(console);
    this.originalConsoleWarn = console.warn.bind(console);
  }

  public static getInstance(): GlobalErrorHandler {
    if (!GlobalErrorHandler.instance) {
      GlobalErrorHandler.instance = new GlobalErrorHandler();
    }
    return GlobalErrorHandler.instance;
  }

  public initialize(config?: Partial<GlobalErrorConfig>): void {
    if (this.isInitialized) {
      Debug.warning('GLOBAL_ERROR_HANDLER', 'Ya está inicializado el handler global de errores');
      return;
    }

    this.config = { ...this.config, ...config };
    this.setupGlobalHandlers();
    this.isInitialized = true;

    Debug.success('GLOBAL_ERROR_HANDLER', 'Sistema de captura global de errores inicializado', this.config);
  }

  private setupGlobalHandlers(): void {
    // Capturar errores no manejados
    if (this.config.captureUnhandledRejections) {
      window.addEventListener('error', this.handleGlobalError.bind(this));
      window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
    }

    // Interceptar console.error y console.warn
    if (this.config.captureConsoleErrors) {
      this.interceptConsole();
    }

    // Interceptar fetch para errores de red
    if (this.config.captureNetworkErrors) {
      this.interceptFetch();
      this.interceptXHR();
    }
  }

  private handleGlobalError(event: ErrorEvent): void {
    const errorInfo = {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
      type: 'uncaught_error',
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    Debug.error('GLOBAL_ERROR', `Error no capturado: ${event.message}`, errorInfo);
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    const errorInfo = {
      reason: event.reason,
      stack: event.reason?.stack,
      timestamp: new Date().toISOString(),
      type: 'unhandled_promise_rejection',
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    Debug.error('GLOBAL_ERROR', `Promise rechazada no manejada: ${event.reason}`, errorInfo);
  }

  private interceptConsole(): void {
    console.error = (...args: any[]) => {
      // Llamar al console.error original
      this.originalConsoleError(...args);
      
      // Logear en nuestro sistema
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');
      
      Debug.error('CONSOLE_ERROR', message, {
        originalArgs: args,
        timestamp: new Date().toISOString(),
        stack: this.config.enableStackTrace ? new Error().stack : undefined
      });
    };

    console.warn = (...args: any[]) => {
      // Llamar al console.warn original
      this.originalConsoleWarn(...args);
      
      // Logear en nuestro sistema
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');
      
      Debug.warning('CONSOLE_WARN', message, {
        originalArgs: args,
        timestamp: new Date().toISOString(),
        stack: this.config.enableStackTrace ? new Error().stack : undefined
      });
    };
  }

  private interceptFetch(): void {
    const originalFetch = window.fetch;
    
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      const [url, options] = args;
      const startTime = Date.now();
      
      try {
        // Log de la request
        DebugAPI.request(`FETCH ${options?.method || 'GET'} ${url}`, {
          url: url.toString(),
          method: options?.method || 'GET',
          headers: options?.headers,
          body: options?.body,
          timestamp: new Date().toISOString()
        });

        const response = await originalFetch(...args);
        const duration = Date.now() - startTime;

        if (response.ok) {
          // Log de respuesta exitosa
          DebugAPI.response(`FETCH ${options?.method || 'GET'} ${url} - ${response.status}`, {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            duration: `${duration}ms`,
            timestamp: new Date().toISOString()
          });
        } else {
          // Log de error HTTP
          const errorBody = await response.text().catch(() => 'No se pudo leer el cuerpo de la respuesta');
          
          DebugAPI.error(`FETCH ${options?.method || 'GET'} ${url} - ${response.status}`, {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            body: errorBody,
            duration: `${duration}ms`,
            timestamp: new Date().toISOString()
          });
        }

        return response;
      } catch (error) {
        const duration = Date.now() - startTime;
        
        // Log de error de red
        DebugAPI.error(`FETCH ${options?.method || 'GET'} ${url} - Network Error`, {
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
          duration: `${duration}ms`,
          timestamp: new Date().toISOString()
        });
        
        throw error;
      }
    };
  }

  private interceptXHR(): void {
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method: string, url: string | URL, async?: boolean, username?: string | null, password?: string | null) {
      (this as any)._debugInfo = {
        method,
        url: url.toString(),
        startTime: Date.now()
      };
      
      return originalXHROpen.call(this, method, url, async ?? true, username, password);
    };

    XMLHttpRequest.prototype.send = function(body?: Document | XMLHttpRequestBodyInit | null) {
      const debugInfo = (this as any)._debugInfo;
      
      if (debugInfo) {
        // Log de la request
        DebugAPI.request(`XHR ${debugInfo.method} ${debugInfo.url}`, {
          method: debugInfo.method,
          url: debugInfo.url,
          body,
          timestamp: new Date().toISOString()
        });

        // Interceptar respuesta
        const originalOnReadyStateChange = this.onreadystatechange;
        this.onreadystatechange = function(event) {
          if (this.readyState === XMLHttpRequest.DONE) {
            const duration = Date.now() - debugInfo.startTime;
            
            if (this.status >= 200 && this.status < 300) {
              DebugAPI.response(`XHR ${debugInfo.method} ${debugInfo.url} - ${this.status}`, {
                status: this.status,
                statusText: this.statusText,
                responseText: this.responseText,
                duration: `${duration}ms`,
                timestamp: new Date().toISOString()
              });
            } else {
              DebugAPI.error(`XHR ${debugInfo.method} ${debugInfo.url} - ${this.status}`, {
                status: this.status,
                statusText: this.statusText,
                responseText: this.responseText,
                duration: `${duration}ms`,
                timestamp: new Date().toISOString()
              });
            }
          }
          
          if (originalOnReadyStateChange) {
            originalOnReadyStateChange.call(this, event);
          }
        };
      }
      
      return originalXHRSend.call(this, body);
    };
  }

  public captureException(error: Error, context?: Record<string, any>): void {
    Debug.error('MANUAL_CAPTURE', error.message, {
      name: error.name,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
  }

  public captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: Record<string, any>): void {
    const debugMethod = level === 'error' ? Debug.error : level === 'warning' ? Debug.warning : Debug.info;
    
    debugMethod('MANUAL_MESSAGE', message, {
      context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
  }

  public setContext(key: string, value: any): void {
    Debug.info('CONTEXT_UPDATE', `Contexto actualizado: ${key}`, { [key]: value });
  }

  public dispose(): void {
    if (!this.isInitialized) return;

    // Restaurar console original
    console.error = this.originalConsoleError;
    console.warn = this.originalConsoleWarn;

    // TODO: Restaurar fetch y XHR originales (requiere más trabajo)
    
    this.isInitialized = false;
    Debug.info('GLOBAL_ERROR_HANDLER', 'Sistema de captura global de errores desactivado');
  }
}

// Instancia singleton
export const globalErrorHandler = GlobalErrorHandler.getInstance();

// Inicialización automática si está en modo desarrollo
if (import.meta.env.DEV || import.meta.env.VITE_DEBUG_ENABLED === 'true') {
  globalErrorHandler.initialize();
} 