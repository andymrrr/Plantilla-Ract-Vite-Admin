export interface ReglasValidacion {
    required?: string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    min?: { value: number; message: string };
    max?: { value: number; message: string };
    validate?: Record<string, (value: any) => boolean | string>;
}

export interface ValidacionResultado {
    esValido: boolean;
    mensaje?: string;
    errores?: string[];
}

export interface ValidacionConfiguracion {
    requerido?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    min?: number;
    max?: number;
    custom?: (value: any) => boolean | string;
}

export type UrlInput = string | null | undefined;

export interface ValidacionUrl {
    esValida: boolean;
    esHttps: boolean;
    esLocal: boolean;
    protocolo?: string;
    hostname?: string;
} 