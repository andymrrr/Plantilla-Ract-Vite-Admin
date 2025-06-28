import React from 'react';
import { Table, TablePaginationConfig } from 'antd';
import { TablaPaginadaProps } from './types';
import { HeaderTabla, FooterTabla } from './components';
import { normalizarTema, generarClasesTema } from './themes';

export const TablaPaginada = <T extends object>({
  datos,
  columnas,
  total,
  paginaActual,
  tamanioPagina,
  onPageChange,
  opcionesTamanioPagina = ['5', '10', '20'],
  claveFila,
  acciones,
  header,
  footer,
  mostrarHeader = false,
  tituloTabla,
  subtituloTabla,
  clasesPersonalizadas = {},
  tema = 'default',
  tablaProps = {},
}: TablaPaginadaProps<T>) => {

  const manejarCambio = (paginacion: TablePaginationConfig) => {
    const nuevaPagina = paginacion.current || 1;
    const nuevoTamanio = paginacion.pageSize || tamanioPagina;
    onPageChange(nuevaPagina, nuevoTamanio);
  };

  const columnasFinales = acciones
    ? [
        ...columnas,
        {
          title: "Acciones",
          key: "acciones",
          render: (_: any, registro: T) => acciones(registro),
          align: "center" as const,
        },
      ]
    : columnas;

  // Normalizar y generar clases del tema
  const configTema = normalizarTema(tema);
  const clasesTema = generarClasesTema(configTema);

  // Mapear tamaños personalizados a tamaños de Ant Design
  const mapearTamanio = (tamanio: string) => {
    switch (tamanio) {
      case 'small': return 'small';
      case 'large': return 'large';
      default: return 'middle';
    }
  };

  return (
    <div className={`${clasesTema} ${clasesPersonalizadas.contenedor || ''}`}>
      <HeaderTabla 
        mostrarHeader={mostrarHeader}
        tituloTabla={tituloTabla}
        subtituloTabla={subtituloTabla}
        header={header}
        clasesPersonalizadas={clasesPersonalizadas}
      />
      
      <Table
        columns={columnasFinales}
        dataSource={datos}
        rowKey={claveFila}
        size={mapearTamanio(configTema.tamanio || 'medium')}
        tableLayout="fixed"
        bordered={configTema.conBordes}
        className={`${clasesPersonalizadas.tabla || ''}`}
        pagination={{
          current: paginaActual,
          pageSize: tamanioPagina,
          total,
          showSizeChanger: true,
          pageSizeOptions: opcionesTamanioPagina,
          showTotal: (total, rango) => `${rango[0]}-${rango[1]} de ${total} registros`,
          locale: {
            items_per_page: 'por página',
            jump_to: 'Ir a',
            jump_to_confirm: 'Confirmar',
            page: '',
          },
        }}
        onChange={manejarCambio}
        scroll={{ x: '100%' }}
        {...tablaProps}
      />
      
      <FooterTabla 
        footer={footer}
        clasesPersonalizadas={clasesPersonalizadas}
      />
    </div>
  );
};

export default TablaPaginada;
