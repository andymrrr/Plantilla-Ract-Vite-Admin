import React from 'react'
import { Contenedor } from './Contenedor'
import { Tarjeta } from '../Tarjeta'

/**
 * Ejemplos de uso del componente Contenedor
 * Muestra las diferentes variantes y opciones disponibles
 */
export const ContenedorExamples: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Ejemplo básico - Compatible con el uso actual */}
      <Tarjeta titulo="📦 Uso Básico" subtitulo="Compatibilidad con el uso actual">
        <Contenedor>
          <div className="bg-blue-100 p-4 rounded">Elemento 1</div>
          <div className="bg-green-100 p-4 rounded">Elemento 2</div>
          <div className="bg-yellow-100 p-4 rounded">Elemento 3</div>
        </Contenedor>
      </Tarjeta>

      {/* Diferentes layouts */}
      <Tarjeta titulo="🎨 Diferentes Layouts" subtitulo="Grid, Flex y Block">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Grid Layout (por defecto)</h4>
            <Contenedor layout="grid" columns={3} spacing="md">
              <div className="bg-blue-100 p-4 rounded text-center">Grid 1</div>
              <div className="bg-blue-100 p-4 rounded text-center">Grid 2</div>
              <div className="bg-blue-100 p-4 rounded text-center">Grid 3</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Flex Layout</h4>
            <Contenedor layout="flex" spacing="md" padding="md">
              <div className="bg-green-100 p-4 rounded">Flex 1</div>
              <div className="bg-green-100 p-4 rounded">Flex 2</div>
              <div className="bg-green-100 p-4 rounded">Flex 3</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Block Layout</h4>
            <Contenedor layout="block" spacing="md" padding="md">
              <div className="bg-yellow-100 p-4 rounded">Block 1</div>
              <div className="bg-yellow-100 p-4 rounded">Block 2</div>
              <div className="bg-yellow-100 p-4 rounded">Block 3</div>
            </Contenedor>
          </div>
        </div>
      </Tarjeta>

      {/* Diferentes espaciados */}
      <Tarjeta titulo="📏 Diferentes Espaciados" subtitulo="xs, sm, md, lg, xl, 2xl">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Espaciado Extra Small (xs)</h4>
            <Contenedor spacing="xs" columns={4}>
              <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
              <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
              <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
              <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Espaciado Small (sm)</h4>
            <Contenedor spacing="sm" columns={4}>
              <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
              <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
              <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
              <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Espaciado Medium (md) - Por defecto</h4>
            <Contenedor spacing="md" columns={4}>
              <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
              <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
              <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
              <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Espaciado Large (lg)</h4>
            <Contenedor spacing="lg" columns={4}>
              <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
              <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
              <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
              <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Espaciado Extra Large (xl)</h4>
            <Contenedor spacing="xl" columns={4}>
              <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
              <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
              <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
              <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Espaciado 2XL</h4>
            <Contenedor spacing="2xl" columns={4}>
              <div className="bg-indigo-100 p-2 rounded text-center text-sm">2xl</div>
              <div className="bg-indigo-100 p-2 rounded text-center text-sm">2xl</div>
              <div className="bg-indigo-100 p-2 rounded text-center text-sm">2xl</div>
              <div className="bg-indigo-100 p-2 rounded text-center text-sm">2xl</div>
            </Contenedor>
          </div>
        </div>
      </Tarjeta>

      {/* Diferentes columnas */}
      <Tarjeta titulo="📊 Diferentes Columnas" subtitulo="1, 2, 3, 4, 6, 12 columnas">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">1 Columna</h4>
            <Contenedor columns={1} spacing="md">
              <div className="bg-gray-100 p-4 rounded text-center">Columna única</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">2 Columnas</h4>
            <Contenedor columns={2} spacing="md">
              <div className="bg-gray-100 p-4 rounded text-center">Columna 1</div>
              <div className="bg-gray-100 p-4 rounded text-center">Columna 2</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">3 Columnas</h4>
            <Contenedor columns={3} spacing="md">
              <div className="bg-gray-100 p-4 rounded text-center">Col 1</div>
              <div className="bg-gray-100 p-4 rounded text-center">Col 2</div>
              <div className="bg-gray-100 p-4 rounded text-center">Col 3</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">4 Columnas</h4>
            <Contenedor columns={4} spacing="md">
              <div className="bg-gray-100 p-4 rounded text-center">C1</div>
              <div className="bg-gray-100 p-4 rounded text-center">C2</div>
              <div className="bg-gray-100 p-4 rounded text-center">C3</div>
              <div className="bg-gray-100 p-4 rounded text-center">C4</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">6 Columnas</h4>
            <Contenedor columns={6} spacing="md">
              <div className="bg-gray-100 p-2 rounded text-center text-sm">1</div>
              <div className="bg-gray-100 p-2 rounded text-center text-sm">2</div>
              <div className="bg-gray-100 p-2 rounded text-center text-sm">3</div>
              <div className="bg-gray-100 p-2 rounded text-center text-sm">4</div>
              <div className="bg-gray-100 p-2 rounded text-center text-sm">5</div>
              <div className="bg-gray-100 p-2 rounded text-center text-sm">6</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">12 Columnas (por defecto)</h4>
            <Contenedor columns={12} spacing="md">
              <div className="bg-gray-100 p-1 rounded text-center text-xs">1</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">2</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">3</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">4</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">5</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">6</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">7</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">8</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">9</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">10</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">11</div>
              <div className="bg-gray-100 p-1 rounded text-center text-xs">12</div>
            </Contenedor>
          </div>
        </div>
      </Tarjeta>

      {/* Diferentes paddings */}
      <Tarjeta titulo="🎯 Diferentes Paddings" subtitulo="none, sm, md, lg, xl">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Sin Padding (none)</h4>
            <Contenedor padding="none" columns={3} className="border-2 border-dashed border-gray-300">
              <div className="bg-red-100 p-4 rounded">Sin padding</div>
              <div className="bg-red-100 p-4 rounded">Sin padding</div>
              <div className="bg-red-100 p-4 rounded">Sin padding</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Padding Small (sm)</h4>
            <Contenedor padding="sm" columns={3} className="border-2 border-dashed border-gray-300">
              <div className="bg-orange-100 p-4 rounded">Padding sm</div>
              <div className="bg-orange-100 p-4 rounded">Padding sm</div>
              <div className="bg-orange-100 p-4 rounded">Padding sm</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Padding Medium (md)</h4>
            <Contenedor padding="md" columns={3} className="border-2 border-dashed border-gray-300">
              <div className="bg-blue-100 p-4 rounded">Padding md</div>
              <div className="bg-blue-100 p-4 rounded">Padding md</div>
              <div className="bg-blue-100 p-4 rounded">Padding md</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Padding Large (lg)</h4>
            <Contenedor padding="lg" columns={3} className="border-2 border-dashed border-gray-300">
              <div className="bg-green-100 p-4 rounded">Padding lg</div>
              <div className="bg-green-100 p-4 rounded">Padding lg</div>
              <div className="bg-green-100 p-4 rounded">Padding lg</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Padding Extra Large (xl)</h4>
            <Contenedor padding="xl" columns={3} className="border-2 border-dashed border-gray-300">
              <div className="bg-purple-100 p-4 rounded">Padding xl</div>
              <div className="bg-purple-100 p-4 rounded">Padding xl</div>
              <div className="bg-purple-100 p-4 rounded">Padding xl</div>
            </Contenedor>
          </div>
        </div>
      </Tarjeta>

      {/* Opciones avanzadas */}
      <Tarjeta titulo="⚙️ Opciones Avanzadas" subtitulo="Centrado, altura completa, etc.">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Contenedor Centrado</h4>
            <Contenedor center layout="flex" spacing="md" className="h-32 border-2 border-dashed border-gray-300">
              <div className="bg-blue-100 p-4 rounded">Centrado</div>
              <div className="bg-blue-100 p-4 rounded">Centrado</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Con Clases Personalizadas</h4>
            <Contenedor 
              columns={3} 
              spacing="lg" 
              padding="md"
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-lg"
            >
              <div className="bg-white p-4 rounded shadow">Personalizado 1</div>
              <div className="bg-white p-4 rounded shadow">Personalizado 2</div>
              <div className="bg-white p-4 rounded shadow">Personalizado 3</div>
            </Contenedor>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Con Accesibilidad</h4>
            <Contenedor 
              columns={2} 
              spacing="md"
              aria-label="Sección de ejemplo con accesibilidad"
              aria-describedby="desc-accesibilidad"
              id="contenedor-accesible"
            >
              <div className="bg-green-100 p-4 rounded">Elemento accesible 1</div>
              <div className="bg-green-100 p-4 rounded">Elemento accesible 2</div>
            </Contenedor>
            <p id="desc-accesibilidad" className="text-sm text-gray-600 mt-2">
              Este contenedor incluye atributos de accesibilidad para lectores de pantalla.
            </p>
          </div>
        </div>
      </Tarjeta>
    </div>
  )
} 