import { useForm } from 'react-hook-form'
import { HookFormTextarea } from '../../components/FormulariosControles/HookFormTextTarea'
import { 
  FaComment, 
  FaEdit, 
  FaFileAlt, 
  FaQuoteLeft, 
  FaEnvelope, 
  FaUser, 
  FaBuilding,
  FaPhone,
  FaGlobe,
  FaHeart,
  FaStar,
  FaLightbulb,
  FaExclamationTriangle,
  FaCheckCircle
} from 'react-icons/fa'
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Tarjeta from "../../components/UI/Tarjeta";
import { Contenedor } from "../../components/UI/Contenedor";

interface FormValues {
  [key: string]: string
}

export default function HookFormTextareaExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('📝 Datos del formulario:', data)
    alert('¡Formulario enviado! Revisa la consola para ver los datos.')
  }

  return (
    <Contenedor>
      <Breadcrumb pageName="Textarea Examples" />
      
      <div className="space-y-8">
        
        {/* PRUEBA SIMPLE - Para verificar que funciona */}
        <Tarjeta
          titulo="🧪 Prueba Simple de Textareas"
          subtitulo="Verifica que los textareas funcionen correctamente con iconos y auto-resize"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormTextarea
                  label="✅ Textarea Simple"
                  name="testSimple"
                  register={register}
                  errors={errors}
                  placeholder="Escribe algo aquí..."
                  rows={4}
                  description="Textarea básico sin iconos"
                  colSpan="12"
                />
                
                <HookFormTextarea
                  label="💬 Con Auto-resize"
                  name="testAutoResize"
                  register={register}
                  errors={errors}
                  leftIcon={<FaComment />}
                  placeholder="Escribe y observa cómo se ajusta automáticamente..."
                  autoResize={true}
                  minRows={3}
                  maxRows={8}
                  description="Se ajusta automáticamente al contenido"
                  colSpan="12"
                />
              </div>
              
              <div className="space-y-4">
                <HookFormTextarea
                  label="📝 Con Ícono Izquierdo"
                  name="testLeftIcon"
                  register={register}
                  errors={errors}
                  leftIcon={<FaEdit />}
                  placeholder="Describe tu experiencia..."
                  rows={4}
                  description="Textarea con ícono a la izquierda"
                  colSpan="12"
                />
                
                <HookFormTextarea
                  label="🎨 Textarea Moderno"
                  name="testModern"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="purple"
                  rightIcon={<FaFileAlt />}
                  placeholder="Contenido con estilo moderno..."
                  rows={4}
                  description="Textarea con estilo moderno y sombra"
                  colSpan="12"
                />
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">📊 Valores en tiempo real:</h4>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-auto max-h-40">
                {JSON.stringify(watchedValues, null, 2)}
              </pre>
            </div>
            
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Probar Submit
              </button>
            </div>
          </form>
        </Tarjeta>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* SECCIÓN 1: VARIANTES */}
          <Tarjeta
            titulo="🎨 Diferentes Variantes"
            subtitulo="5 estilos visuales diferentes para textareas"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "blue",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormTextarea
                  label="Default - Estilo tradicional"
                  name="variantDefault"
                  register={register}
                  errors={errors}
                  variant="default"
                  placeholder="Estilo por defecto..."
                  leftIcon={<FaFileAlt />}
                  rows={4}
                  description="Borde sólido con esquinas redondeadas"
                  colSpan="12"
                />
                <HookFormTextarea
                  label="Outlined - Borde destacado"
                  name="variantOutlined"
                  register={register}
                  errors={errors}
                  variant="outlined"
                  placeholder="Borde más grueso..."
                  leftIcon={<FaFileAlt />}
                  rows={4}
                  description="Borde más prominente"
                  colSpan="12"
                />
                <HookFormTextarea
                  label="Filled - Fondo relleno"
                  name="variantFilled"
                  register={register}
                  errors={errors}
                  variant="filled"
                  placeholder="Con fondo de color..."
                  leftIcon={<FaFileAlt />}
                  rows={4}
                  description="Fondo gris sin borde"
                  colSpan="12"
                />
              </div>
              <div className="space-y-4">
                <HookFormTextarea
                  label="Underlined - Solo línea inferior"
                  name="variantUnderlined"
                  register={register}
                  errors={errors}
                  variant="underlined"
                  placeholder="Solo línea abajo..."
                  leftIcon={<FaFileAlt />}
                  rows={4}
                  description="Estilo minimalista con línea inferior"
                  colSpan="12"
                />
                <HookFormTextarea
                  label="Modern - Con sombra y efectos"
                  name="variantModern"
                  register={register}
                  errors={errors}
                  variant="modern"
                  placeholder="Estilo moderno..."
                  leftIcon={<FaFileAlt />}
                  rows={4}
                  description="Con sombra y efectos hover"
                  colSpan="12"
                />
              </div>
            </div>
          </Tarjeta>

          {/* SECCIÓN 2: COLORES */}
          <Tarjeta
            titulo="🌈 Diferentes Colores"
            subtitulo="8 colores disponibles para personalizar"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "green",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <HookFormTextarea
                label="Azul"
                name="colorBlue"
                register={register}
                errors={errors}
                color="blue"
                variant="outlined"
                placeholder="Color azul..."
                leftIcon={<FaComment />}
                rows={3}
                description="Color principal"
                colSpan="12"
              />
              <HookFormTextarea
                label="Verde"
                name="colorGreen"
                register={register}
                errors={errors}
                color="green"
                variant="outlined"
                placeholder="Color verde..."
                leftIcon={<FaCheckCircle />}
                rows={3}
                description="Éxito y confirmación"
                colSpan="12"
              />
              <HookFormTextarea
                label="Púrpura"
                name="colorPurple"
                register={register}
                errors={errors}
                color="purple"
                variant="outlined"
                placeholder="Color púrpura..."
                leftIcon={<FaHeart />}
                rows={3}
                description="Creatividad y elegancia"
                colSpan="12"
              />
              <HookFormTextarea
                label="Rojo"
                name="colorRed"
                register={register}
                errors={errors}
                color="red"
                variant="outlined"
                placeholder="Color rojo..."
                leftIcon={<FaExclamationTriangle />}
                rows={3}
                description="Alertas y errores"
                colSpan="12"
              />
              <HookFormTextarea
                label="Amarillo"
                name="colorYellow"
                register={register}
                errors={errors}
                color="yellow"
                variant="outlined"
                placeholder="Color amarillo..."
                leftIcon={<FaLightbulb />}
                rows={3}
                description="Advertencias e ideas"
                colSpan="12"
              />
              <HookFormTextarea
                label="Índigo"
                name="colorIndigo"
                register={register}
                errors={errors}
                color="indigo"
                variant="outlined"
                placeholder="Color índigo..."
                leftIcon={<FaStar />}
                rows={3}
                description="Profesional y confiable"
                colSpan="12"
              />
              <HookFormTextarea
                label="Rosa"
                name="colorPink"
                register={register}
                errors={errors}
                color="pink"
                variant="outlined"
                placeholder="Color rosa..."
                leftIcon={<FaHeart />}
                rows={3}
                description="Suave y amigable"
                colSpan="12"
              />
              <HookFormTextarea
                label="Gris"
                name="colorGray"
                register={register}
                errors={errors}
                color="gray"
                variant="outlined"
                placeholder="Color gris..."
                leftIcon={<FaComment />}
                rows={3}
                description="Neutral y versátil"
                colSpan="12"
              />
            </div>
          </Tarjeta>

                     {/* SECCIÓN 3: TAMAÑOS */}
           <Tarjeta
             titulo="📏 Diferentes Tamaños"
             subtitulo="3 tamaños con padding y tipografía escalados"
             variante="defecto"
             lineaHeader={{
               mostrar: true,
               grosor: "2px",
               color: "blue",
             }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HookFormTextarea
                label="Pequeño (SM)"
                name="sizeSmall"
                register={register}
                errors={errors}
                size="sm"
                variant="modern"
                placeholder="Textarea compacto para espacios reducidos..."
                leftIcon={<FaComment />}
                rows={4}
                description="Ideal para comentarios breves"
                colSpan="12"
              />
              <HookFormTextarea
                label="Mediano (MD)"
                name="sizeMedium"
                register={register}
                errors={errors}
                size="md"
                variant="modern"
                placeholder="Tamaño estándar para la mayoría de casos..."
                leftIcon={<FaEdit />}
                rows={4}
                description="Tamaño por defecto recomendado"
                colSpan="12"
              />
              <HookFormTextarea
                label="Grande (LG)"
                name="sizeLarge"
                register={register}
                errors={errors}
                size="lg"
                variant="modern"
                placeholder="Textarea amplio para contenido extenso..."
                leftIcon={<FaFileAlt />}
                rows={4}
                description="Para textos largos y detallados"
                colSpan="12"
              />
            </div>
          </Tarjeta>

                     {/* SECCIÓN 4: OPCIONES DE REDIMENSIONAMIENTO */}
           <Tarjeta
             titulo="↔️ Opciones de Redimensionamiento"
             subtitulo="Control sobre cómo el usuario puede redimensionar el textarea"
             variante="defecto"
             lineaHeader={{
               mostrar: true,
               grosor: "2px",
               color: "blue",
             }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <HookFormTextarea
                label="Sin Redimensionar"
                name="resizeNone"
                register={register}
                errors={errors}
                resize="none"
                variant="outlined"
                placeholder="Este textarea no se puede redimensionar..."
                leftIcon={<FaFileAlt />}
                rows={4}
                description="Tamaño fijo"
                colSpan="12"
              />
              <HookFormTextarea
                label="Solo Vertical"
                name="resizeVertical"
                register={register}
                errors={errors}
                resize="vertical"
                variant="outlined"
                placeholder="Solo se puede redimensionar verticalmente..."
                leftIcon={<FaFileAlt />}
                rows={4}
                description="Altura ajustable"
                colSpan="12"
              />
              <HookFormTextarea
                label="Solo Horizontal"
                name="resizeHorizontal"
                register={register}
                errors={errors}
                resize="horizontal"
                variant="outlined"
                placeholder="Solo se puede redimensionar horizontalmente..."
                leftIcon={<FaFileAlt />}
                rows={4}
                description="Ancho ajustable"
                colSpan="12"
              />
              <HookFormTextarea
                label="Ambas Direcciones"
                name="resizeBoth"
                register={register}
                errors={errors}
                resize="both"
                variant="outlined"
                placeholder="Se puede redimensionar en ambas direcciones..."
                leftIcon={<FaFileAlt />}
                rows={4}
                description="Completamente ajustable"
                colSpan="12"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 5: VALIDACIONES */}
          <Tarjeta
            titulo="⚙️ Validaciones y Estados"
            subtitulo="Diferentes tipos de validaciones con mensajes personalizados"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "red",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormTextarea
                  label="Campo Requerido"
                  name="required"
                  register={register}
                  errors={errors}
                  placeholder="Este campo es obligatorio..."
                  required="Este campo es requerido"
                  variant="outlined"
                  color="red"
                  leftIcon={<FaExclamationTriangle />}
                  rows={3}
                  description="Debe completarse obligatoriamente"
                  colSpan="12"
                />
                
                <HookFormTextarea
                  label="Longitud Mínima"
                  name="minLength"
                  register={register}
                  errors={errors}
                  placeholder="Mínimo 10 caracteres..."
                  minLength={{
                    value: 10,
                    message: "Debe tener al menos 10 caracteres"
                  }}
                  variant="outlined"
                  color="yellow"
                  leftIcon={<FaEdit />}
                  rows={3}
                  helperText="Escribe al menos 10 caracteres"
                  colSpan="12"
                />
              </div>
              
              <div className="space-y-4">
                <HookFormTextarea
                  label="Longitud Máxima"
                  name="maxLength"
                  register={register}
                  errors={errors}
                  placeholder="Máximo 100 caracteres..."
                  maxLength={{
                    value: 100,
                    message: "No puede exceder 100 caracteres"
                  }}
                  variant="outlined"
                  color="blue"
                  leftIcon={<FaFileAlt />}
                  rows={4}
                  helperText="Máximo 100 caracteres permitidos"
                  colSpan="12"
                />
                
                <HookFormTextarea
                  label="Campo Deshabilitado"
                  name="disabled"
                  register={register}
                  errors={errors}
                  placeholder="Este campo está deshabilitado..."
                  disabled={true}
                  variant="filled"
                  leftIcon={<FaFileAlt />}
                  rows={4}
                  description="No se puede editar"
                  colSpan="12"
                />
              </div>
            </div>
          </Tarjeta>

          {/* SECCIÓN 6: CASOS DE USO REALES - COMUNICACIÓN */}
          <Tarjeta
            titulo="💬 Casos de Uso - Comunicación"
            subtitulo="Ejemplos prácticos para mensajes y comunicación"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "blue",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HookFormTextarea
                label="Mensaje de Contacto"
                name="mensajeContacto"
                register={register}
                errors={errors}
                placeholder="Escribe tu mensaje aquí..."
                required="El mensaje es requerido"
                minLength={{
                  value: 20,
                  message: "El mensaje debe tener al menos 20 caracteres"
                }}
                variant="modern"
                color="blue"
                leftIcon={<FaEnvelope />}
                autoResize={true}
                minRows={4}
                maxRows={8}
                description="Mensaje principal de contacto"
                colSpan="12"
              />
              
              <HookFormTextarea
                label="Comentario Público"
                name="comentarioPublico"
                register={register}
                errors={errors}
                placeholder="Comparte tu opinión..."
                variant="outlined"
                color="green"
                leftIcon={<FaComment />}
                rows={5}
                description="Visible para otros usuarios"
                colSpan="12"
              />
            </div>
          </Tarjeta>

                     {/* SECCIÓN 7: CASOS DE USO REALES - CONTENIDO */}
           <Tarjeta
             titulo="📄 Casos de Uso - Contenido"
             subtitulo="Ejemplos para descripción y creación de contenido"
             variante="defecto"
             lineaHeader={{
               mostrar: true,
               grosor: "2px",
               color: "blue",
             }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HookFormTextarea
                label="Descripción del Producto"
                name="descripcionProducto"
                register={register}
                errors={errors}
                placeholder="Describe las características principales..."
                required="La descripción es requerida"
                maxLength={{
                  value: 500,
                  message: "Máximo 500 caracteres"
                }}
                variant="filled"
                color="purple"
                leftIcon={<FaFileAlt />}
                rows={5}
                helperText="Describe tu producto de manera atractiva"
                colSpan="12"
              />
              
              <HookFormTextarea
                label="Biografía Personal"
                name="biografia"
                register={register}
                errors={errors}
                placeholder="Cuéntanos sobre ti..."
                variant="modern"
                color="indigo"
                leftIcon={<FaUser />}
                autoResize={true}
                minRows={3}
                maxRows={6}
                description="Tu historia personal o profesional"
                colSpan="12"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 8: CASOS DE USO REALES - FEEDBACK */}
          <Tarjeta
            titulo="⭐ Casos de Uso - Feedback"
            subtitulo="Ejemplos para reseñas y retroalimentación"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "yellow",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HookFormTextarea
                label="Reseña del Servicio"
                name="resenaServicio"
                register={register}
                errors={errors}
                placeholder="¿Cómo fue tu experiencia?"
                required="La reseña es requerida"
                minLength={{
                  value: 15,
                  message: "Mínimo 15 caracteres"
                }}
                variant="outlined"
                color="yellow"
                leftIcon={<FaStar />}
                rows={4}
                description="Comparte tu experiencia"
                colSpan="12"
              />
              
              <HookFormTextarea
                label="Sugerencias de Mejora"
                name="sugerencias"
                register={register}
                errors={errors}
                placeholder="¿Qué podríamos mejorar?"
                variant="underlined"
                color="pink"
                leftIcon={<FaLightbulb />}
                autoResize={true}
                minRows={2}
                maxRows={5}
                description="Tus ideas son importantes"
                colSpan="12"
              />
            </div>
          </Tarjeta>

          {/* Botón de envío */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              🚀 Enviar Formulario Completo
            </button>
          </div>
        </form>
      </div>
    </Contenedor>
  )
} 