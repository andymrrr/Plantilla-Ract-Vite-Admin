import React, { useState } from 'react';
import { FileFieldOnlyProps } from './types';
import { getFileInputClasses } from './utils';

/**
 * Componente para renderizar el campo de input file con interfaz visual
 */
export const FileField: React.FC<FileFieldOnlyProps> = ({
  name,
  accept,
  multiple,
  registerProps
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    
    // Llamar al onChange original de react-hook-form
    if (registerProps.onChange) {
      registerProps.onChange(event);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFiles(files);
      
      // Crear un evento sintético para react-hook-form
      const syntheticEvent = {
        target: { files, name, type: 'file' }
      } as React.ChangeEvent<HTMLInputElement>;
      
      if (registerProps.onChange) {
        registerProps.onChange(syntheticEvent);
      }
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="relative">
      {/* Input file oculto */}
      <input
        type="file"
        id={name}
        accept={accept}
        multiple={multiple}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        {...registerProps}
        onChange={handleFileChange}
      />
      
      {/* Área visual para hacer clic */}
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center space-y-2">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-blue-600 dark:text-blue-400">Haz clic para subir</span>
            {multiple ? ' archivos' : ' un archivo'}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            o arrastra y suelta aquí
          </div>
          {accept && (
            <div className="text-xs text-gray-400 dark:text-gray-600">
              Tipos permitidos: {accept}
            </div>
          )}
        </div>
      </div>

      {/* Mostrar archivos seleccionados */}
      {selectedFiles && selectedFiles.length > 0 && (
        <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {selectedFiles.length === 1 ? 'Archivo seleccionado:' : `${selectedFiles.length} archivos seleccionados:`}
          </h4>
          <div className="space-y-1">
            {Array.from(selectedFiles).map((file, index) => (
              <div key={index} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <span className="truncate flex-1 mr-2">📄 {file.name}</span>
                <span className="text-gray-500 dark:text-gray-500 whitespace-nowrap">
                  {formatFileSize(file.size)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileField; 