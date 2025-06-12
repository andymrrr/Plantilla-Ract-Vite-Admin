import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { HookFormSelect } from '../../components/FormulariosControles/HookFormSelect'
import { FaUser, FaGlobe, FaBuilding, FaCreditCard } from 'react-icons/fa'

interface FormValues {
  [key: string]: string
}

export default function HookFormSelectExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()
  
  // Estados para manejar valores seleccionados
  const [pais, setPais] = useState('')
  const [categoria, setCategoria] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const [estado, setEstado] = useState('')

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  // Opciones para diferentes casos de uso
  const opcionesPaises = [
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'pe', label: 'Perú' },
    { value: 'cl', label: 'Chile' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'ca', label: 'Canadá' },
  ]

  const opcionesCategorias = [
    { value: 'tecnologia', label: 'Tecnología' },
    { value: 'salud', label: 'Salud' },
    { value: 'educacion', label: 'Educación' },
    { value: 'finanzas', label: 'Finanzas' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'ventas', label: 'Ventas' },
  ]

  const opcionesPrioridad = [
    { value: 'baja', label: 'Baja' },
    { value: 'media', label: 'Media' },
    { value: 'alta', label: 'Alta' },
    { value: 'critica', label: 'Crítica' },
  ]

  const opcionesEstado = [
    { value: 'activo', label: 'Activo' },
    { value: 'inactivo', label: 'Inactivo' },
    { value: 'pendiente', label: 'Pendiente' },
    { value: 'completado', label: 'Completado' },
  ]

  const opcionesGenero = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'femenino', label: 'Femenino' },
    { value: 'otro', label: 'Otro' },
    { value: 'prefiero_no_decir', label: 'Prefiero no decir' },
  ]

  const opcionesTipoDocumento = [
    { value: 'dni', label: 'DNI' },
    { value: 'pasaporte', label: 'Pasaporte' },
    { value: 'cedula', label: 'Cédula' },
    { value: 'carnet_extranjeria', label: 'Carné de Extranjería' },
  ]

  const opcionesEducacion = [
    { value: 'primaria', label: 'Educación Primaria' },
    { value: 'secundaria', label: 'Educación Secundaria' },
    { value: 'tecnico', label: 'Técnico' },
    { value: 'universitario', label: 'Universitario' },
    { value: 'posgrado', label: 'Posgrado' },
    { value: 'doctorado', label: 'Doctorado' },
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormSelect
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Selects básicos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Selects Básicos
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelect
                label="País"
                name="pais"
                options={opcionesPaises}
                register={register}
                errors={errors}
                selectedValue={pais}
                onChange={setPais}
                colSpan="6"
              />
              <HookFormSelect
                label="Categoría"
                name="categoria"
                options={opcionesCategorias}
                register={register}
                errors={errors}
                selectedValue={categoria}
                onChange={setCategoria}
                colSpan="6"
              />
              <HookFormSelect
                label="Prioridad"
                name="prioridad"
                options={opcionesPrioridad}
                register={register}
                errors={errors}
                selectedValue={prioridad}
                onChange={setPrioridad}
                colSpan="4"
              />
              <HookFormSelect
                label="Estado"
                name="estado"
                options={opcionesEstado}
                register={register}
                errors={errors}
                selectedValue={estado}
                onChange={setEstado}
                colSpan="4"
              />
              <HookFormSelect
                label="Género"
                name="genero"
                options={opcionesGenero}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 2: Selects con iconos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Selects con Iconos
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelect
                label="Tipo de Usuario"
                name="tipoUsuario"
                options={[
                  { value: 'admin', label: 'Administrador' },
                  { value: 'user', label: 'Usuario' },
                  { value: 'guest', label: 'Invitado' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                icon={<FaUser />}
                colSpan="6"
              />
              <HookFormSelect
                label="Región"
                name="region"
                options={[
                  { value: 'europa', label: 'Europa' },
                  { value: 'america', label: 'América' },
                  { value: 'asia', label: 'Asia' },
                  { value: 'africa', label: 'África' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                icon={<FaGlobe />}
                colSpan="6"
              />
              <HookFormSelect
                label="Tipo de Empresa"
                name="tipoEmpresa"
                options={[
                  { value: 'startup', label: 'Startup' },
                  { value: 'pyme', label: 'PYME' },
                  { value: 'corporacion', label: 'Corporación' },
                  { value: 'ong', label: 'ONG' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                icon={<FaBuilding />}
                colSpan="6"
              />
              <HookFormSelect
                label="Método de Pago"
                name="metodoPago"
                options={[
                  { value: 'tarjeta', label: 'Tarjeta de Crédito' },
                  { value: 'paypal', label: 'PayPal' },
                  { value: 'transferencia', label: 'Transferencia' },
                  { value: 'efectivo', label: 'Efectivo' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                icon={<FaCreditCard />}
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 3: Diferentes tamaños */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Diferentes Tamaños de Columna
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormSelect
                label="Ancho Completo (12)"
                name="ancho12"
                options={opcionesPaises}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="12"
              />
              <HookFormSelect
                label="Medio Ancho (6)"
                name="ancho6_1"
                options={opcionesCategorias}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="6"
              />
              <HookFormSelect
                label="Medio Ancho (6)"
                name="ancho6_2"
                options={opcionesPrioridad}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="6"
              />
              <HookFormSelect
                label="Un Tercio (4)"
                name="ancho4_1"
                options={opcionesEstado}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="4"
              />
              <HookFormSelect
                label="Un Tercio (4)"
                name="ancho4_2"
                options={opcionesGenero}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="4"
              />
              <HookFormSelect
                label="Un Tercio (4)"
                name="ancho4_3"
                options={opcionesTipoDocumento}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="4"
              />
              <HookFormSelect
                label="Un Cuarto (3)"
                name="ancho3_1"
                options={[
                  { value: 'si', label: 'Sí' },
                  { value: 'no', label: 'No' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="3"
              />
              <HookFormSelect
                label="Un Cuarto (3)"
                name="ancho3_2"
                options={[
                  { value: 'publico', label: 'Público' },
                  { value: 'privado', label: 'Privado' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="3"
              />
              <HookFormSelect
                label="Un Cuarto (3)"
                name="ancho3_3"
                options={[
                  { value: 'basico', label: 'Básico' },
                  { value: 'premium', label: 'Premium' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="3"
              />
              <HookFormSelect
                label="Un Cuarto (3)"
                name="ancho3_4"
                options={[
                  { value: 'activo', label: 'Activo' },
                  { value: 'inactivo', label: 'Inactivo' },
                ]}
                register={register}
                errors={errors}
                selectedValue=""
                onChange={() => {}}
                colSpan="3"
              />
            </div>
          </div>

          {/* Sección 4: Casos de uso reales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Casos de Uso Reales
            </h2>
            
            {/* Información Personal */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Información Personal
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSelect
                  label="Tipo de Documento"
                  name="tipoDocumentoPersonal"
                  options={opcionesTipoDocumento}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="4"
                />
                <HookFormSelect
                  label="País de Nacimiento"
                  name="paisNacimiento"
                  options={opcionesPaises}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="4"
                />
                <HookFormSelect
                  label="Estado Civil"
                  name="estadoCivil"
                  options={[
                    { value: 'soltero', label: 'Soltero/a' },
                    { value: 'casado', label: 'Casado/a' },
                    { value: 'divorciado', label: 'Divorciado/a' },
                    { value: 'viudo', label: 'Viudo/a' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="4"
                />
                <HookFormSelect
                  label="Nivel de Educación"
                  name="nivelEducacion"
                  options={opcionesEducacion}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelect
                  label="Idioma Preferido"
                  name="idiomaPreferido"
                  options={[
                    { value: 'es', label: 'Español' },
                    { value: 'en', label: 'Inglés' },
                    { value: 'fr', label: 'Francés' },
                    { value: 'pt', label: 'Portugués' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Información Profesional */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Información Profesional
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSelect
                  label="Área de Trabajo"
                  name="areaTrabajo"
                  options={opcionesCategorias}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelect
                  label="Nivel de Experiencia"
                  name="nivelExperiencia"
                  options={[
                    { value: 'junior', label: 'Junior (0-2 años)' },
                    { value: 'mid', label: 'Mid (2-5 años)' },
                    { value: 'senior', label: 'Senior (5+ años)' },
                    { value: 'lead', label: 'Lead/Manager' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelect
                  label="Tamaño de Empresa"
                  name="tamanoEmpresa"
                  options={[
                    { value: 'startup', label: 'Startup (1-10)' },
                    { value: 'pequena', label: 'Pequeña (11-50)' },
                    { value: 'mediana', label: 'Mediana (51-200)' },
                    { value: 'grande', label: 'Grande (200+)' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelect
                  label="Modalidad de Trabajo"
                  name="modalidadTrabajo"
                  options={[
                    { value: 'presencial', label: 'Presencial' },
                    { value: 'remoto', label: 'Remoto' },
                    { value: 'hibrido', label: 'Híbrido' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
              </div>
            </div>

            {/* Configuración de Sistema */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Configuración de Sistema
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormSelect
                  label="Zona Horaria"
                  name="zonaHoraria"
                  options={[
                    { value: 'utc-5', label: 'UTC-5 (Colombia, Perú)' },
                    { value: 'utc-3', label: 'UTC-3 (Argentina, Chile)' },
                    { value: 'utc-6', label: 'UTC-6 (México)' },
                    { value: 'utc+1', label: 'UTC+1 (España)' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelect
                  label="Tema de la Aplicación"
                  name="tema"
                  options={[
                    { value: 'claro', label: 'Claro' },
                    { value: 'oscuro', label: 'Oscuro' },
                    { value: 'auto', label: 'Automático' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="6"
                />
                <HookFormSelect
                  label="Frecuencia de Notificaciones"
                  name="frecuenciaNotificaciones"
                  options={[
                    { value: 'inmediata', label: 'Inmediata' },
                    { value: 'diaria', label: 'Resumen Diario' },
                    { value: 'semanal', label: 'Resumen Semanal' },
                    { value: 'nunca', label: 'Nunca' },
                  ]}
                  register={register}
                  errors={errors}
                  selectedValue=""
                  onChange={() => {}}
                  colSpan="12"
                />
              </div>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Datos del Formulario</h3>
                <p className="text-sm text-gray-500">Valores actuales en tiempo real</p>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Enviar Formulario
              </button>
            </div>
            
            {/* Mostrar valores en tiempo real */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <pre className="text-sm text-gray-600 overflow-auto">
                {JSON.stringify(watchedValues, null, 2)}
              </pre>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 
