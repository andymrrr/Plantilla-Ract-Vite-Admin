import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import Tarjeta from "../../components/UI/Tarjeta/Tarjeta"
import { Contenedor } from "../../components/UI/Contenedor"
import HookFormDinamico from '../../components/FormulariosControles/HookFormDinamico'

// Configuraciones predefinidas
import { 
  CONFIGURACIONES_API, 
  CONFIGURACIONES_CONFIG, 
  CONFIGURACIONES_CLAVE_VALOR,
  PLANTILLA_API_REST,
  PLANTILLA_WEBHOOK,
  PLANTILLA_MICROSERVICIO,
  PLANTILLA_DATABASE_CONFIG
} from '../../components/FormulariosControles/HookFormDinamico/config'

// Tipos para configuraciones
import { ConfiguracionCampoHook, FormularioTabData, TipoCampoHook } from '../../components/FormulariosControles/HookFormDinamico/types'

// Iconos
import { 
  FaCode, FaDatabase, FaKey, FaCloud, FaServer, FaCog, 
  FaPlay, FaStop, FaRedo, FaDownload, FaUpload,
  FaCheckCircle, FaExclamationTriangle, FaInfoCircle,
  FaUser, FaBuilding, FaShoppingCart, FaCogs, FaMapMarkerAlt
} from 'react-icons/fa'

// ============================================================================
// CONFIGURACIONES AMPLIADAS PERSONALIZADAS
// ============================================================================

// Configuración ampliada para formularios de usuario
const CONFIGURACION_USUARIO_AMPLIADA: ConfiguracionCampoHook[] = [
  {
    tipo: 'input',
    label: 'Campo de Texto',
    tamaño: '6',
    placeholder: 'Ingresa texto...',
    required: false,
    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
  },
  {
    tipo: 'textarea',
    label: 'Área de Texto',
    tamaño: '12',
    placeholder: 'Descripción detallada...',
    required: false,
    minLength: { value: 10, message: 'Mínimo 10 caracteres' }
  },
  {
    tipo: 'select',
    label: 'Lista de Opciones',
    tamaño: '6',
    opciones: [
      { valor: 'opcion1', etiqueta: 'Opción 1' },
      { valor: 'opcion2', etiqueta: 'Opción 2' },
      { valor: 'opcion3', etiqueta: 'Opción 3' },
      { valor: 'custom', etiqueta: 'Personalizado' }
    ],
    required: false
  },
  {
    tipo: 'checkbox',
    label: 'Campo de Verificación',
    tamaño: '6',
    required: false
  }
]

// Configuración para e-commerce
const CONFIGURACION_ECOMMERCE: ConfiguracionCampoHook[] = [
  {
    tipo: 'input',
    label: 'Propiedad del Producto',
    tamaño: '6',
    placeholder: 'Color, Talla, Material...',
    required: true,
    requiredMessage: 'La propiedad es requerida'
  },
  {
    tipo: 'input',
    label: 'Valor de la Propiedad',
    tamaño: '6',
    placeholder: 'Rojo, XL, Algodón...',
    required: true,
    requiredMessage: 'El valor es requerido'
  },
  {
    tipo: 'select',
    label: 'Tipo de Dato',
    tamaño: '4',
    opciones: [
      { valor: 'string', etiqueta: 'Texto' },
      { valor: 'number', etiqueta: 'Número' },
      { valor: 'boolean', etiqueta: 'Sí/No' },
      { valor: 'date', etiqueta: 'Fecha' }
    ],
    required: false
  },
  {
    tipo: 'checkbox',
    label: 'Visible en Filtros',
    tamaño: '4',
    required: false
  }
]

// ============================================================================
// PLANTILLAS PREDEFINIDAS AMPLIADAS
// ============================================================================

const PLANTILLA_PERFIL_USUARIO: FormularioTabData = {
  'Información Personal': [
    { nombre: 'nombre', valor: 'Juan Pérez', tipo: 'input' as TipoCampoHook },
    { nombre: 'email', valor: 'juan@email.com', tipo: 'input' as TipoCampoHook },
    { nombre: 'telefono', valor: '+34 123 456 789', tipo: 'input' as TipoCampoHook },
    { nombre: 'biografia', valor: 'Desarrollador Full Stack con 5 años de experiencia...', tipo: 'textarea' as TipoCampoHook }
  ],
  'Preferencias': [
    { nombre: 'idioma', valor: 'español', tipo: 'select' as TipoCampoHook },
    { nombre: 'notificaciones', valor: 'true', tipo: 'checkbox' as TipoCampoHook, activo: true },
    { nombre: 'tema', valor: 'oscuro', tipo: 'select' as TipoCampoHook }
  ]
}

const PLANTILLA_PRODUCTO_ECOMMERCE: FormularioTabData = {
  'Propiedades Básicas': [
    { nombre: 'color', valor: 'Azul', tipo: 'input' as TipoCampoHook },
    { nombre: 'talla', valor: 'M', tipo: 'input' as TipoCampoHook },
    { nombre: 'material', valor: 'Algodón', tipo: 'input' as TipoCampoHook },
    { nombre: 'peso', valor: '250g', tipo: 'input' as TipoCampoHook }
  ],
  'Características': [
    { nombre: 'resistente_agua', valor: 'true', tipo: 'checkbox' as TipoCampoHook, activo: true },
    { nombre: 'lavable_maquina', valor: 'true', tipo: 'checkbox' as TipoCampoHook, activo: true },
    { nombre: 'categoria', valor: 'ropa', tipo: 'select' as TipoCampoHook }
  ]
}

// ============================================================================
// HELPERS DE MAPEO DE DATOS
// ============================================================================

// Helper para mapear datos a entidad Usuario
interface Usuario {
  id?: string
  informacionPersonal: {
    nombre?: string
    email?: string
    telefono?: string
    biografia?: string
  }
  preferencias: {
    idioma?: string
    notificaciones?: boolean
    tema?: string
  }
  metadatos?: Record<string, any>
}

const mapearAUsuario = (datos: FormularioTabData): Usuario => {
  const usuario: Usuario = {
    informacionPersonal: {},
    preferencias: {},
    metadatos: {}
  }

  // Mapear información personal
  if (datos['Información Personal']) {
    datos['Información Personal'].forEach(campo => {
      switch (campo.nombre.toLowerCase()) {
        case 'nombre':
          usuario.informacionPersonal.nombre = campo.valor
          break
        case 'email':
          usuario.informacionPersonal.email = campo.valor
          break
        case 'telefono':
          usuario.informacionPersonal.telefono = campo.valor
          break
        case 'biografia':
          usuario.informacionPersonal.biografia = campo.valor
          break
        default:
          usuario.metadatos![campo.nombre] = campo.valor
      }
    })
  }

  // Mapear preferencias
  if (datos['Preferencias']) {
    datos['Preferencias'].forEach(campo => {
      switch (campo.nombre.toLowerCase()) {
        case 'idioma':
          usuario.preferencias.idioma = campo.valor
          break
        case 'notificaciones':
          usuario.preferencias.notificaciones = campo.activo || campo.valor === 'true'
          break
        case 'tema':
          usuario.preferencias.tema = campo.valor
          break
        default:
          usuario.metadatos![campo.nombre] = campo.tipo === 'checkbox' ? (campo.activo || campo.valor === 'true') : campo.valor
      }
    })
  }

  return usuario
}

// Helper para mapear datos a entidad Producto
interface Producto {
  id?: string
  propiedades: Record<string, any>
  caracteristicas: Record<string, boolean>
  metadatos?: Record<string, any>
}

const mapearAProducto = (datos: FormularioTabData): Producto => {
  const producto: Producto = {
    propiedades: {},
    caracteristicas: {},
    metadatos: {}
  }

  // Mapear propiedades básicas
  if (datos['Propiedades Básicas']) {
    datos['Propiedades Básicas'].forEach(campo => {
      producto.propiedades[campo.nombre] = campo.valor
    })
  }

  // Mapear características
  if (datos['Características']) {
    datos['Características'].forEach(campo => {
      if (campo.tipo === 'checkbox') {
        producto.caracteristicas[campo.nombre] = campo.activo || campo.valor === 'true'
      } else {
        producto.metadatos![campo.nombre] = campo.valor
      }
    })
  }

  return producto
}

// Helper genérico para mapear a cualquier entidad
const mapearAEntidadGenerica = (datos: FormularioTabData, esquema: Record<string, string>): Record<string, any> => {
  const entidad: Record<string, any> = {}

  Object.keys(datos).forEach(pestana => {
    datos[pestana]?.forEach(campo => {
      const claveMapeada = esquema[campo.nombre] || campo.nombre
      
      if (campo.tipo === 'checkbox') {
        entidad[claveMapeada] = campo.activo || campo.valor === 'true'
      } else {
        entidad[claveMapeada] = campo.valor
      }
    })
  })

  return entidad
}

// ============================================================================
// INTERFACES AMPLIADAS
// ============================================================================

// Interfaces para los diferentes formularios ampliados
interface FormularioAPI {
  configuracionAPI?: {
    Headers?: Array<{ nombre: string; valor: string; tipo: string }>
    'Query Params'?: Array<{ nombre: string; valor: string; tipo: string }>
  }
}

interface FormularioConfig {
  configuracionGeneral?: {
    Configuración?: Array<{ nombre: string; valor: string; tipo: string }>
    Variables?: Array<{ nombre: string; valor: string; tipo: string }>
  }
}

interface FormularioClaveValor {
  datosPersonalizados?: {
    Datos?: Array<{ nombre: string; valor: string; tipo: string }>
    Metadatos?: Array<{ nombre: string; valor: string; tipo: string }>
  }
}

// Nuevas interfaces para ejemplos ampliados (simplificadas)
interface FormularioUsuario {
  perfilUsuario?: FormularioTabData
}

interface FormularioEcommerce {
  productoEcommerce?: FormularioTabData
}

export default function HookFormDinamicoExamples() {
  // Formularios separados para cada ejemplo
  const formAPI = useForm<FormularioAPI>()
  const formConfig = useForm<FormularioConfig>()
  const formClaveValor = useForm<FormularioClaveValor>()
  
  // Nuevos formularios ampliados
  const formUsuario = useForm<FormularioUsuario>()
  const formEcommerce = useForm<FormularioEcommerce>()

  // Estados para resultados
  const [resultadoAPI, setResultadoAPI] = useState<FormularioAPI | null>(null)
  const [resultadoConfig, setResultadoConfig] = useState<FormularioConfig | null>(null)
  const [resultadoClaveValor, setResultadoClaveValor] = useState<FormularioClaveValor | null>(null)
  
  // Nuevos estados para resultados ampliados
  const [resultadoUsuario, setResultadoUsuario] = useState<FormularioUsuario | null>(null)
  const [resultadoEcommerce, setResultadoEcommerce] = useState<FormularioEcommerce | null>(null)
  const [usuarioMapeado, setUsuarioMapeado] = useState<Usuario | null>(null)
  const [productoMapeado, setProductoMapeado] = useState<Producto | null>(null)

  // Estados para plantillas
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState('')

  // Handlers para envío de formularios existentes
  const onSubmitAPI = (data: FormularioAPI) => {
    console.log('🔌 Datos API:', data)
    setResultadoAPI(data)
  }

  const onSubmitConfig = (data: FormularioConfig) => {
    console.log('⚙️ Datos Configuración:', data)
    setResultadoConfig(data)
  }

  const onSubmitClaveValor = (data: FormularioClaveValor) => {
    console.log('🔑 Datos Clave-Valor:', data)
    setResultadoClaveValor(data)
  }

  // Nuevos handlers para formularios ampliados
  const onSubmitUsuario = (data: FormularioUsuario) => {
    console.log('👤 Datos Usuario:', data)
    setResultadoUsuario(data)
    
    // Mapear a entidad Usuario
    if (data.perfilUsuario) {
      const usuario = mapearAUsuario(data.perfilUsuario)
      setUsuarioMapeado(usuario)
      console.log('👤 Usuario Mapeado:', usuario)
    }
  }

  const onSubmitEcommerce = (data: FormularioEcommerce) => {
    console.log('🛒 Datos E-commerce:', data)
    setResultadoEcommerce(data)
    
    // Mapear a entidad Producto
    if (data.productoEcommerce) {
      const producto = mapearAProducto(data.productoEcommerce)
      setProductoMapeado(producto)
      console.log('🛒 Producto Mapeado:', producto)
    }
  }

  // Función ampliada para cargar plantillas
  const cargarPlantilla = (tipo: string) => {
    switch (tipo) {
      case 'api-rest':
        formAPI.setValue('configuracionAPI', PLANTILLA_API_REST)
        break
      case 'webhook':
        formAPI.setValue('configuracionAPI', PLANTILLA_WEBHOOK)
        break
      case 'microservicio':
        formAPI.setValue('configuracionAPI', PLANTILLA_MICROSERVICIO)
        break
      case 'database':
        formConfig.setValue('configuracionGeneral', PLANTILLA_DATABASE_CONFIG)
        break
      case 'perfil-usuario':
        formUsuario.setValue('perfilUsuario', PLANTILLA_PERFIL_USUARIO)
        break
      case 'producto-ecommerce':
        formEcommerce.setValue('productoEcommerce', PLANTILLA_PRODUCTO_ECOMMERCE)
        break
      default:
        break
    }
    setPlantillaSeleccionada(tipo)
  }

  return (
    <Contenedor>
      <Breadcrumb pageName="HookForm Dinámico - Ejemplos Completos" />
      
      {/* Información introductoria */}
      <Tarjeta
        titulo="🔧 HookForm Dinámico - Campos Configurables"
        subtitulo="Componente avanzado para crear formularios con campos dinámicos organizados en pestañas"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "blue",
        }}
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🚀 Características principales:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
            <div className="space-y-2">
              <div>✅ <strong>Pestañas navegables</strong> para organizar campos</div>
              <div>✅ <strong>Agregar/eliminar</strong> campos dinámicamente</div>
              <div>✅ <strong>Validaciones integradas</strong> con React Hook Form</div>
              <div>✅ <strong>Límites configurables</strong> por pestaña</div>
            </div>
            <div className="space-y-2">
              <div>✅ <strong>Plantillas predefinidas</strong> para casos comunes</div>
              <div>✅ <strong>Tipos de campo</strong> personalizables</div>
              <div>✅ <strong>Integración completa</strong> con formularios</div>
              <div>✅ <strong>Estado persistente</strong> entre pestañas</div>
            </div>
          </div>
        </div>
      </Tarjeta>

      {/* EJEMPLO 1: CONFIGURACIÓN DE API */}
      <Tarjeta
        titulo="🔌 Configuración de API"
        subtitulo="Gestión dinámica de Headers y Query Parameters para APIs REST"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "blue",
        }}
      >
        <form onSubmit={formAPI.handleSubmit(onSubmitAPI)} className="space-y-6">
          {/* Plantillas predefinidas */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <FaDownload className="text-blue-500" />
              Plantillas Predefinidas
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => cargarPlantilla('api-rest')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  plantillaSeleccionada === 'api-rest'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300'
                }`}
              >
                <FaCode className="inline mr-1" />
                API REST
              </button>
              <button
                type="button"
                onClick={() => cargarPlantilla('webhook')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  plantillaSeleccionada === 'webhook'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300'
                }`}
              >
                <FaCloud className="inline mr-1" />
                Webhook
              </button>
              <button
                type="button"
                onClick={() => cargarPlantilla('microservicio')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  plantillaSeleccionada === 'microservicio'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300'
                }`}
              >
                <FaServer className="inline mr-1" />
                Microservicio
              </button>
            </div>
          </div>

          {/* Componente dinámico */}
          <HookFormDinamico
            pestañas={['Headers', 'Query Params']}
            tiposCamposPermitidos={[...CONFIGURACIONES_API.campos]}
            cantidadMaximaCampos={20}
            basePath="configuracionAPI"
            control={formAPI.control}
            register={formAPI.register}
            errors={formAPI.formState.errors}
            watch={formAPI.watch}
            setValue={formAPI.setValue}
            getValues={formAPI.getValues}
            className="border border-blue-200 dark:border-blue-800 rounded-lg p-4"
          />

          {/* Botones de acción */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaPlay />
              Procesar API
            </button>
            <button
              type="button"
              onClick={() => formAPI.reset()}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaRedo />
              Limpiar
            </button>
          </div>

          {/* Resultados */}
          {resultadoAPI && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <FaCheckCircle />
                Configuración API Procesada
              </h4>
              <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-auto">
                {JSON.stringify(resultadoAPI, null, 2)}
              </pre>
            </div>
          )}
        </form>
      </Tarjeta>

      {/* EJEMPLO 2: CONFIGURACIÓN GENERAL */}
      <Tarjeta
        titulo="⚙️ Configuración General"
        subtitulo="Variables de entorno y configuraciones de sistema"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "green",
        }}
      >
        <form onSubmit={formConfig.handleSubmit(onSubmitConfig)} className="space-y-6">
          {/* Plantilla de base de datos */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <FaDatabase className="text-green-500" />
              Plantilla de Base de Datos
            </h4>
            <button
              type="button"
              onClick={() => cargarPlantilla('database')}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaUpload />
              Cargar Configuración DB
            </button>
          </div>

          <HookFormDinamico
            pestañas={['Configuración', 'Variables']}
            tiposCamposPermitidos={[...CONFIGURACIONES_CONFIG.campos]}
            cantidadMaximaCampos={25}
            basePath="configuracionGeneral"
            control={formConfig.control}
            register={formConfig.register}
            errors={formConfig.formState.errors}
            watch={formConfig.watch}
            setValue={formConfig.setValue}
            getValues={formConfig.getValues}
            className="border border-green-200 dark:border-green-800 rounded-lg p-4"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaCog />
              Guardar Configuración
            </button>
            <button
              type="button"
              onClick={() => formConfig.reset()}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaStop />
              Cancelar
            </button>
          </div>

          {resultadoConfig && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <FaCheckCircle />
                Configuración Guardada
              </h4>
              <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-auto">
                {JSON.stringify(resultadoConfig, null, 2)}
              </pre>
            </div>
          )}
        </form>
      </Tarjeta>

      {/* EJEMPLO 3: DATOS CLAVE-VALOR */}
      <Tarjeta
        titulo="🔑 Datos Clave-Valor"
        subtitulo="Gestión flexible de pares clave-valor con metadatos"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "yellow",
        }}
      >
        <form onSubmit={formClaveValor.handleSubmit(onSubmitClaveValor)} className="space-y-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
              <FaInfoCircle />
              Caso de Uso
            </h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Ideal para configuraciones personalizadas, propiedades de objetos, 
              metadatos de archivos, o cualquier estructura de datos flexible.
            </p>
          </div>

          <HookFormDinamico
            pestañas={['Datos', 'Metadatos']}
            tiposCamposPermitidos={[...CONFIGURACIONES_CLAVE_VALOR.campos]}
            cantidadMaximaCampos={30}
            basePath="datosPersonalizados"
            control={formClaveValor.control}
            register={formClaveValor.register}
            errors={formClaveValor.formState.errors}
            watch={formClaveValor.watch}
            setValue={formClaveValor.setValue}
            getValues={formClaveValor.getValues}
            className="border border-yellow-200 dark:border-yellow-800 rounded-lg p-4"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaKey />
              Procesar Datos
            </button>
            <button
              type="button"
              onClick={() => formClaveValor.reset()}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaRedo />
              Reiniciar
            </button>
          </div>

          {resultadoClaveValor && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                <FaCheckCircle />
                Datos Procesados
              </h4>
              <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-auto">
                {JSON.stringify(resultadoClaveValor, null, 2)}
              </pre>
            </div>
          )}
        </form>
      </Tarjeta>

      {/* EJEMPLO 4: PERFIL DE USUARIO AMPLIADO */}
      <Tarjeta
        titulo="👤 Perfil de Usuario Ampliado"
        subtitulo="Formulario completo con múltiples tipos de campos y mapeo a entidad Usuario"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "blue",
        }}
      >
        <form onSubmit={formUsuario.handleSubmit(onSubmitUsuario)} className="space-y-6">
          {/* Plantilla predefinida */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <FaUser className="text-blue-500" />
              Plantilla de Perfil Completo
            </h4>
            <button
              type="button"
              onClick={() => cargarPlantilla('perfil-usuario')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaUpload />
              Cargar Datos de Ejemplo
            </button>
          </div>

          <HookFormDinamico
            pestañas={['Información Personal', 'Preferencias']}
            tiposCamposPermitidos={CONFIGURACION_USUARIO_AMPLIADA}
            cantidadMaximaCampos={50}
            basePath="perfilUsuario"
            control={formUsuario.control}
            register={formUsuario.register}
            errors={formUsuario.formState.errors}
            watch={formUsuario.watch}
            setValue={formUsuario.setValue}
            getValues={formUsuario.getValues}
            className="border border-blue-200 dark:border-blue-800 rounded-lg p-4"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaUser />
              Procesar Perfil
            </button>
            <button
              type="button"
              onClick={() => formUsuario.reset()}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaRedo />
              Limpiar
            </button>
          </div>

          {/* Resultados con mapeo */}
          {resultadoUsuario && (
            <div className="space-y-4">
              {/* Datos originales */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <FaCheckCircle />
                  Datos Originales del Formulario
                </h4>
                <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-auto max-h-48">
                  {JSON.stringify(resultadoUsuario, null, 2)}
                </pre>
              </div>

              {/* Usuario mapeado */}
              {usuarioMapeado && (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                    <FaUser />
                    Entidad Usuario Mapeada
                  </h4>
                  <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-auto max-h-48">
                    {JSON.stringify(usuarioMapeado, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </form>
      </Tarjeta>

      {/* EJEMPLO 5: E-COMMERCE AMPLIADO */}
      <Tarjeta
        titulo="🛒 Producto E-commerce Ampliado"
        subtitulo="Gestión avanzada de propiedades de productos con mapeo a entidad Producto"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "green",
        }}
      >
        <form onSubmit={formEcommerce.handleSubmit(onSubmitEcommerce)} className="space-y-6">
          {/* Información del caso de uso */}
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
              <FaShoppingCart />
              Caso de Uso E-commerce
            </h4>
            <p className="text-sm text-green-700 dark:text-green-300 mb-3">
              Perfecto para gestionar propiedades dinámicas de productos, características especiales, 
              filtros de búsqueda, y metadatos personalizados en tiendas online.
            </p>
            <button
              type="button"
              onClick={() => cargarPlantilla('producto-ecommerce')}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaUpload />
              Cargar Producto de Ejemplo
            </button>
          </div>

          <HookFormDinamico
            pestañas={['Propiedades Básicas', 'Características']}
            tiposCamposPermitidos={CONFIGURACION_ECOMMERCE}
            cantidadMaximaCampos={40}
            basePath="productoEcommerce"
            control={formEcommerce.control}
            register={formEcommerce.register}
            errors={formEcommerce.formState.errors}
            watch={formEcommerce.watch}
            setValue={formEcommerce.setValue}
            getValues={formEcommerce.getValues}
            className="border border-green-200 dark:border-green-800 rounded-lg p-4"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaShoppingCart />
              Procesar Producto
            </button>
            <button
              type="button"
              onClick={() => formEcommerce.reset()}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaRedo />
              Limpiar
            </button>
          </div>

          {/* Resultados con mapeo */}
          {resultadoEcommerce && (
            <div className="space-y-4">
              {/* Datos originales */}
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <FaCheckCircle />
                  Datos Originales del Formulario
                </h4>
                <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-auto max-h-48">
                  {JSON.stringify(resultadoEcommerce, null, 2)}
                </pre>
              </div>

              {/* Producto mapeado */}
              {productoMapeado && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                    <FaShoppingCart />
                    Entidad Producto Mapeada
                  </h4>
                  <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-auto max-h-48">
                    {JSON.stringify(productoMapeado, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </form>
      </Tarjeta>

      {/* INFORMACIÓN TÉCNICA */}
      <Tarjeta
        titulo="📚 Información Técnica"
        subtitulo="Detalles de implementación y mejores prácticas"
        variante="defecto"
        lineaHeader={{
          mostrar: true,
          grosor: "2px",
          color: "red",
        }}
      >
        <div className="space-y-6">
          {/* Props principales */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">🔧 Props Principales</h4>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-600 dark:text-blue-400">pestañas:</strong> string[] - Nombres de las pestañas
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-blue-400">tiposCamposPermitidos:</strong> ConfiguracionCampoHook[]
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-blue-400">cantidadMaximaCampos:</strong> number - Límite por pestaña
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-blue-400">basePath:</strong> string - Ruta base en el formulario
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-blue-400">control, register, errors:</strong> React Hook Form
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-blue-400">watch, setValue, getValues:</strong> Funciones RHF
                </div>
              </div>
            </div>
          </div>

          {/* Casos de uso */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">💡 Casos de Uso Comunes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">APIs y Servicios</h5>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Headers HTTP</li>
                  <li>• Query Parameters</li>
                  <li>• Configuración OAuth</li>
                  <li>• Webhooks</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Configuraciones</h5>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Variables de entorno</li>
                  <li>• Configuración DB</li>
                  <li>• Parámetros de sistema</li>
                  <li>• Ajustes de aplicación</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h5 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Datos Flexibles</h5>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Metadatos</li>
                  <li>• Propiedades custom</li>
                  <li>• Etiquetas/Tags</li>
                  <li>• Atributos dinámicos</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">Casos Avanzados</h5>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Perfiles de usuario</li>
                  <li>• Productos e-commerce</li>
                  <li>• Formularios complejos</li>
                  <li>• Mapeo a entidades</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Helpers de mapeo */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">🔄 Helpers de Mapeo de Datos</h4>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Mapeo Específico</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong className="text-blue-600 dark:text-blue-400">mapearAUsuario():</strong> 
                      <span className="text-gray-600 dark:text-gray-400"> Convierte datos a entidad Usuario</span>
                    </div>
                    <div>
                      <strong className="text-green-600 dark:text-green-400">mapearAProducto():</strong> 
                      <span className="text-gray-600 dark:text-gray-400"> Convierte datos a entidad Producto</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Mapeo Genérico</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong className="text-yellow-600 dark:text-yellow-400">mapearAEntidadGenerica():</strong> 
                      <span className="text-gray-600 dark:text-gray-400"> Mapeo flexible con esquema personalizado</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      Permite definir reglas de mapeo personalizadas para cualquier estructura de datos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuraciones ampliadas */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">⚙️ Configuraciones Ampliadas</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">CONFIGURACION_USUARIO_AMPLIADA</h5>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <strong>Input:</strong> Campos de texto con validaciones</li>
                  <li>• <strong>Textarea:</strong> Áreas de texto extensas</li>
                  <li>• <strong>Select:</strong> Listas de opciones predefinidas</li>
                  <li>• <strong>Checkbox:</strong> Campos de verificación</li>
                  <li>• <strong>Límite:</strong> Hasta 50 campos por pestaña</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">CONFIGURACION_ECOMMERCE</h5>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• <strong>Propiedades:</strong> Campos clave-valor para productos</li>
                  <li>• <strong>Tipos de dato:</strong> String, Number, Boolean, Date</li>
                  <li>• <strong>Filtros:</strong> Campos visibles en búsquedas</li>
                  <li>• <strong>Validaciones:</strong> Campos requeridos y opcionales</li>
                  <li>• <strong>Límite:</strong> Hasta 40 campos por pestaña</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advertencias */}
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
              <FaExclamationTriangle />
              Consideraciones Importantes
            </h4>
            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• <strong>Límite de pestañas:</strong> Máximo 6 pestañas por limitaciones de React Hooks</li>
              <li>• <strong>Rendimiento:</strong> Considera el límite de campos para formularios grandes</li>
              <li>• <strong>Validación:</strong> Las validaciones se aplican a nivel de campo individual</li>
              <li>• <strong>Estado:</strong> Los datos se mantienen entre cambios de pestaña</li>
              <li>• <strong>Mapeo:</strong> Los helpers de mapeo procesan datos automáticamente al enviar</li>
              <li>• <strong>Tipos:</strong> Asegúrate de que los tipos coincidan con las entidades destino</li>
            </ul>
          </div>
        </div>
      </Tarjeta>
    </Contenedor>
  )
} 