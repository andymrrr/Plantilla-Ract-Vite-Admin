import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import { Tarjeta } from '../../components/UI/Tarjeta'
import { Contenedor } from "../../components/UI/Contenedor/Contenedor"

// Importar TODOS los componentes HookForm
import HookFormInput from '../../components/FormulariosControles/HookFormInput/HookFormInput'
import HookFormTextarea from '../../components/FormulariosControles/HookFormTextTarea/HookFormTextarea'
import HookFormSelect from '../../components/FormulariosControles/HookFormSelect/HookFormSelect'
import HookFormSelectBusqueda from '../../components/FormulariosControles/HookFormSelectBusqueda/HookFormSelectBusqueda'
import HookFormCheckbox from '../../components/FormulariosControles/HookFormCheckbox/HookFormCheckbox'
import HookFormSwitcher from '../../components/FormulariosControles/HookFormSwitcher/HookFormSwitcher'
import HookFormTimeSelector from '../../components/FormulariosControles/HookFormTimeSelector/HookFormTimeSelector'
import HookFormFile from '../../components/FormulariosControles/HookFormFile/HookFormFile'
import HookFormDinamico from '../../components/FormulariosControles/HookFormDinamico'

// Configuración para HookFormDinamico
import { CONFIGURACIONES_API, CONFIGURACIONES_CONFIG } from '../../components/FormulariosControles/HookFormDinamico/config'

// Iconos
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaGlobe, 
  FaCalendarAlt, FaCity, FaFlag, FaHeart, FaCheck,
  FaBell, FaMoon, FaSun, FaShieldAlt, FaCode, FaDatabase, FaRocket, FaRedo
} from 'react-icons/fa'

// Interfaces para el formulario completo
interface FormularioCompletoData {
  // Información Personal
  nombre: string
  apellido: string
  email: string
  telefono: string
  fechaNacimiento: string
  genero: string
  
  // Dirección
  direccion: string
  ciudad: string
  pais: string
  codigoPostal: string
  
  // Información Profesional
  empresa: string
  cargo: string
  experiencia: string
  salario: string
  habilidades: string[]
  
  // Preferencias
  idiomas: string[]
  intereses: string[]
  disponibilidad: string
  
  // Configuraciones
  notificaciones: boolean
  newsletter: boolean
  privacidad: boolean
  terminos: boolean
  
  // Switches/Toggles
  modoOscuro: boolean
  notificacionesPush: boolean
  sincronizacion: boolean
  backup: boolean
  
  // Archivos
  cv: FileList
  foto: FileList
  certificados: FileList
  
  // Comentarios y descripciones
  biografia: string
  objetivos: string
  comentarios: string
  
  // Campos Dinámicos
  configuracionAPI?: {
    Headers?: Array<{ nombre: string; valor: string; tipo: string }>
    'Query Params'?: Array<{ nombre: string; valor: string; tipo: string }>
  }
  configuracionGeneral?: {
    Configuración?: Array<{ nombre: string; valor: string; tipo: string }>
    Variables?: Array<{ nombre: string; valor: string; tipo: string }>
  }
}

// Opciones para los selects
const opcionesPaises = [
  { value: 'es', label: 'España' },
  { value: 'mx', label: 'México' },
  { value: 'ar', label: 'Argentina' },
  { value: 'co', label: 'Colombia' },
  { value: 'pe', label: 'Perú' },
  { value: 'cl', label: 'Chile' },
  { value: 'uy', label: 'Uruguay' },
  { value: 've', label: 'Venezuela' }
]

const opcionesCiudades = [
  { value: 'madrid', label: 'Madrid' },
  { value: 'barcelona', label: 'Barcelona' },
  { value: 'valencia', label: 'Valencia' },
  { value: 'sevilla', label: 'Sevilla' },
  { value: 'bilbao', label: 'Bilbao' },
  { value: 'mexico_city', label: 'Ciudad de México' },
  { value: 'guadalajara', label: 'Guadalajara' },
  { value: 'monterrey', label: 'Monterrey' },
  { value: 'buenos_aires', label: 'Buenos Aires' },
  { value: 'cordoba', label: 'Córdoba' },
  { value: 'rosario', label: 'Rosario' },
  { value: 'bogota', label: 'Bogotá' },
  { value: 'medellin', label: 'Medellín' },
  { value: 'cali', label: 'Cali' },
  { value: 'lima', label: 'Lima' },
  { value: 'arequipa', label: 'Arequipa' },
  { value: 'santiago', label: 'Santiago' },
  { value: 'valparaiso', label: 'Valparaíso' },
  { value: 'montevideo', label: 'Montevideo' },
  { value: 'caracas', label: 'Caracas' }
]

const opcionesGenero = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'femenino', label: 'Femenino' },
  { value: 'otro', label: 'Otro' },
  { value: 'prefiero_no_decir', label: 'Prefiero no decir' }
]

const opcionesExperiencia = [
  { value: 'junior', label: 'Junior (0-2 años)' },
  { value: 'mid', label: 'Mid-level (2-5 años)' },
  { value: 'senior', label: 'Senior (5-10 años)' },
  { value: 'lead', label: 'Lead (10+ años)' },
  { value: 'director', label: 'Director/VP' }
]

const opcionesHabilidades = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'sql', label: 'SQL' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'aws', label: 'AWS' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' }
]

const opcionesIdiomas = [
  { value: 'es', label: 'Español (Nativo)' },
  { value: 'en', label: 'Inglés' },
  { value: 'fr', label: 'Francés' },
  { value: 'de', label: 'Alemán' },
  { value: 'it', label: 'Italiano' },
  { value: 'pt', label: 'Portugués' },
  { value: 'zh', label: 'Chino' },
  { value: 'ja', label: 'Japonés' },
  { value: 'ko', label: 'Coreano' },
  { value: 'ar', label: 'Árabe' }
]

const opcionesIntereses = [
  { value: 'tecnologia', label: 'Tecnología' },
  { value: 'deportes', label: 'Deportes' },
  { value: 'musica', label: 'Música' },
  { value: 'viajes', label: 'Viajes' },
  { value: 'lectura', label: 'Lectura' },
  { value: 'cine', label: 'Cine' },
  { value: 'cocina', label: 'Cocina' },
  { value: 'arte', label: 'Arte' },
  { value: 'fotografia', label: 'Fotografía' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'naturaleza', label: 'Naturaleza' }
]

export default function FormularioCompleto() {
  const { 
    register, 
    control, 
    handleSubmit, 
    watch,
    setValue,
    getValues,
    formState: { errors } 
  } = useForm<FormularioCompletoData>()

  const [datosEnviados, setDatosEnviados] = useState<FormularioCompletoData | null>(null)
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Estados para selects con búsqueda
  const [paisSeleccionado, setPaisSeleccionado] = useState('')
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('')
  const [habilidadesSeleccionadas, setHabilidadesSeleccionadas] = useState<string[]>([])
  const [idiomasSeleccionados, setIdiomasSeleccionados] = useState<string[]>([])
  const [interesesSeleccionados, setInteresesSeleccionados] = useState<string[]>([])

  const onSubmit = (data: FormularioCompletoData) => {
    console.log('📋 DATOS COMPLETOS DEL FORMULARIO:', data)
    setDatosEnviados(data)
    setMostrarResultados(true)
    
    // Scroll hacia los resultados
    setTimeout(() => {
      document.getElementById('resultados')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  const handleValueChange = (value: string | string[]) => {
    if (typeof value === 'string') {
      return value;
    }
    return Array.isArray(value) ? value : [];
  }

  return (
    <Contenedor>
      <Breadcrumb pageName="Formulario Completo - Todos los Componentes" />
      
      {/* Información introductoria */}
      <Tarjeta
        titulo="🚀 Formulario Completo con Todos los Componentes"
        subtitulo="Demostración integral de todos los componentes HookForm disponibles"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "blue",
        }}
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📚 Componentes incluidos:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-blue-700 dark:text-blue-300">
            <div>✅ HookFormInput (10 campos)</div>
            <div>✅ HookFormTextarea (3 campos)</div>
            <div>✅ HookFormSelect (2 campos)</div>
            <div>✅ HookFormSelectBusqueda (5 campos)</div>
            <div>✅ HookFormCheckbox (4 campos)</div>
            <div>✅ HookFormSwitcher (4 campos)</div>
            <div>✅ HookFormTimeSelector (1 campo)</div>
            <div>✅ HookFormFile (3 campos)</div>
            <div>✅ HookFormDinamico (2 secciones)</div>
          </div>
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">
            💡 Al enviar el formulario, verás TODOS los datos capturados en una sección especial al final.
          </p>
        </div>
      </Tarjeta>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* SECCIÓN 1: INFORMACIÓN PERSONAL */}
        <Tarjeta
          titulo="👤 Información Personal"
          subtitulo="Datos básicos del usuario con diferentes tipos de input"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormInput
              label="Nombre"
              name="nombre"
              register={register}
              errors={errors}
              placeholder="Tu nombre"
              variant="modern"
              color="blue"
              colSpan="6"
              required="El nombre es obligatorio"
            />
            <HookFormInput
              label="Apellido"
              name="apellido"
              register={register}
              errors={errors}
              leftIcon={<FaUser />}
              placeholder="Tu apellido"
              variant="modern"
              color="blue"
              colSpan="6"
              required="El apellido es obligatorio"
            />
            <HookFormInput
              label="Email"
              name="email"
              register={register}
              errors={errors}
              type="email"
              leftIcon={<FaEnvelope />}
              placeholder="tu@email.com"
              variant="outlined"
              color="blue"
              colSpan="6"
              required="El email es obligatorio"
            />
            <HookFormInput
              label="Teléfono"
              name="telefono"
              register={register}
              errors={errors}
              type="tel"
              leftIcon={<FaPhone />}
              placeholder="+34 123 456 789"
              variant="outlined"
              color="green"
              colSpan="6"
            />
            <HookFormInput
              label="Fecha de Nacimiento"
              name="fechaNacimiento"
              register={register}
              errors={errors}
              type="date"
              leftIcon={<FaCalendarAlt />}
              variant="filled"
              color="blue"
              colSpan="6"
            />
            <HookFormSelect
              label="Género"
              name="genero"
              options={opcionesGenero}
              register={register}
              errors={errors}
              selectedValue=""
              onChange={() => {}}
              variant="modern"
              color="blue"
              colSpan="6"
            />
          </div>
        </Tarjeta>

        {/* SECCIÓN 2: DIRECCIÓN */}
        <Tarjeta
          titulo="🏠 Información de Dirección"
          subtitulo="Ubicación geográfica con selects con búsqueda"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormInput
              label="Dirección"
              name="direccion"
              register={register}
              errors={errors}
              leftIcon={<FaMapMarkerAlt />}
              placeholder="Calle, número, piso..."
              variant="default"
              color="green"
              colSpan="12"
            />
            <HookFormSelectBusqueda
              label="País"
              name="pais"
              options={opcionesPaises}
              control={control}
              errors={errors}
              selectedValue={paisSeleccionado}
              onChange={(value) => setPaisSeleccionado(handleValueChange(value) as string)}
              icon={<FaFlag />}
              variant="modern"
              colSpan="6"
              required="Selecciona un país"
            />
            <HookFormSelectBusqueda
              label="Ciudad"
              name="ciudad"
              options={opcionesCiudades}
              control={control}
              errors={errors}
              selectedValue={ciudadSeleccionada}
              onChange={(value) => setCiudadSeleccionada(handleValueChange(value) as string)}
              icon={<FaCity />}
              variant="modern"
              colSpan="6"
              required="Selecciona una ciudad"
            />
            <HookFormInput
              label="Código Postal"
              name="codigoPostal"
              register={register}
              errors={errors}
              leftIcon={<FaMapMarkerAlt />}
              placeholder="28001"
              variant="default"
              color="green"
              colSpan="6"
            />
          </div>
        </Tarjeta>

        {/* SECCIÓN 3: INFORMACIÓN PROFESIONAL */}
        <Tarjeta
          titulo="💼 Información Profesional"
          subtitulo="Datos laborales y habilidades con multi-selección"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "yellow",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormInput
              label="Empresa"
              name="empresa"
              register={register}
              errors={errors}
              leftIcon={<FaBuilding />}
              placeholder="Nombre de tu empresa"
              variant="modern"
              color="blue"
              colSpan="6"
            />
            <HookFormInput
              label="Cargo"
              name="cargo"
              register={register}
              errors={errors}
              leftIcon={<FaUser />}
              placeholder="Tu puesto de trabajo"
              variant="modern"
              color="blue"
              colSpan="6"
            />
            <HookFormSelect
              label="Experiencia"
              name="experiencia"
              options={opcionesExperiencia}
              register={register}
              errors={errors}
              selectedValue=""
              onChange={() => {}}
              variant="outlined"
              color="blue"
              colSpan="6"
            />
            <HookFormInput
              label="Salario Esperado"
              name="salario"
              register={register}
              errors={errors}
              leftIcon={<span>€</span>}
              placeholder="45000"
              variant="filled"
              color="green"
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Habilidades Técnicas"
              name="habilidades"
              options={opcionesHabilidades}
              control={control}
              errors={errors}
              selectedValue={habilidadesSeleccionadas}
              onChange={(value) => setHabilidadesSeleccionadas(handleValueChange(value) as string[])}
              icon={<FaCode />}
              variant="modern"
              isMulti={true}
              colSpan="12"
              tooltipMessage="Selecciona todas las tecnologías que dominas"
            />
          </div>
        </Tarjeta>

        {/* SECCIÓN 4: PREFERENCIAS PERSONALES */}
        <Tarjeta
          titulo="🌟 Preferencias Personales"
          subtitulo="Idiomas, intereses y disponibilidad con TimeSelector"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormSelectBusqueda
              label="Idiomas"
              name="idiomas"
              options={opcionesIdiomas}
              control={control}
              errors={errors}
              selectedValue={idiomasSeleccionados}
              onChange={(value) => setIdiomasSeleccionados(handleValueChange(value) as string[])}
              icon={<FaGlobe />}
              variant="modern"
              isMulti={true}
              colSpan="6"
            />
            <HookFormSelectBusqueda
              label="Intereses"
              name="intereses"
              options={opcionesIntereses}
              control={control}
              errors={errors}
              selectedValue={interesesSeleccionados}
              onChange={(value) => setInteresesSeleccionados(handleValueChange(value) as string[])}
              icon={<FaHeart />}
              variant="modern"
              isMulti={true}
              colSpan="6"
            />
            <HookFormTimeSelector
              label="Disponibilidad Horaria"
              name="disponibilidad"
              register={register}
              errors={errors}
              options={[
                { value: '2h', label: '2 horas', description: 'Tiempo parcial' },
                { value: '4h', label: '4 horas', description: 'Medio tiempo' },
                { value: '6h', label: '6 horas', description: 'Tiempo extendido' },
                { value: '8h', label: '8 horas', description: 'Tiempo completo' },
                { value: 'flexible', label: 'Flexible', description: 'Horario flexible' },
              ]}
              variant="pill"
              color="blue"
              colSpan="12"
              showDescription={true}
            />
          </div>
        </Tarjeta>

        {/* SECCIÓN 5: CONFIGURACIONES Y CHECKBOXES */}
        <Tarjeta
          titulo="⚙️ Configuraciones y Preferencias"
          subtitulo="Checkboxes y switches para configuraciones del usuario"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "red",
          }}
        >
          <div className="grid grid-cols-12 gap-6">
            {/* Checkboxes */}
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                📋 Suscripciones y Términos
              </h4>
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Recibir notificaciones por email"
                  name="notificaciones"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="blue"
                  icon={<FaBell />}
                  colSpan="12"
                />
                <HookFormCheckbox
                  label="Suscribirse al newsletter"
                  name="newsletter"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="green"
                  icon={<FaEnvelope />}
                  colSpan="12"
                />
                <HookFormCheckbox
                  label="Acepto la política de privacidad"
                  name="privacidad"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="blue"
                  icon={<FaShieldAlt />}
                  colSpan="12"
                  required={true}
                />
                <HookFormCheckbox
                  label="Acepto los términos y condiciones"
                  name="terminos"
                  register={register}
                  errors={errors}
                  variant="minimal"
                  color="red"
                  icon={<FaCheck />}
                  colSpan="12"
                  required={true}
                />
              </div>
            </div>

            {/* Switches */}
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                🔄 Configuraciones del Sistema
              </h4>
              <div className="space-y-4">
                <HookFormSwitcher
                  label="Modo Oscuro"
                  name="modoOscuro"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="blue"
                  leftIcon={<FaMoon />}
                  rightIcon={<FaSun />}
                  onText="Oscuro"
                  offText="Claro"
                  colSpan="12"
                />
                <HookFormSwitcher
                  label="Notificaciones Push"
                  name="notificacionesPush"
                  register={register}
                  errors={errors}
                  variant="rounded"
                  color="blue"
                  leftIcon={<FaBell />}
                  defaultValue={true}
                  colSpan="12"
                />
                <HookFormSwitcher
                  label="Sincronización Automática"
                  name="sincronizacion"
                  register={register}
                  errors={errors}
                  variant="gradient"
                  color="green"
                  leftIcon={<FaRedo />}
                  colSpan="12"
                />
                <HookFormSwitcher
                  label="Backup Automático"
                  name="backup"
                  register={register}
                  errors={errors}
                  variant="square"
                  color="blue"
                  leftIcon={<FaDatabase />}
                  colSpan="12"
                />
              </div>
            </div>
          </div>
        </Tarjeta>

        {/* SECCIÓN 6: ARCHIVOS */}
        <Tarjeta
          titulo="📁 Carga de Archivos"
          subtitulo="Diferentes tipos de archivos con HookFormFile"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormFile
              label="Curriculum Vitae (PDF)"
              name="cv"
              register={register}
              errors={errors}
              accept=".pdf"
              tooltipMessage="Sube tu CV en formato PDF"
              colSpan="4"
            />
            <HookFormFile
              label="Foto de Perfil"
              name="foto"
              register={register}
              errors={errors}
              accept="image/*"
              tooltipMessage="Imagen para tu perfil"
              colSpan="4"
            />
            <HookFormFile
              label="Certificados"
              name="certificados"
              register={register}
              errors={errors}
              accept=".pdf,.jpg,.jpeg,.png"
              multiple={true}
              tooltipMessage="Puedes subir múltiples certificados"
              colSpan="4"
            />
          </div>
        </Tarjeta>

        {/* SECCIÓN 7: TEXTOS LARGOS */}
        <Tarjeta
          titulo="📝 Información Adicional"
          subtitulo="Campos de texto largo con diferentes variantes de textarea"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            <HookFormTextarea
              label="Biografía Personal"
              name="biografia"
              register={register}
              errors={errors}
              placeholder="Cuéntanos sobre ti, tu experiencia y tus logros..."
              variant="modern"
              color="blue"
              rows={4}
              colSpan="12"
            />
            <HookFormTextarea
              label="Objetivos Profesionales"
              name="objetivos"
              register={register}
              errors={errors}
              placeholder="¿Cuáles son tus metas profesionales a corto y largo plazo?"
              variant="outlined"
              color="green"
              rows={3}
              colSpan="6"
            />
            <HookFormTextarea
              label="Comentarios Adicionales"
              name="comentarios"
              register={register}
              errors={errors}
              placeholder="Cualquier información adicional que quieras compartir..."
              variant="filled"
              color="blue"
              rows={3}
              colSpan="6"
            />
          </div>
        </Tarjeta>

        {/* SECCIÓN 8: CAMPOS DINÁMICOS */}
        <Tarjeta
          titulo="🔧 Configuración Dinámica"
          subtitulo="Campos dinámicos con pestañas usando HookFormDinamico"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "red",
          }}
        >
          <div className="space-y-6">
            {/* Configuración API */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FaCode className="text-blue-500" />
                Configuración de API
              </h4>
              <HookFormDinamico
                pestañas={['Headers', 'Query Params']}
                tiposCamposPermitidos={[...CONFIGURACIONES_API.campos]}
                cantidadMaximaCampos={15}
                basePath="configuracionAPI"
                control={control}
                register={register}
                errors={errors}
                watch={watch}
                setValue={setValue}
                getValues={getValues}
                className="border border-blue-200 dark:border-blue-800 rounded-lg p-4"
              />
            </div>

            {/* Configuración General */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FaDatabase className="text-green-500" />
                Configuración General
              </h4>
              <HookFormDinamico
                pestañas={['Configuración', 'Variables']}
                tiposCamposPermitidos={[...CONFIGURACIONES_CONFIG.campos]}
                cantidadMaximaCampos={20}
                basePath="configuracionGeneral"
                control={control}
                register={register}
                errors={errors}
                watch={watch}
                setValue={setValue}
                getValues={getValues}
                className="border border-green-200 dark:border-green-800 rounded-lg p-4"
              />
            </div>
          </div>
        </Tarjeta>

        {/* BOTÓN DE ENVÍO */}
        <Tarjeta
          titulo="🚀 Enviar Formulario"
          subtitulo="Procesar todos los datos y mostrar resultados completos"
          variante="defecto"
        >
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 flex items-center gap-3"
            >
              <FaRocket />
              Enviar Formulario Completo
            </button>
          </div>
        </Tarjeta>
      </form>

      {/* SECCIÓN DE RESULTADOS */}
      {mostrarResultados && datosEnviados && (
        <div id="resultados">
          <Tarjeta
            titulo="🎉 ¡Formulario Enviado Exitosamente!"
            subtitulo="Todos los datos capturados por los componentes HookForm"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "green",
            }}
          >
            <div className="space-y-6">
              {/* Resumen visual */}
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Datos Procesados:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-green-700 dark:text-green-300">
                    <strong>Inputs:</strong> {Object.keys(datosEnviados).filter(key => 
                      ['nombre', 'apellido', 'email', 'telefono', 'fechaNacimiento', 'direccion', 'codigoPostal', 'empresa', 'cargo', 'salario'].includes(key)
                    ).length}
                  </div>
                  <div className="text-green-700 dark:text-green-300">
                    <strong>Selects:</strong> {Object.keys(datosEnviados).filter(key => 
                      ['genero', 'pais', 'ciudad', 'experiencia'].includes(key)
                    ).length}
                  </div>
                  <div className="text-green-700 dark:text-green-300">
                    <strong>Multi-selects:</strong> {Object.keys(datosEnviados).filter(key => 
                      ['habilidades', 'idiomas', 'intereses'].includes(key)
                    ).length}
                  </div>
                  <div className="text-green-700 dark:text-green-300">
                    <strong>Checkboxes:</strong> {Object.keys(datosEnviados).filter(key => 
                      ['notificaciones', 'newsletter', 'privacidad', 'terminos'].includes(key)
                    ).length}
                  </div>
                  <div className="text-green-700 dark:text-green-300">
                    <strong>Switches:</strong> {Object.keys(datosEnviados).filter(key => 
                      ['modoOscuro', 'notificacionesPush', 'sincronizacion', 'backup'].includes(key)
                    ).length}
                  </div>
                  <div className="text-green-700 dark:text-green-300">
                    <strong>Archivos:</strong> {Object.keys(datosEnviados).filter(key => 
                      ['cv', 'foto', 'certificados'].includes(key)
                    ).length}
                  </div>
                  <div className="text-green-700 dark:text-green-300">
                    <strong>Textareas:</strong> {Object.keys(datosEnviados).filter(key => 
                      ['biografia', 'objetivos', 'comentarios'].includes(key)
                    ).length}
                  </div>
                </div>
              </div>

              {/* Datos completos en JSON */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  📊 Datos Completos (JSON):
                </h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-96">
                  <pre className="text-sm whitespace-pre-wrap">
                    {JSON.stringify(datosEnviados, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Botón para ocultar resultados */}
              <div className="flex justify-center">
                <button
                  onClick={() => setMostrarResultados(false)}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Ocultar Resultados
                </button>
              </div>
            </div>
          </Tarjeta>
        </div>
      )}
    </Contenedor>
  )
} 