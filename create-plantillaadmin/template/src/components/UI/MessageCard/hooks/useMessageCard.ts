import { useEffect, useCallback } from 'react';

interface UseMessageCardProps {
  autoDismiss?: boolean;
  dismissTimeout?: number;
  onDismiss?: () => void;
}

export const useMessageCard = ({
  autoDismiss = false,
  dismissTimeout = 5000,
  onDismiss
}: UseMessageCardProps) => {
  
  const handleDismiss = useCallback(() => {
    onDismiss?.();
  }, [onDismiss]);

  useEffect(() => {
    if (autoDismiss && dismissTimeout > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, dismissTimeout);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTimeout, handleDismiss]);

  return {
    handleDismiss
  };
}; 