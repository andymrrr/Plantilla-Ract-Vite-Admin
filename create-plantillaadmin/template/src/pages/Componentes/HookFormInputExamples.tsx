import { useForm } from 'react-hook-form'
import { HookFormInput } from '../../components/FormulariosControles/HookFormInput'
import { FaUser, FaEnvelope, FaLock, FaPhone, FaSearch, FaEye, FaEyeSlash, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaGlobe, FaCreditCard, FaDollarSign, FaPercentage, FaHashtag } from 'react-icons/fa';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Tarjeta from "../../components/UI/Tarjeta/Tarjeta";
import { Contenedor } from "../../components/UI/Contenedor";

interface FormValues {
  [key: string]: string
}

export default function HookFormInputExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
    alert('¡Formulario enviado! Revisa la consola para ver los datos.')
  }

  return (
    <Contenedor>
      <Breadcrumb pageName="Input Examples" />
      
      <div className="space-y-8">
        
        {/* PRUEBA SIMPLE - Para verificar que funciona */}
        <Tarjeta
          titulo="🧪 Prueba Simple de Inputs"
          subtitulo="Verifica que los inputs funcionen correctamente con iconos y estilos"
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
                <HookFormInput
                  label="✅ Input Simple"
                  name="testSimple"
                  register={register}
                  errors={errors}
                  placeholder="Escribe algo aquí"
                  description="Input básico sin iconos"
                />
                
                <HookFormInput
                  label="👤 Con Ícono Izquierdo"
                  name="testLeftIcon"
                  register={register}
                  errors={errors}
                  leftIcon={<FaUser />}
                  placeholder="Nombre de usuario"
                  description="Input con ícono a la izquierda"
                />
              </div>
              
              <div className="space-y-4">
                <HookFormInput
                  label="🔍 Con Ícono Derecho"
                  name="testRightIcon"
                  register={register}
                  errors={errors}
                  rightIcon={<FaSearch />}
                  placeholder="Buscar..."
                  description="Input con ícono a la derecha"
                />
                
                <HookFormInput
                  label="🎨 Input Moderno"
                  name="testModern"
                  register={register}
                  errors={errors}
                  variant="modern"
                  color="purple"
                  leftIcon={<FaEnvelope />}
                  placeholder="email@ejemplo.com"
                  description="Input con estilo moderno"
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
            subtitulo="5 estilos visuales diferentes para inputs"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "blue",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormInput
                  label="Default - Estilo tradicional"
                  name="variantDefault"
                  register={register}
                  errors={errors}
                  variant="default"
                  placeholder="Estilo por defecto"
                  description="Borde sólido con esquinas redondeadas"
                />
                <HookFormInput
                  label="Outlined - Borde destacado"
                  name="variantOutlined"
                  register={register}
                  errors={errors}
                  variant="outlined"
                  placeholder="Borde más grueso"
                  description="Borde más prominente"
                />
                <HookFormInput
                  label="Filled - Fondo relleno"
                  name="variantFilled"
                  register={register}
                  errors={errors}
                  variant="filled"
                  placeholder="Con fondo de color"
                  description="Fondo gris sin borde"
                />
              </div>
              <div className="space-y-4">
                <HookFormInput
                  label="Underlined - Solo línea inferior"
                  name="variantUnderlined"
                  register={register}
                  errors={errors}
                  variant="underlined"
                  placeholder="Solo línea abajo"
                  description="Estilo minimalista con línea inferior"
                />
                <HookFormInput
                  label="Modern - Con sombra y efectos"
                  name="variantModern"
                  register={register}
                  errors={errors}
                  variant="modern"
                  placeholder="Estilo moderno"
                  description="Con sombra y efectos hover"
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
              <HookFormInput
                label="Azul"
                name="colorBlue"
                register={register}
                errors={errors}
                color="blue"
                placeholder="Color azul"
                description="Color principal"
              />
              <HookFormInput
                label="Verde"
                name="colorGreen"
                register={register}
                errors={errors}
                color="green"
                placeholder="Color verde"
                description="Éxito y confirmación"
              />
              <HookFormInput
                label="Púrpura"
                name="colorPurple"
                register={register}
                errors={errors}
                color="purple"
                placeholder="Color púrpura"
                description="Premium y especial"
              />
              <HookFormInput
                label="Rojo"
                name="colorRed"
                register={register}
                errors={errors}
                color="red"
                placeholder="Color rojo"
                description="Importante y alertas"
              />
              <HookFormInput
                label="Amarillo"
                name="colorYellow"
                register={register}
                errors={errors}
                color="yellow"
                placeholder="Color amarillo"
                description="Advertencias"
              />
              <HookFormInput
                label="Índigo"
                name="colorIndigo"
                register={register}
                errors={errors}
                color="indigo"
                placeholder="Color índigo"
                description="Profesional"
              />
              <HookFormInput
                label="Rosa"
                name="colorPink"
                register={register}
                errors={errors}
                color="pink"
                placeholder="Color rosa"
                description="Creativo y divertido"
              />
              <HookFormInput
                label="Gris"
                name="colorGray"
                register={register}
                errors={errors}
                color="gray"
                placeholder="Color gris"
                description="Neutral y discreto"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 3: TAMAÑOS */}
          <Tarjeta
            titulo="📏 Diferentes Tamaños"
            subtitulo="3 tamaños disponibles para diferentes contextos"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "blue",
            }}
          >
            <div className="space-y-6">
              <HookFormInput
                label="Pequeño (sm)"
                name="sizeSmall"
                register={register}
                errors={errors}
                size="sm"
                leftIcon={<FaUser />}
                placeholder="Tamaño compacto"
                description="Ideal para espacios reducidos y formularios densos"
              />
              <HookFormInput
                label="Mediano (md)"
                name="sizeMedium"
                register={register}
                errors={errors}
                size="md"
                leftIcon={<FaEnvelope />}
                placeholder="Tamaño estándar"
                description="Tamaño recomendado para la mayoría de casos"
              />
              <HookFormInput
                label="Grande (lg)"
                name="sizeLarge"
                register={register}
                errors={errors}
                size="lg"
                leftIcon={<FaPhone />}
                placeholder="Tamaño grande"
                description="Para mayor visibilidad y accesibilidad"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 4: TIPOS DE INPUT */}
          <Tarjeta
            titulo="🔤 Tipos de Input"
            subtitulo="Diferentes tipos de campos con iconos apropiados"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "yellow",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <HookFormInput
                label="Texto"
                name="typeText"
                register={register}
                errors={errors}
                type="text"
                leftIcon={<FaUser />}
                placeholder="Nombre completo"
                description="Campo de texto básico"
              />
              <HookFormInput
                label="Email"
                name="typeEmail"
                register={register}
                errors={errors}
                type="email"
                leftIcon={<FaEnvelope />}
                placeholder="usuario@ejemplo.com"
                description="Validación automática de email"
              />
              <HookFormInput
                label="Contraseña"
                name="typePassword"
                register={register}
                errors={errors}
                type="password"
                leftIcon={<FaLock />}
                rightIcon={<FaEye />}
                placeholder="••••••••"
                description="Campo de contraseña segura"
              />
              <HookFormInput
                label="Teléfono"
                name="typePhone"
                register={register}
                errors={errors}
                type="tel"
                leftIcon={<FaPhone />}
                placeholder="+1 (555) 123-4567"
                description="Número de teléfono"
              />
              <HookFormInput
                label="Búsqueda"
                name="typeSearch"
                register={register}
                errors={errors}
                type="search"
                leftIcon={<FaSearch />}
                placeholder="Buscar..."
                description="Campo de búsqueda"
              />
              <HookFormInput
                label="URL"
                name="typeUrl"
                register={register}
                errors={errors}
                type="url"
                leftIcon={<FaGlobe />}
                placeholder="https://ejemplo.com"
                description="Dirección web"
              />
              <HookFormInput
                label="Fecha"
                name="typeDate"
                register={register}
                errors={errors}
                type="date"
                leftIcon={<FaCalendarAlt />}
                description="Selector de fecha"
              />
              <HookFormInput
                label="Hora"
                name="typeTime"
                register={register}
                errors={errors}
                type="time"
                leftIcon={<FaClock />}
                description="Selector de hora"
              />
              <HookFormInput
                label="Número"
                name="typeNumber"
                register={register}
                errors={errors}
                type="number"
                leftIcon={<FaHashtag />}
                placeholder="123"
                description="Solo números"
              />
            </div>
          </Tarjeta>

          {/* SECCIÓN 5: VALIDACIONES */}
          <Tarjeta
            titulo="⚙️ Validaciones"
            subtitulo="Campos con diferentes tipos de validación"
            variante="defecto"
            lineaHeader={{
              mostrar: true,
              grosor: "2px",
              color: "red",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <HookFormInput
                  label="Campo Requerido"
                  name="required"
                  register={register}
                  errors={errors}
                  leftIcon={<FaUser />}
                  placeholder="Este campo es obligatorio"
                  required="Este campo es requerido"
                  description="Campo obligatorio con validación"
                />
                <HookFormInput
                  label="Mínimo 5 caracteres"
                  name="minLength"
                  register={register}
                  errors={errors}
                  leftIcon={<FaLock />}
                  placeholder="Mínimo 5 caracteres"
                  minLength={{
                    value: 5,
                    message: "Debe tener al menos 5 caracteres"
                  }}
                  description="Validación de longitud mínima"
                />
                <HookFormInput
                  label="Máximo 10 caracteres"
                  name="maxLength"
                  register={register}
                  errors={errors}
                  placeholder="Máximo 10 caracteres"
                  maxLength={{
                    value: 10,
                    message: "No puede tener más de 10 caracteres"
                  }}
                  description="Validación de longitud máxima"
                />
              </div>
              <div className="space-y-4">
                <HookFormInput
                  label="Solo números"
                  name="numbersOnly"
                  register={register}
                  errors={errors}
                  leftIcon={<FaHashtag />}
                  placeholder="123456"
                  pattern={{
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números"
                  }}
                  description="Validación con expresión regular"
                />
                <HookFormInput
                  label="Email válido"
                  name="validEmail"
                  register={register}
                  errors={errors}
                  type="email"
                  leftIcon={<FaEnvelope />}
                  placeholder="email@ejemplo.com"
                  pattern={{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email no válido"
                  }}
                  required="El email es requerido"
                  description="Validación completa de email"
                />
                <HookFormInput
                  label="Campo deshabilitado"
                  name="disabled"
                  register={register}
                  errors={errors}
                  leftIcon={<FaLock />}
                  placeholder="Campo no editable"
                  disabled={true}
                  description="Campo deshabilitado"
                />
              </div>
            </div>
          </Tarjeta>

          {/* SECCIÓN 6: CASOS DE USO REALES */}
          <Tarjeta
            titulo="🚀 Casos de Uso Reales"
            subtitulo="Ejemplos prácticos de formularios"
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
                  Información Personal
                </h4>
                <HookFormInput
                  label="Nombre completo"
                  name="fullName"
                  register={register}
                  errors={errors}
                  leftIcon={<FaUser />}
                  placeholder="Juan Pérez"
                  variant="modern"
                  color="blue"
                  required="El nombre es requerido"
                  description="Nombre y apellidos completos"
                />
                <HookFormInput
                  label="Correo electrónico"
                  name="personalEmail"
                  register={register}
                  errors={errors}
                  type="email"
                  leftIcon={<FaEnvelope />}
                  placeholder="juan@ejemplo.com"
                  variant="modern"
                  color="green"
                  required="El email es requerido"
                  description="Email principal de contacto"
                />
                <HookFormInput
                  label="Teléfono"
                  name="personalPhone"
                  register={register}
                  errors={errors}
                  type="tel"
                  leftIcon={<FaPhone />}
                  placeholder="+1 (555) 123-4567"
                  variant="modern"
                  color="purple"
                  description="Número de contacto"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Dirección
                </h4>
                <HookFormInput
                  label="Dirección"
                  name="address"
                  register={register}
                  errors={errors}
                  leftIcon={<FaMapMarkerAlt />}
                  placeholder="123 Calle Principal"
                  variant="outlined"
                  color="indigo"
                  description="Dirección completa"
                />
                <HookFormInput
                  label="Ciudad"
                  name="city"
                  register={register}
                  errors={errors}
                  leftIcon={<FaMapMarkerAlt />}
                  placeholder="Madrid"
                  variant="outlined"
                  color="blue"
                  description="Ciudad de residencia"
                />
                <HookFormInput
                  label="Código postal"
                  name="zipCode"
                  register={register}
                  errors={errors}
                  leftIcon={<FaHashtag />}
                  placeholder="28001"
                  variant="outlined"
                  color="gray"
                  pattern={{
                    value: /^[0-9]{5}$/,
                    message: "Código postal debe tener 5 dígitos"
                  }}
                  description="5 dígitos"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Información de Pago
                </h4>
                <HookFormInput
                  label="Número de tarjeta"
                  name="cardNumber"
                  register={register}
                  errors={errors}
                  leftIcon={<FaCreditCard />}
                  placeholder="1234 5678 9012 3456"
                  variant="filled"
                  color="green"
                  pattern={{
                    value: /^[0-9\s]{13,19}$/,
                    message: "Número de tarjeta no válido"
                  }}
                  description="16 dígitos de la tarjeta"
                />
                <HookFormInput
                  label="Fecha de vencimiento"
                  name="expiryDate"
                  register={register}
                  errors={errors}
                  leftIcon={<FaCalendarAlt />}
                  placeholder="MM/AA"
                  variant="filled"
                  color="yellow"
                  pattern={{
                    value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                    message: "Formato: MM/AA"
                  }}
                  description="Mes y año de vencimiento"
                />
                <HookFormInput
                  label="CVV"
                  name="cvv"
                  register={register}
                  errors={errors}
                  type="password"
                  leftIcon={<FaLock />}
                  placeholder="123"
                  variant="filled"
                  color="red"
                  pattern={{
                    value: /^[0-9]{3,4}$/,
                    message: "CVV debe tener 3 o 4 dígitos"
                  }}
                  description="Código de seguridad"
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
              Guardar Información
            </button>
          </div>

        </form>

        {/* VISTA PREVIA DE VALORES - Separada del formulario */}
        <Tarjeta
          titulo="📊 Vista Previa de Valores"
          subtitulo="Valores ingresados en tiempo real"
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