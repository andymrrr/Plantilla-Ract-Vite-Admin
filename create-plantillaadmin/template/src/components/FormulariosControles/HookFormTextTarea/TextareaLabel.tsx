import Tooltip from '../../UI/Tooltip';
import { TextareaLabelProps } from './types';
import { getLabelSizeClasses } from './utils';

/**
 * Componente para renderizar el label del textarea con tooltip opcional y tamaños
 */
export const TextareaLabel: React.FC<TextareaLabelProps> = ({ 
  label, 
  tooltipMessage, 
  size = 'md',
  required = false 
}) => {
  const sizeClasses = getLabelSizeClasses(size);
  
  return (
    <label className={`mb-2.5 block font-medium text-gray-900 dark:text-gray-100 ${sizeClasses}`}>
      {label}
      {required && (
        <span className="text-red-500 ml-1">*</span>
      )}
      {tooltipMessage && (
        <Tooltip message={tooltipMessage}>
          <span className="text-blue-500 cursor-pointer text-sm hover:text-blue-600 transition-colors ml-2">
            ⓘ
          </span>
        </Tooltip>
      )}
    </label>
  );
};

export default TextareaLabel; 