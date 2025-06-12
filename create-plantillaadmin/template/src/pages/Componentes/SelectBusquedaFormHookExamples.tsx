import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { HookFormSelectBusqueda } from '../../components/FormulariosControles/HookFormSelectBusqueda'
import { FaUser, FaGlobe, FaBuilding, FaCity, FaBook, FaTag } from 'react-icons/fa'

interface FormValues {
  [key: string]: string
}

export default function HookFormSelectBusquedaExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()
  
  // Estados para manejar valores seleccionados
  const [pais, setPais] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [usuario, setUsuario] = useState('')
  const [producto, setProducto] = useState('')

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  // Opciones extensas para demostrar la funcionalidad de búsqueda
  const opcionesPaises = [
    { valor: 'ar', etiqueta: 'Argentina' },
    { valor: 'bo', etiqueta: 'Bolivia' },
    { valor: 'br', etiqueta: 'Brasil' },
    { valor: 'cl', etiqueta: 'Chile' },
    { valor: 'co', etiqueta: 'Colombia' },
    { valor: 'cr', etiqueta: 'Costa Rica' },
    { valor: 'cu', etiqueta: 'Cuba' },
    { valor: 'do', etiqueta: 'República Dominicana' },
    { valor: 'ec', etiqueta: 'Ecuador' },
    { valor: 'sv', etiqueta: 'El Salvador' },
    { valor: 'es', etiqueta: 'España' },
    { valor: 'gt', etiqueta: 'Guatemala' },
    { valor: 'hn', etiqueta: 'Honduras' },
    { valor: 'mx', etiqueta: 'México' },
    { valor: 'ni', etiqueta: 'Nicaragua' },
    { valor: 'pa', etiqueta: 'Panamá' },
    { valor: 'py', etiqueta: 'Paraguay' },
    { valor: 'pe', etiqueta: 'Perú' },
    { valor: 'pr', etiqueta: 'Puerto Rico' },
    { valor: 'uy', etiqueta: 'Uruguay' },
    { valor: 've', etiqueta: 'Venezuela' },
  ]

  const opcionesCiudades = [
    { valor: 'madrid', etiqueta: 'Madrid, España' },
    { valor: 'barcelona', etiqueta: 'Barcelona, España' },
    { valor: 'valencia', etiqueta: 'Valencia, España' },
    { valor: 'sevilla', etiqueta: 'Sevilla, España' },
    { valor: 'bilbao', etiqueta: 'Bilbao, España' },
    { valor: 'mexico_city', etiqueta: 'Ciudad de México, México' },
    { valor: 'guadalajara', etiqueta: 'Guadalajara, México' },
    { valor: 'monterrey', etiqueta: 'Monterrey, México' },
    { valor: 'puebla', etiqueta: 'Puebla, México' },
    { valor: 'tijuana', etiqueta: 'Tijuana, México' },
    { valor: 'buenos_aires', etiqueta: 'Buenos Aires, Argentina' },
    { valor: 'cordoba', etiqueta: 'Córdoba, Argentina' },
    { valor: 'rosario', etiqueta: 'Rosario, Argentina' },
    { valor: 'mendoza', etiqueta: 'Mendoza, Argentina' },
    { valor: 'bogota', etiqueta: 'Bogotá, Colombia' },
    { valor: 'medellin', etiqueta: 'Medellín, Colombia' },
    { valor: 'cali', etiqueta: 'Cali, Colombia' },
    { valor: 'barranquilla', etiqueta: 'Barranquilla, Colombia' },
    { valor: 'lima', etiqueta: 'Lima, Perú' },
    { valor: 'arequipa', etiqueta: 'Arequipa, Perú' },
    { valor: 'trujillo', etiqueta: 'Trujillo, Perú' },
    { valor: 'santiago', etiqueta: 'Santiago, Chile' },
    { valor: 'valparaiso', etiqueta: 'Valparaíso, Chile' },
    { valor: 'concepcion', etiqueta: 'Concepción, Chile' },
  ]

  const opcionesUsuarios = [
    { valor: 'juan_perez', etiqueta: 'Juan Pérez - Desarrollador Frontend' },
    { valor: 'maria_garcia', etiqueta: 'María García - Diseñadora UX/UI' },
    { valor: 'carlos_rodriguez', etiqueta: 'Carlos Rodríguez - Backend Developer' },
    { valor: 'ana_martinez', etiqueta: 'Ana Martínez - Product Manager' },
    { valor: 'luis_gonzalez', etiqueta: 'Luis González - DevOps Engineer' },
    { valor: 'sofia_lopez', etiqueta: 'Sofía López - QA Tester' },
    { valor: 'diego_hernandez', etiqueta: 'Diego Hernández - Data Scientist' },
    { valor: 'laura_jimenez', etiqueta: 'Laura Jiménez - Marketing Manager' },
    { valor: 'miguel_ruiz', etiqueta: 'Miguel Ruiz - Sales Representative' },
    { valor: 'carmen_morales', etiqueta: 'Carmen Morales - HR Specialist' },
    { valor: 'antonio_vargas', etiqueta: 'Antonio Vargas - Financial Analyst' },
    { valor: 'patricia_castro', etiqueta: 'Patricia Castro - Content Writer' },
    { valor: 'fernando_ortega', etiqueta: 'Fernando Ortega - System Administrator' },
    { valor: 'isabel_ramos', etiqueta: 'Isabel Ramos - Customer Support' },
    { valor: 'roberto_flores', etiqueta: 'Roberto Flores - Business Analyst' },
  ]

  const opcionesProductos = [
    { valor: 'laptop_dell', etiqueta: 'Laptop Dell XPS 13 - Ultrabook Premium' },
    { valor: 'laptop_hp', etiqueta: 'Laptop HP Pavilion 15 - Uso General' },
    { valor: 'laptop_lenovo', etiqueta: 'Laptop Lenovo ThinkPad - Empresarial' },
    { valor: 'laptop_asus', etiqueta: 'Laptop ASUS ROG - Gaming' },
    { valor: 'laptop_acer', etiqueta: 'Laptop Acer Aspire - Económica' },
    { valor: 'monitor_samsung', etiqueta: 'Monitor Samsung 27" 4K - Profesional' },
    { valor: 'monitor_lg', etiqueta: 'Monitor LG UltraWide - Productividad' },
    { valor: 'monitor_dell', etiqueta: 'Monitor Dell 24" Full HD - Oficina' },
    { valor: 'teclado_logitech', etiqueta: 'Teclado Logitech MX Keys - Inalámbrico' },
    { valor: 'teclado_corsair', etiqueta: 'Teclado Corsair K95 - Gaming Mecánico' },
    { valor: 'mouse_logitech', etiqueta: 'Mouse Logitech MX Master 3 - Ergonómico' },
    { valor: 'mouse_razer', etiqueta: 'Mouse Razer DeathAdder - Gaming' },
    { valor: 'auriculares_sony', etiqueta: 'Auriculares Sony WH-1000XM4 - Noise Cancelling' },
    { valor: 'auriculares_bose', etiqueta: 'Auriculares Bose QuietComfort - Premium' },
    { valor: 'webcam_logitech', etiqueta: 'Webcam Logitech C920 - Full HD' },
  ]

  const opcionesCategorias = [
    { valor: 'tecnologia', etiqueta: 'Tecnología e Informática' },
    { valor: 'salud', etiqueta: 'Salud y Medicina' },
    { valor: 'educacion', etiqueta: 'Educación y Formación' },
    { valor: 'finanzas', etiqueta: 'Finanzas y Contabilidad' },
    { valor: 'marketing', etiqueta: 'Marketing y Publicidad' },
    { valor: 'ventas', etiqueta: 'Ventas y Comercio' },
    { valor: 'recursos_humanos', etiqueta: 'Recursos Humanos' },
    { valor: 'ingenieria', etiqueta: 'Ingeniería y Construcción' },
    { valor: 'diseno', etiqueta: 'Diseño y Creatividad' },
    { valor: 'legal', etiqueta: 'Legal y Jurídico' },
    { valor: 'logistica', etiqueta: 'Logística y Transporte' },
    { valor: 'turismo', etiqueta: 'Turismo y Hospitalidad' },
    { valor: 'agricultura', etiqueta: 'Agricultura y Ganadería' },
    { valor: 'manufactura', etiqueta: 'Manufactura e Industria' },
    { valor: 'energia', etiqueta: 'Energía y Medio Ambiente' },
  ]

  const opcionesLibros = [
    { valor: 'clean_code', etiqueta: 'Clean Code - Robert C. Martin' },
    { valor: 'design_patterns', etiqueta: 'Design Patterns - Gang of Four' },
    { valor: 'refactoring', etiqueta: 'Refactoring - Martin Fowler' },
    { valor: 'pragmatic_programmer', etiqueta: 'The Pragmatic Programmer - Hunt & Thomas' },
    { valor: 'code_complete', etiqueta: 'Code Complete - Steve McConnell' },
    { valor: 'you_dont_know_js', etiqueta: 'You Don\'t Know JS - Kyle Simpson' },
    { valor: 'eloquent_javascript', etiqueta: 'Eloquent JavaScript - Marijn Haverbeke' },
    { valor: 'javascript_good_parts', etiqueta: 'JavaScript: The Good Parts - Douglas Crockford' },
    { valor: 'react_up_running', etiqueta: 'React: Up & Running - Stoyan Stefanov' },
    { valor: 'node_js_action', etiqueta: 'Node.js in Action - Manning Publications' },
    { valor: 'python_crash_course', etiqueta: 'Python Crash Course - Eric Matthes' },
    { valor: 'automate_boring_stuff', etiqueta: 'Automate the Boring Stuff - Al Sweigart' },
    { valor: 'effective_python', etiqueta: 'Effective Python - Brett Slatkin' },
    { valor: 'learning_python', etiqueta: 'Learning Python - Mark Lutz' },
    { valor: 'fluent_python', etiqueta: 'Fluent Python - Luciano Ramalho' },
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormSelectBusqueda
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Selects con búsqueda básicos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Selects con Búsqueda Básicos
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelectBusqueda
                etiqueta="País"
                name="paisBasico"
                opciones={opcionesPaises}
                register={register}
                errors={errors}
                valorSeleccionado={pais}
                onChange={setPais}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                etiqueta="Ciudad"
                name="ciudadBasica"
                opciones={opcionesCiudades}
                register={register}
                errors={errors}
                valorSeleccionado={ciudad}
                onChange={setCiudad}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                etiqueta="Usuario"
                name="usuarioBasico"
                opciones={opcionesUsuarios}
                register={register}
                errors={errors}
                valorSeleccionado={usuario}
                onChange={setUsuario}
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 2: Selects con iconos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Selects con Iconos
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelectBusqueda
                etiqueta="Empleado"
                name="empleado"
                opciones={opcionesUsuarios}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                icono={<FaUser />}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                etiqueta="Ubicación"
                name="ubicacion"
                opciones={opcionesCiudades}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                icono={<FaCity />}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                etiqueta="Región"
                name="region"
                opciones={opcionesPaises}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                icono={<FaGlobe />}
                colSpan="4"
              />
              <HookFormSelectBusqueda
                etiqueta="Categoría"
                name="categoriaIcono"
                opciones={opcionesCategorias}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                icono={<FaTag />}
                colSpan="4"
              />
              <HookFormSelectBusqueda
                etiqueta="Libro"
                name="libroIcono"
                opciones={opcionesLibros}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                icono={<FaBook />}
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 3: Diferentes tamaños */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Diferentes Tamaños de Columna
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelectBusqueda
                etiqueta="Ancho Completo (12) - Seleccionar producto con descripción detallada"
                name="productoCompleto"
                opciones={opcionesProductos}
                register={register}
                errors={errors}
                valorSeleccionado={producto}
                onChange={setProducto}
                colSpan="12"
              />
              <HookFormSelectBusqueda
                etiqueta="Medio Ancho (6)"
                name="medioAncho1"
                opciones={opcionesPaises}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                etiqueta="Medio Ancho (6)"
                name="medioAncho2"
                opciones={opcionesCategorias}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                colSpan="6"
              />
              <HookFormSelectBusqueda
                etiqueta="Un Tercio (4)"
                name="tercio1"
                opciones={opcionesCiudades}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                colSpan="4"
              />
              <HookFormSelectBusqueda
                etiqueta="Un Tercio (4)"
                name="tercio2"
                opciones={opcionesUsuarios}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                colSpan="4"
              />
              <HookFormSelectBusqueda
                etiqueta="Un Tercio (4)"
                name="tercio3"
                opciones={opcionesLibros}
                register={register}
                errors={errors}
                valorSeleccionado=""
                onChange={() => {}}
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 4: Casos de uso reales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Casos de Uso Reales
            </h2>
            
            {/* Gestión de empleados */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Gestión de Empleados
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSelectBusqueda
                  etiqueta="Supervisor Directo"
                  name="supervisorDirecto"
                  opciones={opcionesUsuarios}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  icono={<FaUser />}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Departamento"
                  name="departamento"
                  opciones={opcionesCategorias}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  icono={<FaBuilding />}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Ubicación de Trabajo"
                  name="ubicacionTrabajo"
                  opciones={opcionesCiudades}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  icono={<FaCity />}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Mentor Asignado"
                  name="mentorAsignado"
                  opciones={opcionesUsuarios}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  icono={<FaUser />}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Gestión de proyectos */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Gestión de Proyectos
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSelectBusqueda
                  etiqueta="Líder del Proyecto"
                  name="liderProyecto"
                  opciones={opcionesUsuarios}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Cliente Principal"
                  name="clientePrincipal"
                  opciones={opcionesUsuarios}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Tecnología Principal"
                  name="tecnologiaPrincipal"
                  opciones={[
                    { valor: 'react', etiqueta: 'React.js - Frontend Framework' },
                    { valor: 'vue', etiqueta: 'Vue.js - Progressive Framework' },
                    { valor: 'angular', etiqueta: 'Angular - Full Framework' },
                    { valor: 'nodejs', etiqueta: 'Node.js - Backend Runtime' },
                    { valor: 'python', etiqueta: 'Python - Versatile Language' },
                    { valor: 'java', etiqueta: 'Java - Enterprise Language' },
                    { valor: 'csharp', etiqueta: 'C# - Microsoft Stack' },
                    { valor: 'php', etiqueta: 'PHP - Web Development' },
                  ]}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Gestión de inventario */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Gestión de Inventario
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSelectBusqueda
                  etiqueta="Producto"
                  name="productoInventario"
                  opciones={opcionesProductos}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="8"
                />
                <HookFormSelectBusqueda
                  etiqueta="Proveedor"
                  name="proveedor"
                  opciones={[
                    { valor: 'tech_solutions', etiqueta: 'Tech Solutions S.A. - Equipos Informáticos' },
                    { valor: 'office_supplies', etiqueta: 'Office Supplies Ltd. - Material de Oficina' },
                    { valor: 'global_electronics', etiqueta: 'Global Electronics - Componentes' },
                    { valor: 'premium_furniture', etiqueta: 'Premium Furniture - Mobiliario' },
                    { valor: 'smart_devices', etiqueta: 'Smart Devices Inc. - Dispositivos Inteligentes' },
                  ]}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="4"
                />
                <HookFormSelectBusqueda
                  etiqueta="Almacén de Destino"
                  name="almacenDestino"
                  opciones={opcionesCiudades}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Responsable de Almacén"
                  name="responsableAlmacen"
                  opciones={opcionesUsuarios}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Gestión académica */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Gestión Académica
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSelectBusqueda
                  etiqueta="Libro de Texto"
                  name="libroTexto"
                  opciones={opcionesLibros}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  icono={<FaBook />}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Instructor"
                  name="instructor"
                  opciones={opcionesUsuarios}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  icono={<FaUser />}
                  colSpan="6"
                />
                <HookFormSelectBusqueda
                  etiqueta="Área de Estudio"
                  name="areaEstudio"
                  opciones={opcionesCategorias}
                  register={register}
                  errors={errors}
                  valorSeleccionado=""
                  onChange={() => {}}
                  colSpan="12"
                />
              </div>
            </div>
          </div>

          {/* Sección 5: Vista previa de valores */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Vista Previa de Valores Seleccionados
            </h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Valores actuales:
              </h3>
              <pre className="text-sm text-gray-600 overflow-auto max-h-96">
                {JSON.stringify(watchedValues, null, 2)}
              </pre>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg"
            >
              Enviar Formulario
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 
