// React import removed as it's not needed in newer versions
import { useForm } from 'react-hook-form'
import { HookFormCheckbox } from '../../components/FormulariosControles/HookFormCheckbox'
import { FaHeart, FaStar, FaCheck, FaTimes, FaUser, FaBell, FaCog } from 'react-icons/fa';
import { FaShieldAlt as FaShield } from 'react-icons/fa';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Tarjeta from "../../components/UI/Tarjeta";
import { Contenedor } from "../../components/UI/Contenedor";

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* SECCIÓN 1: VARIANTES Y COLORES */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Diferentes Variantes */}
            <Tarjeta
              titulo="Diferentes Variantes"
              subtitulo="8 estilos visuales diferentes para checkboxes"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "blue",
              }}
            >
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
                  label="Minimal - Estilo minimalista"
                  name="variantMinimal"
                  register={register}
                  errors={errors}
                  variant="minimal"
                />
                <HookFormCheckbox
                  label="Modern - Con animaciones"
                  name="variantModern"
                  register={register}
                  errors={errors}
                  variant="modern"
                />
              </div>
            </Tarjeta>

            {/* Diferentes Colores */}
            <Tarjeta
              titulo="Diferentes Colores"
              subtitulo="8 colores disponibles para personalizar"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "green",
              }}
            >
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Azul - Color principal"
                  name="colorBlue"
                  register={register}
                  errors={errors}
                  color="blue"
                />
                <HookFormCheckbox
                  label="Verde - Éxito y confirmación"
                  name="colorGreen"
                  register={register}
                  errors={errors}
                  color="green"
                />
                <HookFormCheckbox
                  label="Púrpura - Premium y especial"
                  name="colorPurple"
                  register={register}
                  errors={errors}
                  color="purple"
                />
                <HookFormCheckbox
                  label="Rojo - Importante y alertas"
                  name="colorRed"
                  register={register}
                  errors={errors}
                  color="red"
                />
                <HookFormCheckbox
                  label="Amarillo - Advertencias"
                  name="colorYellow"
                  register={register}
                  errors={errors}
                  color="yellow"
                />
                <HookFormCheckbox
                  label="Índigo - Profesional"
                  name="colorIndigo"
                  register={register}
                  errors={errors}
                  color="indigo"
                />
                <HookFormCheckbox
                  label="Rosa - Creativo y divertido"
                  name="colorPink"
                  register={register}
                  errors={errors}
                  color="pink"
                />
                <HookFormCheckbox
                  label="Gris - Neutral y discreto"
                  name="colorGray"
                  register={register}
                  errors={errors}
                  color="gray"
                />
              </div>
            </Tarjeta>

          </div>

          {/* SECCIÓN 2: TAMAÑOS Y POSICIONES */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Tamaños y Posiciones */}
            <Tarjeta
              titulo="Tamaños y Posiciones"
              subtitulo="Diferentes tamaños y posiciones del label"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "blue",
              }}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">
                    Tamaños
                  </h4>
                  <div className="space-y-3">
                    <HookFormCheckbox
                      label="Pequeño (sm)"
                      name="sizeSmall"
                      register={register}
                      errors={errors}
                      size="sm"
                    />
                    <HookFormCheckbox
                      label="Mediano (md)"
                      name="sizeMedium"
                      register={register}
                      errors={errors}
                      size="md"
                    />
                    <HookFormCheckbox
                      label="Grande (lg)"
                      name="sizeLarge"
                      register={register}
                      errors={errors}
                      size="lg"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">
                    Posiciones del Label
                  </h4>
                  <div className="space-y-3">
                    <HookFormCheckbox
                      label="Label a la derecha"
                      name="labelRight"
                      register={register}
                      errors={errors}
                      labelPosition="right"
                    />
                    <HookFormCheckbox
                      label="Label a la izquierda"
                      name="labelLeft"
                      register={register}
                      errors={errors}
                      labelPosition="left"
                    />
                    <HookFormCheckbox
                      label="Label arriba"
                      name="labelTop"
                      register={register}
                      errors={errors}
                      labelPosition="top"
                    />
                    <HookFormCheckbox
                      label="Label abajo"
                      name="labelBottom"
                      register={register}
                      errors={errors}
                      labelPosition="bottom"
                    />
                  </div>
                </div>
              </div>
            </Tarjeta>

            {/* Estados Especiales */}
            <Tarjeta
              titulo="Estados Especiales"
              subtitulo="Disabled, required y validaciones"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "red",
              }}
            >
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Checkbox deshabilitado"
                  name="disabled"
                  register={register}
                  errors={errors}
                  disabled={true}
                />
                <HookFormCheckbox
                  label="Campo requerido"
                  name="required"
                  register={register}
                  errors={errors}
                  required={true}
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
                />
              </div>
            </Tarjeta>

          </div>

          {/* SECCIÓN 3: ICONOS Y DESCRIPCIONES */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            {/* Iconos Personalizados */}
            <Tarjeta
              titulo="Iconos Personalizados"
              subtitulo="Checkboxes con iconos y elementos visuales"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "yellow",
              }}
            >
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Con ícono general"
                  name="iconGeneral"
                  register={register}
                  errors={errors}
                  icon={<FaHeart />}
                  color="red"
                />
                <HookFormCheckbox
                  label="Ícono cuando marcado"
                  name="iconChecked"
                  register={register}
                  errors={errors}
                  checkedIcon={<FaStar className="text-yellow-500" />}
                />
                <HookFormCheckbox
                  label="Íconos personalizados"
                  name="iconCustom"
                  register={register}
                  errors={errors}
                  checkedIcon={<FaCheck className="text-green-500" />}
                  uncheckedIcon={<FaTimes className="text-red-500" />}
                />
                <HookFormCheckbox
                  label="Switch con ícono"
                  name="switchIcon"
                  register={register}
                  errors={errors}
                  variant="switch"
                  icon={<FaBell />}
                  color="purple"
                />
              </div>
            </Tarjeta>

            {/* Descripciones y Tooltips */}
            <Tarjeta
              titulo="Descripciones y Tooltips"
              subtitulo="Información adicional para los usuarios"
              variante="defecto"
              lineaHeader={{
                mostrar: true,
                grosor: "2px",
                color: "blue",
              }}
            >
              <div className="space-y-4">
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

          </div>

          {/* SECCIÓN 4: COMBINACIONES AVANZADAS */}
          <Tarjeta
            titulo="Combinaciones Avanzadas"
            subtitulo="Ejemplos complejos combinando múltiples características"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "red",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Switch grande con ícono"
                  name="advancedSwitch"
                  register={register}
                  errors={errors}
                  variant="switch"
                  size="lg"
                  color="green"
                  icon={<FaShield />}
                  description="Activar modo de seguridad avanzada"
                  tooltipMessage="Esto habilitará protecciones adicionales"
                />
                <HookFormCheckbox
                  label="Card moderna con validación"
                  name="advancedCard"
                  register={register}
                  errors={errors}
                  variant="card"
                  color="purple"
                  size="lg"
                  icon={<FaUser />}
                  description="Perfil premium con beneficios exclusivos"
                  required={true}
                />
              </div>
              <div className="space-y-4">
                <HookFormCheckbox
                  label="Button con íconos personalizados"
                  name="advancedButton"
                  register={register}
                  errors={errors}
                  variant="button"
                  color="indigo"
                  size="md"
                  checkedIcon={<FaCheck />}
                  uncheckedIcon={<FaTimes />}
                  labelPosition="left"
                />
                <HookFormCheckbox
                  label="Modern circular con tooltip"
                  name="advancedModern"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="pink"
                  size="lg"
                  icon={<FaCog />}
                  tooltipMessage="Configuración avanzada del sistema"
                  description="Habilita opciones de configuración avanzadas"
                />
              </div>
            </div>
          </Tarjeta>

          {/* SECCIÓN 5: CASOS DE USO REALES */}
          <Tarjeta
            titulo="Casos de Uso Reales"
            subtitulo="Ejemplos prácticos de configuración"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "green",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">
                  Configuración de Perfil
                </h4>
                <div className="space-y-3">
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
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">
                  Notificaciones
                </h4>
                <div className="space-y-3">
                  <HookFormCheckbox
                    label="Push"
                    name="pushNotifications"
                    register={register}
                    errors={errors}
                    variant="button"
                    color="blue"
                    icon={<FaBell />}
                  />
                  <HookFormCheckbox
                    label="Email"
                    name="emailNotifications"
                    register={register}
                    errors={errors}
                    variant="button"
                    color="green"
                    icon={<FaBell />}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">
                  Términos y Condiciones
                </h4>
                <div className="space-y-3">
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
              
            </div>
          </Tarjeta>

        </form>

        {/* VISTA PREVIA DE VALORES - Separada del formulario */}
        <Tarjeta
          titulo="Vista Previa de Valores"
          subtitulo="Valores seleccionados en tiempo real"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "gray",
          }}
        >
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-auto max-h-96">
                {JSON.stringify(watchedValues, null, 2)}
              </pre>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg"
              >
                Guardar Configuración
              </button>
            </div>
          </div>
        </Tarjeta>

      </div>
      
    </Contenedor>
  )
} 