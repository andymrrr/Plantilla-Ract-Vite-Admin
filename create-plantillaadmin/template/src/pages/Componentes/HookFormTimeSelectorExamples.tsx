import { useForm } from 'react-hook-form'
import { HookFormTimeSelector } from '../../components/FormulariosControles/HookFormTimeSelector'

interface FormValues {
  [key: string]: string
}

export default function HookFormTimeSelectorExamples() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  
  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          HookFormTimeSelector - Ejemplos
        </h1>
        <p className="text-gray-600">
          Ejemplos de uso del componente HookFormTimeSelector con diferentes variantes y configuraciones.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Sección 1: Diferentes Variantes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            1. Diferentes Variantes
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <HookFormTimeSelector
              label="Variante Pill"
              name="variantPill"
              register={register}
              errors={errors}
              variant="pill"
              colSpan="4"
            />
            <HookFormTimeSelector
              label="Variante Button"
              name="variantButton"
              register={register}
              errors={errors}
              variant="button"
              colSpan="4"
            />
            <HookFormTimeSelector
              label="Variante Tabs"
              name="variantTabs"
              register={register}
              errors={errors}
              variant="tabs"
              colSpan="4"
            />
            <HookFormTimeSelector
              label="Variante Cards"
              name="variantCards"
              register={register}
              errors={errors}
              variant="cards"
              colSpan="12"
            />
          </div>
        </div>

        {/* Sección 2: Diferentes Opciones */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            2. Diferentes Opciones
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <HookFormTimeSelector
              label="Opciones Básicas"
              name="basicOptions"
              register={register}
              errors={errors}
              options={[
                { value: '5m', label: '5 min' },
                { value: '15m', label: '15 min' },
                { value: '30m', label: '30 min' },
                { value: '1h', label: '1 hora' },
                { value: '2h', label: '2 horas' }
              ]}
              variant="pill"
              colSpan="6"
            />
            <HookFormTimeSelector
              label="Opciones con Tooltip"
              name="tooltipOptions"
              register={register}
              errors={errors}
              tooltipMessage="Selecciona el tiempo de notificación"
              options={[
                { value: '5m', label: '5 min' },
                { value: '15m', label: '15 min' },
                { value: '30m', label: '30 min' },
                { value: '1h', label: '1 hora' },
                { value: '2h', label: '2 horas' }
              ]}
              variant="button"
              colSpan="6"
            />
          </div>
        </div>

        {/* Sección 3: Ejemplos de Uso Real */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            3. Ejemplos de Uso Real
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <HookFormTimeSelector
              label="Tiempo de Notificación"
              name="notificationTime"
              register={register}
              errors={errors}
              tooltipMessage="¿Cuándo quieres recibir notificaciones?"
              options={[
                { value: '5m', label: '5 min antes' },
                { value: '15m', label: '15 min antes' },
                { value: '30m', label: '30 min antes' },
                { value: '1h', label: '1 hora antes' },
                { value: '1d', label: '1 día antes' }
              ]}
              variant="pill"
              colSpan="6"
            />
            <HookFormTimeSelector
              label="Horario de Trabajo"
              name="workSchedule"
              register={register}
              errors={errors}
              tooltipMessage="Selecciona tu horario preferido"
              options={[
                { value: '9am', label: '9:00 - 10:00' },
                { value: '10am', label: '10:00 - 11:00' },
                { value: '11am', label: '11:00 - 12:00' },
                { value: '2pm', label: '14:00 - 15:00' },
                { value: '3pm', label: '15:00 - 16:00' },
                { value: '4pm', label: '16:00 - 17:00' }
              ]}
              variant="cards"
              colSpan="6"
            />
          </div>
        </div>

        {/* Botón de envío */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Enviar Formulario
          </button>
        </div>
      </form>
    </div>
  )
} 