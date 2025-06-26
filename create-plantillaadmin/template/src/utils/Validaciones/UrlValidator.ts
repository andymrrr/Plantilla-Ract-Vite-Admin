import { Validadores } from './validadores';

/**
 * @deprecated Usa Validadores.url() en su lugar
 * Esta clase se mantiene para compatibilidad hacia atrás
 */
export class UrlValidator {
    /**
     * Valida una URL
     */
    static validate(url: string): boolean {
        return Validadores.url(url).esValido;
    }

    /**
     * Valida una URL y retorna el resultado con mensaje
     */
    static validateWithMessage(url: string): { isValid: boolean; message?: string } {
        const resultado = Validadores.url(url);
        return {
            isValid: resultado.esValido,
            message: resultado.mensaje
        };
    }
} 