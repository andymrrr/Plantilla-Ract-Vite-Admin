import React from 'react';
import Tooltip from '../../UI/Tooltip';
import { CheckboxLabelProps } from './types';
import { getLabelClasses, getDescriptionClasses } from './utils';

/**
 * Componente para renderizar el label del checkbox con tooltip opcional y descripción
 */
export const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ 
  label, 
  name, 
  tooltipMessage,
  description,
  labelPosition = 'right',
  size = 'md',
  disabled = false
}) => {
  const labelClasses = getLabelClasses(labelPosition, size, disabled);
  const descriptionClasses = getDescriptionClasses(size);

  return (
    <div className={`${labelPosition === 'top' || labelPosition === 'bottom' ? 'w-full' : 'flex-1 min-w-0'}`}>
      <div className="flex items-start gap-1">
        <label
          htmlFor={name}
          className={`${labelClasses} leading-tight`}
        >
          {label}
        </label>
        {tooltipMessage && (
          <Tooltip message={tooltipMessage}>
            <span className="text-blue-500 cursor-pointer text-sm hover:text-blue-600 transition-colors shrink-0 mt-0.5">
              ⓘ
            </span>
          </Tooltip>
        )}
      </div>
      
      {description && (
        <div className={`${descriptionClasses} break-words`}>
          {description}
        </div>
      )}
    </div>
  );
};

export default CheckboxLabel; 