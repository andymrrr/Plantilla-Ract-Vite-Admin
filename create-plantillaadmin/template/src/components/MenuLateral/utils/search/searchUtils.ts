// ===== UTILIDADES DE BÚSQUEDA =====

/**
 * Normaliza texto para búsqueda (sin acentos, minúsculas)
 */
export const normalizeSearchText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .trim();
};

/**
 * Verifica si un texto coincide con la búsqueda
 */
export const matchesSearch = (text: string, searchQuery: string): boolean => {
  if (!searchQuery.trim()) return true;
  
  const normalizedText = normalizeSearchText(text);
  const normalizedQuery = normalizeSearchText(searchQuery);
  
  return normalizedText.includes(normalizedQuery);
};

/**
 * Verifica si múltiples textos coinciden con la búsqueda
 */
export const matchesSearchInMultipleFields = (
  fields: string[],
  searchQuery: string
): boolean => {
  if (!searchQuery.trim()) return true;
  
  return fields.some(field => matchesSearch(field, searchQuery));
};

/**
 * Destaca el texto que coincide con la búsqueda
 */
export const highlightSearchMatch = (
  text: string,
  searchQuery: string,
  highlightClass: string = 'font-bold bg-yellow-200 dark:bg-yellow-800'
): string => {
  if (!searchQuery.trim()) return text;
  
  const normalizedQuery = normalizeSearchText(searchQuery);
  const regex = new RegExp(`(${normalizedQuery})`, 'gi');
  
  return text.replace(regex, `<span class="${highlightClass}">$1</span>`);
};

/**
 * Obtiene sugerencias de búsqueda basadas en texto parcial
 */
export const getSearchSuggestions = (
  searchableItems: string[],
  partialQuery: string,
  maxSuggestions: number = 5
): string[] => {
  if (!partialQuery.trim()) return [];
  
  const normalizedQuery = normalizeSearchText(partialQuery);
  
  return searchableItems
    .filter(item => normalizeSearchText(item).includes(normalizedQuery))
    .slice(0, maxSuggestions);
};

/**
 * Calcula la relevancia de un item basado en la búsqueda
 */
export const calculateSearchRelevance = (
  itemText: string,
  searchQuery: string
): number => {
  if (!searchQuery.trim()) return 0;
  
  const normalizedItem = normalizeSearchText(itemText);
  const normalizedQuery = normalizeSearchText(searchQuery);
  
  // Coincidencia exacta
  if (normalizedItem === normalizedQuery) return 100;
  
  // Comienza con la búsqueda
  if (normalizedItem.startsWith(normalizedQuery)) return 80;
  
  // Contiene la búsqueda al inicio de una palabra
  const words = normalizedItem.split(' ');
  if (words.some(word => word.startsWith(normalizedQuery))) return 60;
  
  // Contiene la búsqueda
  if (normalizedItem.includes(normalizedQuery)) return 40;
  
  return 0;
};

/**
 * Ordena items por relevancia de búsqueda
 */
export const sortBySearchRelevance = <T>(
  items: T[],
  searchQuery: string,
  getTextFromItem: (item: T) => string
): T[] => {
  if (!searchQuery.trim()) return items;
  
  return items
    .map(item => ({
      item,
      relevance: calculateSearchRelevance(getTextFromItem(item), searchQuery)
    }))
    .filter(({ relevance }) => relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .map(({ item }) => item);
}; 