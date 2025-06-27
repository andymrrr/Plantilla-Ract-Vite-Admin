import React from 'react';

// ===== UTILIDADES DE PERFORMANCE =====

/**
 * Debounce function para optimizar búsquedas
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func.apply(null, args), wait);
  };
};

/**
 * Throttle function para optimizar eventos de scroll/resize
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Memoización simple para funciones costosas
 */
export const memoize = <TArgs extends any[], TReturn>(
  fn: (...args: TArgs) => TReturn,
  getKey?: (...args: TArgs) => string
): (...args: TArgs) => TReturn => {
  const cache = new Map<string, TReturn>();
  
  return (...args: TArgs): TReturn => {
    const key = getKey ? getKey(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

/**
 * RequestAnimationFrame throttle para animaciones suaves
 */
export const rafThrottle = <T extends (...args: any[]) => any>(
  fn: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null;
  let lastArgs: Parameters<T>;
  
  return (...args: Parameters<T>) => {
    lastArgs = args;
    
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        fn(...lastArgs);
        rafId = null;
      });
    }
  };
};

/**
 * Lazy loading helper para componentes
 */
export const createLazyComponent = (
  importFn: () => Promise<{ default: React.ComponentType<any> }>,
  fallback?: React.ComponentType
) => {
  return React.lazy(importFn);
};

/**
 * Hook personalizado para intersection observer (lazy loading)
 */
export const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options?: IntersectionObserverInit
) => {
  const ref = React.useRef<HTMLElement>(null);
  
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => callback(entry.isIntersecting),
      options
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [callback, options]);
  
  return ref;
};

/**
 * Optimizador de re-renders usando shallow comparison
 */
export const shallowEqual = (obj1: any, obj2: any): boolean => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
};

/**
 * Hook para optimizar callbacks con dependencias
 */
export const useStableCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  const ref = React.useRef<T>(callback);
  
  React.useEffect(() => {
    ref.current = callback;
  }, deps);
  
  return React.useCallback(
    (...args: Parameters<T>) => ref.current(...args),
    []
  ) as T;
}; 