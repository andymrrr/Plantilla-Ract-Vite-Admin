import { useForm } from 'react-hook-form'
import { HookFormTimeSelector } from '../../components/FormulariosControles/HookFormTimeSelector'
import { FiClock, FiSun, FiMoon, FiCoffee, FiCalendar, FiZap, FiTarget } from 'react-icons/fi'

interface FormValues {
  [key: string]: string
}

export default function HookFormTimeSelectorExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  // Opciones personalizadas con iconos
  const workTimeOptions = [
    { value: '30m', label: '30 min', description: 'Reunión rápida', icon: <FiZap className="w-4 h-4" /> },
    { value: '1h', label: '1 hora', description: 'Reunión estándar', icon: <FiClock className="w-4 h-4" /> },
    { value: '2h', label: '2 horas', description: 'Sesión extendida', icon: <FiTarget className="w-4 h-4" /> },
    { value: '4h', label: '4 horas', description: 'Medio día', icon: <FiSun className="w-4 h-4" /> },
    { value: '8h', label: '8 horas', description: 'Día completo', icon: <FiCalendar className="w-4 h-4" /> },
  ]

  const breakTimeOptions = [
    { value: '5m', label: '5 min', description: 'Descanso micro' },
    { value: '15m', label: '15 min', description: 'Pausa café', icon: <FiCoffee className="w-4 h-4" /> },
    { value: '30m', label: '30 min', description: 'Descanso medio' },
    { value: '1h', label: '1 hora', description: 'Almuerzo' },
  ]

  const shiftOptions = [
    { value: 'morning', label: 'Mañana', description: '6:00 - 14:00', icon: <FiSun className="w-4 h-4" /> },
    { value: 'afternoon', label: 'Tarde', description: '14:00 - 22:00', icon: <FiClock className="w-4 h-4" /> },
    { value: 'night', label: 'Noche', description: '22:00 - 6:00', icon: <FiMoon className="w-4 h-4" /> },
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormTimeSelector Mejorado
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Diferentes Variantes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Diferentes Variantes Visuales
            </h2>
            <div className="grid grid-cols-12 gap-6">
              <HookFormTimeSelector
                label="Variante Pill (por defecto)"
                name="variantPill"
                register={register}
                errors={errors}
                variant="pill"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Variante Button"
                name="variantButton"
                register={register}
                errors={errors}
                variant="button"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Variante Tabs"
                name="variantTabs"
                register={register}
                errors={errors}
                variant="tabs"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Variante Cards"
                name="variantCards"
                register={register}
                errors={errors}
                variant="cards"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Variante Minimal"
                name="variantMinimal"
                register={register}
                errors={errors}
                variant="minimal"
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Variante Outlined"
                name="variantOutlined"
                register={register}
                errors={errors}
                variant="outlined"
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Variante Filled"
                name="variantFilled"
                register={register}
                errors={errors}
                variant="filled"
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Variante Segmented"
                name="variantSegmented"
                register={register}
                errors={errors}
                variant="segmented"
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 2: Diferentes Tamaños */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Diferentes Tamaños
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTimeSelector
                label="Tamaño Pequeño (sm)"
                name="sizeSmall"
                register={register}
                errors={errors}
                size="sm"
                variant="pill"
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Tamaño Mediano (md)"
                name="sizeMedium"
                register={register}
                errors={errors}
                size="md"
                variant="pill"
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Tamaño Grande (lg)"
                name="sizeLarge"
                register={register}
                errors={errors}
                size="lg"
                variant="pill"
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 3: Diferentes Colores */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Diferentes Colores
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTimeSelector
                label="Azul (por defecto)"
                name="colorBlue"
                register={register}
                errors={errors}
                color="blue"
                variant="button"
                colSpan="3"
              />
              <HookFormTimeSelector
                label="Verde"
                name="colorGreen"
                register={register}
                errors={errors}
                color="green"
                variant="button"
                colSpan="3"
              />
              <HookFormTimeSelector
                label="Púrpura"
                name="colorPurple"
                register={register}
                errors={errors}
                color="purple"
                variant="button"
                colSpan="3"
              />
              <HookFormTimeSelector
                label="Rojo"
                name="colorRed"
                register={register}
                errors={errors}
                color="red"
                variant="button"
                colSpan="3"
              />
              <HookFormTimeSelector
                label="Amarillo"
                name="colorYellow"
                register={register}
                errors={errors}
                color="yellow"
                variant="cards"
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Índigo"
                name="colorIndigo"
                register={register}
                errors={errors}
                color="indigo"
                variant="cards"
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Rosa"
                name="colorPink"
                register={register}
                errors={errors}
                color="pink"
                variant="cards"
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 4: Orientaciones */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Orientaciones (Horizontal vs Vertical)
            </h2>
            <div className="grid grid-cols-12 gap-6">
              <HookFormTimeSelector
                label="Orientación Horizontal"
                name="orientationHorizontal"
                register={register}
                errors={errors}
                orientation="horizontal"
                variant="outlined"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Orientación Vertical"
                name="orientationVertical"
                register={register}
                errors={errors}
                orientation="vertical"
                variant="outlined"
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 5: Selección Múltiple */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Selección Múltiple
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTimeSelector
                label="Múltiples horarios (sin límite)"
                name="multipleUnlimited"
                register={register}
                errors={errors}
                allowMultiple={true}
                variant="pill"
                color="green"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Máximo 3 selecciones"
                name="multipleMax3"
                register={register}
                errors={errors}
                allowMultiple={true}
                maxSelections={3}
                variant="cards"
                color="purple"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Días de trabajo (máximo 5)"
                name="workDays"
                register={register}
                errors={errors}
                allowMultiple={true}
                maxSelections={5}
                variant="segmented"
                color="blue"
                options={[
                  { value: 'mon', label: 'Lun' },
                  { value: 'tue', label: 'Mar' },
                  { value: 'wed', label: 'Mié' },
                  { value: 'thu', label: 'Jue' },
                  { value: 'fri', label: 'Vie' },
                  { value: 'sat', label: 'Sáb' },
                  { value: 'sun', label: 'Dom' },
                ]}
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 6: Con Iconos y Descripciones */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Con Iconos y Descripciones
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTimeSelector
                label="Duración de reunión (con iconos)"
                name="meetingDuration"
                register={register}
                errors={errors}
                options={workTimeOptions}
                variant="cards"
                showDescription={true}
                color="blue"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Tiempo de descanso"
                name="breakTime"
                register={register}
                errors={errors}
                options={breakTimeOptions}
                variant="pill"
                showDescription={true}
                color="green"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Turno de trabajo"
                name="workShift"
                register={register}
                errors={errors}
                options={shiftOptions}
                variant="cards"
                showDescription={true}
                color="indigo"
                size="lg"
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 7: Estados Especiales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              7. Estados Especiales
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTimeSelector
                label="Selector deshabilitado"
                name="disabled"
                register={register}
                errors={errors}
                disabled={true}
                variant="button"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Con tooltip de ayuda"
                name="withTooltip"
                register={register}
                errors={errors}
                tooltipMessage="Selecciona el tiempo que necesitas para completar esta tarea. Puedes cambiar esta configuración más tarde."
                variant="outlined"
                color="purple"
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Opciones con algunas deshabilitadas"
                name="someDisabled"
                register={register}
                errors={errors}
                options={[
                  { value: '5m', label: '5 min', description: 'Disponible' },
                  { value: '15m', label: '15 min', description: 'No disponible', disabled: true },
                  { value: '30m', label: '30 min', description: 'Disponible' },
                  { value: '1h', label: '1 hora', description: 'No disponible', disabled: true },
                  { value: '2h', label: '2 horas', description: 'Disponible' },
                ]}
                variant="cards"
                showDescription={true}
                color="red"
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 8: Casos de Uso Reales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              8. Casos de Uso Reales
            </h2>
            
            {/* Configuración de horarios */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Horarios de Trabajo
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Hora de entrada"
                  name="entryTime"
                  register={register}
                  errors={errors}
                  options={[
                    { value: '6am', label: '6:00 AM', description: 'Turno temprano' },
                    { value: '7am', label: '7:00 AM', description: 'Horario estándar' },
                    { value: '8am', label: '8:00 AM', description: 'Horario flexible' },
                    { value: '9am', label: '9:00 AM', description: 'Horario tardío' },
                  ]}
                  variant="segmented"
                  color="blue"
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Hora de salida"
                  name="exitTime"
                  register={register}
                  errors={errors}
                  options={[
                    { value: '2pm', label: '2:00 PM', description: 'Turno temprano' },
                    { value: '3pm', label: '3:00 PM', description: 'Horario estándar' },
                    { value: '4pm', label: '4:00 PM', description: 'Horario flexible' },
                    { value: '5pm', label: '5:00 PM', description: 'Horario tardío' },
                  ]}
                  variant="segmented"
                  color="blue"
                  colSpan="6"
                />
              </div>
            </div>

            {/* Configuración de notificaciones */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Recordatorios
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Recordatorios de reuniones"
                  name="meetingReminders"
                  register={register}
                  errors={errors}
                  allowMultiple={true}
                  maxSelections={3}
                  options={[
                    { value: '5m', label: '5 min antes', icon: <FiZap className="w-4 h-4" /> },
                    { value: '15m', label: '15 min antes', icon: <FiClock className="w-4 h-4" /> },
                    { value: '30m', label: '30 min antes', icon: <FiTarget className="w-4 h-4" /> },
                    { value: '1h', label: '1 hora antes', icon: <FiCalendar className="w-4 h-4" /> },
                    { value: '1d', label: '1 día antes', icon: <FiSun className="w-4 h-4" /> },
                  ]}
                  variant="pill"
                  color="green"
                  colSpan="12"
                />
              </div>
            </div>

            {/* Configuración de disponibilidad */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Disponibilidad para Reuniones
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Horarios disponibles"
                  name="availableSlots"
                  register={register}
                  errors={errors}
                  allowMultiple={true}
                  options={[
                    { value: '9am', label: '9:00 - 10:00', description: 'Mañana temprano' },
                    { value: '10am', label: '10:00 - 11:00', description: 'Media mañana' },
                    { value: '11am', label: '11:00 - 12:00', description: 'Antes del almuerzo' },
                    { value: '2pm', label: '14:00 - 15:00', description: 'Después del almuerzo' },
                    { value: '3pm', label: '15:00 - 16:00', description: 'Media tarde' },
                    { value: '4pm', label: '16:00 - 17:00', description: 'Final del día' },
                  ]}
                  variant="cards"
                  showDescription={true}
                  color="purple"
                  orientation="vertical"
                  colSpan="12"
                />
              </div>
            </div>
          </div>

          {/* Sección 9: Vista previa de valores */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              9. Vista Previa de Valores Seleccionados
            </h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Valores seleccionados:
              </h3>
              <div className="space-y-2">
                {Object.entries(watchedValues).map(([fieldName, value]) => {
                  if (value) {
                    return (
                      <div key={fieldName} className="text-sm">
                        <strong className="text-gray-700">{fieldName}:</strong>
                        <span className="ml-2 text-gray-600">{value}</span>
                      </div>
                    )
                  }
                  return null
                })}
                {Object.keys(watchedValues).length === 0 && (
                  <p className="text-gray-500 text-sm">No hay valores seleccionados</p>
                )}
              </div>
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