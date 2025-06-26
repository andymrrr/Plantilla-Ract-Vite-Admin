/**
 * @deprecated Este archivo ha sido refactorizado en módulos más pequeños.
 * Por favor, importa directamente desde los módulos específicos:
 * 
 * - Para tipos: import { ReglasValidacion, ValidacionResultado } from './types'
 * - Para patrones: import { PATRONES_REGEX, MENSAJES_ERROR } from './patterns'
 * - Para URLs: import { UrlValidator } from './urlValidator'
 * - Para validadores: import { Validadores } from './validadores'
 * - Para reglas: import { ReglasValidacionBuilder, REGLAS_FORMULARIOS } from './reglas'
 * 
 * O usa el archivo index: import { UrlValidator, Validadores, REGLAS_FORMULARIOS } from './index'
 */

// Re-exportaciones para mantener compatibilidad
export * from './index'; 