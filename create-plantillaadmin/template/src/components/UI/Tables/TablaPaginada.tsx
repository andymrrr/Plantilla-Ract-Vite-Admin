import { Table, TablePaginationConfig, Space, Flex, Spin, Alert } from 'antd';
import { ReactNode } from 'react';
import BusquedaAvanzada from './BusquedaAvanzada';
import { 
  TablaPaginadaProps,
  PosicionBoton,
  ConfiguracionBotonTabla,
  FiltroBusqueda,
  PosicionBotonTabla,
  BotonesAccionTabla
} from './types';

const TablaPaginada = <T extends object>({
  datos,
  columnas,
  total,
  paginaActual,
  tamanioPagina,
  onPageChange,
  opcionesTamanioPagina = ['5', '10', '20'],
  claveFila,
  acciones,
  botones = [],
  botonesAccion,
  busquedaAvanzada,
  mostrarHeader = false,
  tituloTabla,
  subtituloTabla,
  espaciadoBotones = 'middle',
  clasesPersonalizadas = {},
  cargando = false,
  error = null,
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

  // Función para filtrar botones visibles y ordenarlos
  const obtenerBotonesVisibles = (posicion: PosicionBoton): ConfiguracionBotonTabla[] => {
    return botones
      .filter(boton => boton.posicion === posicion && (boton.visible !== false))
      .sort((a, b) => (a.orden || 0) - (b.orden || 0));
  };

  // Función para agrupar botones por posición
  const agruparBotonesPorPosicion = (posicion: PosicionBoton) => {
    const botonesEnPosicion = obtenerBotonesVisibles(posicion);
    
    return botonesEnPosicion.map((boton) => (
      <div key={boton.key}>
        {boton.contenido}
      </div>
    ));
  };

  // Componente para renderizar una sección de botones
  const SeccionBotones = ({ posicion, justify }: { posicion: PosicionBoton; justify: 'flex-start' | 'center' | 'flex-end' }) => {
    const botonesEnPosicion = agruparBotonesPorPosicion(posicion);
    
    if (botonesEnPosicion.length === 0) return null;
    
    return (
      <Flex justify={justify} className="w-full">
        <Space size={espaciadoBotones}>
          {botonesEnPosicion}
        </Space>
      </Flex>
    );
  };

  // Componente para el header de la tabla
  const HeaderTabla = () => {
    if (!mostrarHeader && !tituloTabla && !agruparBotonesPorPosicion('arriba-izquierda').length && 
        !agruparBotonesPorPosicion('arriba-centro').length && !agruparBotonesPorPosicion('arriba-derecha').length) {
      return null;
    }

    return (
      <div className={`mb-4 ${clasesPersonalizadas.header || ''}`}>
        {/* Fila superior: Título/Subtítulo y botones */}
        <Flex justify="space-between" align="center" className="mb-2">
          <div className="flex-1">
            <SeccionBotones posicion="arriba-izquierda" justify="flex-start" />
          </div>
          
          {(tituloTabla || subtituloTabla) && (
            <div className="flex-1 text-center">
              {tituloTabla && <h3 className="text-lg font-semibold text-gray-800 mb-0">{tituloTabla}</h3>}
              {subtituloTabla && <p className="text-sm text-gray-600 mb-0">{subtituloTabla}</p>}
            </div>
          )}
          
          <div className="flex-1">
            <SeccionBotones posicion="arriba-derecha" justify="flex-end" />
          </div>
        </Flex>
        
        {/* Fila central para botones centrados */}
        <SeccionBotones posicion="arriba-centro" justify="center" />
      </div>
    );
  };

  // Componente para el footer de la tabla
  const FooterTabla = () => {
    const tieneBotonesAbajo = agruparBotonesPorPosicion('abajo-izquierda').length > 0 ||
                             agruparBotonesPorPosicion('abajo-centro').length > 0 ||
                             agruparBotonesPorPosicion('abajo-derecha').length > 0;

    if (!tieneBotonesAbajo) return null;

    return (
      <div className={`mt-4 ${clasesPersonalizadas.footer || ''}`}>
        {/* Fila inferior: botones */}
        <Flex justify="space-between" align="center" className="mb-2">
          <div className="flex-1">
            <SeccionBotones posicion="abajo-izquierda" justify="flex-start" />
          </div>
          
          <div className="flex-1">
            <SeccionBotones posicion="abajo-centro" justify="center" />
          </div>
          
          <div className="flex-1">
            <SeccionBotones posicion="abajo-derecha" justify="flex-end" />
          </div>
        </Flex>
      </div>
    );
  };

  // Manejar cambios en filtros de búsqueda
  const manejarCambioFiltros = (filtros: FiltroBusqueda<T>[]) => {
    // Resetear a la primera página cuando cambian los filtros
    onPageChange(1, tamanioPagina);
  };

  return (
    <div className={`rounded-xl shadow bg-white p-4 ${clasesPersonalizadas.contenedor || ''}`}>
      <HeaderTabla />
      
      {/* Panel de búsqueda avanzada */}
      {busquedaAvanzada && (
        <div className={clasesPersonalizadas.panelBusqueda || ''}>
          <BusquedaAvanzada
            configuracion={busquedaAvanzada}
            onFiltrosChange={manejarCambioFiltros}
          />
        </div>
      )}

      {/* Mostrar error si existe */}
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          className="mb-4"
        />
      )}
      
      <Spin spinning={cargando}>
        <Table
          columns={columnasFinales}
          dataSource={datos}
          rowKey={claveFila}
          size="middle"
          tableLayout="fixed"
          bordered
          className={`!rounded-xl !overflow-hidden
            [&_.ant-table-thead>tr>th]:bg-slate-100
            [&_.ant-table-thead>tr>th]:text-slate-700
            [&_.ant-table-thead>tr>th]:font-semibold
            [&_.ant-table-tbody>tr:hover>td]:bg-slate-50
            [&_.ant-table-tbody>tr>td]:align-middle
            ${clasesPersonalizadas.tabla || ''}
          `}
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
        />
      </Spin>
      
      <FooterTabla />
    </div>
  );
};

export default TablaPaginada;
