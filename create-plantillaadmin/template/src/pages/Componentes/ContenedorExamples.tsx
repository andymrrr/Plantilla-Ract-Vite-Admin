import React from 'react'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import { Contenedor } from '../../components/UI/Contenedor'
import { Tarjeta } from '../../components/UI/Tarjeta'

/**
 * Página de ejemplos del componente Contenedor mejorado
 * Muestra todas las nuevas funcionalidades y opciones disponibles
 */
export default function ContenedorExamples() {
  return (
    <>
      <Breadcrumb pageName="Contenedor - Ejemplos Mejorados" />

      <div className="space-y-8">
        {/* Información introductoria */}
        <Tarjeta
          titulo="🚀 Componente Contenedor Mejorado"
          subtitulo="Nuevas funcionalidades y opciones de personalización"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✨ Nuevas características:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
              <div className="space-y-2">
                <div>✅ <strong>Múltiples layouts</strong>: Grid, Flex y Block</div>
                <div>✅ <strong>Espaciado configurable</strong>: 6 niveles (xs, sm, md, lg, xl, 2xl)</div>
                <div>✅ <strong>Padding personalizable</strong>: 5 niveles (none, sm, md, lg, xl)</div>
                <div>✅ <strong>Columnas flexibles</strong>: 1, 2, 3, 4, 6, 12 columnas</div>
              </div>
              <div className="space-y-2">
                <div>✅ <strong>Accesibilidad integrada</strong>: Atributos ARIA</div>
                <div>✅ <strong>TypeScript completo</strong>: Tipado seguro</div>
                <div>✅ <strong>Ref forwarding</strong>: Optimización de performance</div>
                <div>✅ <strong>Completamente compatible</strong> con el uso anterior</div>
              </div>
            </div>
          </div>
        </Tarjeta>

        {/* Ejemplo básico - Compatible con el uso actual */}
        <Tarjeta titulo="📦 Uso Básico" subtitulo="Compatibilidad con el código existente">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mb-4">
            <p className="text-green-800 dark:text-green-200 text-sm">
              <strong>✅ Compatible:</strong> Este es el uso actual que sigue funcionando sin cambios
            </p>
          </div>
          
          <Contenedor>
            <div className="bg-blue-100 p-4 rounded text-center">Elemento 1</div>
            <div className="bg-green-100 p-4 rounded text-center">Elemento 2</div>
            <div className="bg-yellow-100 p-4 rounded text-center">Elemento 3</div>
          </Contenedor>
        </Tarjeta>

        {/* Diferentes layouts */}
        <Tarjeta titulo="🎨 Diferentes Layouts" subtitulo="Grid, Flex y Block">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Grid Layout (por defecto)</h4>
              <Contenedor layout="grid" columns={3} spacing="md">
                <div className="bg-blue-100 p-4 rounded text-center">Grid 1</div>
                <div className="bg-blue-100 p-4 rounded text-center">Grid 2</div>
                <div className="bg-blue-100 p-4 rounded text-center">Grid 3</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Flex Layout</h4>
              <Contenedor layout="flex" spacing="md" padding="md">
                <div className="bg-green-100 p-4 rounded">Flex 1</div>
                <div className="bg-green-100 p-4 rounded">Flex 2</div>
                <div className="bg-green-100 p-4 rounded">Flex 3</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Block Layout</h4>
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
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Espaciado Extra Small (xs)</h4>
              <Contenedor spacing="xs" columns={4}>
                <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
                <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
                <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
                <div className="bg-red-100 p-2 rounded text-center text-sm">xs</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Espaciado Small (sm)</h4>
              <Contenedor spacing="sm" columns={4}>
                <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
                <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
                <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
                <div className="bg-orange-100 p-2 rounded text-center text-sm">sm</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Espaciado Medium (md) - Por defecto</h4>
              <Contenedor spacing="md" columns={4}>
                <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
                <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
                <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
                <div className="bg-blue-100 p-2 rounded text-center text-sm">md</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Espaciado Large (lg)</h4>
              <Contenedor spacing="lg" columns={4}>
                <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
                <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
                <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
                <div className="bg-green-100 p-2 rounded text-center text-sm">lg</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Espaciado Extra Large (xl)</h4>
              <Contenedor spacing="xl" columns={4}>
                <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
                <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
                <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
                <div className="bg-purple-100 p-2 rounded text-center text-sm">xl</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Espaciado 2XL</h4>
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
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1 Columna</h4>
              <Contenedor columns={1} spacing="md">
                <div className="bg-gray-100 p-4 rounded text-center">Columna única</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2 Columnas</h4>
              <Contenedor columns={2} spacing="md">
                <div className="bg-gray-100 p-4 rounded text-center">Columna 1</div>
                <div className="bg-gray-100 p-4 rounded text-center">Columna 2</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">3 Columnas</h4>
              <Contenedor columns={3} spacing="md">
                <div className="bg-gray-100 p-4 rounded text-center">Col 1</div>
                <div className="bg-gray-100 p-4 rounded text-center">Col 2</div>
                <div className="bg-gray-100 p-4 rounded text-center">Col 3</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">4 Columnas</h4>
              <Contenedor columns={4} spacing="md">
                <div className="bg-gray-100 p-4 rounded text-center">C1</div>
                <div className="bg-gray-100 p-4 rounded text-center">C2</div>
                <div className="bg-gray-100 p-4 rounded text-center">C3</div>
                <div className="bg-gray-100 p-4 rounded text-center">C4</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">6 Columnas</h4>
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
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">12 Columnas (por defecto)</h4>
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
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Sin Padding (none)</h4>
              <Contenedor padding="none" columns={3} className="border-2 border-dashed border-gray-300">
                <div className="bg-red-100 p-4 rounded">Sin padding</div>
                <div className="bg-red-100 p-4 rounded">Sin padding</div>
                <div className="bg-red-100 p-4 rounded">Sin padding</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Padding Small (sm)</h4>
              <Contenedor padding="sm" columns={3} className="border-2 border-dashed border-gray-300">
                <div className="bg-orange-100 p-4 rounded">Padding sm</div>
                <div className="bg-orange-100 p-4 rounded">Padding sm</div>
                <div className="bg-orange-100 p-4 rounded">Padding sm</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Padding Medium (md)</h4>
              <Contenedor padding="md" columns={3} className="border-2 border-dashed border-gray-300">
                <div className="bg-blue-100 p-4 rounded">Padding md</div>
                <div className="bg-blue-100 p-4 rounded">Padding md</div>
                <div className="bg-blue-100 p-4 rounded">Padding md</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Padding Large (lg)</h4>
              <Contenedor padding="lg" columns={3} className="border-2 border-dashed border-gray-300">
                <div className="bg-green-100 p-4 rounded">Padding lg</div>
                <div className="bg-green-100 p-4 rounded">Padding lg</div>
                <div className="bg-green-100 p-4 rounded">Padding lg</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Padding Extra Large (xl)</h4>
              <Contenedor padding="xl" columns={3} className="border-2 border-dashed border-gray-300">
                <div className="bg-purple-100 p-4 rounded">Padding xl</div>
                <div className="bg-purple-100 p-4 rounded">Padding xl</div>
                <div className="bg-purple-100 p-4 rounded">Padding xl</div>
              </Contenedor>
            </div>
          </div>
        </Tarjeta>

        {/* Opciones avanzadas */}
        <Tarjeta titulo="⚙️ Opciones Avanzadas" subtitulo="Centrado, altura completa, accesibilidad, etc.">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Contenedor Centrado</h4>
              <Contenedor center layout="flex" spacing="md" className="h-32 border-2 border-dashed border-gray-300">
                <div className="bg-blue-100 p-4 rounded">Centrado</div>
                <div className="bg-blue-100 p-4 rounded">Centrado</div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Con Clases Personalizadas</h4>
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
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Con Accesibilidad</h4>
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
              <p id="desc-accesibilidad" className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Este contenedor incluye atributos de accesibilidad para lectores de pantalla.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Altura Completa</h4>
              <Contenedor 
                fullHeight 
                layout="flex" 
                spacing="md" 
                padding="lg"
                className="border-2 border-dashed border-gray-300 min-h-32"
              >
                <div className="bg-indigo-100 p-4 rounded">Altura completa 1</div>
                <div className="bg-indigo-100 p-4 rounded">Altura completa 2</div>
              </Contenedor>
            </div>
          </div>
        </Tarjeta>

        {/* Casos de uso reales */}
        <Tarjeta titulo="💼 Casos de Uso Reales" subtitulo="Ejemplos prácticos de aplicación">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Dashboard de Métricas</h4>
              <Contenedor columns={4} spacing="lg" padding="md">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">Usuarios</h3>
                  <p className="text-3xl font-bold">1,234</p>
                  <p className="text-blue-100">+12% este mes</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">Ventas</h3>
                  <p className="text-3xl font-bold">$45,678</p>
                  <p className="text-green-100">+8% este mes</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">Pedidos</h3>
                  <p className="text-3xl font-bold">567</p>
                  <p className="text-purple-100">+15% este mes</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">Productos</h3>
                  <p className="text-3xl font-bold">89</p>
                  <p className="text-orange-100">+3% este mes</p>
                </div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Galería de Productos</h4>
              <Contenedor columns={3} spacing="md" padding="lg">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-4">
                    <h4 className="font-semibold">Producto 1</h4>
                    <p className="text-gray-600 text-sm">Descripción del producto</p>
                    <p className="text-blue-600 font-bold mt-2">$99.99</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-4">
                    <h4 className="font-semibold">Producto 2</h4>
                    <p className="text-gray-600 text-sm">Descripción del producto</p>
                    <p className="text-blue-600 font-bold mt-2">$149.99</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-4">
                    <h4 className="font-semibold">Producto 3</h4>
                    <p className="text-gray-600 text-sm">Descripción del producto</p>
                    <p className="text-blue-600 font-bold mt-2">$199.99</p>
                  </div>
                </div>
              </Contenedor>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Formulario de Contacto</h4>
              <Contenedor layout="block" spacing="md" padding="lg" className="bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-md h-24"></textarea>
                </div>
                <div className="flex justify-end">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Enviar
                  </button>
                </div>
              </Contenedor>
            </div>
          </div>
        </Tarjeta>

        {/* Código de ejemplo */}
        <Tarjeta titulo="💻 Código de Ejemplo" subtitulo="Cómo usar el componente mejorado">
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`// Uso básico - Compatible con el código actual
<Contenedor>
  <div>Contenido</div>
</Contenedor>

// Layout Grid con 3 columnas
<Contenedor layout="grid" columns={3} spacing="lg">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</Contenedor>

// Layout Flex centrado
<Contenedor 
  layout="flex" 
  spacing="md" 
  padding="lg"
  center
>
  <div>Elemento centrado 1</div>
  <div>Elemento centrado 2</div>
</Contenedor>

// Con padding y clases personalizadas
<Contenedor 
  columns={4} 
  spacing="md" 
  padding="lg"
  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
>
  <div className="bg-white p-4 rounded shadow">Elemento 1</div>
  <div className="bg-white p-4 rounded shadow">Elemento 2</div>
  <div className="bg-white p-4 rounded shadow">Elemento 3</div>
  <div className="bg-white p-4 rounded shadow">Elemento 4</div>
</Contenedor>

// Con accesibilidad
<Contenedor 
  columns={2} 
  spacing="md"
  aria-label="Sección de productos"
  aria-describedby="desc-productos"
  id="productos-contenedor"
>
  <div>Producto 1</div>
  <div>Producto 2</div>
</Contenedor>`}
            </pre>
          </div>
        </Tarjeta>
      </div>
    </>
  )
} 