import { useForm } from 'react-hook-form'
import { HookFormCheckbox } from '../../components/FormulariosControles/HookFormCheckbox'

interface FormValues {
  [key: string]: boolean
}

export default function HookFormCheckboxExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormCheckbox
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Básicos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Checkboxes Básicos
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormCheckbox
                label="Acepto términos y condiciones"
                name="terminos"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormCheckbox
                label="Suscribirse al newsletter"
                name="newsletter"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormCheckbox
                label="Recibir notificaciones por email"
                name="emailNotifications"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormCheckbox
                label="Recibir SMS"
                name="smsNotifications"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormCheckbox
                label="Modo oscuro"
                name="darkMode"
                register={register}
                errors={errors}
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 2: Con diferentes tamaños */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Diferentes Tamaños de Columna
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormCheckbox
                label="Columna completa (12)"
                name="fullWidth"
                register={register}
                errors={errors}
                colSpan="12"
              />
              <HookFormCheckbox
                label="Media columna (6)"
                name="halfWidth1"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormCheckbox
                label="Media columna (6)"
                name="halfWidth2"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormCheckbox
                label="Tercio (4)"
                name="thirdWidth1"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormCheckbox
                label="Tercio (4)"
                name="thirdWidth2"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormCheckbox
                label="Tercio (4)"
                name="thirdWidth3"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormCheckbox
                label="Cuarto (3)"
                name="quarterWidth1"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormCheckbox
                label="Cuarto (3)"
                name="quarterWidth2"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormCheckbox
                label="Cuarto (3)"
                name="quarterWidth3"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormCheckbox
                label="Cuarto (3)"
                name="quarterWidth4"
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
            
            {/* Configuración de perfil */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Perfil
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormCheckbox
                  label="Perfil público"
                  name="publicProfile"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormCheckbox
                  label="Mostrar email en perfil"
                  name="showEmail"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormCheckbox
                  label="Permitir mensajes directos"
                  name="allowDirectMessages"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormCheckbox
                  label="Mostrar estado en línea"
                  name="showOnlineStatus"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Preferencias de notificación */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Preferencias de Notificación
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormCheckbox
                  label="Notificaciones push"
                  name="pushNotifications"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormCheckbox
                  label="Notificaciones por email"
                  name="emailNotifs"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormCheckbox
                  label="Notificaciones SMS"
                  name="smsNotifs"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormCheckbox
                  label="Recordatorios de eventos"
                  name="eventReminders"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormCheckbox
                  label="Actualizaciones del sistema"
                  name="systemUpdates"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Permisos y privacidad */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Permisos y Privacidad
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormCheckbox
                  label="Compartir datos de uso para mejorar el servicio"
                  name="shareUsageData"
                  register={register}
                  errors={errors}
                  colSpan="12"
                />
                <HookFormCheckbox
                  label="Permitir cookies de terceros"
                  name="thirdPartyCookies"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormCheckbox
                  label="Análisis y estadísticas"
                  name="analytics"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
              </div>
            </div>
          </div>

          {/* Sección 4: Vista previa de valores */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Vista Previa de Valores Seleccionados
            </h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Valores actuales:
              </h3>
              <pre className="text-sm text-gray-600 overflow-auto">
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