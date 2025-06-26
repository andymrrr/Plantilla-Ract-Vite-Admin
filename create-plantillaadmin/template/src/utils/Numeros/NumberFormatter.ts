

type NumeroInput = number | null | undefined;

const CONFIGURACION_NUMEROS = {
    LOCALE: 'es-ES',
    DECIMALES_DEFAULT: 2,
    BASE_BYTES: 1024,
    UNIDADES_BYTES: ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'] as const
} as const;


export class NumberFormatter {
 
    static formatear(numero: NumeroInput): string {
        if (!this.esValido(numero)) return '';
        
        return numero.toLocaleString(CONFIGURACION_NUMEROS.LOCALE);
    }

    static formatearBytes(bytes: number, decimales: number = CONFIGURACION_NUMEROS.DECIMALES_DEFAULT): string {
        if (!this.esValido(bytes) || bytes < 0) return '0 Bytes';
        if (bytes === 0) return '0 Bytes';

        const k = CONFIGURACION_NUMEROS.BASE_BYTES;
        const dm = Math.max(0, decimales);
        const sizes = CONFIGURACION_NUMEROS.UNIDADES_BYTES;

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const indiceSeguro = Math.min(i, sizes.length - 1);

        const valor = bytes / Math.pow(k, indiceSeguro);
        const valorFormateado = parseFloat(valor.toFixed(dm));

        return `${valorFormateado} ${sizes[indiceSeguro]}`;
    }

    static formatearDuracion(milisegundos: number): string {
        if (!this.esValido(milisegundos) || milisegundos < 0) return '0ms';
        
        if (milisegundos < 1000) {
            return `${Math.round(milisegundos)}ms`;
        }
        
        const segundos = Math.floor(milisegundos / 1000);
        if (segundos < 60) {
            return `${segundos}s`;
        }
        
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        
        if (minutos < 60) {
            return segundosRestantes > 0 ? `${minutos}m ${segundosRestantes}s` : `${minutos}m`;
        }
        
        const horas = Math.floor(minutos / 60);
        const minutosRestantes = minutos % 60;
        
        return minutosRestantes > 0 ? `${horas}h ${minutosRestantes}m` : `${horas}h`;
    }

    private static esValido(numero: NumeroInput): numero is number {
        return typeof numero === 'number' && !isNaN(numero) && isFinite(numero);
    }
} 