import React, { useState, useEffect, useMemo } from 'react';
import { 
  Card, 
  Form, 
  Select, 
  Input, 
  InputNumber, 
  DatePicker, 
  Switch, 
  Button, 
  Space, 
  Tag, 
  Collapse,
  Row,
  Col,
  Tooltip,
  Popconfirm
} from 'antd';
import { 
  SearchOutlined, 
  ClearOutlined, 
  PlusOutlined, 
  DeleteOutlined,
  SaveOutlined,
  HistoryOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';
import {
  ConfiguracionBusquedaAvanzada,
  FiltroBusqueda,
  ConfiguracionCampoBusqueda,
  OperadorBusqueda,
  TipoCampoBusqueda,
  BusquedaGuardada
} from './types';
import {
  ETIQUETAS_OPERADORES,
  OPERADORES_POR_TIPO,
  generarEtiquetaFiltro,
  validarFiltro,
  generarConfiguracionBusquedaAutomatica
} from './utils';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

interface BusquedaAvanzadaProps<T> {
  configuracion: ConfiguracionBusquedaAvanzada<T>;
  onFiltrosChange: (filtros: FiltroBusqueda<T>[]) => void;
  className?: string;
}

const BusquedaAvanzada = <T extends object>({
  configuracion,
  onFiltrosChange,
  className = ''
}: BusquedaAvanzadaProps<T>) => {
  const [form] = Form.useForm();
  const [filtros, setFiltros] = useState<FiltroBusqueda<T>[]>(configuracion.filtrosIniciales || []);
  const [filtroActual, setFiltroActual] = useState<Partial<FiltroBusqueda<T>>>({});
  const [expandido, setExpandido] = useState(configuracion.expandidoPorDefecto || false);
  const [busquedasGuardadas, setBusquedasGuardadas] = useState<BusquedaGuardada<T>[]>(
    configuracion.busquedasGuardadas || []
  );

  // Generar configuración de campos automáticamente si no se proporciona
  const camposConfiguracion = useMemo(() => {
    if (configuracion.campos && configuracion.campos.length > 0) {
      return configuracion.campos;
    }
    
    // Auto-generar configuración basada en datos
    if (configuracion.datos && configuracion.datos.length > 0) {
      return generarConfiguracionBusquedaAutomatica(
        configuracion.datos,
        configuracion.camposExcluidos || []
      );
    }
    
    return [];
  }, [configuracion.campos, configuracion.datos, configuracion.camposExcluidos]);

  // Efecto para notificar cambios en filtros
  useEffect(() => {
    onFiltrosChange(filtros);
    if (configuracion.onFiltrosChange) {
      configuracion.onFiltrosChange(filtros);
    }
  }, [filtros, onFiltrosChange, configuracion]);

  // Obtener operadores disponibles para un campo
  const obtenerOperadoresDisponibles = (campo: keyof T): OperadorBusqueda[] => {
    const configCampo = camposConfiguracion.find(c => c.campo === campo);
    if (configCampo?.operadores) {
      return configCampo.operadores;
    }
    
    const tipoCampo = configCampo?.tipo || 'texto';
    return OPERADORES_POR_TIPO[tipoCampo];
  };

  // Renderizar campo de valor según el tipo
  const renderizarCampoValor = (configCampo: ConfiguracionCampoBusqueda<T>, operador: OperadorBusqueda) => {
    const { tipo, opciones, placeholder, props = {} } = configCampo;

    if (operador === 'entre') {
      if (tipo === 'fecha') {
        return (
          <RangePicker
            placeholder={['Fecha inicio', 'Fecha fin']}
            style={{ width: '100%' }}
            {...props}
          />
        );
      } else if (tipo === 'numero') {
        return (
          <Input.Group compact>
            <InputNumber
              placeholder="Desde"
              style={{ width: '50%' }}
              {...props}
            />
            <InputNumber
              placeholder="Hasta"
              style={{ width: '50%' }}
              {...props}
            />
          </Input.Group>
        );
      }
    }

    if (['en', 'noEn'].includes(operador)) {
      return (
        <Select
          mode="multiple"
          placeholder={placeholder || 'Seleccionar valores'}
          style={{ width: '100%' }}
          {...props}
        >
          {opciones?.map(opcion => (
            <Option key={String(opcion.valor)} value={opcion.valor}>
              {opcion.etiqueta}
            </Option>
          ))}
        </Select>
      );
    }

    switch (tipo) {
      case 'texto':
        return (
          <Input
            placeholder={placeholder || 'Ingrese texto'}
            {...props}
          />
        );

      case 'numero':
        return (
          <InputNumber
            placeholder={placeholder || 'Ingrese número'}
            style={{ width: '100%' }}
            {...props}
          />
        );

      case 'fecha':
        return (
          <DatePicker
            placeholder={placeholder || 'Seleccione fecha'}
            style={{ width: '100%' }}
            {...props}
          />
        );

      case 'select':
        return (
          <Select
            placeholder={placeholder || 'Seleccione opción'}
            style={{ width: '100%' }}
            {...props}
          >
            {opciones?.map(opcion => (
              <Option key={String(opcion.valor)} value={opcion.valor}>
                {opcion.etiqueta}
              </Option>
            ))}
          </Select>
        );

      case 'booleano':
        return (
          <Select
            placeholder="Seleccione valor"
            style={{ width: '100%' }}
            {...props}
          >
            <Option value={true}>Sí</Option>
            <Option value={false}>No</Option>
          </Select>
        );

      default:
        return (
          <Input
            placeholder={placeholder || 'Ingrese valor'}
            {...props}
          />
        );
    }
  };

  // Agregar nuevo filtro
  const agregarFiltro = () => {
    form.validateFields().then(valores => {
      const { campo, operador, valor } = valores;
      
      if (!campo || !operador || valor == null) return;

      let valorProcesado = valor;
      
      // Procesar valores especiales
      if (operador === 'entre' && Array.isArray(valor)) {
        if (valor.length === 2) {
          valorProcesado = valor.map(v => dayjs.isDayjs(v) ? v.toDate() : v);
        }
      } else if (dayjs.isDayjs(valor)) {
        valorProcesado = valor.toDate();
      }

      const configCampo = camposConfiguracion.find(c => c.campo === campo);
      const etiquetaCampo = configCampo?.etiqueta || String(campo);

      const nuevoFiltro: FiltroBusqueda<T> = {
        campo,
        operador,
        valor: valorProcesado
      };

      const error = validarFiltro(nuevoFiltro);
      if (error) {
        console.error('Error en filtro:', error);
        return;
      }

      setFiltros(prev => [...prev, nuevoFiltro]);
      form.resetFields();
      setFiltroActual({});
    });
  };

  // Eliminar filtro
  const eliminarFiltro = (index: number) => {
    setFiltros(prev => prev.filter((_, i) => i !== index));
  };

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    setFiltros([]);
    form.resetFields();
    setFiltroActual({});
  };

  // Guardar búsqueda actual
  const guardarBusqueda = () => {
    if (filtros.length === 0) return;

    const nombre = prompt('Nombre para la búsqueda guardada:');
    if (!nombre) return;

    const nuevaBusqueda: BusquedaGuardada<T> = {
      id: Date.now().toString(),
      nombre,
      filtros: [...filtros],
      fechaCreacion: new Date(),
      descripcion: `${filtros.length} filtro(s) aplicado(s)`
    };

    setBusquedasGuardadas(prev => [...prev, nuevaBusqueda]);
  };

  // Cargar búsqueda guardada
  const cargarBusquedaGuardada = (busqueda: BusquedaGuardada<T>) => {
    setFiltros([...busqueda.filtros]);
  };

  // Eliminar búsqueda guardada
  const eliminarBusquedaGuardada = (id: string) => {
    setBusquedasGuardadas(prev => prev.filter(b => b.id !== id));
  };

  // Si no hay campos configurados, mostrar mensaje
  if (camposConfiguracion.length === 0) {
    return (
      <div className={`mb-4 ${className}`}>
        <Card size="small">
          <div className="text-center text-gray-500 py-4">
            <SearchOutlined className="text-2xl mb-2" />
            <p>No hay datos disponibles para generar filtros de búsqueda.</p>
            <p className="text-sm">Proporciona datos en la configuración o define campos manualmente.</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={`mb-4 ${className}`}>
      <Collapse 
        activeKey={expandido ? ['busqueda'] : []}
        onChange={(keys) => setExpandido(keys.includes('busqueda'))}
      >
        <Panel 
          header={
            <div className="flex items-center justify-between">
              <span className="font-medium">
                <SearchOutlined className="mr-2" />
                {configuracion.titulo || 'Búsqueda Avanzada'}
              </span>
              {filtros.length > 0 && (
                <Tag color="blue" className="ml-2">
                  {filtros.length} filtro(s)
                </Tag>
              )}
            </div>
          }
          key="busqueda"
          className="bg-gray-50"
        >
          <Card size="small" className="mb-4">
            <Form
              form={form}
              layout="vertical"
              onFinish={agregarFiltro}
            >
              <Row gutter={16}>
                <Col xs={24} sm={8} md={6}>
                  <Form.Item
                    label="Campo"
                    name="campo"
                    rules={[{ required: true, message: 'Seleccione un campo' }]}
                  >
                    <Select
                      placeholder="Seleccionar campo"
                      onChange={(valor) => {
                        setFiltroActual(prev => ({ ...prev, campo: valor }));
                        form.setFieldsValue({ operador: undefined, valor: undefined });
                      }}
                    >
                      {camposConfiguracion.map(campo => (
                        <Option key={String(campo.campo)} value={campo.campo}>
                          {campo.etiqueta}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={8} md={6}>
                  <Form.Item
                    label="Operador"
                    name="operador"
                    rules={[{ required: true, message: 'Seleccione un operador' }]}
                  >
                    <Select
                      placeholder="Seleccionar operador"
                      disabled={!filtroActual.campo}
                      onChange={(valor) => {
                        setFiltroActual(prev => ({ ...prev, operador: valor }));
                        form.setFieldsValue({ valor: undefined });
                      }}
                    >
                      {filtroActual.campo && obtenerOperadoresDisponibles(filtroActual.campo).map(op => (
                        <Option key={op} value={op}>
                          {ETIQUETAS_OPERADORES[op]}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={8} md={8}>
                  <Form.Item
                    label="Valor"
                    name="valor"
                    rules={[{ required: true, message: 'Ingrese un valor' }]}
                  >
                    {filtroActual.campo && filtroActual.operador ? (
                      renderizarCampoValor(
                        camposConfiguracion.find(c => c.campo === filtroActual.campo)!,
                        filtroActual.operador
                      )
                    ) : (
                      <Input placeholder="Seleccione campo y operador" disabled />
                    )}
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={4}>
                  <Form.Item label=" ">
                    <Space>
                      <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={agregarFiltro}
                        disabled={!filtroActual.campo || !filtroActual.operador}
                      >
                        Agregar
                      </Button>
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>

          {/* Filtros aplicados */}
          {filtros.length > 0 && (
            <Card size="small" title="Filtros Aplicados" className="mb-4">
              <Space wrap>
                {filtros.map((filtro, index) => (
                  <Tag
                    key={index}
                    closable
                    onClose={() => eliminarFiltro(index)}
                    color="blue"
                    className="mb-2"
                  >
                    {filtro.etiqueta}
                  </Tag>
                ))}
              </Space>
              
              <div className="mt-3 flex justify-between">
                <Space>
                  {configuracion.permitirGuardarBusquedas && (
                    <Button
                      icon={<SaveOutlined />}
                      onClick={guardarBusqueda}
                      size="small"
                    >
                      Guardar Búsqueda
                    </Button>
                  )}
                </Space>
                
                <Button
                  icon={<ClearOutlined />}
                  onClick={limpiarFiltros}
                  size="small"
                  danger
                >
                  Limpiar Todo
                </Button>
              </div>
            </Card>
          )}

          {/* Búsquedas guardadas */}
          {configuracion.permitirGuardarBusquedas && busquedasGuardadas.length > 0 && (
            <Card size="small" title="Búsquedas Guardadas">
              <Space wrap>
                {busquedasGuardadas.map(busqueda => (
                  <div key={busqueda.id} className="flex items-center space-x-2 mb-2">
                    <Tooltip title={busqueda.descripcion}>
                      <Button
                        icon={<HistoryOutlined />}
                        onClick={() => cargarBusquedaGuardada(busqueda)}
                        size="small"
                      >
                        {busqueda.nombre}
                      </Button>
                    </Tooltip>
                    <Popconfirm
                      title="¿Eliminar esta búsqueda guardada?"
                      onConfirm={() => eliminarBusquedaGuardada(busqueda.id)}
                    >
                      <Button
                        icon={<DeleteOutlined />}
                        size="small"
                        danger
                        type="text"
                      />
                    </Popconfirm>
                  </div>
                ))}
              </Space>
            </Card>
          )}
        </Panel>
      </Collapse>
    </div>
  );
};

export default BusquedaAvanzada; 