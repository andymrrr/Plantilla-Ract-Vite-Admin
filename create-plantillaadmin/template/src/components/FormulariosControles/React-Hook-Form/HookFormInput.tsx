import { FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form';
import Tooltip from '../../UI/Tooltip';
import clsx from 'clsx';

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
  colSpan?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  type?: 'text' | 'email' | 'password' | 'number';
  tooltipMessage?: string;
}

const HookFormInput = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  placeholder,
  colSpan = '6',
  type = 'text',
  tooltipMessage
}: InputFieldProps<T>) => {

  const colSpanClass = {
    '1': 'col-span-1',
    '2': 'col-span-2',
    '3': 'col-span-3',
    '4': 'col-span-4',
    '5': 'col-span-5',
    '6': 'col-span-6',
    '7': 'col-span-7',
    '8': 'col-span-8',
    '9': 'col-span-9',
    '10': 'col-span-10',
    '11': 'col-span-11',
    '12': 'col-span-12',
  }[colSpan] || 'col-span-6';
  
  return (
    <div className={clsx(colSpanClass)}>
       <div className="flex items-center gap-1 mb-1">
        <label className="block text-black dark:text-white">{label}</label>
        {tooltipMessage && (
          <Tooltip message={tooltipMessage}>
            <span className="text-blue-500 cursor-pointer text-sm">ⓘ</span>
          </Tooltip>
        )}
      </div>
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
