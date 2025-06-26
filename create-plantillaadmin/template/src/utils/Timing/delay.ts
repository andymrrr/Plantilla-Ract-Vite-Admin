import { CancelableDelay, DelayOptions, ExecuteDelayOptions } from './types';

/**
 * Ejecuta una función después de un tiempo de espera
 */
export function ejecutarConDelay(
    tiempoEspera: number, 
    callback: () => void | Promise<void>,
    options: ExecuteDelayOptions = {}
): () => void {
    if (tiempoEspera < 0) {
        throw new Error("El tiempo de espera debe ser mayor o igual a 0");
    }
    
    if (typeof callback !== 'function') {
        throw new Error("El callback debe ser una función");
    }

    if (options.signal?.aborted) {
        return () => {}; 
    }

    let cancelled = false;
    
    const timer = setTimeout(async () => {
        if (cancelled || options.signal?.aborted) return;
        
        try {
            await callback();
        } catch (error) {
            const errorObj = error instanceof Error ? error : new Error(String(error));
            
            if (options.onError) {
                options.onError(errorObj);
            }
        }
    }, tiempoEspera);

    const abortHandler = () => {
        cancelled = true;
        clearTimeout(timer);
    };
    
    options.signal?.addEventListener('abort', abortHandler);

    return () => {
        cancelled = true;
        clearTimeout(timer);
        options.signal?.removeEventListener('abort', abortHandler);
    };
}

/**
 * Crea una promesa que se resuelve después de un tiempo específico
 */
export function delay(ms: number, options: DelayOptions = {}): Promise<any> {
    if (ms < 0) {
        throw new Error("El tiempo de delay debe ser mayor o igual a 0");
    }

    return new Promise((resolve, reject) => {
        if (options.signal?.aborted) {
            reject(new Error('Delay cancelado'));
            return;
        }

        const timer = setTimeout(() => {
            resolve(options.value);
        }, ms);

        options.signal?.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('Delay cancelado'));
        });
    });
}

/**
 * Crea un delay cancelable
 */
export function createCancelableDelay(ms: number, value?: any): CancelableDelay {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const promise = new Promise<void>((resolve, reject) => {
        if (ms < 0) {
            reject(new Error("El tiempo de delay debe ser mayor o igual a 0"));
            return;
        }

        timer = setTimeout(() => {
            if (!cancelled) {
                resolve(value);
            }
        }, ms);
    });

    const cancel = () => {
        cancelled = true;
        if (timer) {
            clearTimeout(timer);
        }
    };

    const isCancelled = () => cancelled;

    return {
        promise,
        cancel,
        isCancelled
    };
}

// Alias para compatibilidad
export const EjecutarConDelay = ejecutarConDelay; 