import { FieldValues } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { HookFormTimeSelectorProps } from './types';
import { getColSpanClass } from './utils';
import TimeSelectorLabel from './TimeSelectorLabel';
import TimeSelectorField from './TimeSelectorField';
import HiddenInput from './HiddenInput';
import ErrorMessage from './ErrorMessage';

const HookFormTimeSelector = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  options = [
    { value: '5m', label: '5 minutos', description: 'Tiempo corto para tareas rápidas' },
    { value: '15m', label: '15 minutos', description: 'Ideal para reuniones breves' },
    { value: '45m', label: '45 minutos', description: 'Sesiones de trabajo enfocado' },
    { value: '1h', label: '1 hora', description: 'Tiempo estándar para la mayoría de tareas' },
    { value: '4h', label: '4 horas', description: 'Medio día de trabajo' },
    { value: 'D', label: 'Todo el día', description: 'Jornada completa de trabajo' },
  ],
  defaultSelected = '5m',
  colSpan = '6',
  tooltipMessage,
  variant = 'pill',
  size = 'md',
  color = 'blue',
  disabled = false,
  allowMultiple = false,
  maxSelections,
  showDescription = false,
  orientation = 'horizontal',
}: HookFormTimeSelectorProps<T>) => {
  const [selected, setSelected] = useState<string | string[]>(
    allowMultiple ? (defaultSelected ? defaultSelected.split(',') : []) : defaultSelected
  );

  useEffect(() => {
    if (allowMultiple) {
      setSelected(defaultSelected ? defaultSelected.split(',') : []);
    } else {
      setSelected(defaultSelected);
    }
  }, [defaultSelected, allowMultiple]);

  const handleSelect = (value: string) => {
    if (allowMultiple) {
      const newSelected = value ? value.split(',') : [];
      setSelected(newSelected);
      
      // Crear evento para react-hook-form
      const event = {
        target: {
          name,
          value: newSelected.join(','),
        },
      };
      register(name).onChange(event);
    } else {
      setSelected(value);
      
      // Crear evento para react-hook-form
      const event = {
        target: {
          name,
          value,
        },
      };
      register(name).onChange(event);
    }
  };

  const colSpanClass = getColSpanClass(colSpan);
  
  return (
    <div className={colSpanClass}>
      <TimeSelectorLabel 
        label={label} 
        tooltipMessage={tooltipMessage} 
      />

      <TimeSelectorField
        options={options}
        selected={selected}
        onSelect={handleSelect}
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        allowMultiple={allowMultiple}
        maxSelections={maxSelections}
        showDescription={showDescription}
        orientation={orientation}
      />

      <HiddenInput
        name={name}
        register={register}
        selected={selected}
        label={label}
      />

      <ErrorMessage 
        name={name} 
        errors={errors} 
      />
    </div>
  );
};

export default HookFormTimeSelector;
