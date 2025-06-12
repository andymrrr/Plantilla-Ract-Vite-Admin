import { useForm } from 'react-hook-form'
import { HookFormTimeSelector } from '../../components/FormulariosControles/HookFormTimeSelector'

interface FormValues {
  [key: string]: string
}

export default function HookFormTimeSelectorExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormTimeSelector
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Selectores básicos de tiempo */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Selectores Básicos de Tiempo
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTimeSelector
                label="Hora de inicio"
                name="horaInicio"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Hora de fin"
                name="horaFin"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Hora de almuerzo"
                name="horaAlmuerzo"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Hora de reunión"
                name="horaReunion"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Hora de cierre"
                name="horaCierre"
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
              <HookFormTimeSelector
                label="Ancho completo (12) - Horario de atención al cliente"
                name="horarioAtencion"
                register={register}
                errors={errors}
                colSpan="12"
              />
              <HookFormTimeSelector
                label="Medio ancho (6)"
                name="medioAncho1"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Medio ancho (6)"
                name="medioAncho2"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Un tercio (4)"
                name="tercio1"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Un tercio (4)"
                name="tercio2"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Un tercio (4)"
                name="tercio3"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormTimeSelector
                label="Un cuarto (3)"
                name="cuarto1"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormTimeSelector
                label="Un cuarto (3)"
                name="cuarto2"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormTimeSelector
                label="Un cuarto (3)"
                name="cuarto3"
                register={register}
                errors={errors}
                colSpan="3"
              />
              <HookFormTimeSelector
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
            
            {/* Horarios de trabajo */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Horarios de Trabajo
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Entrada Lunes"
                  name="entradaLunes"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Salida Lunes"
                  name="salidaLunes"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Entrada Martes"
                  name="entradaMartes"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Salida Martes"
                  name="salidaMartes"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Entrada Miércoles"
                  name="entradaMiercoles"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Salida Miércoles"
                  name="salidaMiercoles"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Entrada Jueves"
                  name="entradaJueves"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Salida Jueves"
                  name="salidaJueves"
                  register={register}
                  errors={errors}
                  colSpan="3"
                />
                <HookFormTimeSelector
                  label="Entrada Viernes"
                  name="entradaViernes"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Salida Viernes"
                  name="salidaViernes"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Horarios de eventos */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Programación de Eventos
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Inicio de conferencia"
                  name="inicioConferencia"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Pausa para café"
                  name="pausaCafe"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Fin de conferencia"
                  name="finConferencia"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Hora de networking"
                  name="horaNetworking"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Cena de gala"
                  name="cenaGala"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Horarios médicos */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Citas Médicas y Consultas
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Primera cita"
                  name="primeraCita"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Segunda cita"
                  name="segundaCita"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Tercera cita"
                  name="terceraCita"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Hora de medicación matutina"
                  name="medicacionMatutina"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Hora de medicación nocturna"
                  name="medicacionNocturna"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Hora de ejercicio recomendada"
                  name="horaEjercicio"
                  register={register}
                  errors={errors}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Horarios de transporte */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Horarios de Transporte
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Salida del vuelo"
                  name="salidaVuelo"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Llegada del vuelo"
                  name="llegadaVuelo"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Check-in hotel"
                  name="checkinHotel"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Salida del tren"
                  name="salidaTren"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Llegada del tren"
                  name="llegadaTren"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Horarios de servicios */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Horarios de Servicios
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTimeSelector
                  label="Apertura de tienda"
                  name="aperturaTienda"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Cierre de tienda"
                  name="cierreTienda"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Hora pico de ventas"
                  name="horaPicoVentas"
                  register={register}
                  errors={errors}
                  colSpan="4"
                />
                <HookFormTimeSelector
                  label="Servicio de limpieza"
                  name="servicioLimpieza"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Mantenimiento programado"
                  name="mantenimientoProgramado"
                  register={register}
                  errors={errors}
                  colSpan="6"
                />
                <HookFormTimeSelector
                  label="Hora de entrega de pedidos online"
                  name="entregaPedidos"
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
              <HookFormTimeSelector
                label="Selector deshabilitado"
                name="selectorDeshabilitado"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormTimeSelector
                label="Con tooltip de ayuda"
                name="conTooltipTiempo"
                register={register}
                errors={errors}
                tooltipMessage="Selecciona la hora en formato 24 horas. Por ejemplo: 14:30 para las 2:30 PM"
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 5: Vista previa de horarios */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Vista Previa de Horarios Seleccionados
            </h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Horarios configurados:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(watchedValues).map(([fieldName, time]) => {
                  if (time) {
                    return (
                      <div key={fieldName} className="text-sm bg-white p-2 rounded border">
                        <strong className="text-gray-700">{fieldName}:</strong>
                        <span className="ml-2 text-blue-600 font-mono">{time}</span>
                      </div>
                    )
                  }
                  return null
                })}
                {Object.values(watchedValues).filter(Boolean).length === 0 && (
                  <p className="text-gray-500 text-sm col-span-full">No hay horarios seleccionados</p>
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
              Guardar Horarios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 