// React import removed as it's not needed in newer versions
import { useForm } from 'react-hook-form'
import { HookFormCheckbox } from '../../components/FormulariosControles/HookFormCheckbox'
import { FaHeart, FaStar, FaCheck, FaTimes, FaUser, FaBell, FaCog } from 'react-icons/fa';
import { FaShieldAlt as FaShield } from 'react-icons/fa';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Tarjeta from "../../components/UI/Tarjeta/Tarjeta";
import { Contenedor } from "../../components/UI/Contenedor/Contenedor";

interface FormValues {
  [key: string]: boolean
}

export default function HookFormCheckboxExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
    alert('¡Formulario enviado! Revisa la consola para ver los datos.')
  }

  return (
    <Contenedor>
      <Breadcrumb pageName="Checkbox Examples" />
      
      <div className="space-y-8">
        
        {/* PRUEBA SIMPLE - Para verificar que funciona */}
        <Tarjeta
          titulo="🧪 Prueba Simple de Clics"
          subtitulo="Verifica que los checkboxes respondan a los clics y cambien de color"
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
                <HookFormCheckbox
                  label="✅ Checkbox Simple"
                  name="testSimple"
                  register={register}
                  errors={errors}
                  description="Haz clic en cualquier parte para marcar/desmarcar"
                />
                
                <HookFormCheckbox
                  label="🔄 Switch Test"
                  name="testSwitch"
                  register={register}
                  errors={errors}
                  variant="switch"
                  color="blue"
                  description="Prueba el switch"
                />
              </div>
              
              <div className="space-y-4">
                <HookFormCheckbox
                  label="🎯 Button Test"
                  name="testButton"
                  register={register}
                  errors={errors}
                  variant="button"
                  color="green"
                  description="Prueba el botón"
                />
                
                <HookFormCheckbox
                  label="📋 Card Test"
                  name="testCard"
                  register={register}
                  errors={errors}
                  variant="card"
                  color="purple"
                  description="Prueba la tarjeta"
                />
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Valores en tiempo real:</h4>
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
            subtitulo="8 estilos visuales diferentes para checkboxes"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "blue",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Default - Estilo tradicional"
                  name="variantDefault"
                  register={register}
                  errors={errors}
                  variant="default"
                />
                <HookFormCheckbox
                  label="Rounded - Bordes redondeados"
                  name="variantRounded"
                  register={register}
                  errors={errors}
                  variant="rounded"
                />
                <HookFormCheckbox
                  label="Circle - Estilo circular"
                  name="variantCircle"
                  register={register}
                  errors={errors}
                  variant="circle"
                />
                <HookFormCheckbox
                  label="Minimal - Estilo minimalista"
                  name="variantMinimal"
                  register={register}
                  errors={errors}
                  variant="minimal"
                />
              </div>
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Switch - Toggle moderno"
                  name="variantSwitch"
                  register={register}
                  errors={errors}
                  variant="switch"
                />
                <HookFormCheckbox
                  label="Button - Botón seleccionable"
                  name="variantButton"
                  register={register}
                  errors={errors}
                  variant="button"
                />
                <HookFormCheckbox
                  label="Card - Tarjeta seleccionable"
                  name="variantCard"
                  register={register}
                  errors={errors}
                  variant="card"
                />
                <HookFormCheckbox
                  label="Modern - Con animaciones"
                  name="variantModern"
                  register={register}
                  errors={errors}
                  variant="modern"
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
              <HookFormCheckbox
                label="Azul"
                name="colorBlue"
                register={register}
                errors={errors}
                color="blue"
                description="Color principal"
              />
              <HookFormCheckbox
                label="Verde"
                name="colorGreen"
                register={register}
                errors={errors}
                color="green"
                description="Éxito y confirmación"
              />
              <HookFormCheckbox
                label="Púrpura"
                name="colorPurple"
                register={register}
                errors={errors}
                color="purple"
                description="Premium y especial"
              />
              <HookFormCheckbox
                label="Rojo"
                name="colorRed"
                register={register}
                errors={errors}
                color="red"
                description="Importante y alertas"
              />
              <HookFormCheckbox
                label="Amarillo"
                name="colorYellow"
                register={register}
                errors={errors}
                color="yellow"
                description="Advertencias"
              />
              <HookFormCheckbox
                label="Índigo"
                name="colorIndigo"
                register={register}
                errors={errors}
                color="indigo"
                description="Profesional"
              />
              <HookFormCheckbox
                label="Rosa"
                name="colorPink"
                register={register}
                errors={errors}
                color="pink"
                description="Creativo y divertido"
              />
              <HookFormCheckbox
                label="Gris"
                name="colorGray"
                register={register}
                errors={errors}
                color="gray"
                description="Neutral y discreto"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 3: TAMAÑOS Y POSICIONES */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            <Tarjeta
              titulo="📏 Tamaños"
              subtitulo="Diferentes tamaños disponibles"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "blue",
              }}
            >
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Pequeño (sm)"
                  name="sizeSmall"
                  register={register}
                  errors={errors}
                  size="sm"
                  description="Tamaño compacto para espacios reducidos"
                />
                <HookFormCheckbox
                  label="Mediano (md)"
                  name="sizeMedium"
                  register={register}
                  errors={errors}
                  size="md"
                  description="Tamaño estándar recomendado"
                />
                <HookFormCheckbox
                  label="Grande (lg)"
                  name="sizeLarge"
                  register={register}
                  errors={errors}
                  size="lg"
                  description="Tamaño grande para mayor visibilidad"
                />
              </div>
            </Tarjeta>

            <Tarjeta
              titulo="📍 Posiciones del Label"
              subtitulo="Diferentes posiciones del texto"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "blue",
              }}
            >
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Label a la derecha"
                  name="labelRight"
                  register={register}
                  errors={errors}
                  labelPosition="right"
                  description="Posición estándar"
                />
                <HookFormCheckbox
                  label="Label a la izquierda"
                  name="labelLeft"
                  register={register}
                  errors={errors}
                  labelPosition="left"
                  description="Posición invertida"
                />
                <HookFormCheckbox
                  label="Label arriba"
                  name="labelTop"
                  register={register}
                  errors={errors}
                  labelPosition="top"
                  description="Posición superior"
                />
                <HookFormCheckbox
                  label="Label abajo"
                  name="labelBottom"
                  register={register}
                  errors={errors}
                  labelPosition="bottom"
                  description="Posición inferior"
                />
              </div>
            </Tarjeta>

          </div>

          {/* SECCIÓN 4: ESTADOS ESPECIALES */}
          <Tarjeta
            titulo="⚙️ Estados Especiales"
            subtitulo="Disabled, required y validaciones"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "red",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HookFormCheckbox
                label="Checkbox deshabilitado"
                name="disabled"
                register={register}
                errors={errors}
                disabled={true}
                description="Este checkbox está deshabilitado"
              />
              <HookFormCheckbox
                label="Campo requerido"
                name="required"
                register={register}
                errors={errors}
                required={true}
                description="Este campo es obligatorio"
              />
              <HookFormCheckbox
                label="Con validación personalizada"
                name="withValidation"
                register={register}
                errors={errors}
                validate={(value) => {
                  if (!value) return "Debes aceptar para continuar";
                  return true;
                }}
                description="Tiene validación personalizada"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 5: ICONOS */}
          <Tarjeta
            titulo="🎯 Iconos Personalizados"
            subtitulo="Checkboxes con iconos y elementos visuales"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "yellow",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Con ícono general"
                  name="iconGeneral"
                  register={register}
                  errors={errors}
                  icon={<FaHeart />}
                  color="red"
                  description="Ícono que aparece cuando está marcado"
                />
                <HookFormCheckbox
                  label="Ícono cuando marcado"
                  name="iconChecked"
                  register={register}
                  errors={errors}
                  checkedIcon={<FaStar className="text-yellow-500" />}
                  description="Ícono personalizado para estado marcado"
                />
              </div>
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Íconos personalizados"
                  name="iconCustom"
                  register={register}
                  errors={errors}
                  checkedIcon={<FaCheck className="text-green-500" />}
                  uncheckedIcon={<FaTimes className="text-red-500" />}
                  description="Íconos diferentes para cada estado"
                />
                <HookFormCheckbox
                  label="Switch con ícono"
                  name="switchIcon"
                  register={register}
                  errors={errors}
                  variant="switch"
                  icon={<FaBell />}
                  color="purple"
                  description="Switch con ícono personalizado"
                />
              </div>
            </div>
          </Tarjeta>

          {/* SECCIÓN 6: TOOLTIPS Y DESCRIPCIONES */}
          <Tarjeta
            titulo="💬 Descripciones y Tooltips"
            subtitulo="Información adicional para los usuarios"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "blue",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HookFormCheckbox
                label="Con descripción"
                name="withDescription"
                register={register}
                errors={errors}
                description="Esta opción habilita funcionalidades adicionales en tu cuenta"
              />
              <HookFormCheckbox
                label="Con tooltip"
                name="withTooltip"
                register={register}
                errors={errors}
                tooltipMessage="Información adicional sobre esta opción"
                description="Pasa el mouse sobre el ícono ⓘ"
              />
              <HookFormCheckbox
                label="Descripción y tooltip"
                name="withBoth"
                register={register}
                errors={errors}
                description="Descripción detallada de la funcionalidad"
                tooltipMessage="Información adicional en el tooltip"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 7: CASOS DE USO REALES */}
          <Tarjeta
            titulo="🚀 Casos de Uso Reales"
            subtitulo="Ejemplos prácticos de configuración"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "green",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Configuración de Perfil
                </h4>
                <HookFormCheckbox
                  label="Perfil público"
                  name="publicProfile"
                  register={register}
                  errors={errors}
                  variant="switch"
                  color="blue"
                  description="Tu perfil será visible para otros usuarios"
                />
                <HookFormCheckbox
                  label="Mostrar email"
                  name="showEmail"
                  register={register}
                  errors={errors}
                  variant="switch"
                  color="green"
                  description="Tu email será visible en tu perfil público"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Notificaciones
                </h4>
                <HookFormCheckbox
                  label="Notificaciones Push"
                  name="pushNotifications"
                  register={register}
                  errors={errors}
                  variant="button"
                  color="blue"
                  icon={<FaBell />}
                  description="Recibir notificaciones en el dispositivo"
                />
                <HookFormCheckbox
                  label="Notificaciones Email"
                  name="emailNotifications"
                  register={register}
                  errors={errors}
                  variant="button"
                  color="green"
                  icon={<FaBell />}
                  description="Recibir notificaciones por correo"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Términos y Condiciones
                </h4>
                <HookFormCheckbox
                  label="Acepto los términos y condiciones"
                  name="acceptTerms"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="blue"
                  size="lg"
                  required={true}
                  description="He leído y acepto los términos y condiciones del servicio"
                />
                <HookFormCheckbox
                  label="Suscribirse al newsletter"
                  name="newsletter"
                  register={register}
                  errors={errors}
                  variant="switch"
                  color="purple"
                  description="Recibir actualizaciones y noticias por email (opcional)"
                />
              </div>
              
            </div>
          </Tarjeta>

          {/* BOTÓN DE ENVÍO */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg text-lg"
            >
              Guardar Configuración
            </button>
          </div>

        </form>

        {/* VISTA PREVIA DE VALORES - Separada del formulario */}
        <Tarjeta
          titulo="📊 Vista Previa de Valores"
          subtitulo="Valores seleccionados en tiempo real"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "gray",
          }}
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-auto max-h-96 whitespace-pre-wrap">
              {JSON.stringify(watchedValues, null, 2)}
            </pre>
          </div>
        </Tarjeta>

      </div>
      
    </Contenedor>
  )
} 