import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { HookFormSelectBusqueda } from '../../components/FormulariosControles/HookFormSelectBusqueda'
import { FaUser, FaGlobe, FaBuilding, FaCity, FaBook, FaTag } from 'react-icons/fa'
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import Tarjeta from "../../components/UI/Tarjeta"
import { Contenedor } from "../../components/UI/Contenedor"

interface FormValues {
  [key: string]: string
}

// Opciones extensas para demostrar la funcionalidad de búsqueda
const opcionesPaises = [
  { value: 'ar', label: 'Argentina' },
  { value: 'bo', label: 'Bolivia' },
  { value: 'br', label: 'Brasil' },
  { value: 'cl', label: 'Chile' },
  { value: 'co', label: 'Colombia' },
  { value: 'cr', label: 'Costa Rica' },
  { value: 'cu', label: 'Cuba' },
  { value: 'do', label: 'República Dominicana' },
  { value: 'ec', label: 'Ecuador' },
  { value: 'sv', label: 'El Salvador' },
  { value: 'es', label: 'España' },
  { value: 'gt', label: 'Guatemala' },
  { value: 'hn', label: 'Honduras' },
  { value: 'mx', label: 'México' },
  { value: 'ni', label: 'Nicaragua' },
  { value: 'pa', label: 'Panamá' },
  { value: 'py', label: 'Paraguay' },
  { value: 'pe', label: 'Perú' },
  { value: 'pr', label: 'Puerto Rico' },
  { value: 'uy', label: 'Uruguay' },
  { value: 've', label: 'Venezuela' },
]

const opcionesCiudades = [
  { value: 'madrid', label: 'Madrid, España' },
  { value: 'barcelona', label: 'Barcelona, España' },
  { value: 'valencia', label: 'Valencia, España' },
  { value: 'sevilla', label: 'Sevilla, España' },
  { value: 'bilbao', label: 'Bilbao, España' },
  { value: 'mexico_city', label: 'Ciudad de México, México' },
  { value: 'guadalajara', label: 'Guadalajara, México' },
  { value: 'monterrey', label: 'Monterrey, México' },
  { value: 'puebla', label: 'Puebla, México' },
  { value: 'tijuana', label: 'Tijuana, México' },
  { value: 'buenos_aires', label: 'Buenos Aires, Argentina' },
  { value: 'cordoba', label: 'Córdoba, Argentina' },
  { value: 'rosario', label: 'Rosario, Argentina' },
  { value: 'mendoza', label: 'Mendoza, Argentina' },
  { value: 'bogota', label: 'Bogotá, Colombia' },
  { value: 'medellin', label: 'Medellín, Colombia' },
  { value: 'cali', label: 'Cali, Colombia' },
  { value: 'barranquilla', label: 'Barranquilla, Colombia' },
  { value: 'lima', label: 'Lima, Perú' },
  { value: 'arequipa', label: 'Arequipa, Perú' },
  { value: 'trujillo', label: 'Trujillo, Perú' },
  { value: 'santiago', label: 'Santiago, Chile' },
  { value: 'valparaiso', label: 'Valparaíso, Chile' },
  { value: 'concepcion', label: 'Concepción, Chile' },
]

const opcionesUsuarios = [
  { value: 'juan_perez', label: 'Juan Pérez - Desarrollador Frontend' },
  { value: 'maria_garcia', label: 'María García - Diseñadora UX/UI' },
  { value: 'carlos_rodriguez', label: 'Carlos Rodríguez - Backend Developer' },
  { value: 'ana_martinez', label: 'Ana Martínez - Product Manager' },
  { value: 'luis_gonzalez', label: 'Luis González - DevOps Engineer' },
  { value: 'sofia_lopez', label: 'Sofía López - QA Tester' },
  { value: 'diego_hernandez', label: 'Diego Hernández - Data Scientist' },
  { value: 'laura_jimenez', label: 'Laura Jiménez - Marketing Manager' },
  { value: 'miguel_ruiz', label: 'Miguel Ruiz - Sales Representative' },
  { value: 'carmen_morales', label: 'Carmen Morales - HR Specialist' },
  { value: 'antonio_vargas', label: 'Antonio Vargas - Financial Analyst' },
  { value: 'patricia_castro', label: 'Patricia Castro - Content Writer' },
  { value: 'fernando_ortega', label: 'Fernando Ortega - System Administrator' },
  { value: 'isabel_ramos', label: 'Isabel Ramos - Customer Support' },
  { value: 'roberto_flores', label: 'Roberto Flores - Business Analyst' },
]

const opcionesProductos = [
  { value: 'laptop_dell', label: 'Laptop Dell XPS 13 - Ultrabook Premium' },
  { value: 'laptop_hp', label: 'Laptop HP Pavilion 15 - Uso General' },
  { value: 'laptop_lenovo', label: 'Laptop Lenovo ThinkPad - Empresarial' },
  { value: 'laptop_asus', label: 'Laptop ASUS ROG - Gaming' },
  { value: 'laptop_acer', label: 'Laptop Acer Aspire - Económica' },
  { value: 'monitor_samsung', label: 'Monitor Samsung 27" 4K - Profesional' },
  { value: 'monitor_lg', label: 'Monitor LG UltraWide - Productividad' },
  { value: 'monitor_dell', label: 'Monitor Dell 24" Full HD - Oficina' },
  { value: 'teclado_logitech', label: 'Teclado Logitech MX Keys - Inalámbrico' },
  { value: 'teclado_corsair', label: 'Teclado Corsair K95 - Gaming Mecánico' },
  { value: 'mouse_logitech', label: 'Mouse Logitech MX Master 3 - Ergonómico' },
  { value: 'mouse_razer', label: 'Mouse Razer DeathAdder - Gaming' },
  { value: 'auriculares_sony', label: 'Auriculares Sony WH-1000XM4 - Noise Cancelling' },
  { value: 'auriculares_bose', label: 'Auriculares Bose QuietComfort - Premium' },
  { value: 'webcam_logitech', label: 'Webcam Logitech C920 - Full HD' },
]

const opcionesCategorias = [
  { value: 'tecnologia', label: 'Tecnología e Informática' },
  { value: 'salud', label: 'Salud y Medicina' },
  { value: 'educacion', label: 'Educación y Formación' },
  { value: 'finanzas', label: 'Finanzas y Contabilidad' },
  { value: 'marketing', label: 'Marketing y Publicidad' },
  { value: 'ventas', label: 'Ventas y Comercio' },
  { value: 'recursos_humanos', label: 'Recursos Humanos' },
  { value: 'ingenieria', label: 'Ingeniería y Construcción' },
  { value: 'diseno', label: 'Diseño y Creatividad' },
  { value: 'legal', label: 'Legal y Jurídico' },
  { value: 'logistica', label: 'Logística y Transporte' },
  { value: 'turismo', label: 'Turismo y Hospitalidad' },
  { value: 'agricultura', label: 'Agricultura y Ganadería' },
  { value: 'manufactura', label: 'Manufactura e Industria' },
  { value: 'energia', label: 'Energía y Medio Ambiente' },
]

const opcionesLibros = [
  { value: 'clean_code', label: 'Clean Code - Robert C. Martin' },
  { value: 'design_patterns', label: 'Design Patterns - Gang of Four' },
  { value: 'refactoring', label: 'Refactoring - Martin Fowler' },
  { value: 'pragmatic_programmer', label: 'The Pragmatic Programmer - Hunt & Thomas' },
  { value: 'code_complete', label: 'Code Complete - Steve McConnell' },
  { value: 'you_dont_know_js', label: 'You Don\'t Know JS - Kyle Simpson' },
  { value: 'eloquent_javascript', label: 'Eloquent JavaScript - Marijn Haverbeke' },
  { value: 'javascript_good_parts', label: 'JavaScript: The Good Parts - Douglas Crockford' },
  { value: 'react_up_running', label: 'React: Up & Running - Stoyan Stefanov' },
  { value: 'node_js_action', label: 'Node.js in Action - Manning Publications' },
  { value: 'python_crash_course', label: 'Python Crash Course - Eric Matthes' },
  { value: 'automate_boring_stuff', label: 'Automate the Boring Stuff - Al Sweigart' },
  { value: 'effective_python', label: 'Effective Python - Brett Slatkin' },
  { value: 'learning_python', label: 'Learning Python - Mark Lutz' },
  { value: 'fluent_python', label: 'Fluent Python - Luciano Ramalho' },
]

// Grupos de prioridad para ejemplos
const gruposPrioridad = [
  {
    label: 'Alta Prioridad',
    options: [
      { value: 'critica', label: 'Crítica', color: '#ef4444' },
      { value: 'alta', label: 'Alta', color: '#f97316' },
    ]
  },
  {
    label: 'Prioridad Normal',
    options: [
      { value: 'media', label: 'Media', color: '#eab308' },
      { value: 'baja', label: 'Baja', color: '#22c55e' },
    ]
  }
];

export default function HookFormSelectBusquedaExamples() {
  const { control, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()
  
  // Estados para manejar valores seleccionados
  const [pais, setPais] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [usuario, setUsuario] = useState('')
  const [producto, setProducto] = useState('')

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  // Función helper para manejar cambios de valor
  const handleValueChange = (value: string | string[]) => {
    if (typeof value === 'string') {
      return value;
    }
    return Array.isArray(value) ? value[0] || '' : '';
  }

  return (
    <Contenedor>
      <Breadcrumb pageName="Select con Búsqueda - Ejemplos" />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Sección 1: Selects con búsqueda básicos */}
        <Tarjeta
          titulo="🔍 Selects con Búsqueda Básicos"
          subtitulo="Funcionalidad básica de búsqueda y selección"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="País"
              name="paisBasico"
              options={opcionesPaises}
              control={control}
              errors={errors}
              selectedValue={pais}
              onChange={(value) => setPais(handleValueChange(value))}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Ciudad"
              name="ciudadBasica"
              options={opcionesCiudades}
              control={control}
              errors={errors}
              selectedValue={ciudad}
              onChange={(value) => setCiudad(handleValueChange(value))}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Usuario"
              name="usuarioBasico"
              options={opcionesUsuarios}
              control={control}
              errors={errors}
              selectedValue={usuario}
              onChange={(value) => setUsuario(handleValueChange(value))}
              colSpan="12"
            />
          </div>
        </Tarjeta>

        {/* Sección 2: Selects con iconos */}
        <Tarjeta
          titulo="🎨 Selects con Iconos"
          subtitulo="Mejora visual con iconos representativos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="Empleado"
              name="empleado"
              options={opcionesUsuarios}
              control={control}
              errors={errors}
              icon={<FaUser />}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Ubicación"
              name="ubicacion"
              options={opcionesCiudades}
              control={control}
              errors={errors}
              icon={<FaCity />}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Región"
              name="region"
              options={opcionesPaises}
              control={control}
              errors={errors}
              icon={<FaGlobe />}
              colSpan="4"
            />
            <HookFormSelectBusqueda
              label="Categoría"
              name="categoriaIcono"
              options={opcionesCategorias}
              control={control}
              errors={errors}
              icon={<FaTag />}
              colSpan="4"
            />
            <HookFormSelectBusqueda
              label="Libro"
              name="libroIcono"
              options={opcionesLibros}
              control={control}
              errors={errors}
              icon={<FaBook />}
              colSpan="4"
            />
          </div>
        </Tarjeta>

        {/* Sección 3: Diferentes variantes */}
        <Tarjeta
          titulo="🎭 Diferentes Variantes Visuales"
          subtitulo="4 estilos visuales para diferentes contextos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "yellow",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="Variante Básica"
              name="variantBasic"
              options={opcionesPaises}
              control={control}
              errors={errors}
              variant="basic"
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Variante Moderna"
              name="variantModern"
              options={opcionesCiudades}
              control={control}
              errors={errors}
              variant="modern"
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Variante con Icono"
              name="variantIcon"
              options={opcionesUsuarios}
              control={control}
              errors={errors}
              variant="icon"
              icon={<FaUser />}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Variante Compacta"
              name="variantCompact"
              options={opcionesCategorias}
              control={control}
              errors={errors}
              variant="compact"
              colSpan="6"
            />
          </div>
        </Tarjeta>

        {/* Sección 4: Diferentes tamaños */}
        <Tarjeta
          titulo="📏 Diferentes Tamaños"
          subtitulo="Tamaños adaptables según el contexto de uso"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "red",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="Tamaño Pequeño (sm)"
              name="sizeSmall"
              options={opcionesPaises}
              control={control}
              errors={errors}
              size="sm"
              colSpan="4"
            />
            <HookFormSelectBusqueda
              label="Tamaño Mediano (md)"
              name="sizeMedium"
              options={opcionesCiudades}
              control={control}
              errors={errors}
              size="md"
              colSpan="4"
            />
            <HookFormSelectBusqueda
              label="Tamaño Grande (lg)"
              name="sizeLarge"
              options={opcionesUsuarios}
              control={control}
              errors={errors}
              size="lg"
              colSpan="4"
            />
          </div>
        </Tarjeta>

        {/* Sección 5: Diferentes tamaños de columna */}
        <Tarjeta
          titulo="📐 Diferentes Anchos de Columna"
          subtitulo="Sistema de grid flexible para layouts responsivos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "gray",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="Ancho Completo (12) - Seleccionar producto con descripción detallada"
              name="productoCompleto"
              options={opcionesProductos}
              control={control}
              errors={errors}
              selectedValue={producto}
              onChange={(value) => setProducto(handleValueChange(value))}
              colSpan="12"
            />
            <HookFormSelectBusqueda
              label="Medio Ancho (6)"
              name="medioAncho1"
              options={opcionesPaises}
              control={control}
              errors={errors}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Medio Ancho (6)"
              name="medioAncho2"
              options={opcionesCategorias}
              control={control}
              errors={errors}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Un Tercio (4)"
              name="tercio1"
              options={opcionesCiudades}
              control={control}
              errors={errors}
              colSpan="4"
            />
            <HookFormSelectBusqueda
              label="Un Tercio (4)"
              name="tercio2"
              options={opcionesUsuarios}
              control={control}
              errors={errors}
              colSpan="4"
            />
            <HookFormSelectBusqueda
              label="Un Tercio (4)"
              name="tercio3"
              options={opcionesLibros}
              control={control}
              errors={errors}
              colSpan="4"
            />
          </div>
        </Tarjeta>

        {/* Sección 6: Funcionalidades avanzadas */}
        <Tarjeta
          titulo="⚡ Funcionalidades Avanzadas"
          subtitulo="Características especiales y configuraciones avanzadas"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="Selección Múltiple"
              name="multiSelect"
              options={opcionesPaises}
              control={control}
              errors={errors}
              isMulti={true}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="No Limpiable"
              name="notClearable"
              options={opcionesCiudades}
              control={control}
              errors={errors}
              isClearable={false}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Sin Búsqueda"
              name="notSearchable"
              options={opcionesUsuarios}
              control={control}
              errors={errors}
              isSearchable={false}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Deshabilitado"
              name="disabled"
              options={opcionesProductos}
              control={control}
              errors={errors}
              disabled={true}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Con Tooltip"
              name="withTooltip"
              options={opcionesCategorias}
              control={control}
              errors={errors}
              tooltipMessage="Este es un tooltip informativo que explica el propósito de este campo"
              colSpan="12"
            />
          </div>
        </Tarjeta>

        {/* Sección 7: Casos de uso reales */}
        <Tarjeta
          titulo="🏢 Casos de Uso Reales"
          subtitulo="Ejemplos prácticos para diferentes industrias y contextos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          {/* Gestión de empleados */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              👥 Gestión de Empleados
            </h3>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelectBusqueda
                label="Supervisor Directo"
                name="supervisorDirecto"
                options={opcionesUsuarios}
                control={control}
                errors={errors}
                icon={<FaUser />}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Departamento"
                name="departamento"
                options={opcionesCategorias}
                control={control}
                errors={errors}
                icon={<FaBuilding />}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Ubicación de Trabajo"
                name="ubicacionTrabajo"
                options={opcionesCiudades}
                control={control}
                errors={errors}
                icon={<FaCity />}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Mentor Asignado"
                name="mentorAsignado"
                options={opcionesUsuarios}
                control={control}
                errors={errors}
                icon={<FaUser />}
                colSpan="6"
              />
            </div>
          </div>

          {/* Gestión de proyectos */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              📋 Gestión de Proyectos
            </h3>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelectBusqueda
                label="Líder del Proyecto"
                name="liderProyecto"
                options={opcionesUsuarios}
                control={control}
                errors={errors}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Cliente Principal"
                name="clientePrincipal"
                options={opcionesUsuarios}
                control={control}
                errors={errors}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Tecnología Principal"
                name="tecnologiaPrincipal"
                options={[
                  { value: 'react', label: 'React.js - Frontend Framework' },
                  { value: 'vue', label: 'Vue.js - Progressive Framework' },
                  { value: 'angular', label: 'Angular - Full Framework' },
                  { value: 'nodejs', label: 'Node.js - Backend Runtime' },
                  { value: 'python', label: 'Python - Versatile Language' },
                  { value: 'java', label: 'Java - Enterprise Language' },
                  { value: 'csharp', label: 'C# - Microsoft Stack' },
                  { value: 'php', label: 'PHP - Web Development' },
                ]}
                control={control}
                errors={errors}
                colSpan="12"
              />
            </div>
          </div>

          {/* Gestión de inventario */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              📦 Gestión de Inventario
            </h3>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelectBusqueda
                label="Producto"
                name="productoInventario"
                options={opcionesProductos}
                control={control}
                errors={errors}
                colSpan="8"
              />
              <HookFormSelectBusqueda
                label="Proveedor"
                name="proveedor"
                options={[
                  { value: 'tech_solutions', label: 'Tech Solutions S.A. - Equipos Informáticos' },
                  { value: 'office_supplies', label: 'Office Supplies Ltd. - Material de Oficina' },
                  { value: 'global_electronics', label: 'Global Electronics - Componentes' },
                  { value: 'premium_furniture', label: 'Premium Furniture - Mobiliario' },
                  { value: 'smart_devices', label: 'Smart Devices Inc. - Dispositivos Inteligentes' },
                ]}
                control={control}
                errors={errors}
                colSpan="4"
              />
              <HookFormSelectBusqueda
                label="Almacén de Destino"
                name="almacenDestino"
                options={opcionesCiudades}
                control={control}
                errors={errors}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Responsable de Almacén"
                name="responsableAlmacen"
                options={opcionesUsuarios}
                control={control}
                errors={errors}
                colSpan="6"
              />
            </div>
          </div>

          {/* Gestión académica */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              🎓 Gestión Académica
            </h3>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelectBusqueda
                label="Libro de Texto"
                name="libroTexto"
                options={opcionesLibros}
                control={control}
                errors={errors}
                icon={<FaBook />}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Instructor"
                name="instructor"
                options={opcionesUsuarios}
                control={control}
                errors={errors}
                icon={<FaUser />}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                label="Área de Estudio"
                name="areaEstudio"
                options={opcionesCategorias}
                control={control}
                errors={errors}
                colSpan="12"
              />
            </div>
          </div>
        </Tarjeta>

        {/* Sección 8: Validaciones */}
        <Tarjeta
          titulo="✅ Campos con Validaciones"
          subtitulo="Validaciones requeridas y personalizadas"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "red",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="Campo Requerido"
              name="campoRequerido"
              options={opcionesPaises}
              control={control}
              errors={errors}
              required="Este campo es obligatorio"
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Validación Personalizada"
              name="validacionPersonalizada"
              options={opcionesUsuarios}
              control={control}
              errors={errors}
              validate={(value) => {
                if (!value) return "Debes seleccionar un usuario";
                if (value === 'juan_perez') return "Juan Pérez no está disponible";
                return true;
              }}
              colSpan="6"
            />
          </div>
        </Tarjeta>

        {/* Botón de envío */}
        <Tarjeta
          titulo="📤 Envío del Formulario"
          subtitulo="Botón para procesar todos los datos del formulario"
          variante="defecto"
        >
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg"
            >
              Enviar Formulario
            </button>
          </div>
        </Tarjeta>
      </form>

      {/* Sección 9: Usando register en lugar de control */}
      <Tarjeta
        titulo="🔧 Usando register (Alternativa a control)"
        subtitulo="Ejemplo de implementación con register para mayor flexibilidad"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "blue",
        }}
      >
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Cómo usar con register:</h4>
          <div className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
            <p>• Pasa <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">register</code> en lugar de <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">control</code></p>
            <p>• El componente detectará automáticamente que usar</p>
            <p>• Los valores se capturan igual que con cualquier input tradicional</p>
            <p>• Funciona con validaciones y manejo de errores</p>
          </div>
        </div>

        <RegisterExampleForm />
      </Tarjeta>
    </Contenedor>
  )
}

// Componente separado para demostrar el uso con register
const RegisterExampleForm: React.FC = () => {
  type RegisterFormData = {
    pais: string;
    ciudad: string;
    categoria: string;
    prioridad: string;
  };

  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>({
    defaultValues: {
      pais: '',
      ciudad: '',
      categoria: '',
      prioridad: ''
    }
  });

  // Observar valores para mostrar en tiempo real
  const watchedValues = watch();

  const onSubmit = (data: RegisterFormData) => {
    console.log('Datos del formulario (register):', data);
    alert('¡Formulario enviado! Revisa la consola para ver los datos.');
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ejemplo básico con register */}
          <HookFormSelectBusqueda
            label="País (con register)"
            name="pais"
            register={register}
            errors={errors}
            options={opcionesPaises}
            placeholder="Selecciona un país..."
            required="El país es requerido"
            variant="basic"
            colSpan="6"
          />

          {/* Ejemplo con validación personalizada */}
          <HookFormSelectBusqueda
            label="Ciudad (con validación)"
            name="ciudad"
            register={register}
            errors={errors}
            options={opcionesCiudades}
            placeholder="Selecciona una ciudad..."
            required="La ciudad es requerida"
            validate={(value) => {
              if (value === 'madrid' && watchedValues.pais !== 'es') {
                return 'Madrid solo está disponible si seleccionas España';
              }
              return true;
            }}
            variant="modern"
            colSpan="6"
          />

          {/* Ejemplo con multi-selección */}
          <HookFormSelectBusqueda
            label="Categorías (multi-select)"
            name="categoria"
            register={register}
            errors={errors}
            options={opcionesCategorias}
            placeholder="Selecciona categorías..."
            isMulti={true}
            variant="icon"
            icon={<FaTag />}
            colSpan="6"
          />

          {/* Ejemplo con grupos */}
          <HookFormSelectBusqueda
            label="Prioridad (con grupos)"
            name="prioridad"
            register={register}
            errors={errors}
            groups={gruposPrioridad}
            placeholder="Selecciona prioridad..."
            required="La prioridad es requerida"
            variant="compact"
            colSpan="6"
          />
        </div>

        {/* Vista previa de valores */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Valores actuales (register):</h4>
          <pre className="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded border overflow-auto">
            {JSON.stringify(watchedValues, null, 2)}
          </pre>
        </div>

        {/* Botón de envío */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar Formulario (register)
          </button>
        </div>
      </form>
    </div>
  );
}; 
