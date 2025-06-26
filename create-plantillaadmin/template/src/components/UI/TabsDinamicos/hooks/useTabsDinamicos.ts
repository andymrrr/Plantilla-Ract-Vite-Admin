import { useState, useCallback } from 'react';
import { TabConfig } from '../types';

interface UseTabsDinamicosProps {
  tabs: TabConfig[];
  tabInicial?: string;
  onCambioTab?: (tabKey: string) => void;
}

export const useTabsDinamicos = ({
  tabs,
  tabInicial,
  onCambioTab
}: UseTabsDinamicosProps) => {
  const [tabActiva, setTabActiva] = useState<string>(
    tabInicial || (tabs.length > 0 ? tabs[0].key : '')
  );

  const handleCambioTab = useCallback((key: string) => {
    setTabActiva(key);
    onCambioTab?.(key);
  }, [onCambioTab]);

  const tabActualConfig = tabs.find(tab => tab.key === tabActiva);

  return {
    tabActiva,
    handleCambioTab,
    tabActualConfig
  };
}; 