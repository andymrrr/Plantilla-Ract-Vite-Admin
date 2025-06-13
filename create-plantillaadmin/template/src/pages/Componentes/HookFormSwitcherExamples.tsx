import { useForm } from 'react-hook-form'
import { HookFormSwitcher } from '../../components/FormulariosControles/HookFormSwitcher'
import { 
  FaToggleOn, 
  FaToggleOff,
  FaBell,
  FaEye,
  FaLock,
  FaWifi,
  FaBluetooth,
  FaVolumeUp,
  FaMoon,
  FaSun,
  FaShieldAlt as FaShield,
  FaSync,
  FaHeart,
  FaStar,
  FaCheck,
  FaTimes
} from 'react-icons/fa'
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import Tarjeta from "../../components/UI/Tarjeta/Tarjeta"
import { Contenedor } from "../../components/UI/Contenedor"

interface FormValues {
  [key: string]: boolean
}

export default function HookFormSwitcherExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('📝 Datos del formulario:', data)
    alert('¡Formulario enviado! Revisa la consola para ver los datos.')
  }

  return (
    <Contenedor>
      <Breadcrumb pageName="Switcher Examples" />
      
      <div className="space-y-8">
        
        {/* SECCIÓN: PRUEBA SIMPLE */}
        <Tarjeta
          titulo="🔄 Prueba Simple"
          subtitulo="Switches básicos con diferentes configuraciones"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HookFormSwitcher
                label="Notificaciones"
                name="notificaciones"
                register={register}
                errors={errors}
                leftIcon={<FaBell />}
                description="Switch simple con icono"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Modo Oscuro (Activado por defecto)"
                name="modoOscuro"
                register={register}
                errors={errors}
                leftIcon={<FaMoon />}
                rightIcon={<FaSun />}
                onText="Oscuro"
                offText="Claro"
                defaultValue={true}
                description="Con iconos, textos y valor por defecto"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="WiFi (Conectado por defecto)"
                name="wifi"
                register={register}
                errors={errors}
                leftIcon={<FaWifi />}
                onText="Conectado"
                offText="Desconectado"
                defaultValue={true}
                color="green"
                description="Switch con estados de conexión activado"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Seguridad"
                name="seguridad"
                register={register}
                errors={errors}
                leftIcon={<FaShield />}
                required="La seguridad es requerida"
                description="Switch con validación requerida"
                colSpan="12"
              />
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
                🚀 Probar Submit
              </button>
            </div>
          </form>
        </Tarjeta>

        {/* SECCIÓN: VARIANTES */}
        <Tarjeta
          titulo="🎨 Diferentes Variantes"
          subtitulo="6 estilos visuales diferentes para switches"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <HookFormSwitcher
                label="Default"
                name="variantDefault"
                register={register}
                errors={errors}
                variant="default"
                description="Estilo tradicional"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Modern (Activado)"
                name="variantModern"
                register={register}
                errors={errors}
                variant="modern"
                defaultValue={true}
                description="Con sombra y efectos"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Minimal"
                name="variantMinimal"
                register={register}
                errors={errors}
                variant="minimal"
                description="Diseño minimalista"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Rounded (Activado)"
                name="variantRounded"
                register={register}
                errors={errors}
                variant="rounded"
                defaultValue={true}
                description="Bordes redondeados"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Square"
                name="variantSquare"
                register={register}
                errors={errors}
                variant="square"
                description="Bordes cuadrados"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Gradient (Activado)"
                name="variantGradient"
                register={register}
                errors={errors}
                variant="gradient"
                defaultValue={true}
                description="Con gradientes"
                colSpan="12"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Probar Variantes
              </button>
            </div>
          </form>
        </Tarjeta>

        {/* SECCIÓN: COLORES */}
        <Tarjeta
          titulo="🌈 Diferentes Colores"
          subtitulo="8 colores disponibles para personalizar switches"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "red",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <HookFormSwitcher
                label="Azul"
                name="colorBlue"
                register={register}
                errors={errors}
                color="blue"
                leftIcon={<FaCheck />}
                defaultValue={true}
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Verde"
                name="colorGreen"
                register={register}
                errors={errors}
                color="green"
                leftIcon={<FaCheck />}
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Púrpura"
                name="colorPurple"
                register={register}
                errors={errors}
                color="purple"
                leftIcon={<FaHeart />}
                defaultValue={true}
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Rojo"
                name="colorRed"
                register={register}
                errors={errors}
                color="red"
                leftIcon={<FaTimes />}
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Amarillo"
                name="colorYellow"
                register={register}
                errors={errors}
                color="yellow"
                leftIcon={<FaStar />}
                defaultValue={true}
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Índigo"
                name="colorIndigo"
                register={register}
                errors={errors}
                color="indigo"
                leftIcon={<FaSync />}
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Rosa"
                name="colorPink"
                register={register}
                errors={errors}
                color="pink"
                leftIcon={<FaHeart />}
                defaultValue={true}
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Gris"
                name="colorGray"
                register={register}
                errors={errors}
                color="gray"
                leftIcon={<FaLock />}
                colSpan="12"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Probar Colores
              </button>
            </div>
          </form>
        </Tarjeta>

        {/* SECCIÓN: TAMAÑOS */}
        <Tarjeta
          titulo="📏 Diferentes Tamaños"
          subtitulo="4 tamaños disponibles para switches"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "yellow",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <HookFormSwitcher
                label="Pequeño (SM)"
                name="sizeSmall"
                register={register}
                errors={errors}
                size="sm"
                leftIcon={<FaToggleOn />}
                defaultValue={true}
                description="Tamaño compacto"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Mediano (MD)"
                name="sizeMedium"
                register={register}
                errors={errors}
                size="md"
                leftIcon={<FaToggleOn />}
                description="Tamaño estándar"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Grande (LG)"
                name="sizeLarge"
                register={register}
                errors={errors}
                size="lg"
                leftIcon={<FaToggleOn />}
                defaultValue={true}
                description="Tamaño grande"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Extra Grande (XL)"
                name="sizeExtraLarge"
                register={register}
                errors={errors}
                size="xl"
                leftIcon={<FaToggleOn />}
                description="Tamaño extra grande"
                colSpan="12"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium"
              >
                Probar Tamaños
              </button>
            </div>
          </form>
        </Tarjeta>

        {/* SECCIÓN: FUNCIONALIDADES AVANZADAS */}
        <Tarjeta
          titulo="🚀 Funcionalidades Avanzadas"
          subtitulo="Estados especiales y configuraciones avanzadas"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HookFormSwitcher
                label="Con Estado de Carga"
                name="loading"
                register={register}
                errors={errors}
                loading={true}
                leftIcon={<FaSync />}
                description="Switch en estado de carga"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Switch Deshabilitado (Activado)"
                name="disabled"
                register={register}
                errors={errors}
                disabled={true}
                defaultValue={true}
                leftIcon={<FaLock />}
                description="Switch deshabilitado pero activado"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Con Validación"
                name="validation"
                register={register}
                errors={errors}
                required="Este switch es requerido"
                leftIcon={<FaShield />}
                description="Switch con validación requerida"
                colSpan="12"
              />
              
              <HookFormSwitcher
                label="Con Callback (Activado)"
                name="callback"
                register={register}
                errors={errors}
                leftIcon={<FaBell />}
                defaultValue={true}
                description="Switch con callback personalizado"
                colSpan="12"
                onChange={(value) => {
                  console.log('Switch callback:', value)
                  if (value) {
                    alert('¡Switch activado!')
                  }
                }}
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Probar Funcionalidades
              </button>
            </div>
          </form>
        </Tarjeta>

        {/* SECCIÓN: CASOS DE USO REALES */}
        <Tarjeta
          titulo="💼 Casos de Uso Reales"
          subtitulo="Ejemplos prácticos de configuraciones de switches"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "gray",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Configuración de Sistema */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">⚙️ Configuración de Sistema</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HookFormSwitcher
                  label="WiFi"
                  name="sistemaWifi"
                  register={register}
                  errors={errors}
                  leftIcon={<FaWifi />}
                  variant="modern"
                  color="blue"
                  onText="Conectado"
                  offText="Desconectado"
                  defaultValue={true}
                  colSpan="12"
                />
                
                <HookFormSwitcher
                  label="Bluetooth"
                  name="sistemaBluetooth"
                  register={register}
                  errors={errors}
                  leftIcon={<FaBluetooth />}
                  variant="modern"
                  color="blue"
                  onText="Activo"
                  offText="Inactivo"
                  colSpan="12"
                />
              </div>
            </div>

            {/* Configuración de Privacidad */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">🔒 Configuración de Privacidad</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HookFormSwitcher
                  label="Visibilidad del Perfil"
                  name="privacidadPerfil"
                  register={register}
                  errors={errors}
                  leftIcon={<FaEye />}
                  variant="rounded"
                  color="green"
                  onText="Público"
                  offText="Privado"
                  defaultValue={true}
                  description="Controla quién puede ver tu perfil"
                  colSpan="12"
                />
                
                <HookFormSwitcher
                  label="Autenticación de Dos Factores"
                  name="privacidad2FA"
                  register={register}
                  errors={errors}
                  leftIcon={<FaShield />}
                  variant="rounded"
                  color="red"
                  size="lg"
                  defaultValue={true}
                  required="La autenticación 2FA es recomendada"
                  description="Seguridad adicional para tu cuenta"
                  colSpan="12"
                />
              </div>
            </div>

            {/* Configuración de Notificaciones */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">🔔 Configuración de Notificaciones</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <HookFormSwitcher
                  label="Email"
                  name="notifEmail"
                  register={register}
                  errors={errors}
                  leftIcon={<FaBell />}
                  variant="minimal"
                  color="purple"
                  defaultValue={true}
                  colSpan="12"
                />
                
                <HookFormSwitcher
                  label="Push"
                  name="notifPush"
                  register={register}
                  errors={errors}
                  leftIcon={<FaBell />}
                  variant="minimal"
                  color="purple"
                  colSpan="12"
                />
                
                <HookFormSwitcher
                  label="Sonido"
                  name="notifSonido"
                  register={register}
                  errors={errors}
                  leftIcon={<FaVolumeUp />}
                  variant="minimal"
                  color="purple"
                  defaultValue={true}
                  colSpan="12"
                />
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                💾 Guardar Configuración
              </button>
            </div>
          </form>
        </Tarjeta>

      </div>
    </Contenedor>
  )
} 