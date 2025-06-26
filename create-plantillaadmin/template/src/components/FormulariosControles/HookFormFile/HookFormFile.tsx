import { FieldValues } from 'react-hook-form';
import { FileFieldProps } from './types';
import { getColSpanClass, getFileContainerClasses } from './utils';
import FileLabel from './FileLabel';
import FileField from './FileField';
import FileDropArea from './FileDropArea';
import { ErrorMessage } from '../HookFormInput';

/**
 * Componente principal de input file para formularios con react-hook-form
 * Soporta modo tradicional y drag & drop
 */
const HookFormFile = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  tooltipMessage,
  accept,
  multiple = false,
  colSpan = '6',
  className = '',
  enableDragDrop = false,
  dropAreaText,
  dropAreaHoverText,
  maxFileSize,
  showFileInfo = true,
  onFileSelect
}: FileFieldProps<T>) => {
  // Obtener clase CSS para el grid
  const colSpanClass = getColSpanClass(colSpan);
  
  // Obtener clases para el contenedor
  const containerClasses = getFileContainerClasses(className);
  
  // Props para el registro del campo
  const registerProps = register(name, {
    required: 'Debes seleccionar un archivo',
    validate: (files) => {
      if (!files || files.length === 0) return 'Debes seleccionar un archivo';
      
      const file = files[0];
      
      // Validar extensión si se especifica accept
      if (accept) {
        const acceptedTypes = accept.split(',').map(type => type.trim());
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        const isValidType = acceptedTypes.some(type => 
          type === file.type || 
          type === fileExtension ||
          (type.startsWith('.') && fileExtension === type)
        );
        
        if (!isValidType) {
          return `Tipo de archivo no permitido. Tipos aceptados: ${accept}`;
        }
      }

      // Validar tamaño si se especifica
      if (maxFileSize && file.size > maxFileSize) {
        const maxSizeMB = (maxFileSize / (1024 * 1024)).toFixed(1);
        return `El archivo no puede ser mayor a ${maxSizeMB}MB`;
      }

      return true;
    }
  });

  return (
    <div className={`${colSpanClass} ${containerClasses}`}>
      <FileLabel 
        label={label} 
        tooltipMessage={tooltipMessage} 
      />
      
      {enableDragDrop ? (
        <FileDropArea
          name={name}
          accept={accept}
          multiple={multiple}
          registerProps={registerProps}
          dropAreaText={dropAreaText}
          dropAreaHoverText={dropAreaHoverText}
          maxFileSize={maxFileSize}
          showFileInfo={showFileInfo}
          onFileSelect={onFileSelect}
        />
      ) : (
        <FileField
          name={name}
          accept={accept}
          multiple={multiple}
          registerProps={registerProps}
        />
      )}
      
      <ErrorMessage 
        name={name} 
        errors={errors} 
      />
    </div>
  );
};

export default HookFormFile; 