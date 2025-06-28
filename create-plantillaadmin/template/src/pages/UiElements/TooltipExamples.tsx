import Tooltip from '../../components/UI/Tooltip';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Contenedor } from '../../components/UI/Contenedor/Contenedor';
import { Tarjeta } from '../../components/UI/Tarjeta';

export default function TooltipExamples() {
  return (
    <>
      <Breadcrumb pageName="Tooltips" />

      <Contenedor>
        {/* Posiciones del Tooltip */}
        <Tarjeta titulo="Posiciones del Tooltip" claseFooter="mb-6">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <Tooltip message="Tooltip superior" position="top">
              <button className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Arriba
              </button>
            </Tooltip>
            
            <Tooltip message="Tooltip inferior" position="bottom">
              <button className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Abajo
              </button>
            </Tooltip>
            
            <Tooltip message="Tooltip izquierdo" position="left">
              <button className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Izquierda
              </button>
            </Tooltip>
            
            <Tooltip message="Tooltip derecho" position="right">
              <button className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Derecha
              </button>
            </Tooltip>
          </div>
        </Tarjeta>

        {/* Ejemplos Básicos */}
        <Tarjeta titulo="Ejemplos Básicos" claseFooter="mb-6">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <Tooltip message="Información básica">
              <button className="inline-flex items-center justify-center rounded-md bg-black py-3 px-6 text-center font-medium text-white hover:bg-opacity-90">
                Información
              </button>
            </Tooltip>
            
            <Tooltip message="¡Operación exitosa!">
              <button className="inline-flex items-center justify-center rounded-md bg-success py-3 px-6 text-center font-medium text-white hover:bg-opacity-90">
                Éxito
              </button>
            </Tooltip>
            
            <Tooltip message="¡Advertencia importante!">
              <button className="inline-flex items-center justify-center rounded-md bg-warning py-3 px-6 text-center font-medium text-white hover:bg-opacity-90">
                Advertencia
              </button>
            </Tooltip>
            
            <Tooltip message="¡Error crítico!">
              <button className="inline-flex items-center justify-center rounded-md bg-danger py-3 px-6 text-center font-medium text-white hover:bg-opacity-90">
                Error
              </button>
            </Tooltip>
          </div>
        </Tarjeta>

        {/* Con Elementos Diversos */}
        <Tarjeta titulo="Con Elementos Diversos" claseFooter="mb-6">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Tooltip message="Información adicional sobre este elemento">
              <div className="flex items-center space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                <span className="text-blue-600 dark:text-blue-400">ℹ️</span>
                <span className="text-blue-900 dark:text-blue-100">Hover para info</span>
              </div>
            </Tooltip>
            
            <Tooltip message="Configuración avanzada del sistema" position="bottom">
              <div className="flex items-center space-x-2 p-3 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600">
                <span>⚙️</span>
                <span className="text-gray-700 dark:text-gray-300">Configuración</span>
              </div>
            </Tooltip>
            
            <Tooltip message="¡Acción peligrosa! Procede con cuidado." position="top">
              <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800">
                <span className="text-red-600 dark:text-red-400">⚠️</span>
                <span className="text-red-900 dark:text-red-100">Eliminar</span>
              </div>
            </Tooltip>
          </div>
        </Tarjeta>

        {/* Código de Ejemplo */}
        <Tarjeta titulo="Ejemplo de Uso en Código">
          <div className="bg-gray-1 dark:bg-gray-dark p-4 rounded">
            <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`<Tooltip message="Mensaje del tooltip" position="top">
  <button>Hover me</button>
</Tooltip>

// Con diferentes posiciones
<Tooltip 
  message="¡Operación exitosa!" 
  position="bottom"
>
  <button>Botón con tooltip</button>
</Tooltip>`}
            </pre>
          </div>
        </Tarjeta>
      </Contenedor>
    </>
  );
} 