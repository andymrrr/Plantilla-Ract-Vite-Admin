import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  FaUser, 
  FaEnvelope, 
  FaCreditCard, 
  FaCheck, 
  FaCog,
  FaShoppingCart,
  FaTruck,
  FaGift,
  FaMapMarkerAlt,
  FaPhone,
  FaBuilding,
  FaCalendarAlt,
  FaLock
} from 'react-icons/fa';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Contenedor } from '../../components/UI/Contenedor';
import Tarjeta from '../../components/UI/Tarjeta/Tarjeta';
import StepByStep from '../../components/UI/StepByStep';
import { Paso, TemaStepByStep, TamanoStepByStep, VarianteStepByStep } from '../../components/UI/StepByStep/types';
import { HookFormInput } from '../../components/FormulariosControles/HookFormInput';
import { HookFormTextarea } from '../../components/FormulariosControles/HookFormTextTarea';
import { HookFormSelect } from '../../components/FormulariosControles/HookFormSelect';
import { HookFormCheckbox } from '../../components/FormulariosControles/HookFormCheckbox';
import { HookFormSwitcher } from '../../components/FormulariosControles/HookFormSwitcher';

// Interfaces para formularios
interface FormularioRegistro {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  empresa: string;
  mensaje: string;
  direccion: string;
  ciudad: string;
  pais: string;
  codigoPostal: string;
  terminosCondiciones: boolean;
  notificacionesEmail: boolean;
}

interface FormularioCompra {
  producto: string;
  cantidad: number;
  metodoPago: string;
  numeroTarjeta: string;
  fechaVencimiento: string;
  cvv: string;
  direccionEnvio: string;
  ciudadEnvio: string;
  confirmacion: boolean;
}

const StepByStepExamples: React.FC = () => {
  // Estados para diferentes ejemplos
  const [pasoRegistro, setPasoRegistro] = useState(0);
  const [pasoCompra, setPasoCompra] = useState(1);
  const [pasoConfiguracion, setPasoConfiguracion] = useState(2);
  const [pasoFormulario, setPasoFormulario] = useState(0);

  // Formularios con React Hook Form
  const formularioRegistro = useForm<FormularioRegistro>({
    defaultValues: {
      terminosCondiciones: false,
      notificacionesEmail: true
    }
  });

  const formularioCompra = useForm<FormularioCompra>({
    defaultValues: {
      cantidad: 1,
      confirmacion: false
    }
  });

  // Datos de ejemplo para registro de usuario
  const pasosRegistro: Paso[] = [
    {
      id: 1,
      titulo: 'Información Personal',
      descripcion: 'Ingresa tus datos básicos',
      icono: <FaUser />
    },
    {
      id: 2,
      titulo: 'Verificación Email',
      descripcion: 'Confirma tu dirección de correo',
      icono: <FaEnvelope />
    },
    {
      id: 3,
      titulo: 'Método de Pago',
      descripcion: 'Configura tu forma de pago',
      icono: <FaCreditCard />
    },
    {
      id: 4,
      titulo: 'Confirmación',
      descripcion: 'Revisa y confirma tu registro',
      icono: <FaCheck />
    }
  ];

  // Datos de ejemplo para proceso de compra
  const pasosCompra: Paso[] = [
    {
      id: 1,
      titulo: 'Carrito',
      descripcion: 'Revisa tus productos',
      icono: <FaShoppingCart />
    },
    {
      id: 2,
      titulo: 'Envío',
      descripcion: 'Selecciona método de envío',
      icono: <FaTruck />
    },
    {
      id: 3,
      titulo: 'Pago',
      descripcion: 'Procesa el pago',
      icono: <FaCreditCard />
    },
    {
      id: 4,
      titulo: 'Confirmación',
      descripcion: 'Pedido confirmado',
      icono: <FaGift />
    }
  ];

  // Datos de ejemplo para configuración
  const pasosConfiguracion: Paso[] = [
    {
      id: 1,
      titulo: 'Configuración Básica',
      descripcion: 'Ajustes generales del sistema'
    },
    {
      id: 2,
      titulo: 'Configuración Avanzada',
      descripcion: 'Opciones avanzadas',
      deshabilitado: true // Ejemplo de paso deshabilitado
    },
    {
      id: 3,
      titulo: 'Integración',
      descripcion: 'Conectar servicios externos',
      icono: <FaCog />
    },
    {
      id: 4,
      titulo: 'Finalización',
      descripcion: 'Guardar configuración'
    }
  ];

  // Pasos para formulario completo
  const pasosFormulario: Paso[] = [
    {
      id: 1,
      titulo: 'Datos Personales',
      descripcion: 'Información básica del usuario',
      icono: <FaUser />
    },
    {
      id: 2,
      titulo: 'Contacto',
      descripcion: 'Información de contacto',
      icono: <FaPhone />
    },
    {
      id: 3,
      titulo: 'Dirección',
      descripcion: 'Datos de ubicación',
      icono: <FaMapMarkerAlt />
    },
    {
      id: 4,
      titulo: 'Confirmación',
      descripcion: 'Revisar y enviar',
      icono: <FaCheck />
    }
  ];

  // Opciones para selects
  const opcionesPaises = [
    { value: 'mx', label: 'México' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'ca', label: 'Canadá' },
    { value: 'es', label: 'España' },
    { value: 'ar', label: 'Argentina' }
  ];

  const opcionesProductos = [
    { value: 'laptop', label: 'Laptop Gaming' },
    { value: 'mouse', label: 'Mouse Inalámbrico' },
    { value: 'teclado', label: 'Teclado Mecánico' },
    { value: 'monitor', label: 'Monitor 4K' }
  ];

  const opcionesMetodoPago = [
    { value: 'visa', label: 'Visa' },
    { value: 'mastercard', label: 'Mastercard' },
    { value: 'amex', label: 'American Express' },
    { value: 'paypal', label: 'PayPal' }
  ];

  // Validaciones para formularios
  const validarPasoFormulario = async (paso: number) => {
    const camposPorPaso = [
      ['nombre', 'apellido', 'email'], // Paso 1
      ['telefono', 'empresa'], // Paso 2
      ['direccion', 'ciudad', 'pais'], // Paso 3
      ['terminosCondiciones'] // Paso 4
    ];

    const campos = camposPorPaso[paso];
    const resultado = await formularioRegistro.trigger(campos as any);
    return resultado;
  };

  // Manejar navegación en formulario
  const siguientePasoFormulario = async () => {
    const esValido = await validarPasoFormulario(pasoFormulario);
    if (esValido && pasoFormulario < pasosFormulario.length - 1) {
      setPasoFormulario(pasoFormulario + 1);
    }
  };

  const pasoAnteriorFormulario = () => {
    if (pasoFormulario > 0) {
      setPasoFormulario(pasoFormulario - 1);
    }
  };

  // Renderizar contenido del formulario según el paso
  const renderContenidoFormulario = () => {
    switch (pasoFormulario) {
      case 0:
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4">
              <HookFormInput
                label="Nombre"
                name="nombre"
                register={(name) => formularioRegistro.register(name, { required: 'El nombre es requerido' })}
                errors={formularioRegistro.formState.errors}
                placeholder="Juan"
                leftIcon={<FaUser />}
              />
              <HookFormInput
                label="Apellido"
                name="apellido"
                register={(name) => formularioRegistro.register(name, { required: 'El apellido es requerido' })}
                errors={formularioRegistro.formState.errors}
                placeholder="Pérez"
                leftIcon={<FaUser />}
              />
            </div>
            <HookFormInput
              label="Email"
              name="email"
              register={(name) => formularioRegistro.register(name, {
                required: 'El email es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              })}
              errors={formularioRegistro.formState.errors}
              placeholder="ejemplo@correo.com"
              type="email"
              leftIcon={<FaEnvelope />}
              tooltipMessage="Ingresa un email válido"
            />
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-1 gap-6">
            <HookFormInput
              label="Teléfono"
              name="telefono"
              register={(name) => formularioRegistro.register(name, {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Teléfono inválido (10 dígitos)'
                }
              })}
              errors={formularioRegistro.formState.errors}
              placeholder="1234567890"
              leftIcon={<FaPhone />}
              tooltipMessage="Ingresa un número de 10 dígitos"
            />
            <HookFormInput
              label="Empresa"
              name="empresa"
              register={formularioRegistro.register}
              errors={formularioRegistro.formState.errors}
              placeholder="Nombre de tu empresa"
              leftIcon={<FaBuilding />}
            />
            <HookFormTextarea
              label="Mensaje"
              name="mensaje"
              register={(name) => formularioRegistro.register(name, { required: 'El mensaje es requerido' })}
              errors={formularioRegistro.formState.errors}
              placeholder="Cuéntanos sobre tu proyecto o consulta..."
            />
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 gap-6">
            <HookFormInput
              label="Dirección"
              name="direccion"
              register={(name) => formularioRegistro.register(name, { required: 'La dirección es requerida' })}
              errors={formularioRegistro.formState.errors}
              placeholder="Calle y número"
              leftIcon={<FaMapMarkerAlt />}
            />
            <div className="grid grid-cols-2 gap-4">
              <HookFormInput
                label="Ciudad"
                name="ciudad"
                register={(name) => formularioRegistro.register(name, { required: 'La ciudad es requerida' })}
                errors={formularioRegistro.formState.errors}
                placeholder="Ciudad"
              />
              <HookFormInput
                label="Código Postal"
                name="codigoPostal"
                register={formularioRegistro.register}
                errors={formularioRegistro.formState.errors}
                placeholder="12345"
              />
            </div>
            <HookFormSelect
              label="País"
              name="pais"
              register={(name) => formularioRegistro.register(name, { required: 'Selecciona un país' })}
              errors={formularioRegistro.formState.errors}
              options={opcionesPaises}
              placeholder="Selecciona tu país"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Resumen de Información
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Nombre:</strong> {formularioRegistro.watch('nombre')} {formularioRegistro.watch('apellido')}
                </div>
                <div>
                  <strong>Email:</strong> {formularioRegistro.watch('email')}
                </div>
                <div>
                  <strong>Teléfono:</strong> {formularioRegistro.watch('telefono')}
                </div>
                <div>
                  <strong>Empresa:</strong> {formularioRegistro.watch('empresa')}
                </div>
                <div className="col-span-2">
                  <strong>Dirección:</strong> {formularioRegistro.watch('direccion')}, {formularioRegistro.watch('ciudad')}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <HookFormCheckbox
                label="Acepto los términos y condiciones"
                name="terminosCondiciones"
                register={(name) => formularioRegistro.register(name, { required: 'Debes aceptar los términos' })}
                errors={formularioRegistro.formState.errors}
              />
              <HookFormSwitcher
                label="Recibir notificaciones por email"
                name="notificacionesEmail"
                register={formularioRegistro.register}
                errors={formularioRegistro.formState.errors}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Submit del formulario
  const onSubmitFormulario = (data: FormularioRegistro) => {
    console.log('Datos del formulario:', data);
    alert('¡Formulario enviado exitosamente!');
  };

  return (
    <Contenedor>
      <Breadcrumb pageName="Step by Step Examples" />
      
      <div className="space-y-8">
        
        {/* PRUEBA SIMPLE */}
        <Tarjeta
          titulo="🧪 Prueba Simple de StepByStep"
          subtitulo="Verifica que el componente funcione correctamente"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          <div className="space-y-6">
            <StepByStep
              pasos={pasosRegistro}
              pasoActual={1}
              tema="horizontal"
              variante="primary"
              tamano="medium"
              mostrarDescripcion={true}
              animaciones={true}
            />
            
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Componente básico funcionando correctamente ✅
            </div>
          </div>
        </Tarjeta>

        {/* EJEMPLO 1: PROCESO DE REGISTRO - HORIZONTAL */}
        <Tarjeta
          titulo="👤 Proceso de Registro - Horizontal"
          subtitulo="Ejemplo interactivo con navegación entre pasos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "blue",
          }}
        >
          <div className="space-y-6">
            <StepByStep
              pasos={pasosRegistro}
              pasoActual={pasoRegistro}
              onPasoClick={(paso) => setPasoRegistro(paso)}
              tema="horizontal"
              variante="primary"
              tamano="medium"
              mostrarDescripcion={true}
              permitirRetroceso={true}
              animaciones={true}
            />
            
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setPasoRegistro(Math.max(0, pasoRegistro - 1))}
                disabled={pasoRegistro === 0}
                className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition-colors"
              >
                Anterior
              </button>
              <button
                onClick={() => setPasoRegistro(Math.min(pasosRegistro.length - 1, pasoRegistro + 1))}
                disabled={pasoRegistro === pasosRegistro.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600 transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        </Tarjeta>

        {/* EJEMPLO 2: PROCESO DE COMPRA - VERTICAL */}
        <Tarjeta
          titulo="🛒 Proceso de Compra - Vertical"
          subtitulo="Layout vertical con diferentes controles"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "green",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <StepByStep
                pasos={pasosCompra}
                pasoActual={pasoCompra}
                onPasoClick={(paso) => setPasoCompra(paso)}
                tema="vertical"
                variante="success"
                tamano="large"
                mostrarDescripcion={true}
                permitirRetroceso={true}
                animaciones={true}
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setPasoCompra(Math.max(0, pasoCompra - 1))}
                disabled={pasoCompra === 0}
                className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition-colors"
              >
                Paso Anterior
              </button>
              <button
                onClick={() => setPasoCompra(Math.min(pasosCompra.length - 1, pasoCompra + 1))}
                disabled={pasoCompra === pasosCompra.length - 1}
                className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-600 transition-colors"
              >
                Siguiente Paso
              </button>
            </div>
          </div>
        </Tarjeta>

        {/* EJEMPLO 3: DIFERENTES VARIANTES Y TAMAÑOS */}
        <Tarjeta
          titulo="🎨 Variantes y Tamaños"
          subtitulo="Diferentes estilos visuales disponibles"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "purple",
          }}
        >
          <div className="space-y-8">
            {/* Tamaño Small */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                Tamaño Small - Variante Warning
              </h3>
              <StepByStep
                pasos={pasosConfiguracion}
                pasoActual={pasoConfiguracion}
                onPasoClick={(paso) => setPasoConfiguracion(paso)}
                tema="horizontal"
                variante="warning"
                tamano="small"
                mostrarDescripcion={false}
                mostrarNumeros={true}
                permitirRetroceso={true}
              />
            </div>

            {/* Tamaño Medium */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                Tamaño Medium - Variante Danger
              </h3>
              <StepByStep
                pasos={pasosConfiguracion}
                pasoActual={pasoConfiguracion}
                tema="horizontal"
                variante="danger"
                tamano="medium"
                mostrarDescripcion={true}
                permitirRetroceso={false}
              />
            </div>

            {/* Tamaño Large */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                Tamaño Large - Variante Info
              </h3>
              <StepByStep
                pasos={pasosConfiguracion}
                pasoActual={pasoConfiguracion}
                tema="horizontal"
                variante="info"
                tamano="large"
                mostrarDescripcion={true}
                permitirRetroceso={true}
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6 justify-center">
            <button
              onClick={() => setPasoConfiguracion(Math.max(0, pasoConfiguracion - 1))}
              disabled={pasoConfiguracion === 0}
              className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition-colors"
            >
              Anterior
            </button>
            <button
              onClick={() => setPasoConfiguracion(Math.min(pasosConfiguracion.length - 1, pasoConfiguracion + 1))}
              disabled={pasoConfiguracion === pasosConfiguracion.length - 1}
              className="px-4 py-2 bg-cyan-500 text-white rounded disabled:opacity-50 hover:bg-cyan-600 transition-colors"
            >
              Siguiente
            </button>
          </div>
        </Tarjeta>

        {/* EJEMPLO 4: FORMULARIO COMPLETO CON STEPBYSTEP */}
        <Tarjeta
          titulo="📝 Formulario Completo con StepByStep"
          subtitulo="Integración completa con React Hook Form y controles de formulario"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "indigo",
          }}
        >
          <form onSubmit={formularioRegistro.handleSubmit(onSubmitFormulario)} className="space-y-6">
            <StepByStep
              pasos={pasosFormulario}
              pasoActual={pasoFormulario}
              tema="horizontal"
              variante="primary"
              tamano="medium"
              mostrarDescripcion={true}
              permitirRetroceso={true}
              animaciones={true}
            />
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              {renderContenidoFormulario()}
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={pasoAnteriorFormulario}
                disabled={pasoFormulario === 0}
                className="px-6 py-2 bg-gray-500 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition-colors"
              >
                Anterior
              </button>
              
              {pasoFormulario === pasosFormulario.length - 1 ? (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Enviar Formulario
                </button>
              ) : (
                <button
                  type="button"
                  onClick={siguientePasoFormulario}
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Siguiente
                </button>
              )}
            </div>
          </form>
        </Tarjeta>

        {/* EJEMPLO 5: CON ESTILOS PERSONALIZADOS */}
        <Tarjeta
          titulo="🎨 Estilos Personalizados"
          subtitulo="Personalización avanzada con clases CSS custom"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "pink",
          }}
        >
          <StepByStep
            pasos={pasosRegistro}
            pasoActual={2}
            tema="horizontal"
            variante="primary"
            tamano="medium"
            mostrarDescripcion={true}
            estilosPersonalizados={{
              contenedor: 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-4 rounded-lg',
              titulo: 'font-bold text-purple-700 dark:text-purple-300',
              descripcion: 'text-pink-600 dark:text-pink-400'
            }}
            animaciones={true}
          />
        </Tarjeta>

        {/* DOCUMENTACIÓN DE PROPS */}
        <Tarjeta
          titulo="📚 Propiedades Disponibles"
          subtitulo="Documentación completa de todas las props del componente"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: "2px",
            color: "gray",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Props Principales:</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">pasos</code>: Array de pasos a mostrar</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">pasoActual</code>: Índice del paso actual (0-based)</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">onPasoClick</code>: Callback al hacer click en un paso</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">tema</code>: 'horizontal' | 'vertical'</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">tamano</code>: 'small' | 'medium' | 'large'</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">variante</code>: 'primary' | 'success' | 'warning' | 'danger' | 'info'</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Props Opcionales:</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">mostrarDescripcion</code>: Mostrar descripciones</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">mostrarNumeros</code>: Mostrar números en lugar de iconos</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">permitirRetroceso</code>: Permitir navegar hacia atrás</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">animaciones</code>: Habilitar animaciones</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">estilosPersonalizados</code>: Clases CSS personalizadas</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">onCambioPaso</code>: Callback al cambiar de paso</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Ejemplo de Uso:</h4>
            <pre className="text-sm text-blue-700 dark:text-blue-300 overflow-x-auto">
{`<StepByStep
  pasos={misPasos}
  pasoActual={pasoActual}
  onPasoClick={(paso, datos) => handleClick(paso, datos)}
  tema="horizontal"
  variante="primary"
  tamano="medium"
  mostrarDescripcion={true}
  permitirRetroceso={true}
  animaciones={true}
/>`}
            </pre>
          </div>
        </Tarjeta>
      </div>
    </Contenedor>
  );
};

export default StepByStepExamples; 