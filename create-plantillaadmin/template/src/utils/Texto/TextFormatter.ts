type TextoInput = string | null | undefined;

const CONFIGURACION_TEXTO = {
    LONGITUD_DEFAULT: 50,
    INICIALES_MAX: 2
} as const;


export class TextFormatter {
    static truncar(texto: TextoInput, maxLength: number = CONFIGURACION_TEXTO.LONGITUD_DEFAULT): string {
        if (!this.esValido(texto)) return '';
        if (maxLength <= 0) return '';
        
        return texto.length > maxLength 
            ? `${texto.substring(0, maxLength)}...` 
            : texto;
    }
    static capitalizar(texto: TextoInput): string {
        if (!this.esValido(texto)) return '';
        if (texto.length === 0) return '';
        
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }

    
    static obtenerIniciales(nombre: TextoInput): string {
        if (!this.esValido(nombre)) return '';
        
        return nombre
            .trim()
            .split(/\s+/)
            .filter(palabra => palabra.length > 0)
            .map(palabra => palabra.charAt(0).toUpperCase())
            .join('')
            .substring(0, CONFIGURACION_TEXTO.INICIALES_MAX);
    }

    private static esValido(texto: TextoInput): texto is string {
        return typeof texto === 'string' && texto !== null && texto !== undefined;
    }
} 