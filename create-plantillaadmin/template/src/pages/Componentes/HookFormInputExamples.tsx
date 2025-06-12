import { useForm } from 'react-hook-form'
import { HookFormInput } from '../../components/FormulariosControles/HookFormInput'

interface FormValues {
  [key: string]: string
}

export default function HookFormInputExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormInput
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Tipos básicos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Diferentes Tipos de Input
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormInput
                label="Texto Normal"
                name="texto"
                register={register}
                errors={errors}
                type="text"
                placeholder="Ingresa texto aquí"
                colSpan="6"
              />
              <HookFormInput
                label="Email"
                name="email"
                register={register}
                errors={errors}
                type="email"
                placeholder="usuario@ejemplo.com"
                colSpan="6"
              />
              <HookFormInput
                label="Contraseña"
                name="password"
                register={register}
                errors={errors}
                type="password"
                placeholder="••••••••"
                colSpan="6"
              />
              <HookFormInput
                label="Número"
                name="numero"
                register={register}
                errors={errors}
                type="number"
                placeholder="123"
                colSpan="6"
              />
              <HookFormInput
                label="Teléfono"
                name="telefono"
                register={register}
                errors={errors}
                type="tel"
                placeholder="+1 (555) 123-4567"
                colSpan="6"
              />
              <HookFormInput
                label="URL"
                name="url"
                register={register}
                errors={errors}
                type="url"
                placeholder="https://ejemplo.com"
                colSpan="6"
              />
              <HookFormInput
                label="Fecha"
                name="fecha"
                register={register}
                errors={errors}
                type="date"
                colSpan="4"
              />
              <HookFormInput
                label="Hora"
                name="hora"
                register={register}
                errors={errors}
                type="time"
                colSpan="4"
              />
              <HookFormInput
                label="Color"
                name="color"
                register={register}
                errors={errors}
                type="color"
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 2: Validaciones */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Inputs con Validaciones
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormInput
                label="Campo Requerido"
                name="requerido"
                register={register}
                errors={errors}
                type="text"
                placeholder="Este campo es obligatorio"
                required="Este campo es requerido"
                colSpan="6"
              />
              <HookFormInput
                label="Mínimo 5 caracteres"
                name="minimo"
                register={register}
                errors={errors}
                type="text"
                placeholder="Mínimo 5 caracteres"
                minLength={{
                  value: 5,
                  message: "Debe tener al menos 5 caracteres"
                }}
                colSpan="6"
              />
              <HookFormInput
                label="Máximo 10 caracteres"
                name="maximo"
                register={register}
                errors={errors}
                type="text"
                placeholder="Máximo 10 caracteres"
                maxLength={{
                  value: 10,
                  message: "No puede tener más de 10 caracteres"
                }}
                colSpan="6"
              />
              <HookFormInput
                label="Solo números"
                name="soloNumeros"
                register={register}
                errors={errors}
                type="text"
                placeholder="Solo números"
                pattern={{
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números"
                }}
                colSpan="6"
              />
              <HookFormInput
                label="Email válido"
                name="emailValido"
                register={register}
                errors={errors}
                type="email"
                placeholder="email@ejemplo.com"
                pattern={{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email no válido"
                }}
                required="El email es requerido"
                colSpan="12"
              />
            </div>
          </div>

          {/* Sección 3: Diferentes tamaños */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Diferentes Tamaños de Columna
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormInput
                label="Ancho completo (12)"
                name="ancho12"
                register={register}
                errors={errors}
                type="text"
                placeholder="Ocupa toda la fila"
                colSpan="12"
              />
              <HookFormInput
                label="Medio ancho (6)"
                name="ancho6_1"
                register={register}
                errors={errors}
                type="text"
                placeholder="Mitad izquierda"
                colSpan="6"
              />
              <HookFormInput
                label="Medio ancho (6)"
                name="ancho6_2"
                register={register}
                errors={errors}
                type="text"
                placeholder="Mitad derecha"
                colSpan="6"
              />
              <HookFormInput
                label="Tercio (4)"
                name="ancho4_1"
                register={register}
                errors={errors}
                type="text"
                placeholder="1/3"
                colSpan="4"
              />
              <HookFormInput
                label="Tercio (4)"
                name="ancho4_2"
                register={register}
                errors={errors}
                type="text"
                placeholder="2/3"
                colSpan="4"
              />
              <HookFormInput
                label="Tercio (4)"
                name="ancho4_3"
                register={register}
                errors={errors}
                type="text"
                placeholder="3/3"
                colSpan="4"
              />
              <HookFormInput
                label="Cuarto (3)"
                name="ancho3_1"
                register={register}
                errors={errors}
                type="text"
                placeholder="1/4"
                colSpan="3"
              />
              <HookFormInput
                label="Cuarto (3)"
                name="ancho3_2"
                register={register}
                errors={errors}
                type="text"
                placeholder="2/4"
                colSpan="3"
              />
              <HookFormInput
                label="Cuarto (3)"
                name="ancho3_3"
                register={register}
                errors={errors}
                type="text"
                placeholder="3/4"
                colSpan="3"
              />
              <HookFormInput
                label="Cuarto (3)"
                name="ancho3_4"
                register={register}
                errors={errors}
                type="text"
                placeholder="4/4"
                colSpan="3"
              />
            </div>
          </div>

          {/* Sección 4: Estados especiales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Estados Especiales
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormInput
                label="Campo Deshabilitado"
                name="deshabilitado"
                register={register}
                errors={errors}
                type="text"
                placeholder="No se puede editar"
                disabled={true}
                colSpan="6"
              />
              <HookFormInput
                label="Con Tooltip"
                name="conTooltip"
                register={register}
                errors={errors}
                type="text"
                placeholder="Hover sobre el ícono"
                tooltipMessage="Este es un mensaje de ayuda que aparece al hacer hover"
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 5: Casos de uso reales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Casos de Uso Reales
            </h2>
            
            {/* Información personal */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Información Personal
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormInput
                  label="Nombre"
                  name="nombre"
                  register={register}
                  errors={errors}
                  type="text"
                  placeholder="Tu nombre"
                  required="El nombre es requerido"
                  colSpan="6"
                />
                <HookFormInput
                  label="Apellido"
                  name="apellido"
                  register={register}
                  errors={errors}
                  type="text"
                  placeholder="Tu apellido"
                  required="El apellido es requerido"
                  colSpan="6"
                />
                <HookFormInput
                  label="Fecha de Nacimiento"
                  name="fechaNacimiento"
                  register={register}
                  errors={errors}
                  type="date"
                  required="La fecha de nacimiento es requerida"
                  colSpan="4"
                />
                <HookFormInput
                  label="Documento de Identidad"
                  name="documento"
                  register={register}
                  errors={errors}
                  type="text"
                  placeholder="12345678"
                  pattern={{
                    value: /^[0-9]{8,12}$/,
                    message: "Debe tener entre 8 y 12 dígitos"
                  }}
                  required="El documento es requerido"
                  colSpan="4"
                />
                <HookFormInput
                  label="Teléfono Móvil"
                  name="telefonoMovil"
                  register={register}
                  errors={errors}
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  pattern={{
                    value: /^[\+]?[1-9][\d]{0,15}$/,
                    message: "Formato de teléfono no válido"
                  }}
                  colSpan="4"
                />
              </div>
            </div>

            {/* Información de contacto */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormInput
                  label="Email Principal"
                  name="emailPrincipal"
                  register={register}
                  errors={errors}
                  type="email"
                  placeholder="tu@email.com"
                  required="El email es requerido"
                  colSpan="6"
                />
                <HookFormInput
                  label="Email Secundario"
                  name="emailSecundario"
                  register={register}
                  errors={errors}
                  type="email"
                  placeholder="secundario@email.com"
                  colSpan="6"
                />
                <HookFormInput
                  label="Dirección"
                  name="direccion"
                  register={register}
                  errors={errors}
                  type="text"
                  placeholder="Calle, número, ciudad"
                  colSpan="8"
                />
                <HookFormInput
                  label="Código Postal"
                  name="codigoPostal"
                  register={register}
                  errors={errors}
                  type="text"
                  placeholder="12345"
                  pattern={{
                    value: /^[0-9]{5}$/,
                    message: "Debe tener 5 dígitos"
                  }}
                  colSpan="4"
                />
              </div>
            </div>

            {/* Información profesional */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Información Profesional
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormInput
                  label="Empresa"
                  name="empresa"
                  register={register}
                  errors={errors}
                  type="text"
                  placeholder="Nombre de la empresa"
                  colSpan="6"
                />
                <HookFormInput
                  label="Cargo"
                  name="cargo"
                  register={register}
                  errors={errors}
                  type="text"
                  placeholder="Tu cargo o posición"
                  colSpan="6"
                />
                <HookFormInput
                  label="Salario"
                  name="salario"
                  register={register}
                  errors={errors}
                  type="number"
                  placeholder="50000"
                  colSpan="4"
                />
                <HookFormInput
                  label="Años de Experiencia"
                  name="experiencia"
                  register={register}
                  errors={errors}
                  type="number"
                  placeholder="5"
                  pattern={{
                    value: /^[0-9]{1,2}$/,
                    message: "Debe ser un número entre 0 y 99"
                  }}
                  colSpan="4"
                />
                <HookFormInput
                  label="LinkedIn"
                  name="linkedin"
                  register={register}
                  errors={errors}
                  type="url"
                  placeholder="https://linkedin.com/in/tu-perfil"
                  colSpan="4"
                />
              </div>
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