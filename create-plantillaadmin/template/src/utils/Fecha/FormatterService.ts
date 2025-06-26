import { DateFormatter } from './DateFormatter';
import { TextFormatter } from '../Texto/TextFormatter';
import { NumberFormatter } from '../Numeros/NumberFormatter';

export class FormatterService {
    
    
    static formatearFecha(fecha: string | Date | null | undefined): string {
        return DateFormatter.formatearCompleta(fecha);
    }

    static formatearFechaCorta(fecha: string | Date | null | undefined): string {
        return DateFormatter.formatearCorta(fecha);
    }

    static formatearHora(fecha: string | Date | null | undefined): string {
        return DateFormatter.formatearHora(fecha);
    }

    static truncarTexto(texto: string | null | undefined, maxLength?: number): string {
        return TextFormatter.truncar(texto, maxLength);
    }

    static capitalizarPrimeraLetra(texto: string | null | undefined): string {
        return TextFormatter.capitalizar(texto);
    }

  
    static obtenerIniciales(nombre: string | null | undefined): string {
        return TextFormatter.obtenerIniciales(nombre);
    }
    static formatearNumero(numero: number | null | undefined): string {
        return NumberFormatter.formatear(numero);
    }

   
    static formatearBytes(bytes: number, decimales?: number): string {
        return NumberFormatter.formatearBytes(bytes, decimales);
    }


    static formatearDuracion(milisegundos: number): string {
        return NumberFormatter.formatearDuracion(milisegundos);
    }

} 