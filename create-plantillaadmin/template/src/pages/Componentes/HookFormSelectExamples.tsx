import { useForm } from 'react-hook-form';
import HookFormSelect from '../../components/FormulariosControles/HookFormSelect/HookFormSelect';
import { 
  FaMapMarkerAlt,
  FaFlag,
  FaStar,
  FaCode,
  FaSearch,
  FaPlus
} from 'react-icons/fa';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { Contenedor } from "../../components/UI/Contenedor/Contenedor";
import { Tarjeta } from '../../components/UI/Tarjeta';

interface FormValues {
  [key: string]: string | string[];
}

export default function HookFormSelectExamples() {
  const { register, control, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();
  
  const watchedValues = watch();

  const onSubmit = (data: FormValues) => {
    console.log('📝 Datos del formulario:', data);
    alert('¡Formulario enviado! Revisa la consola para ver los datos.');
  };

  // Opciones de ejemplo
  const paisesOptions = [
    { value: 'es', label: 'España', icon: <FaFlag /> },
    { value: 'mx', label: 'México', icon: <FaFlag /> },
    { value: 'ar', label: 'Argentina', icon: <FaFlag /> },
    { value: 'co', label: 'Colombia', icon: <FaFlag /> },
    { value: 'pe', label: 'Perú', icon: <FaFlag /> },
    { value: 'cl', label: 'Chile', icon: <FaFlag /> }
  ];

  const ciudadesOptions = [
    { value: 'madrid', label: 'Madrid', description: 'Capital de España' },
    { value: 'barcelona', label: 'Barcelona', description: 'Ciudad condal' },
    { value: 'valencia', label: 'Valencia', description: 'Ciudad del Turia' },
    { value: 'sevilla', label: 'Sevilla', description: 'Capital andaluza' },
    { value: 'bilbao', label: 'Bilbao', description: 'Ciudad vasca' }
  ];

  const tecnologiasOptions = [
    { value: 'react', label: 'React', color: '#61DAFB', badge: 'Popular' },
    { value: 'vue', label: 'Vue.js', color: '#4FC08D', badge: 'Trending' },
    { value: 'angular', label: 'Angular', color: '#DD0031', badge: 'Enterprise' },
    { value: 'svelte', label: 'Svelte', color: '#FF3E00', badge: 'New' },
    { value: 'nextjs', label: 'Next.js', color: '#000000', badge: 'SSR' },
    { value: 'nuxt', label: 'Nuxt.js', color: '#00DC82', badge: 'SSR' }
  ];


  return (
    <Contenedor>
      <Breadcrumb pageName="Select Examples" />
      
      <div className="space-y-8">
        
        {/* COMPARACIÓN: REGISTER VS CONTROL */}
        <Tarjeta
          titulo="⚖️ Register vs Control - ¿Cuál usar?"
          subtitulo="Comparación práctica entre ambos métodos con ejemplos funcionales"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📚 Guía de uso:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-green-700 dark:text-green-300 mb-1">✅ Usa REGISTER cuando:</h5>
                <ul className="text-green-600 dark:text-green-400 space-y-1">
                  <li>• Select simple con opciones básicas</li>
                  <li>• No necesitas funcionalidades avanzadas</li>
                  <li>• Quieres menos código</li>
                  <li>• Formularios tradicionales</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-1">🚀 Usa CONTROL cuando:</h5>
                <ul className="text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• Selección múltiple</li>
                  <li>• Búsqueda y filtrado</li>
                  <li>• Componentes personalizados complejos</li>
                  <li>• Necesitas control total del estado</li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* MÉTODO REGISTER */}
              <div className="space-y-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                  🟢 Método REGISTER (Tradicional)
                </h4>
                
                <HookFormSelect
                  label="País con Register"
                  name="paisRegister"
                  register={register}
                  errors={errors}
                  options={paisesOptions}
                  leftIcon={<FaFlag />}
                  placeholder="Selecciona un país..."
                  description="Select simple usando register - perfecto para casos básicos"
                  colSpan="12"
                />
                
                <HookFormSelect
                  label="Ciudad con Register"
                  name="ciudadRegister"
                  register={register}
                  errors={errors}
                  options={ciudadesOptions}
                  leftIcon={<FaMapMarkerAlt />}
                  placeholder="Selecciona una ciudad..."
                  description="Los iconos se centran perfectamente con register"
                  colSpan="12"
                  required="La ciudad es requerida"
                />
              </div>
              
              {/* MÉTODO CONTROL */}
              <div className="space-y-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                  🟣 Método CONTROL (Avanzado)
                </h4>
                
                <HookFormSelect
                  label="Tecnologías con Control"
                  name="tecnologiasControl"
                  control={control}
                  errors={errors}
                  options={tecnologiasOptions}
                  multiple={true}
                  leftIcon={<FaCode />}
                  placeholder="Selecciona tecnologías..."
                  description="Selección múltiple solo funciona con control"
                  colSpan="12"
                />
                
                <HookFormSelect
                  label="Búsqueda con Control"
                  name="busquedaControl"
                  control={control}
                  errors={errors}
                  options={ciudadesOptions}
                  searchable={true}
                  leftIcon={<FaSearch />}
                  placeholder="Busca una ciudad..."
                  description="Funcionalidades avanzadas requieren control"
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
                🚀 Probar Submit (Ambos métodos funcionan)
              </button>
            </div>
          </form>
        </Tarjeta>

        {/* EJEMPLOS CON REGISTER */}
        <Tarjeta
          titulo="🟢 Ejemplos con REGISTER"
          subtitulo="Selects simples y eficientes para casos básicos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HookFormSelect
                label="Básico"
                name="basicoRegister"
                register={register}
                errors={errors}
                options={paisesOptions}
                placeholder="Selecciona..."
                colSpan="12"
              />
              
              <HookFormSelect
                label="Con Icono Izquierdo"
                name="iconoIzquierdoRegister"
                register={register}
                errors={errors}
                options={paisesOptions}
                leftIcon={<FaFlag />}
                placeholder="Con icono..."
                colSpan="12"
              />
              
              <HookFormSelect
                label="Con Icono Derecho"
                name="iconoDerechoRegister"
                register={register}
                errors={errors}
                options={paisesOptions}
                rightIcon={<FaStar />}
                placeholder="Icono derecho..."
                colSpan="12"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Probar Register
              </button>
            </div>
          </form>
        </Tarjeta>

        {/* EJEMPLOS CON CONTROL */}
        <Tarjeta
          titulo="🟣 Ejemplos con CONTROL"
          subtitulo="Funcionalidades avanzadas y componentes complejos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HookFormSelect
                label="Selección Múltiple"
                name="multipleControl"
                control={control}
                errors={errors}
                options={tecnologiasOptions}
                multiple={true}
                leftIcon={<FaCode />}
                placeholder="Múltiples opciones..."
                colSpan="12"
              />
              
              <HookFormSelect
                label="Con Búsqueda"
                name="searchableControl"
                control={control}
                errors={errors}
                options={ciudadesOptions}
                searchable={true}
                leftIcon={<FaSearch />}
                placeholder="Buscar..."
                colSpan="12"
              />
              
              <HookFormSelect
                label="Creación de Opciones"
                name="creatableControl"
                control={control}
                errors={errors}
                options={tecnologiasOptions}
                creatable={true}
                leftIcon={<FaPlus />}
                placeholder="Crear nueva opción..."
                colSpan="12"
              />
              
              <HookFormSelect
                label="Con Limpieza"
                name="clearableControl"
                control={control}
                errors={errors}
                options={paisesOptions}
                clearable={true}
                leftIcon={<FaFlag />}
                placeholder="Con botón limpiar..."
                colSpan="12"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Probar Control
              </button>
            </div>
          </form>
        </Tarjeta>

      </div>
    </Contenedor>
  );
} 
