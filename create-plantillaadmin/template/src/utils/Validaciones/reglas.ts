import { ReglasValidacion } from './types';
import { PATRONES_REGEX, MENSAJES_ERROR } from './patterns';

/**
 * Generador de reglas de validación para formularios
 */
export class ReglasValidacionBuilder {
    
    /**
     * Campo requerido
     */
    static requerido(mensaje?: string): ReglasValidacion {
        return {
            required: mensaje || MENSAJES_ERROR.REQUERIDO
        };
    }

    /**
     * Validación de email
     */
    static email(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.EMAIL,
                message: mensaje || MENSAJES_ERROR.EMAIL_INVALIDO
            }
        };
    }

    /**
     * Validación de URL
     */
    static url(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.URL,
                message: mensaje || MENSAJES_ERROR.URL_INVALIDA
            }
        };
    }

    /**
     * Validación de texto con longitud
     */
    static texto(min: number, max: number, requerido = true): ReglasValidacion {
        return {
            ...(requerido && { required: MENSAJES_ERROR.REQUERIDO }),
            minLength: { value: min, message: MENSAJES_ERROR.MIN_CARACTERES(min) },
            maxLength: { value: max, message: MENSAJES_ERROR.MAX_CARACTERES(max) }
        };
    }

    /**
     * Solo texto (letras)
     */
    static soloTexto(min?: number, max?: number): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.SOLO_LETRAS,
                message: MENSAJES_ERROR.SOLO_LETRAS
            },
            ...(min && { minLength: { value: min, message: MENSAJES_ERROR.MIN_CARACTERES(min) } }),
            ...(max && { maxLength: { value: max, message: MENSAJES_ERROR.MAX_CARACTERES(max) } })
        };
    }

    /**
     * Solo números
     */
    static soloNumeros(min?: number, max?: number): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.SOLO_NUMEROS,
                message: MENSAJES_ERROR.SOLO_NUMEROS
            },
            ...(min !== undefined && { min: { value: min, message: MENSAJES_ERROR.MIN_VALOR(min) } }),
            ...(max !== undefined && { max: { value: max, message: MENSAJES_ERROR.MAX_VALOR(max) } })
        };
    }

    /**
     * Código en mayúsculas
     */
    static codigoMayuscula(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.CODIGO_MAYUSCULA,
                message: mensaje || MENSAJES_ERROR.CODIGO_INVALIDO
            }
        };
    }

    /**
     * Expresión cron
     */
    static cron(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.CRON,
                message: mensaje || MENSAJES_ERROR.CRON_INVALIDO
            }
        };
    }

    /**
     * Teléfono
     */
    static telefono(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.TELEFONO,
                message: mensaje || MENSAJES_ERROR.TELEFONO_INVALIDO
            }
        };
    }

    /**
     * Rango numérico
     */
    static numeroRango(min: number, max: number, requerido = true): ReglasValidacion {
        return {
            ...(requerido && { required: MENSAJES_ERROR.REQUERIDO }),
            min: { value: min, message: MENSAJES_ERROR.MIN_VALOR(min) },
            max: { value: max, message: MENSAJES_ERROR.MAX_VALOR(max) }
        };
    }

    /**
     * Contraseña fuerte
     */
    static passwordFuerte(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.PASSWORD_FUERTE,
                message: mensaje || MENSAJES_ERROR.PASSWORD_DEBIL
            }
        };
    }

    /**
     * Contraseña media
     */
    static passwordMedia(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.PASSWORD_MEDIA,
                message: mensaje || MENSAJES_ERROR.PASSWORD_MEDIA
            }
        };
    }

    /**
     * Contraseña básica
     */
    static passwordBasica(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.PASSWORD_BASICA,
                message: mensaje || MENSAJES_ERROR.PASSWORD_BASICA
            }
        };
    }

    /**
     * Fecha ISO
     */
    static fechaISO(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.FECHA_ISO,
                message: mensaje || MENSAJES_ERROR.FECHA_INVALIDA
            }
        };
    }

    /**
     * Hora 24h
     */
    static hora24(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.HORA_24,
                message: mensaje || MENSAJES_ERROR.HORA_INVALIDA
            }
        };
    }

    /**
     * Campo opcional
     */
    static opcional(): ReglasValidacion {
        return {};
    }

    /**
     * Validación personalizada
     */
    static personalizada(validador: (value: any) => boolean | string, mensaje: string): ReglasValidacion {
        return {
            validate: {
                custom: (value: any) => validador(value) || mensaje
            }
        };
    }

    /**
     * DNI español
     */
    static dniES(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.DNI_ES,
                message: mensaje || MENSAJES_ERROR.DNI_INVALIDO
            }
        };
    }

    /**
     * NIE español
     */
    static nieES(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.NIE_ES,
                message: mensaje || MENSAJES_ERROR.NIE_INVALIDO
            }
        };
    }

    /**
     * CUIT argentino
     */
    static cuitAR(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.CUIT_AR,
                message: mensaje || MENSAJES_ERROR.CUIT_INVALIDO
            }
        };
    }

    /**
     * RFC mexicano
     */
    static rfcMX(mensaje?: string): ReglasValidacion {
        return {
            required: MENSAJES_ERROR.REQUERIDO,
            pattern: {
                value: PATRONES_REGEX.RFC_MX,
                message: mensaje || MENSAJES_ERROR.RFC_INVALIDO
            }
        };
    }
}

/**
 * Reglas predefinidas para formularios comunes
 */
export const REGLAS_FORMULARIOS = {
    // Usuario
    NOMBRE_USUARIO: ReglasValidacionBuilder.texto(2, 50),
    EMAIL_USUARIO: ReglasValidacionBuilder.email(),
    PASSWORD: ReglasValidacionBuilder.passwordFuerte(),
    PASSWORD_MEDIA: ReglasValidacionBuilder.passwordMedia(),
    TELEFONO: ReglasValidacionBuilder.telefono(),
    DNI: ReglasValidacionBuilder.dniES(),
    NIE: ReglasValidacionBuilder.nieES(),

    // Datos generales
    NOMBRE_GENERICO: ReglasValidacionBuilder.texto(3, 100),
    DESCRIPCION_CORTA: ReglasValidacionBuilder.texto(10, 200),
    DESCRIPCION_LARGA: ReglasValidacionBuilder.texto(10, 500),
    CODIGO_IDENTIFICADOR: ReglasValidacionBuilder.codigoMayuscula(),
    URL_API: ReglasValidacionBuilder.url(),
    EXPRESION_CRON: ReglasValidacionBuilder.cron(),
    
    // Configuración
    TIMEOUT: ReglasValidacionBuilder.numeroRango(1, 3600, false),
    REINTENTOS: ReglasValidacionBuilder.numeroRango(0, 10, false),
    PERIODO_MINUTOS: ReglasValidacionBuilder.numeroRango(1, 1440, false),
    
    // Opcionales
    COMENTARIOS: ReglasValidacionBuilder.opcional(),
    NOTAS: ReglasValidacionBuilder.opcional(),
    
    // Fechas y horas
    FECHA: ReglasValidacionBuilder.fechaISO(),
    HORA: ReglasValidacionBuilder.hora24(),
    
    // Documentos latinoamericanos
    CUIT: ReglasValidacionBuilder.cuitAR(),
    RFC: ReglasValidacionBuilder.rfcMX()
};

/**
 * Combina múltiples reglas de validación
 */
export const combinarReglas = (...reglas: ReglasValidacion[]): ReglasValidacion => {
    return reglas.reduce((acc, regla) => ({
        ...acc,
        ...regla,
        validate: {
            ...acc.validate,
            ...regla.validate
        }
    }), {});
};

/**
 * Crea un conjunto de reglas para un dominio específico
 */
export const crearReglasDominio = (
    configuracion: Record<string, ReglasValidacion>
): Record<string, ReglasValidacion> => {
    return configuracion;
}; 