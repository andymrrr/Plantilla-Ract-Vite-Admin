import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useForm } from 'react-hook-form';
import HookFormInput from '../../components/FormulariosControles/React-Hook-Form/HookFormInput';
import HookFormTextarea from '../../components/FormulariosControles/React-Hook-Form/HookFormTextarea';
import HookFormCheckbox from '../../components/FormulariosControles/React-Hook-Form/HookFormCheckbox';
import HookFormFile from '../../components/FormulariosControles/React-Hook-Form/HookFormFile';
import HookFormSwitcher from '../../components/FormulariosControles/React-Hook-Form/HookFormSwitcher';
import Tarjeta from '../../components/UI/Tarjeta';
import { Contenedor } from '../../components/UI/Contenedor';

interface FormData {
  defaultInput: string;
  activeInput: string;
  disabledInput: string;
  defaultTextarea: string;
  activeTextarea: string;
  disabledTextarea: string;
  acceptTerms: boolean;
  notifications: boolean;
  file: FileList;
}

const FormElements = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
   <Contenedor>
      <Breadcrumb pageName="Form Elements" />

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <Tarjeta
            titulo="Input Fields"
            subtitulo="Diferentes tipos de campos de entrada"
            variante="defecto"
          >
            <div className="flex flex-col gap-5.5">
              <HookFormInput
                label="Default Input"
                name="defaultInput"
                register={register}
                errors={errors}
                placeholder="Default Input"
                tooltipMessage="Este es un campo de entrada predeterminado"
              />

              <HookFormInput
                label="Active Input"
                name="activeInput"
                register={register}
                errors={errors}
                placeholder="Active Input"
                tooltipMessage="Este campo está activo"
              />

              <HookFormInput
                label="Disabled Input"
                name="disabledInput"
                register={register}
                errors={errors}
                placeholder="Disabled Input"
                disabled={true}
                tooltipMessage="Este campo está deshabilitado"
              />
            </div>
          </Tarjeta>

          {/* <!-- Toggle switch input --> */}
          <Tarjeta
            titulo="Toggle switch input"
            subtitulo="Control de interruptor personalizado"
            variante="defecto"
          >
            <div className="flex flex-col gap-5.5">
              <HookFormSwitcher
                label="Activar notificaciones"
                name="notifications"
                register={register}
                errors={errors}
                tooltipMessage="Activa o desactiva las notificaciones"
              />
            </div>
          </Tarjeta>

          {/* <!-- File upload --> */}
          <Tarjeta
            titulo="File upload"
            subtitulo="Carga de archivos con previsualización"
            variante="defecto"
          >
            <div className="flex flex-col gap-5.5">
              <HookFormFile
                label="Adjuntar archivo"
                name="file"
                register={register}
                errors={errors}
                accept=".pdf,.doc,.docx"
                tooltipMessage="Formatos permitidos: PDF, DOC, DOCX"
              />
            </div>
          </Tarjeta>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <Tarjeta
            titulo="Textarea Fields"
            subtitulo="Campos de texto multilínea"
            variante="defecto"
          >
            <div className="flex flex-col gap-5.5">
              <HookFormTextarea
                label="Default Textarea"
                name="defaultTextarea"
                register={register}
                errors={errors}
                placeholder="Default textarea"
                tooltipMessage="Este es un área de texto predeterminada"
              />

              <HookFormTextarea
                label="Active Textarea"
                name="activeTextarea"
                register={register}
                errors={errors}
                placeholder="Active textarea"
                tooltipMessage="Esta área de texto está activa"
              />

              <HookFormTextarea
                label="Disabled Textarea"
                name="disabledTextarea"
                register={register}
                errors={errors}
                placeholder="Disabled textarea"
                disabled={true}
                tooltipMessage="Esta área de texto está deshabilitada"
              />
            </div>
          </Tarjeta>

          {/* <!-- Checkbox --> */}
          <Tarjeta
            titulo="Checkbox"
            subtitulo="Casillas de verificación personalizadas"
            variante="defecto"
          >
            <div className="flex flex-col gap-5.5">
              <HookFormCheckbox
                label="Acepto los términos y condiciones"
                name="acceptTerms"
                register={register}
                errors={errors}
                tooltipMessage="Debes aceptar los términos para continuar"
              />
            </div>
          </Tarjeta>
        </div>

        <div className="col-span-full flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Guardar
          </button>
        </div>
      </form>
    </Contenedor>
  );
};

export default FormElements;
