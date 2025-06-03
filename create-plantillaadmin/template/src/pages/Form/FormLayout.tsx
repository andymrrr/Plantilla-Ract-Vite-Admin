import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useForm } from 'react-hook-form';
import HookFormInput from '../../components/FormulariosControles/React-Hook-Form/HookFormInput';
import HookFormTextarea from '../../components/FormulariosControles/React-Hook-Form/HookFormTextarea';
import HookFormCheckbox from '../../components/FormulariosControles/React-Hook-Form/HookFormCheckbox';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormLayout = () => {
  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: errorsContact },
  } = useForm<ContactFormData>();

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm<SignInFormData>();

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
    watch: watchSignUp,
  } = useForm<SignUpFormData>();

  const onSubmitContact = (data: ContactFormData) => {
    console.log('Contact Form:', data);
  };

  const onSubmitSignIn = (data: SignInFormData) => {
    console.log('Sign In Form:', data);
  };

  const onSubmitSignUp = (data: SignUpFormData) => {
    console.log('Sign Up Form:', data);
  };

  return (
    <>
      <Breadcrumb pageName="Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <form onSubmit={handleSubmitContact(onSubmitContact)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <HookFormInput
                      label="First name"
                      name="firstName"
                      register={registerContact}
                      errors={errorsContact}
                      placeholder="Enter your first name"
                      tooltipMessage="Ingresa tu nombre"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <HookFormInput
                      label="Last name"
                      name="lastName"
                      register={registerContact}
                      errors={errorsContact}
                      placeholder="Enter your last name"
                      tooltipMessage="Ingresa tu apellido"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <HookFormInput
                    label="Email"
                    name="email"
                    type="email"
                    register={registerContact}
                    errors={errorsContact}
                    placeholder="Enter your email address"
                    tooltipMessage="Ingresa un email válido"
                  />
                </div>

                <div className="mb-4.5">
                  <HookFormInput
                    label="Subject"
                    name="subject"
                    register={registerContact}
                    errors={errorsContact}
                    placeholder="Enter subject"
                    tooltipMessage="Ingresa el asunto del mensaje"
                  />
                </div>

                <div className="mb-6">
                  <HookFormTextarea
                    label="Message"
                    name="message"
                    register={registerContact}
                    errors={errorsContact}
                    placeholder="Type your message"
                    tooltipMessage="Escribe tu mensaje"
                    rows={6}
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Sign In Form
              </h3>
            </div>
            <form onSubmit={handleSubmitSignIn(onSubmitSignIn)}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <HookFormInput
                    label="Email"
                    name="email"
                    type="email"
                    register={registerSignIn}
                    errors={errorsSignIn}
                    placeholder="Enter your email address"
                    tooltipMessage="Ingresa tu email"
                  />
                </div>

                <div className="mb-4.5">
                  <HookFormInput
                    label="Password"
                    name="password"
                    type="password"
                    register={registerSignIn}
                    errors={errorsSignIn}
                    placeholder="Enter password"
                    tooltipMessage="Ingresa tu contraseña"
                  />
                </div>

                <div className="mt-5 mb-5.5 flex items-center justify-between">
                  <HookFormCheckbox
                    label="Remember me"
                    name="rememberMe"
                    register={registerSignIn}
                    errors={errorsSignIn}
                  />

                  <Link to="#" className="text-sm text-primary hover:underline">
                    Forget password?
                  </Link>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* <!-- Sign Up Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Sign Up Form
              </h3>
            </div>
            <form onSubmit={handleSubmitSignUp(onSubmitSignUp)}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <HookFormInput
                    label="Name"
                    name="name"
                    register={registerSignUp}
                    errors={errorsSignUp}
                    placeholder="Enter your full name"
                    tooltipMessage="Ingresa tu nombre completo"
                  />
                </div>

                <div className="mb-4.5">
                  <HookFormInput
                    label="Email"
                    name="email"
                    type="email"
                    register={registerSignUp}
                    errors={errorsSignUp}
                    placeholder="Enter your email address"
                    tooltipMessage="Ingresa un email válido"
                  />
                </div>

                <div className="mb-4.5">
                  <HookFormInput
                    label="Password"
                    name="password"
                    type="password"
                    register={registerSignUp}
                    errors={errorsSignUp}
                    placeholder="Enter password"
                    tooltipMessage="Ingresa una contraseña segura"
                  />
                </div>

                <div className="mb-5.5">
                  <HookFormInput
                    label="Re-type Password"
                    name="confirmPassword"
                    type="password"
                    register={registerSignUp}
                    errors={errorsSignUp}
                    placeholder="Re-enter password"
                    tooltipMessage="Repite la contraseña"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
