import { useForm } from 'react-hook-form'
import { HookFormSwitcher } from '../../components/FormulariosControles/HookFormSwitcher'

interface FormValues {
  [key: string]: boolean
}

export default function HookFormSwitcherExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormSwitcher
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Switches básicos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Switches Básicos
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSwitcher
                label="Activar notificaciones"
                name="notificaciones"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormSwitcher
                label="Modo oscuro"
                name="modoOscuro"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormSwitcher
                label="Recibir emails promocionales"
                name="emailsPromocionales"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormSwitcher
                label="Sonidos del sistema"
                name="sonidosSistema"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormSwitcher
                label="Actualizaciones automáticas"
                name="actualizacionesAuto"
                register={register}
                errors={errors}
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 2: Diferentes tamaños */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Diferentes Tamaños de Columna
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSwitcher
                label="Switch de ancho completo (12) - Configuración global del sistema"
                name="configGlobal"
                register={register}
                errors={errors}
                colSpan="12"
              />
              <HookFormSwitcher
                label="Switch de medio ancho (6)"
                name="medioAncho1"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormSwitcher
                label="Switch de medio ancho (6)"
                name="medioAncho2"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormSwitcher
                label="Un tercio (4)"
                name="tercio1"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormSwitcher
                label="Un tercio (4)"
                name="tercio2"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormSwitcher
                label="Un tercio (4)"
                name="tercio3"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormSwitcher
                label="Un cuarto (3)"
                name="cuarto1"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormSwitcher
                label="Un cuarto (3)"
                name="cuarto2"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormSwitcher
                label="Un cuarto (3)"
                name="cuarto3"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormSwitcher
                label="Un cuarto (3)"
                name="cuarto4"
                register={register}
                errors={errors}
                colSpan="3"
              />
            </div>
          </div>

          {/* Sección 3: Casos de uso reales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Casos de Uso Reales
            </h2>
            
            {/* Configuración de privacidad */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Privacidad
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSwitcher
                  label="Perfil público"
                  name="perfilPublico"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Mostrar estado en línea"
                  name="estadoEnLinea"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Permitir mensajes de desconocidos"
                  name="mensajesDesconocidos"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Compartir ubicación"
                  name="compartirUbicacion"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Indexar perfil en buscadores"
                  name="indexarPerfil"
                  register={register}
                  errors={errors}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Configuración de notificaciones */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Notificaciones
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSwitcher
                  label="Notificaciones push"
                  name="notifPush"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Notificaciones por email"
                  name="notifEmail"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Notificaciones SMS"
                  name="notifSMS"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Recordatorios de eventos"
                  name="recordatoriosEventos"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Notificaciones de seguridad"
                  name="notifSeguridad"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Resumen semanal de actividad"
                  name="resumenSemanal"
                  register={register}
                  errors={errors}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Configuración de aplicación */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Aplicación
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSwitcher
                  label="Inicio automático"
                  name="inicioAutomatico"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Minimizar a bandeja"
                  name="minimizarBandeja"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Cerrar al minimizar"
                  name="cerrarMinimizar"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Guardar sesión automáticamente"
                  name="guardarSesion"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Sincronización en la nube"
                  name="sincronizacionNube"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Modo de desarrollo (mostrar logs detallados)"
                  name="modoDesarrollo"
                  register={register}
                  errors={errors}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Configuración de accesibilidad */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Accesibilidad
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSwitcher
                  label="Alto contraste"
                  name="altoContraste"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Texto grande"
                  name="textoGrande"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Reducir animaciones"
                  name="reducirAnimaciones"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Lector de pantalla"
                  name="lectorPantalla"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Navegación por teclado"
                  name="navegacionTeclado"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Configuración de rendimiento */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Rendimiento
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSwitcher
                  label="Aceleración por hardware"
                  name="aceleracionHardware"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Precarga de contenido"
                  name="precargaContenido"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormSwitcher
                  label="Compresión de datos"
                  name="compresionDatos"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Cache automático"
                  name="cacheAutomatico"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Modo de ahorro de batería"
                  name="ahorroBateria"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormSwitcher
                  label="Optimización automática de recursos del sistema"
                  name="optimizacionRecursos"
                  register={register}
                  errors={errors}
                  colSpan="12"
                />
              </div>
            </div>
          </div>

          {/* Sección 4: Estados especiales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Estados Especiales
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSwitcher
                label="Switch deshabilitado (OFF)"
                name="deshabilitadoOff"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormSwitcher
                label="Switch deshabilitado (ON)"
                name="deshabilitadoOn"
                register={register}
                errors={errors}
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 5: Vista previa de valores */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Vista Previa de Valores Activados
            </h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Estados actuales de los switches:
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
              Guardar Configuración
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 