/**
 * Utilitario para descargar archivos desde un Blob
 */
export interface DescargarArchivoOptions {
  blob: Blob;
  nombreArchivo: string;
  mostrarNotificacion?: boolean;
}


export function descargarArchivo(options: DescargarArchivoOptions): void {
  const { blob, nombreArchivo } = options;
  
  
  const url = URL.createObjectURL(blob);
    
  const link = document.createElement('a');
  link.href = url;
  link.download = nombreArchivo;
  
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  
  URL.revokeObjectURL(url);
}


export function generarNombreArchivoSeguro(nombre: string): string {
  return nombre.replace(/[^a-zA-Z0-9]/g, '_');
}


export function generarNombreConFecha(prefijo: string, extension: string = 'json'): string {
  const fecha = new Date().toISOString().split('T')[0];
  return `${prefijo}-${fecha}.${extension}`;
} 