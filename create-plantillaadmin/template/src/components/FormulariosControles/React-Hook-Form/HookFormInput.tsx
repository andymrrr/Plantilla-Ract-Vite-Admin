import { FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
  colSpan?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  type?: 'text' | 'email' | 'password' | 'number';
}

const HookFormInput = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  placeholder,
  colSpan = '6',
  type = 'text',
}: InputFieldProps<T>) => {
  return (
    <div className={`col-span-${colSpan}`}>
      <label className="mb-1 block text-black dark:text-white">{label}</label>
      <input
        type={type}
        {...register(name, { required: `El ${label} es requerido` })}
        placeholder={placeholder}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default HookFormInput;
