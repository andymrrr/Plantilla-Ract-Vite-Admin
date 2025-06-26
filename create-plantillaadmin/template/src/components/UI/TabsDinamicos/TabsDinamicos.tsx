import React, { ReactNode } from 'react';
import { Tabs } from 'antd';
import { TabsDinamicosProps } from './types';
import { useTabsDinamicos } from './hooks/useTabsDinamicos';
import TabsDinamicosContainer from './components/TabsDinamicosContainer';

export interface TabConfig {
  key: string;
  label: string | ReactNode;
  contenido: ReactNode;
  icono?: ReactNode;
  disabled?: boolean;
}

function TabsDinamicos<T = any>({
  tabs,
  tabInicial,
  className = '',
  datos,
  componentesSuperiores = [],
  componentesInferiores = [],
  onCambioTab,
  size = 'middle',
  type = 'line',
  tabPosition = 'top',
  animated = true
}: TabsDinamicosProps<T>) {
  const {
    tabActiva,
    handleCambioTab
  } = useTabsDinamicos({
    tabs,
    tabInicial,
    onCambioTab
  });

  // Transformar configuración a formato de Ant Design
  const tabItems = tabs.map(tab => ({
    key: tab.key,
    label: tab.icono ? (
      <span className="flex items-center gap-2">
        {tab.icono}
        {tab.label}
      </span>
    ) : tab.label,
    children: tab.contenido,
    disabled: tab.disabled
  }));

  return (
    <TabsDinamicosContainer className={className}>
      {/* Componentes superiores (filtros, controles, etc.) */}
      {componentesSuperiores.map((componente, index) => (
        <div key={`superior-${index}`} className="mb-4">
          {componente}
        </div>
      ))}

      {/* Tabs dinámicos */}
      <Tabs
        activeKey={tabActiva}
        onChange={handleCambioTab}
        items={tabItems}
        size={size}
        type={type}
        tabPosition={tabPosition}
        animated={animated}
        className="tabs-dinamicos-contenedor"
      />

      {/* Componentes inferiores (información adicional, botones, etc.) */}
      {componentesInferiores.map((componente, index) => (
        <div key={`inferior-${index}`} className="mt-4">
          {componente}
        </div>
      ))}
    </TabsDinamicosContainer>
  );
}

export default TabsDinamicos; 