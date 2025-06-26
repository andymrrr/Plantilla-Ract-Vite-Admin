/**
 * Patrones de expresión regular para validaciones
 */
export const PATRONES_REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    URL: /^https?:\/\/.+/,
    SOLO_LETRAS: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    SOLO_NUMEROS: /^\d+$/,
    ALPHANUMERICO: /^[a-zA-Z0-9]+$/,
    TELEFONO: /^[+]?[\d\s\-()]+$/,
    CODIGO_MAYUSCULA: /^[A-Z_][A-Z0-9_]*$/,
    CRON: /^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/,
    JSON: /^[\],:{}\s]*$/,
    IPV4: /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/,
    PASSWORD_FUERTE: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    PASSWORD_MEDIA: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
    PASSWORD_BASICA: /^.{6,}$/,
    FECHA_ISO: /^\d{4}-\d{2}-\d{2}$/,
    HORA_24: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    CODIGO_POSTAL_ES: /^\d{5}$/,
    DNI_ES: /^\d{8}[A-Z]$/,
    NIE_ES: /^[XYZ]\d{7}[A-Z]$/,
    CUIT_AR: /^\d{2}-\d{8}-\d{1}$/,
    RFC_MX: /^[A-Z&Ñ]{3,4}\d{6}[A-Z0-9]{3}$/
};

/**
 * Mensajes de error predefinidos
 */
export const MENSAJES_ERROR = {
    REQUERIDO: "Este campo es requerido",
    EMAIL_INVALIDO: "Formato de email inválido",
    URL_INVALIDA: "La URL debe comenzar con http:// o https://",
    TELEFONO_INVALIDO: "Formato de teléfono inválido",
    SOLO_LETRAS: "Solo se permiten letras",
    SOLO_NUMEROS: "Solo se permiten números",
    CODIGO_INVALIDO: "Solo mayúsculas, números y guiones bajos. Debe comenzar con letra o guión bajo",
    CRON_INVALIDO: "Formato de cron inválido",
    JSON_INVALIDO: "Formato JSON inválido",
    IP_INVALIDA: "Formato de IP inválido",
    PASSWORD_DEBIL: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo",
    PASSWORD_MEDIA: "La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número",
    PASSWORD_BASICA: "La contraseña debe tener al menos 6 caracteres",
    FECHA_INVALIDA: "Formato de fecha inválido (YYYY-MM-DD)",
    HORA_INVALIDA: "Formato de hora inválido (HH:MM)",
    CODIGO_POSTAL_INVALIDO: "Código postal inválido",
    DNI_INVALIDO: "DNI inválido",
    NIE_INVALIDO: "NIE inválido",
    CUIT_INVALIDO: "CUIT inválido",
    RFC_INVALIDO: "RFC inválido",
    
    // Funciones para mensajes dinámicos
    MIN_CARACTERES: (min: number) => `Mínimo ${min} caracteres`,
    MAX_CARACTERES: (max: number) => `Máximo ${max} caracteres`,
    MIN_VALOR: (min: number) => `El valor mínimo es ${min}`,
    MAX_VALOR: (max: number) => `El valor máximo es ${max}`,
    LONGITUD_EXACTA: (longitud: number) => `Debe tener exactamente ${longitud} caracteres`,
    RANGO_VALORES: (min: number, max: number) => `El valor debe estar entre ${min} y ${max}`
}; 