import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
import React from 'react';

export type ColSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface BaseFileProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface FileFieldProps<T extends FieldValues> extends BaseFileProps<T> {
  label: string | React.ReactNode;
  tooltipMessage?: string;
  accept?: string;
  multiple?: boolean;
  colSpan?: ColSpanType;
  className?: string;
  enableDragDrop?: boolean;
  dropAreaText?: string;
  dropAreaHoverText?: string;
  maxFileSize?: number;
  showFileInfo?: boolean;
  onFileSelect?: (files: FileList | null) => void;
}

export interface FileLabelProps {
  label: string | React.ReactNode;
  tooltipMessage?: string;
}

export interface FileFieldOnlyProps {
  name: string;
  accept?: string;
  multiple: boolean;
  registerProps: any;
}

export interface FileDropAreaProps {
  name: string;
  accept?: string;
  multiple: boolean;
  registerProps: any;
  dropAreaText?: string;
  dropAreaHoverText?: string;
  maxFileSize?: number;
  showFileInfo?: boolean;
  onFileSelect?: (files: FileList | null) => void;
} 