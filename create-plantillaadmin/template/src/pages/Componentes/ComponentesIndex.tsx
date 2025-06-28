import { Link } from 'react-router-dom'
import { 
  FaKeyboard, 
  FaAlignLeft, 
  FaCheckSquare, 
  FaCaretDown, 
  FaToggleOn, 
  FaFile, 
  FaClock, 
  FaSearch,
  FaArrowRight,
  FaCode,
  FaEye,
  FaBox
} from 'react-icons/fa'

interface ComponenteInfo {
  nombre: string
  descripcion: string
  icono: React.ElementType
  ruta: string
  caracteristicas: string[]
  casosUso: string[]
}

export default function ComponentesIndex() {
  const componentes: ComponenteInfo[] = [
    {
      nombre: "HookFormInput",
      descripcion: "Componente de input reutilizable integrado con React Hook Form. Soporta múltiples tipos de input, validaciones y diferentes tamaños.",
      icono: FaKeyboard,
      ruta: "/componentes/input-examples",
      caracteristicas: [
        "Múltiples tipos (text, email, password, number, etc.)",
        "Validaciones integradas",
        "Soporte para tooltips",
        "Diferentes tamaños de columna (1-12)",
        "Estados deshabilitado y error"
      ],
      casosUso: [
        "Formularios de registro y login",
        "Información personal y contacto",
        "Datos profesionales",
        "Campos de búsqueda",
        "Configuraciones numéricas"
      ]
    },
    {
      nombre: "HookFormTextarea",
      descripcion: "Área de texto multilínea con integración completa a React Hook Form. Ideal para contenido extenso y comentarios.",
      icono: FaAlignLeft,
      ruta: "/componentes/textarea-examples",
      caracteristicas: [
        "Altura configurable (rows)",
        "Redimensionamiento automático",
        "Validaciones de longitud",
        "Soporte para tooltips",
        "Diferentes anchos de columna"
      ],
      casosUso: [
        "Comentarios y feedback",
        "Descripciones de productos",
        "Contenido editorial",
        "Mensajes y comunicación",
        "Documentación técnica"
      ]
    },
    {
      nombre: "HookFormCheckbox",
      descripcion: "Componente de checkbox con diseño moderno y funcionalidad completa. Perfecto para selecciones múltiples y configuraciones.",
      icono: FaCheckSquare,
      ruta: "/componentes/checkbox-examples",
      caracteristicas: [
        "Diseño moderno y accesible",
        "Estados checked/unchecked",
        "Integración con formularios",
        "Diferentes tamaños de columna",
        "Agrupación lógica"
      ],
      casosUso: [
        "Términos y condiciones",
        "Preferencias de usuario",
        "Configuración de privacidad",
        "Selección de características",
        "Filtros y opciones"
      ]
    },
    {
      nombre: "HookFormSelect",
      descripcion: "Select dropdown tradicional con opciones predefinidas. Incluye soporte para iconos y diferentes estilos visuales.",
      icono: FaCaretDown,
      ruta: "/componentes/select-examples",
      caracteristicas: [
        "Opciones predefinidas",
        "Soporte para iconos",
        "Validaciones integradas",
        "Estados controlados",
        "Diferentes tamaños"
      ],
      casosUso: [
        "Selección de países/ciudades",
        "Categorías y clasificaciones",
        "Estados y prioridades",
        "Configuraciones de usuario",
        "Filtros de búsqueda"
      ]
    },
    {
      nombre: "HookFormSwitcher",
      descripcion: "Interruptor toggle moderno para configuraciones booleanas. Ideal para activar/desactivar funcionalidades.",
      icono: FaToggleOn,
      ruta: "/componentes/switcher-examples",
      caracteristicas: [
        "Diseño toggle moderno",
        "Estados on/off claros",
        "Animaciones suaves",
        "Diferentes tamaños",
        "Estados deshabilitado"
      ],
      casosUso: [
        "Configuraciones de privacidad",
        "Notificaciones",
        "Configuración de aplicación",
        "Preferencias de usuario",
        "Configuraciones de rendimiento"
      ]
    },
    {
      nombre: "HookFormFile",
      descripcion: "Selector de archivos con soporte para múltiples tipos y selección múltiple. Incluye validaciones de tipo y tamaño.",
      icono: FaFile,
      ruta: "/componentes/file-examples",
      caracteristicas: [
        "Selección múltiple",
        "Filtros por tipo de archivo",
        "Vista previa de archivos",
        "Validaciones de tamaño",
        "Soporte para drag & drop"
      ],
      casosUso: [
        "Subida de documentos",
        "Galerías de imágenes",
        "Archivos de configuración",
        "Contenido multimedia",
        "Backups y archivos técnicos"
      ]
    },
    {
      nombre: "HookFormTimeSelector",
      descripcion: "Selector de tiempo con formato 24 horas. Perfecto para horarios, citas y programación de eventos.",
      icono: FaClock,
      ruta: "/componentes/time-selector-examples",
      caracteristicas: [
        "Formato 24 horas",
        "Interfaz intuitiva",
        "Validaciones de tiempo",
        "Diferentes tamaños",
        "Estados deshabilitado"
      ],
      casosUso: [
        "Horarios de trabajo",
        "Programación de eventos",
        "Citas médicas",
        "Horarios de transporte",
        "Configuración de servicios"
      ]
    },
    {
      nombre: "SelectBusquedaFormHook",
      descripcion: "Select con funcionalidad de búsqueda en tiempo real. Ideal para listas extensas con filtrado dinámico.",
      icono: FaSearch,
      ruta: "/componentes/select-busqueda-examples",
      caracteristicas: [
        "Búsqueda en tiempo real",
        "Filtrado dinámico",
        "Listas extensas",
        "Soporte para iconos",
        "Resultados destacados"
      ],
      casosUso: [
        "Selección de empleados",
        "Búsqueda de productos",
        "Gestión de inventario",
        "Directorios extensos",
        "Bases de datos grandes"
      ]
    },
    {
      nombre: "Contenedor",
      descripcion: "Componente flexible y responsive para organizar contenido con múltiples opciones de layout, espaciado y personalización.",
      icono: FaBox,
      ruta: "/componentes/contenedor-examples",
      caracteristicas: [
        "Múltiples layouts (Grid, Flex, Block)",
        "Espaciado configurable (6 niveles)",
        "Padding personalizable (5 niveles)",
        "Columnas flexibles (1, 2, 3, 4, 6, 12)",
        "Accesibilidad integrada"
      ],
      casosUso: [
        "Layouts de páginas",
        "Galerías de productos",
        "Dashboards de métricas",
        "Formularios complejos",
        "Organización de contenido"
      ]
    }
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Biblioteca de Componentes React Hook Form
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Colección completa de componentes reutilizables integrados con React Hook Form. 
            Cada componente incluye ejemplos prácticos, casos de uso reales y documentación visual.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{componentes.length}</div>
            <div className="text-gray-600">Componentes</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Hook Form</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Ejemplos</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">TypeScript</div>
            <div className="text-gray-600">Tipado</div>
          </div>
        </div>

        {/* Grid de componentes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {componentes.map((componente, index) => {
            const IconoComponente = componente.icono
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Header del componente */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <IconoComponente className="text-2xl mr-3" />
                    <h2 className="text-2xl font-bold">{componente.nombre}</h2>
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    {componente.descripcion}
                  </p>
                </div>

                {/* Contenido del componente */}
                <div className="p-6">
                  {/* Características */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <FaCode className="mr-2 text-blue-600" />
                      Características
                    </h3>
                    <ul className="space-y-2">
                      {componente.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{caracteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Casos de uso */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <FaEye className="mr-2 text-green-600" />
                      Casos de Uso
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {componente.casosUso.map((caso, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {caso}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <Link
                    to={componente.ruta}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Ver Ejemplos
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer informativo */}
        <div className="mt-12 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Cómo usar estos componentes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Explora los Ejemplos</h3>
              <p className="text-gray-600 text-sm">
                Navega por cada componente para ver todos los casos de uso y configuraciones posibles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Copia el Código</h3>
              <p className="text-gray-600 text-sm">
                Cada ejemplo incluye el código completo que puedes copiar y adaptar a tu proyecto.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Personaliza</h3>
              <p className="text-gray-600 text-sm">
                Modifica los estilos, validaciones y comportamientos según tus necesidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 