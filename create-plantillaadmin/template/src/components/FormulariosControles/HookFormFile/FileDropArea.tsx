import React, { useRef, useState } from 'react';
import { InboxOutlined, FileTextOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { FileDropAreaProps } from './types';

/**
 * Componente de área de drag & drop para archivos
 * Reutilizable y con validaciones integradas
 */
export const FileDropArea: React.FC<FileDropAreaProps> = ({
  name,
  accept,
  multiple,
  registerProps,
  dropAreaText = 'Haz clic para seleccionar o arrastra un archivo aquí',
  dropAreaHoverText = 'Suelta el archivo aquí',
  maxFileSize = 5 * 1024 * 1024, // 5MB por defecto
  showFileInfo = true,
  onFileSelect
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const validateFile = (file: File): string | null => {
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

    // Validar tamaño
    if (file.size > maxFileSize) {
      const maxSizeMB = (maxFileSize / (1024 * 1024)).toFixed(1);
      return `El archivo no puede ser mayor a ${maxSizeMB}MB`;
    }

    return null;
  };

  const handleFileSelect = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      const error = validateFile(file);
      
      if (error) {
        alert(error);
        return;
      }

      setSelectedFile(file);
      onFileSelect?.(files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelect(files);
    }
  };

  const handleClickArea = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      {/* Input file oculto */}
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        {...registerProps}
        ref={(e) => {
          registerProps.ref(e);
          fileInputRef.current = e;
        }}
        onChange={(e) => {
          registerProps.onChange(e);
          handleFileSelect(e.target.files);
        }}
      />

      {/* Área de drop */}
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50' 
            : selectedFile 
              ? 'border-green-400 bg-green-50' 
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClickArea}
      >
        <InboxOutlined className={`mx-auto h-12 w-12 ${
          isDragOver ? 'text-blue-500' : selectedFile ? 'text-green-500' : 'text-gray-400'
        }`} />
        <div className="mt-4">
          <span className="mt-2 block text-sm font-medium text-gray-900">
            {isDragOver 
              ? dropAreaHoverText
              : selectedFile 
                ? 'Archivo seleccionado - Haz clic para cambiar'
                : dropAreaText
            }
          </span>
          <span className="mt-1 block text-xs text-gray-500">
            {accept ? `Tipos permitidos: ${accept}` : 'Todos los tipos de archivo'} 
            {maxFileSize && ` (máximo ${formatFileSize(maxFileSize)})`}
          </span>
        </div>
      </div>

      {/* Información del archivo seleccionado */}
      {selectedFile && showFileInfo && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircleOutlined className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">
                    <FileTextOutlined className="mr-2" />
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-green-600">
                    Tamaño: {formatFileSize(selectedFile.size)}
                  </p>
                  <p className="text-sm text-green-600">
                    Tipo: {selectedFile.type || 'Desconocido'}
                  </p>
                </div>
                <div className="text-sm text-green-600">
                  ✓ Archivo válido
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDropArea; 