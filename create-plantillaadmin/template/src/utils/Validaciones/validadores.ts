import { ReglasValidacion, ValidacionResultado } from './types';
import { PATRONES_REGEX, MENSAJES_ERROR } from './patterns';

/**
 * Funciones de validación específicas
 */
export class Validadores {
    
    /**
     * Valida un email
     */
    static email(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.EMAIL.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.EMAIL_INVALIDO };
        }
        
        return { esValido: true };
    }

    /**
     * Valida una URL
     */
    static url(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.URL.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.URL_INVALIDA };
        }
        
        return { esValido: true };
    }

    /**
     * Valida solo letras
     */
    static soloLetras(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.SOLO_LETRAS.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.SOLO_LETRAS };
        }
        
        return { esValido: true };
    }

    /**
     * Valida solo números
     */
    static soloNumeros(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.SOLO_NUMEROS.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.SOLO_NUMEROS };
        }
        
        return { esValido: true };
    }

    /**
     * Valida un teléfono
     */
    static telefono(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.TELEFONO.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.TELEFONO_INVALIDO };
        }
        
        return { esValido: true };
    }

    /**
     * Valida un código en mayúsculas
     */
    static codigoMayuscula(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.CODIGO_MAYUSCULA.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.CODIGO_INVALIDO };
        }
        
        return { esValido: true };
    }

    /**
     * Valida una expresión cron
     */
    static cron(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.CRON.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.CRON_INVALIDO };
        }
        
        return { esValido: true };
    }

    /**
     * Valida una contraseña fuerte
     */
    static passwordFuerte(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.PASSWORD_FUERTE.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.PASSWORD_DEBIL };
        }
        
        return { esValido: true };
    }

    /**
     * Valida una contraseña media
     */
    static passwordMedia(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.PASSWORD_MEDIA.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.PASSWORD_MEDIA };
        }
        
        return { esValido: true };
    }

    /**
     * Valida una fecha en formato ISO
     */
    static fechaISO(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.FECHA_ISO.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.FECHA_INVALIDA };
        }
        
        return { esValido: true };
    }

    /**
     * Valida una hora en formato 24h
     */
    static hora24(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.HORA_24.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.HORA_INVALIDA };
        }
        
        return { esValido: true };
    }

    /**
     * Valida longitud mínima y máxima
     */
    static longitud(value: any, min: number, max: number): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        const longitud = value.toString().length;
        
        if (longitud < min) {
            return { esValido: false, mensaje: MENSAJES_ERROR.MIN_CARACTERES(min) };
        }
        
        if (longitud > max) {
            return { esValido: false, mensaje: MENSAJES_ERROR.MAX_CARACTERES(max) };
        }
        
        return { esValido: true };
    }

    /**
     * Valida rango numérico
     */
    static rangoNumerico(value: any, min: number, max: number): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        const numero = Number(value);
        
        if (isNaN(numero)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.SOLO_NUMEROS };
        }
        
        if (numero < min) {
            return { esValido: false, mensaje: MENSAJES_ERROR.MIN_VALOR(min) };
        }
        
        if (numero > max) {
            return { esValido: false, mensaje: MENSAJES_ERROR.MAX_VALOR(max) };
        }
        
        return { esValido: true };
    }

    /**
     * Valida un DNI español
     */
    static dniES(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.DNI_ES.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.DNI_INVALIDO };
        }
        
        return { esValido: true };
    }

    /**
     * Valida un NIE español
     */
    static nieES(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.NIE_ES.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.NIE_INVALIDO };
        }
        
        return { esValido: true };
    }

    /**
     * Valida un CUIT argentino
     */
    static cuitAR(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.CUIT_AR.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.CUIT_INVALIDO };
        }
        
        return { esValido: true };
    }

    /**
     * Valida un RFC mexicano
     */
    static rfcMX(value: any): ValidacionResultado {
        if (!value) {
            return { esValido: false, mensaje: MENSAJES_ERROR.REQUERIDO };
        }
        
        if (!PATRONES_REGEX.RFC_MX.test(value)) {
            return { esValido: false, mensaje: MENSAJES_ERROR.RFC_INVALIDO };
        }
        
        return { esValido: true };
    }
} 