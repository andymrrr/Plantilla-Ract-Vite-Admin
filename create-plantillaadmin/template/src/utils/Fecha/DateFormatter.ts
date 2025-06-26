
type FechaInput = string | Date | null | undefined;

const CONFIGURACION_FECHA = {
    LOCALE: 'es-ES',
    FORMATO_COMPLETO: {
        day: '2-digit' as const,
        month: '2-digit' as const,
        year: 'numeric' as const,
        hour: '2-digit' as const,
        minute: '2-digit' as const
    },
    FORMATO_CORTO: {
        day: '2-digit' as const,
        month: '2-digit' as const,
        year: 'numeric' as const
    },
    FORMATO_HORA: {
        hour: '2-digit' as const,
        minute: '2-digit' as const
    }
} as const;

export class DateFormatter {

    static formatearCompleta(fecha: FechaInput): string {
        if (!this.esValida(fecha)) return '';
        
        try {
            const fechaObj = this.convertir(fecha);
            return fechaObj.toLocaleString(
                CONFIGURACION_FECHA.LOCALE, 
                CONFIGURACION_FECHA.FORMATO_COMPLETO
            );
        } catch (error) {
            return 'Fecha inválida';
        }
    }
    static formatearCorta(fecha: FechaInput): string {
        if (!this.esValida(fecha)) return '';
        
        try {
            const fechaObj = this.convertir(fecha);
            return fechaObj.toLocaleDateString(
                CONFIGURACION_FECHA.LOCALE, 
                CONFIGURACION_FECHA.FORMATO_CORTO
            );
        } catch (error) {
            return 'Fecha inválida';
        }
    }

    static formatearHora(fecha: FechaInput): string {
        if (!this.esValida(fecha)) return '';
        
        try {
            const fechaObj = this.convertir(fecha);
            return fechaObj.toLocaleTimeString(
                CONFIGURACION_FECHA.LOCALE, 
                CONFIGURACION_FECHA.FORMATO_HORA
            );
        } catch (error) {
            return 'Hora inválida';
        }
    }

    private static esValida(fecha: FechaInput): fecha is string | Date {
        return fecha !== null && fecha !== undefined;
    }

    private static convertir(fecha: string | Date): Date {
        return typeof fecha === 'string' ? new Date(fecha) : fecha;
    }

} 