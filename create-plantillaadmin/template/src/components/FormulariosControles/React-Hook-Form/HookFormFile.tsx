import { FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form';
import Tooltip from '../../UI/Tooltip';
import clsx from 'clsx';

interface FileFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  tooltipMessage?: string;
  accept?: string;
  multiple?: boolean;
  colSpan?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
}

const HookFormFile = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  tooltipMessage,
  accept,
  multiple = false,
  colSpan = '6'
}: FileFieldProps<T>) => {
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

  const { ref, onChange, ...rest } = register(name);
  
  return (
    <div className={clsx(colSpanClass)}>
      <div className="flex items-center gap-1 mb-2.5">
        <label className="block text-black dark:text-white">{label}</label>
        {tooltipMessage && (
          <Tooltip message={tooltipMessage}>
            <span className="text-blue-500 cursor-pointer text-sm">ⓘ</span>
          </Tooltip>
        )}
      </div>
      
      <input
        type="file"
        id={name}
        accept={accept}
        multiple={multiple}
        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition 
          file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke 
          file:bg-whiter file:py-3 file:px-5 
          file:hover:bg-primary file:hover:bg-opacity-10 
          focus:border-primary active:border-primary 
          disabled:cursor-default disabled:bg-whiter 
          dark:border-form-strokedark dark:bg-form-input 
          dark:file:border-form-strokedark dark:file:bg-white/30 
          dark:file:text-white dark:focus:border-primary"
        {...rest}
        onChange={(e) => {
          onChange(e);
        }}
        ref={ref}
      />
      
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default HookFormFile; 