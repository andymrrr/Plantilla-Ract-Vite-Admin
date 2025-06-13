import { OperadorBusqueda, FiltroBusqueda, TipoCampoBusqueda, ConfiguracionCampoBusqueda } from './types';

// Mapeo de operadores a etiquetas legibles
export const ETIQUETAS_OPERADORES: Record<OperadorBusqueda, string> = {
  contiene: 'Contiene',
  igual: 'Igual a',
  diferente: 'Diferente de',
  mayor: 'Mayor que',
  menor: 'Menor que',
  mayorIgual: 'Mayor o igual que',
  menorIgual: 'Menor o igual que',
  empiezaCon: 'Empieza con',
  terminaCon: 'Termina con',
  entre: 'Entre',
  en: 'En',
  noEn: 'No en'
};

// Operadores por defecto según el tipo de campo
export const OPERADORES_POR_TIPO: Record<TipoCampoBusqueda, OperadorBusqueda[]> = {
  texto: ['contiene', 'igual', 'diferente', 'empiezaCon', 'terminaCon'],
  numero: ['igual', 'diferente', 'mayor', 'menor', 'mayorIgual', 'menorIgual', 'entre'],
  fecha: ['igual', 'diferente', 'mayor', 'menor', 'mayorIgual', 'menorIgual', 'entre'],
  select: ['igual', 'diferente', 'en', 'noEn'],
  multiselect: ['en', 'noEn'],
  booleano: ['igual'],
  rango: ['entre', 'mayor', 'menor']
};

// Función para aplicar filtros a un array de datos
export function aplicarFiltros<T>(datos: T[], filtros: FiltroBusqueda<T>[]): T[] {
  if (!filtros.length) return datos;

  return datos.filter(item => {
    return filtros.every(filtro => {
      const valorCampo = item[filtro.campo];
      return evaluarFiltro(valorCampo, filtro.operador, filtro.valor);
    });
  });
}

// Función para evaluar un filtro individual
export function evaluarFiltro(valorCampo: any, operador: OperadorBusqueda, valorFiltro: any): boolean {
  // Manejar valores nulos/undefined
  if (valorCampo == null && valorFiltro != null) return false;
  if (valorCampo != null && valorFiltro == null) return operador === 'diferente';
  if (valorCampo == null && valorFiltro == null) return operador === 'igual';

  // Convertir a string para comparaciones de texto
  const valorCampoStr = String(valorCampo).toLowerCase();
  const valorFiltroStr = String(valorFiltro).toLowerCase();

  switch (operador) {
    case 'contiene':
      return valorCampoStr.includes(valorFiltroStr);
    
    case 'igual':
      return valorCampo === valorFiltro;
    
    case 'diferente':
      return valorCampo !== valorFiltro;
    
    case 'mayor':
      return valorCampo > valorFiltro;
    
    case 'menor':
      return valorCampo < valorFiltro;
    
    case 'mayorIgual':
      return valorCampo >= valorFiltro;
    
    case 'menorIgual':
      return valorCampo <= valorFiltro;
    
    case 'empiezaCon':
      return valorCampoStr.startsWith(valorFiltroStr);
    
    case 'terminaCon':
      return valorCampoStr.endsWith(valorFiltroStr);
    
    case 'entre':
      if (!Array.isArray(valorFiltro) || valorFiltro.length !== 2) return false;
      return valorCampo >= valorFiltro[0] && valorCampo <= valorFiltro[1];
    
    case 'en':
      if (!Array.isArray(valorFiltro)) return false;
      return valorFiltro.includes(valorCampo);
    
    case 'noEn':
      if (!Array.isArray(valorFiltro)) return true;
      return !valorFiltro.includes(valorCampo);
    
    default:
      return true;
  }
}

// Función para generar etiqueta legible de un filtro
export function generarEtiquetaFiltro<T>(filtro: FiltroBusqueda<T>, etiquetaCampo: string): string {
  const operadorTexto = ETIQUETAS_OPERADORES[filtro.operador];
  
  let valorTexto: string;
  
  if (Array.isArray(filtro.valor)) {
    if (filtro.operador === 'entre') {
      valorTexto = `${filtro.valor[0]} y ${filtro.valor[1]}`;
    } else {
      valorTexto = filtro.valor.join(', ');
    }
  } else {
    valorTexto = String(filtro.valor);
  }
  
  return `${etiquetaCampo} ${operadorTexto} ${valorTexto}`;
}

// Función para validar un filtro
export function validarFiltro<T>(filtro: FiltroBusqueda<T>): string | null {
  if (!filtro.campo) return 'Campo requerido';
  if (!filtro.operador) return 'Operador requerido';
  
  if (filtro.operador === 'entre') {
    if (!Array.isArray(filtro.valor) || filtro.valor.length !== 2) {
      return 'Se requieren dos valores para el operador "entre"';
    }
    if (filtro.valor[0] >= filtro.valor[1]) {
      return 'El primer valor debe ser menor que el segundo';
    }
  } else if (['en', 'noEn'].includes(filtro.operador)) {
    if (!Array.isArray(filtro.valor) || filtro.valor.length === 0) {
      return 'Se requiere al menos un valor';
    }
  } else {
    if (filtro.valor == null || filtro.valor === '') {
      return 'Valor requerido';
    }
  }
  
  return null;
}

// Función para limpiar filtros inválidos
export function limpiarFiltrosInvalidos<T>(filtros: FiltroBusqueda<T>[]): FiltroBusqueda<T>[] {
  return filtros.filter(filtro => validarFiltro(filtro) === null);
}

// Función para convertir filtros a query string (para URLs)
export function filtrosAQueryString<T>(filtros: FiltroBusqueda<T>[]): string {
  const params = new URLSearchParams();
  
  filtros.forEach((filtro, index) => {
    params.set(`filtro_${index}_campo`, String(filtro.campo));
    params.set(`filtro_${index}_operador`, filtro.operador);
    params.set(`filtro_${index}_valor`, JSON.stringify(filtro.valor));
  });
  
  return params.toString();
}

// Función para convertir query string a filtros
export function queryStringAFiltros<T>(queryString: string): FiltroBusqueda<T>[] {
  const params = new URLSearchParams(queryString);
  const filtros: FiltroBusqueda<T>[] = [];
  
  let index = 0;
  while (params.has(`filtro_${index}_campo`)) {
    try {
      const campo = params.get(`filtro_${index}_campo`) as keyof T;
      const operador = params.get(`filtro_${index}_operador`) as OperadorBusqueda;
      const valorStr = params.get(`filtro_${index}_valor`);
      
      if (campo && operador && valorStr) {
        const valor = JSON.parse(valorStr);
        filtros.push({ campo, operador, valor });
      }
    } catch (error) {
      console.warn(`Error parsing filter ${index}:`, error);
    }
    index++;
  }
  
  return filtros;
}

// Función para obtener valores únicos de un campo en un array de datos
export function obtenerValoresUnicos<T>(datos: T[], campo: keyof T): Array<{ valor: any; etiqueta: string }> {
  const valoresUnicos = new Set();
  
  datos.forEach(item => {
    const valor = item[campo];
    if (valor != null) {
      valoresUnicos.add(valor);
    }
  });
  
  return Array.from(valoresUnicos).map(valor => ({
    valor,
    etiqueta: String(valor)
  })).sort((a, b) => a.etiqueta.localeCompare(b.etiqueta));
}

// Función para generar configuración de búsqueda automática basada en datos
export function generarConfiguracionBusquedaAutomatica<T>(
  datos: T[], 
  excluirCampos: (keyof T)[] = []
): ConfiguracionCampoBusqueda<T>[] {
  if (!datos.length) return [];
  
  const primerItem = datos[0];
  const configuracion: ConfiguracionCampoBusqueda<T>[] = [];
  
  Object.keys(primerItem as object).forEach(key => {
    const campo = key as keyof T;
    
    if (excluirCampos.includes(campo)) return;
    
    const valor = primerItem[campo];
    let tipo: TipoCampoBusqueda = 'texto';
    
    // Inferir tipo basado en el valor
    if (typeof valor === 'number') {
      tipo = 'numero';
    } else if (typeof valor === 'boolean') {
      tipo = 'booleano';
    } else if (valor instanceof Date) {
      tipo = 'fecha';
    } else if (typeof valor === 'string') {
      // Verificar si es una fecha en string
      if (!isNaN(Date.parse(valor))) {
        tipo = 'fecha';
      } else {
        tipo = 'texto';
      }
    }
    
    // Obtener valores únicos para campos que podrían ser select
    const valoresUnicos = obtenerValoresUnicos(datos, campo);
    
    // Si hay pocos valores únicos, convertir a select
    if (valoresUnicos.length <= 10 && valoresUnicos.length > 1 && tipo === 'texto') {
      tipo = 'select';
    }
    
    configuracion.push({
      campo,
      etiqueta: String(campo).charAt(0).toUpperCase() + String(campo).slice(1),
      tipo,
      opciones: tipo === 'select' ? valoresUnicos : undefined,
      placeholder: `Buscar por ${String(campo).toLowerCase()}...`
    });
  });
  
  return configuracion;
} 