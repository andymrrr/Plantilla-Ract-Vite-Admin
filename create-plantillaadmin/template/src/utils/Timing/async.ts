import { RepeatOptions, SequenceOptions, RetryOptions } from './types';
import { delay } from './delay';

/**
 * Ejecuta una función repetidamente con un intervalo específico
 */
export function repeat(
    func: () => void | Promise<void>,
    interval: number,
    options: RepeatOptions = {}
): () => void {
    if (interval <= 0) {
        throw new Error("El intervalo debe ser mayor a 0");
    }

    const { immediate = false, times, signal, onError } = options;
    let count = 0;
    let intervalId: ReturnType<typeof setInterval>;
    let stopped = false;

    const execute = async () => {
        if (stopped || signal?.aborted) return;
        
        try {
            await func();
            count++;
            
            if (times && count >= times) {
                stop();
            }
        } catch (error) {
            const errorObj = error instanceof Error ? error : new Error(String(error));
            
            if (onError) {
                onError(errorObj);
            }
        }
    };

    const stop = () => {
        stopped = true;
        if (intervalId) {
            clearInterval(intervalId);
        }
    };

    if (immediate) {
        execute();
    }

    intervalId = setInterval(execute, interval);

    signal?.addEventListener('abort', stop);

    return stop;
}

/**
 * Ejecuta una secuencia de funciones con delay entre ellas
 */
export async function sequence(
    functions: Array<() => void | Promise<void>>,
    delayBetween: number = 0,
    options: SequenceOptions = {}
): Promise<void> {
    const { signal, onError, continueOnError = false } = options;

    for (let i = 0; i < functions.length; i++) {
        if (signal?.aborted) {
            throw new Error('Secuencia cancelada');
        }

        try {
            await functions[i]();
        } catch (error) {
            const errorObj = error instanceof Error ? error : new Error(String(error));
            
            if (onError) {
                onError(errorObj, i);
            }
            
            if (!continueOnError) {
                throw errorObj;
            }
        }

        if (i < functions.length - 1 && delayBetween > 0) {
            await delay(delayBetween, { signal });
        }
    }
}

/**
 * Aplica un timeout a una promesa
 */
export function timeout<T>(
    promise: Promise<T>,
    ms: number,
    message: string = `Timeout después de ${ms}ms`
): Promise<T> {
    if (ms <= 0) {
        throw new Error("El timeout debe ser mayor a 0");
    }

    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error(message));
        }, ms);

        promise
            .then(value => {
                clearTimeout(timer);
                resolve(value);
            })
            .catch(error => {
                clearTimeout(timer);
                reject(error);
            });
    });
}

/**
 * Reintenta una función con backoff exponencial
 */
export async function retry<T>(
    func: () => Promise<T>,
    options: RetryOptions = {}
): Promise<T> {
    const {
        maxAttempts = 3,
        initialDelay = 1000,
        maxDelay = 30000,
        backoffFactor = 2,
        signal,
        shouldRetry = () => true
    } = options;

    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        if (signal?.aborted) {
            throw new Error('Retry cancelado');
        }

        try {
            return await func();
        } catch (error) {
            lastError = error instanceof Error ? error : new Error(String(error));
            
            if (attempt === maxAttempts || !shouldRetry(lastError, attempt)) {
                throw lastError;
            }

            const delayMs = Math.min(
                initialDelay * Math.pow(backoffFactor, attempt - 1),
                maxDelay
            );

            await delay(delayMs, { signal });
        }
    }

    throw lastError!;
} 