import Tooltip from '../../UI/Tooltip';
import { FileLabelProps } from './types';

/**
 * Componente para renderizar el label del input file con tooltip opcional
 */
export const FileLabel: React.FC<FileLabelProps> = ({ 
  label, 
  tooltipMessage,
  htmlFor 
}) => {
  return (
    <div className="flex items-center gap-1 mb-2.5">
      <label 
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
      >
        {label}
        {tooltipMessage && (
          <Tooltip message={tooltipMessage}>
            <span className="ml-1 text-blue-500 hover:text-blue-600 cursor-pointer text-sm">ⓘ</span>
          </Tooltip>
        )}
      </label>
    </div>
  );
};

export default FileLabel; 