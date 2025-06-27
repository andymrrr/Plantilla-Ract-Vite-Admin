import { Debug } from '../../../../utils/SistemaDebug';

export class DebugApiConfig {  
  static configure() {
    Debug.configure({
      enabled: true,
      consoleOutput: this.shouldShowInConsole(),
      logLevels: this.getApiLogLevels(),
      categories: this.getApiCategories(),
      maxLogs: 2000 
    });
  }

  private static shouldShowInConsole(): boolean {
    const env = import.meta.env;
    
    return env.VITE_DEBUG_CONSOLE === 'true' || 
           env.VITE_DEBUG_API_CONSOLE === 'true';
  }

  private static getApiLogLevels() {
    const env = import.meta.env;
    
    if (env.VITE_DEBUG_API_LEVELS) {
      return env.VITE_DEBUG_API_LEVELS.split(',')
        .map((level: string) => level.trim().toUpperCase());
    }
    
    return ['INFO', 'WARNING', 'ERROR', 'SUCCESS'];
  }

  private static getApiCategories() {
    const env = import.meta.env;
    
    if (env.VITE_DEBUG_API_CATEGORIES) {
      return env.VITE_DEBUG_API_CATEGORIES.split(',')
        .map((cat: string) => cat.trim());
    }
    
    return ['API_REQUEST', 'API_RESPONSE', 'API_ERROR'];
  }

  static getApiStats() {
    const allLogs = Debug.getLogs();
    const apiLogs = allLogs.filter(log => 
      log.category.startsWith('API_')
    );
    
    const stats = {
      total: apiLogs.length,
      requests: Debug.getLogs('API_REQUEST').length,
      responses: Debug.getLogs('API_RESPONSE').length,
      errors: Debug.getLogs('API_ERROR').length,
      lastHour: apiLogs.filter(log => {
        const logTime = new Date(log.timestamp);
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        return logTime > oneHourAgo;
      }).length
    };
    
    return stats;
  }

  static clearApiLogs() {
            // Los warnings se capturan automáticamente por globalErrorHandler
  }
} 