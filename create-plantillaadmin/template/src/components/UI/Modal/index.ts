// Componente principal
export { Modal } from './Modal';

// Subcomponentes (por si se necesitan individualmente)
export { ModalHeader } from './ModalHeader';
export { ModalContent } from './ModalContent';
export { ModalFooter } from './ModalFooter';

// Hooks
export { useModal } from './hooks/useModal';
export { useModalLogic } from './hooks/useModalLogic';
export { useModalHandlers } from './hooks/useModalHandlers';

// Tipos
export type {
  ModalProps,
  ModalAction,
  ModalSize,
  ModalType,
  ButtonType,
  ButtonVariant,
  ModalHeaderProps,
  ModalContentProps,
  ModalFooterProps,
  UseModalLogicProps,
  UseModalHandlersProps
} from './types'; 