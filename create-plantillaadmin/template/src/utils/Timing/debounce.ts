import { CancelableFunction, DebounceOptions, ThrottleOptions } from './types';

/**
 * Crea una función debounced que retrasa la ejecución
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
    options: DebounceOptions = {}
): CancelableFunction {
    
    if (wait < 0) {
        throw new Error("El tiempo de espera debe ser mayor o igual a 0");
    }
    
    if (typeof func !== 'function') {
        throw new Error("El primer parámetro debe ser una función");
    }

    const { leading = false, trailing = true, maxWait, signal } = options;
    
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let maxTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastCallTime: number | undefined;
    let lastInvokeTime = 0;
    let lastArgs: Parameters<T> | undefined;
    let result: ReturnType<T>;

    function invokeFunc(time: number): ReturnType<T> {
        const args = lastArgs!;
        lastArgs = undefined;
        lastInvokeTime = time;
        result = func(...args);
        return result;
    }

    function startTimer(pendingFunc: () => void, wait: number): ReturnType<typeof setTimeout> {
        return setTimeout(pendingFunc, wait);
    }

    function cancelTimer(id: ReturnType<typeof setTimeout> | undefined): void {
        if (id !== undefined) {
            clearTimeout(id);
        }
    }

    function leadingEdge(time: number): ReturnType<T> {
        lastInvokeTime = time;
        timeoutId = startTimer(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time: number): number {
        const timeSinceLastCall = time - (lastCallTime || 0);
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;
        
        return maxWait !== undefined
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
    }

    function shouldInvoke(time: number): boolean {
        if (signal?.aborted) return false;
        
        const timeSinceLastCall = time - (lastCallTime || 0);
        const timeSinceLastInvoke = time - lastInvokeTime;

        return (
            lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
        );
    }

    function timerExpired(): void {
        const time = Date.now();
        
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        
        timeoutId = startTimer(timerExpired, remainingWait(time));
    }

    function trailingEdge(time: number): ReturnType<T> {
        timeoutId = undefined;
        
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        
        lastArgs = undefined;
        return result;
    }

    function cancel(): void {
        cancelTimer(timeoutId);
        cancelTimer(maxTimeoutId);
        lastInvokeTime = 0;
        lastArgs = undefined;
        lastCallTime = undefined;
        timeoutId = undefined;
        maxTimeoutId = undefined;
    }

    function flush(): ReturnType<T> {
        return timeoutId === undefined ? result : trailingEdge(Date.now());
    }

    function pending(): boolean {
        return timeoutId !== undefined;
    }

    function debounced(...args: Parameters<T>): ReturnType<T> {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastArgs = args;
        lastCallTime = time;

        if (isInvoking) {
            if (timeoutId === undefined) {
                return leadingEdge(lastCallTime);
            }
            
            if (maxWait !== undefined) {
                timeoutId = startTimer(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        
        if (timeoutId === undefined) {
            timeoutId = startTimer(timerExpired, wait);
        }
        
        return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    debounced.pending = pending;
    
    signal?.addEventListener('abort', cancel);

    return debounced;
}

/**
 * Crea una función throttled que limita la frecuencia de ejecución
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number,
    options: ThrottleOptions = {}
): CancelableFunction {
    
    if (limit < 0) {
        throw new Error("El tiempo límite debe ser mayor o igual a 0");
    }
    
    if (typeof func !== 'function') {
        throw new Error("El primer parámetro debe ser una función");
    }

    const { leading = true, trailing = true, signal } = options;
    
    return debounce(func, limit, {
        leading,
        trailing,
        maxWait: limit,
        signal
    });
} 