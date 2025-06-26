import { useForm } from 'react-hook-form'
import HookFormFile from '../../components/FormulariosControles/HookFormFile'

interface FormValues {
  [key: string]: FileList
}

export default function HookFormFileExamples() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  
  const watchedValues = watch()

  const onSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data)
    // Mostrar información de archivos seleccionados
    Object.entries(data).forEach(([key, fileList]) => {
      if (fileList && fileList.length > 0) {
        console.log(`${key}:`, Array.from(fileList).map(file => ({
          name: file.name,
          size: file.size,
          type: file.type
        })))
      }
    })
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ejemplos de HookFormFile
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Sección 1: Tipos de archivo básicos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Diferentes Tipos de Archivo
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormFile
                label="Cualquier archivo"
                name="cualquierArchivo"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormFile
                label="Solo imágenes"
                name="soloImagenes"
                register={register}
                errors={errors}
                accept="image/*"
                colSpan="6"
              />
              <HookFormFile
                label="Solo documentos PDF"
                name="soloPDF"
                register={register}
                errors={errors}
                accept=".pdf"
                colSpan="4"
              />
              <HookFormFile
                label="Documentos de texto"
                name="documentosTexto"
                register={register}
                errors={errors}
                accept=".txt,.doc,.docx"
                colSpan="4"
              />
              <HookFormFile
                label="Hojas de cálculo"
                name="hojasCalculo"
                register={register}
                errors={errors}
                accept=".xls,.xlsx,.csv"
                colSpan="4"
              />
              <HookFormFile
                label="Archivos de audio"
                name="archivosAudio"
                register={register}
                errors={errors}
                accept="audio/*"
                colSpan="6"
              />
              <HookFormFile
                label="Archivos de video"
                name="archivosVideo"
                register={register}
                errors={errors}
                accept="video/*"
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 2: Múltiples archivos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Selección Múltiple de Archivos
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormFile
                label="Múltiples imágenes"
                name="multiplesImagenes"
                register={register}
                errors={errors}
                accept="image/*"
                multiple={true}
                colSpan="6"
              />
              <HookFormFile
                label="Múltiples documentos"
                name="multiplesDocumentos"
                register={register}
                errors={errors}
                accept=".pdf,.doc,.docx,.txt"
                multiple={true}
                colSpan="6"
              />
              <HookFormFile
                label="Galería de fotos (múltiples)"
                name="galeriaFotos"
                register={register}
                errors={errors}
                accept=".jpg,.jpeg,.png,.gif,.webp"
                multiple={true}
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
              <HookFormFile
                label="Ancho completo (12) - Subir archivo de proyecto completo"
                name="archivoProyecto"
                register={register}
                errors={errors}
                accept=".zip,.rar,.tar.gz"
                colSpan="12"
              />
              <HookFormFile
                label="Medio ancho (6)"
                name="medioAncho1"
                register={register}
                errors={errors}
                accept="image/*"
                colSpan="6"
              />
              <HookFormFile
                label="Medio ancho (6)"
                name="medioAncho2"
                register={register}
                errors={errors}
                accept=".pdf"
                colSpan="6"
              />
              <HookFormFile
                label="Un tercio (4)"
                name="tercio1"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormFile
                label="Un tercio (4)"
                name="tercio2"
                register={register}
                errors={errors}
                colSpan="4"
              />
              <HookFormFile
                label="Un tercio (4)"
                name="tercio3"
                register={register}
                errors={errors}
                colSpan="4"
              />
            </div>
          </div>

          {/* Sección 4: Casos de uso reales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Casos de Uso Reales
            </h2>
            
            {/* Documentos personales */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Documentos Personales
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormFile
                  label="Documento de identidad"
                  name="documentoIdentidad"
                  register={register}
                  errors={errors}
                  accept="image/*,.pdf"
                  colSpan="6"
                />
                <HookFormFile
                  label="Foto de perfil"
                  name="fotoPerfil"
                  register={register}
                  errors={errors}
                  accept="image/jpeg,image/png,image/webp"
                  colSpan="6"
                />
                <HookFormFile
                  label="Currículum vitae"
                  name="curriculum"
                  register={register}
                  errors={errors}
                  accept=".pdf,.doc,.docx"
                  colSpan="6"
                />
                <HookFormFile
                  label="Carta de presentación"
                  name="cartaPresentacion"
                  register={register}
                  errors={errors}
                  accept=".pdf,.doc,.docx"
                  colSpan="6"
                />
                <HookFormFile
                  label="Certificados (múltiples)"
                  name="certificados"
                  register={register}
                  errors={errors}
                  accept=".pdf,image/*"
                  multiple={true}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Contenido multimedia */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Contenido Multimedia
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormFile
                  label="Logo de empresa"
                  name="logoEmpresa"
                  register={register}
                  errors={errors}
                  accept=".png,.svg,.jpg,.jpeg"
                  colSpan="4"
                />
                <HookFormFile
                  label="Banner principal"
                  name="bannerPrincipal"
                  register={register}
                  errors={errors}
                  accept="image/*"
                  colSpan="4"
                />
                <HookFormFile
                  label="Favicon"
                  name="favicon"
                  register={register}
                  errors={errors}
                  accept=".ico,.png"
                  colSpan="4"
                />
                <HookFormFile
                  label="Galería de productos"
                  name="galeriaProductos"
                  register={register}
                  errors={errors}
                  accept="image/*"
                  multiple={true}
                  colSpan="6"
                />
                <HookFormFile
                  label="Video promocional"
                  name="videoPromocional"
                  register={register}
                  errors={errors}
                  accept="video/mp4,video/webm,video/ogg"
                  colSpan="6"
                />
                <HookFormFile
                  label="Archivos de audio (podcast, música)"
                  name="archivosAudio"
                  register={register}
                  errors={errors}
                  accept="audio/*"
                  multiple={true}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Documentos técnicos */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Documentos Técnicos
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormFile
                  label="Manual técnico"
                  name="manualTecnico"
                  register={register}
                  errors={errors}
                  accept=".pdf"
                  colSpan="6"
                />
                <HookFormFile
                  label="Especificaciones"
                  name="especificaciones"
                  register={register}
                  errors={errors}
                  accept=".pdf,.doc,.docx"
                  colSpan="6"
                />
                <HookFormFile
                  label="Código fuente"
                  name="codigoFuente"
                  register={register}
                  errors={errors}
                  accept=".zip,.rar,.tar.gz"
                  colSpan="4"
                />
                <HookFormFile
                  label="Base de datos"
                  name="baseDatos"
                  register={register}
                  errors={errors}
                  accept=".sql,.db,.sqlite"
                  colSpan="4"
                />
                <HookFormFile
                  label="Configuración"
                  name="configuracion"
                  register={register}
                  errors={errors}
                  accept=".json,.xml,.yaml,.yml,.ini"
                  colSpan="4"
                />
                <HookFormFile
                  label="Logs del sistema"
                  name="logsSistema"
                  register={register}
                  errors={errors}
                  accept=".log,.txt"
                  multiple={true}
                  colSpan="12"
                />
              </div>
            </div>

            {/* Archivos de trabajo */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Archivos de Trabajo
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <HookFormFile
                  label="Presentación"
                  name="presentacion"
                  register={register}
                  errors={errors}
                  accept=".ppt,.pptx,.odp"
                  colSpan="6"
                />
                <HookFormFile
                  label="Hoja de cálculo"
                  name="hojaCalculo"
                  register={register}
                  errors={errors}
                  accept=".xls,.xlsx,.ods,.csv"
                  colSpan="6"
                />
                <HookFormFile
                  label="Archivos de diseño"
                  name="archivosDiseno"
                  register={register}
                  errors={errors}
                  accept=".psd,.ai,.sketch,.fig,.xd"
                  multiple={true}
                  colSpan="6"
                />
                <HookFormFile
                  label="Plantillas"
                  name="plantillas"
                  register={register}
                  errors={errors}
                  accept=".html,.css,.js,.php"
                  multiple={true}
                  colSpan="6"
                />
                <HookFormFile
                  label="Backup completo del proyecto"
                  name="backupProyecto"
                  register={register}
                  errors={errors}
                  accept=".zip,.rar,.7z,.tar.gz"
                  colSpan="12"
                />
              </div>
            </div>
          </div>

          {/* Sección 5: Estados especiales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Estados Especiales
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <HookFormFile
                label="Campo deshabilitado"
                name="campoDeshabilitado"
                register={register}
                errors={errors}
                colSpan="6"
              />
              <HookFormFile
                label="Con tooltip de ayuda"
                name="conTooltip"
                register={register}
                errors={errors}
                accept="image/*"
                tooltipMessage="Selecciona una imagen en formato JPG, PNG o WebP. Tamaño máximo recomendado: 5MB"
                colSpan="6"
              />
            </div>
          </div>

          {/* Sección 6: Vista previa de archivos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Vista Previa de Archivos Seleccionados
            </h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Archivos seleccionados:
              </h3>
              <div className="space-y-2">
                {Object.entries(watchedValues).map(([fieldName, fileList]) => {
                  if (fileList && fileList.length > 0) {
                    return (
                      <div key={fieldName} className="text-sm">
                        <strong className="text-gray-700">{fieldName}:</strong>
                        <ul className="ml-4 mt-1">
                          {Array.from(fileList).map((file, index) => (
                            <li key={index} className="text-gray-600">
                              📄 {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.type || 'Tipo desconocido'}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  }
                  return null
                })}
                {Object.keys(watchedValues).length === 0 && (
                  <p className="text-gray-500 text-sm">No hay archivos seleccionados</p>
                )}
              </div>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg"
            >
              Subir Archivos
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 