/**
 * Función utilitaria para combinar clases de CSS
 */
export const combinarClases = (...clases: (string | undefined | null | false)[]): string => {
  return clases.filter(Boolean).join(' ');
}; 