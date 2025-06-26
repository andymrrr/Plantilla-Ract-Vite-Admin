import { DebugConfig, DebugLevel } from './types';

export class DebugConfigManager {
  static loadConfiguration(): DebugConfig {
    const env = import.meta.env;
    
    return {
      enabled: this.parseBoolean(env.VITE_DEBUG_ENABLED) ?? this.detectDevMode(),
      consoleOutput: this.parseBoolean(env.VITE_DEBUG_CONSOLE) ?? false,
      maxLogs: parseInt(env.VITE_DEBUG_MAX_LOGS) || 1000,
      logLevels: this.parseDebugLevels(env.VITE_DEBUG_LEVELS) || Object.values(DebugLevel),
      categories: this.parseArray(env.VITE_DEBUG_CATEGORIES) || []
    };
  }

  private static parseBoolean(value: string | undefined): boolean | null {
    if (value === undefined) return null;
    return value.toLowerCase() === 'true';
  }

  private static parseArray(value: string | undefined): string[] | null {
    if (!value) return null;
    return value.split(',').map(v => v.trim()).filter(Boolean);
  }

  private static parseDebugLevels(value: string | undefined): DebugLevel[] | null {
    if (!value) return null;
    return value.split(',')
      .map(v => v.trim().toUpperCase())
      .filter(v => Object.values(DebugLevel).includes(v as DebugLevel))
      .map(v => v as DebugLevel);
  }

  private static detectDevMode(): boolean {
    const viteDevMode = import.meta.env?.DEV;
    const nodeEnv = import.meta.env?.NODE_ENV === 'development';
    const hostname = typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.includes('dev')
    );
    
    return viteDevMode || nodeEnv || hostname;
  }
} 