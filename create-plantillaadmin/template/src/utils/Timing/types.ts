export interface CancelableDelay {
    promise: Promise<void>;
    cancel: () => void;
    isCancelled: () => boolean;
}

export interface CancelableFunction {
    (...args: any[]): void;
    cancel: () => void;
    flush?: () => void;
    pending: () => boolean;
}

export interface DelayOptions {
    signal?: AbortSignal;
    value?: any;
}

export interface ExecuteDelayOptions {
    onError?: (error: Error) => void;
    signal?: AbortSignal;
}

export interface DebounceOptions {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
    signal?: AbortSignal;
}

export interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
    signal?: AbortSignal;
}

export interface RepeatOptions {
    immediate?: boolean;
    times?: number;
    signal?: AbortSignal;
    onError?: (error: Error) => void;
}

export interface SequenceOptions {
    signal?: AbortSignal;
    onError?: (error: Error, index: number) => void;
    continueOnError?: boolean;
}

export interface RetryOptions {
    maxAttempts?: number;
    initialDelay?: number;
    maxDelay?: number;
    backoffFactor?: number;
    signal?: AbortSignal;
    shouldRetry?: (error: Error, attempt: number) => boolean;
} 