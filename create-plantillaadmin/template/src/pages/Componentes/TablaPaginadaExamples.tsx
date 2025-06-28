import { useState, useMemo } from 'react';
import { Button, Space, Tag, Tooltip, Popconfirm, Card, Row, Col } from 'antd';
import { 
  EditOutlined, 
  DeleteOutlined, 
  EyeOutlined,
  PlusOutlined,
  UserOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Tarjeta } from '../../components/UI/Tarjeta';
import { TablaPaginada, TablaTema } from '../../components/UI/Tables';
import { useTablaPaginadaVM } from './TablaPaginadaExamplesVM';

const TablaPaginadaExamples = () => {
  const vm = useTablaPaginadaVM();

  return (
    <>
      <Breadcrumb pageName="Ejemplos de Tabla Paginada con Temas" />

      <div className="flex flex-col gap-6">
        
        {/* Introducción */}
        <Tarjeta
          titulo="🎨 Sistema de Temas para Tablas"
          subtitulo="10 temas profesionales predefinidos"
          variante="defecto"
          lineaHeader={{ mostrar: true, grosor: '4px', color: 'purple' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
            {vm.temas.map(({ tema, nombre, icono }) => (
              <Card 
                key={tema}
                size="small"
                className="hover:shadow-md transition-shadow cursor-pointer text-center"
                onClick={() => vm.scrollToTema(tema)}
              >
                <div className="text-2xl mb-2">{icono}</div>
                <h4 className="font-semibold text-sm">{nombre}</h4>
              </Card>
            ))}
          </div>
        </Tarjeta>

        {/* Ejemplos por tema */}
        {vm.temas.map(({ tema, nombre, icono }) => (
          <div key={tema} id={`tema-${tema}`}>
            <Tarjeta
              titulo={`${icono} ${nombre}`}
              subtitulo={`Ejemplo con tema ${nombre.toLowerCase()}`}
              variante="defecto"
              lineaHeader={{ mostrar: true, grosor: '2px', color: 'blue' }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                  <Card title={<><ShoppingOutlined /> Productos</>} size="small">
                    <TablaPaginada
                      {...vm.propsProductos}
                      tema={tema}
                      header={vm.headerProductos}
                      footer={vm.footerProductos}
                    />
                  </Card>
                </Col>
                <Col xs={24} lg={12}>
                  <Card title={<><UserOutlined /> Usuarios</>} size="small">
                    <TablaPaginada
                      {...vm.propsUsuarios}
                      tema={tema}
                      header={vm.headerUsuarios}
                      footer={vm.footerUsuarios}
                    />
                  </Card>
                </Col>
              </Row>
            </Tarjeta>
          </div>
        ))}

        {/* Configuración avanzada */}
        <Tarjeta
          titulo="⚙️ Configuración Avanzada"
          subtitulo="Personalización granular de temas"
          variante="defecto"
          lineaHeader={{ mostrar: true, grosor: '4px', color: 'orange' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card title="Tema Personalizado" size="small">
                <TablaPaginada
                  {...vm.propsProductos}
                  tema={vm.temaPersonalizado}
                  header={vm.headerPersonalizado}
                />
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Código" size="small">
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`tema: {
  tema: 'modern',
  tamanio: 'large',
  densidad: 'spacious',
  conBordes: false,
  conSombras: true,
  conHover: true,
  conZebra: true,
  colorAcento: '#3b82f6'
}`}
                </pre>
              </Card>
            </Col>
          </Row>
        </Tarjeta>
      </div>
    </>
  );
};

export default TablaPaginadaExamples; 