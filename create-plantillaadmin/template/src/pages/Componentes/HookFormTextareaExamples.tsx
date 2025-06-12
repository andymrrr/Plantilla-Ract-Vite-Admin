import { useForm } from 'react-hook-form'
import { HookFormTextarea } from '../../components/FormulariosControles/HookFormTextTarea'

interface FormValues {
  [key: string]: string
}

export default function HookFormTextareaExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormTextarea
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Tamaños básicos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Diferentes Tamaños de Textarea
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTextarea
                label="Textarea Pequeño (3 filas)"
                name="pequeno"
                register={register}
                errors={errors}
                placeholder="Escribe un comentario breve..."
                rows={3}
                colSpan="6"
              />
              <HookFormTextarea
                label="Textarea Mediano (6 filas)"
                name="mediano"
                register={register}
                errors={errors}
                placeholder="Escribe una descripción más detallada..."
                rows={6}
                colSpan="6"
              />
              <HookFormTextarea
                label="Textarea Grande (10 filas)"
                name="grande"
                register={register}
                errors={errors}
                placeholder="Escribe un texto largo, como un artículo o ensayo..."
                rows={10}
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 2: Diferentes anchos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Diferentes Anchos de Columna
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTextarea
                label="Ancho Completo (12)"
                name="ancho12"
                register={register}
                errors={errors}
                placeholder="Este textarea ocupa toda la fila disponible..."
                rows={4}
                colSpan="12"
              />
              <HookFormTextarea
                label="Medio Ancho (6)"
                name="ancho6_1"
                register={register}
                errors={errors}
                placeholder="Mitad izquierda..."
                rows={5}
                colSpan="6"
              />
              <HookFormTextarea
                label="Medio Ancho (6)"
                name="ancho6_2"
                register={register}
                errors={errors}
                placeholder="Mitad derecha..."
                rows={5}
                colSpan="6"
              />
              <HookFormTextarea
                label="Un Tercio (4)"
                name="ancho4_1"
                register={register}
                errors={errors}
                placeholder="Primera columna..."
                rows={4}
                colSpan="4"
              />
              <HookFormTextarea
                label="Un Tercio (4)"
                name="ancho4_2"
                register={register}
                errors={errors}
                placeholder="Segunda columna..."
                rows={4}
                colSpan="4"
              />
              <HookFormTextarea
                label="Un Tercio (4)"
                name="ancho4_3"
                register={register}
                errors={errors}
                placeholder="Tercera columna..."
                rows={4}
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 3: Estados especiales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Estados Especiales
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTextarea
                label="Textarea Deshabilitado"
                name="deshabilitado"
                register={register}
                errors={errors}
                placeholder="Este campo no se puede editar..."
                rows={4}
                disabled={true}
                colSpan="6"
              />
              <HookFormTextarea
                label="Con Tooltip de Ayuda"
                name="conTooltip"
                register={register}
                errors={errors}
                placeholder="Hover sobre el ícono para ver ayuda..."
                rows={4}
                tooltipMessage="Este es un mensaje de ayuda que explica cómo usar este campo correctamente"
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 4: Casos de uso reales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Casos de Uso Reales
            </h2>
            
            {/* Comentarios y feedback */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Comentarios y Feedback
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTextarea
                  label="Comentario Breve"
                  name="comentarioBreve"
                  register={register}
                  errors={errors}
                  placeholder="Deja un comentario rápido..."
                  rows={3}
                  colSpan="6"
                />
                <HookFormTextarea
                  label="Sugerencias de Mejora"
                  name="sugerencias"
                  register={register}
                  errors={errors}
                  placeholder="¿Qué podríamos mejorar?"
                  rows={3}
                  colSpan="6"
                />
                <HookFormTextarea
                  label="Reseña Detallada"
                  name="resena"
                  register={register}
                  errors={errors}
                  placeholder="Escribe una reseña completa de tu experiencia..."
                  rows={6}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Contenido y descripción */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Contenido y Descripción
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTextarea
                  label="Descripción del Producto"
                  name="descripcionProducto"
                  register={register}
                  errors={errors}
                  placeholder="Describe las características principales del producto..."
                  rows={5}
                  colSpan="6"
                />
                <HookFormTextarea
                  label="Especificaciones Técnicas"
                  name="especificaciones"
                  register={register}
                  errors={errors}
                  placeholder="Lista las especificaciones técnicas..."
                  rows={5}
                  colSpan="6"
                />
                <HookFormTextarea
                  label="Biografía Personal"
                  name="biografia"
                  register={register}
                  errors={errors}
                  placeholder="Cuéntanos sobre ti, tu experiencia y tus logros..."
                  rows={8}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Comunicación y mensajes */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Comunicación y Mensajes
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTextarea
                  label="Mensaje de Contacto"
                  name="mensajeContacto"
                  register={register}
                  errors={errors}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  colSpan="8"
                />
                <HookFormTextarea
                  label="Notas Adicionales"
                  name="notasAdicionales"
                  register={register}
                  errors={errors}
                  placeholder="Información adicional..."
                  rows={6}
                  colSpan="4"
                />
                <HookFormTextarea
                  label="Instrucciones Especiales"
                  name="instrucciones"
                  register={register}
                  errors={errors}
                  placeholder="Proporciona instrucciones detalladas..."
                  rows={5}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Contenido creativo */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Contenido Creativo
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormTextarea
                  label="Historia o Relato"
                  name="historia"
                  register={register}
                  errors={errors}
                  placeholder="Escribe una historia, anécdota o relato..."
                  rows={10}
                  colSpan="6"
                />
                <HookFormTextarea
                  label="Poema o Verso"
                  name="poema"
                  register={register}
                  errors={errors}
                  placeholder="Comparte tu poesía o versos..."
                  rows={10}
                  colSpan="6"
                />
                <HookFormTextarea
                  label="Artículo o Ensayo"
                  name="articulo"
                  register={register}
                  errors={errors}
                  placeholder="Escribe un artículo completo sobre cualquier tema..."
                  rows={15}
                  colSpan="12"
                />
              </div>
            </div>
          </div>

          {/* Sección 5: Configuraciones avanzadas */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Configuraciones Avanzadas
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormTextarea
                label="Textarea Muy Alto (20 filas)"
                name="muyAlto"
                register={register}
                errors={errors}
                placeholder="Para contenido muy extenso como documentos largos..."
                rows={20}
                colSpan="6"
              />
              <HookFormTextarea
                label="Textarea Compacto (2 filas)"
                name="compacto"
                register={register}
                errors={errors}
                placeholder="Para notas muy breves..."
                rows={2}
                colSpan="6"
              />
              <HookFormTextarea
                label="Con Tooltip Extenso"
                name="tooltipExtenso"
                register={register}
                errors={errors}
                placeholder="Este campo tiene ayuda detallada..."
                rows={4}
                tooltipMessage="Este campo acepta texto en formato markdown. Puedes usar **negrita**, *cursiva*, y otros elementos de formato. El límite es de 5000 caracteres."
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 6: Vista previa de valores */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Vista Previa de Valores Ingresados
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