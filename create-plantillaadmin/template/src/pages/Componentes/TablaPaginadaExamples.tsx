import { useState, useMemo } from 'react';
import { Button, Space, Tag, Tooltip, Popconfirm } from 'antd';
import { 
  EditOutlined, 
  DeleteOutlined, 
  EyeOutlined,
  PlusOutlined,
  ReloadOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Tarjeta } from '../../components/UI/Tarjeta';
// import TablaPaginada from '../../components/UI/Tables/TablaPaginada';
// import { 
//   ConfiguracionBusquedaAvanzada, 
//   FiltroBusqueda,
//   ConfiguracionBotonTabla
// } from '../../components/UI/Tables/types';
// import { aplicarFiltros } from '../../components/UI/Tables/utils';

// Interfaz de ejemplo: Producto
interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  activo: boolean;
  fechaCreacion: Date;
  proveedor: string;
}

// Interfaz de ejemplo: Usuario
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: string;
  departamento: string;
}

// Tipos temporales para que compile
type FiltroBusqueda<T> = any;
type ConfiguracionBusquedaAvanzada = any;
type ConfiguracionBotonTabla = any;

const aplicarFiltros = (datos: any[], filtros: any[]) => datos;

const TablaPaginada = (props: any) => <div>Componente TablaPaginada no implementado</div>;

const TablaPaginadaExamples = () => {
  // Estados para tabla de productos
  const [paginaProductos, setPaginaProductos] = useState(1);
  const [tamanioProductos, setTamanioProductos] = useState(10);
  const [filtrosProductos, setFiltrosProductos] = useState<FiltroBusqueda<Producto>[]>([]);
  const [cargandoProductos, setCargandoProductos] = useState(false);

  // Estados para tabla de usuarios
  const [paginaUsuarios, setPaginaUsuarios] = useState(1);
  const [tamanioUsuarios, setTamanioUsuarios] = useState(5);
  const [filtrosUsuarios, setFiltrosUsuarios] = useState<FiltroBusqueda<Usuario>[]>([]);

  // Datos de ejemplo - Productos
  const datosProductosCompletos: Producto[] = useMemo(() => 
    Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      nombre: `Producto ${index + 1}`,
      categoria: ['Electrónicos', 'Ropa', 'Hogar', 'Deportes', 'Libros'][index % 5],
      precio: Math.round((Math.random() * 1000 + 10) * 100) / 100,
      stock: Math.floor(Math.random() * 100),
      activo: Math.random() > 0.3,
      fechaCreacion: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
      proveedor: ['Proveedor A', 'Proveedor B', 'Proveedor C'][index % 3]
    })), []
  );

  // Datos de ejemplo - Usuarios
  const datosUsuariosCompletos: Usuario[] = useMemo(() =>
    Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      nombre: `Usuario ${index + 1}`,
      email: `usuario${index + 1}@ejemplo.com`,
      rol: ['Admin', 'Editor', 'Viewer'][index % 3],
      estado: ['Activo', 'Inactivo', 'Suspendido'][index % 3],
      departamento: ['IT', 'Ventas', 'Marketing', 'RRHH'][index % 4]
    })), []
  );

  // Aplicar filtros a productos
  const productosFiltrados = useMemo(() => 
    aplicarFiltros(datosProductosCompletos, filtrosProductos), 
    [datosProductosCompletos, filtrosProductos]
  );

  // Aplicar filtros a usuarios
  const usuariosFiltrados = useMemo(() => 
    aplicarFiltros(datosUsuariosCompletos, filtrosUsuarios), 
    [datosUsuariosCompletos, filtrosUsuarios]
  );

  // Paginación de productos
  const productosParaMostrar = useMemo(() => {
    const inicio = (paginaProductos - 1) * tamanioProductos;
    return productosFiltrados.slice(inicio, inicio + tamanioProductos);
  }, [productosFiltrados, paginaProductos, tamanioProductos]);

  // Paginación de usuarios
  const usuariosParaMostrar = useMemo(() => {
    const inicio = (paginaUsuarios - 1) * tamanioUsuarios;
    return usuariosFiltrados.slice(inicio, inicio + tamanioUsuarios);
  }, [usuariosFiltrados, paginaUsuarios, tamanioUsuarios]);

  // Configuración de búsqueda para productos (AUTO-GENERADA)
  const busquedaProductos: ConfiguracionBusquedaAvanzada = {
    titulo: 'Filtros de Productos',
    expandidoPorDefecto: false,
    permitirGuardarBusquedas: true,
    datos: datosProductosCompletos, // ¡Solo necesitas pasar los datos!
    camposExcluidos: ['id'], // Opcional: excluir campos que no quieres filtrar
    autoDeteccionTipos: true,
    onFiltrosChange: (filtros: any) => {
      setFiltrosProductos(filtros);
      setPaginaProductos(1);
    }
  };

  // Configuración de búsqueda para usuarios (AUTO-GENERADA)
  const busquedaUsuarios: ConfiguracionBusquedaAvanzada = {
    titulo: 'Filtros de Usuarios',
    expandidoPorDefecto: true,
    datos: datosUsuariosCompletos, // ¡Solo necesitas pasar los datos!
    camposExcluidos: ['id', 'email'], // Excluir campos sensibles
    onFiltrosChange: (filtros: any) => {
      setFiltrosUsuarios(filtros);
      setPaginaUsuarios(1);
    }
  };

  // Columnas para productos
  const columnasProductos = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80
    },
    {
      title: 'Producto',
      dataIndex: 'nombre',
      key: 'nombre'
    },
    {
      title: 'Categoría',
      dataIndex: 'categoria',
      key: 'categoria'
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      render: (precio: number) => `$${precio.toFixed(2)}`
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock'
    },
    {
      title: 'Estado',
      dataIndex: 'activo',
      key: 'activo',
      render: (activo: boolean) => (
        <Tag color={activo ? 'green' : 'red'}>
          {activo ? 'Activo' : 'Inactivo'}
        </Tag>
      )
    },
    {
      title: 'Proveedor',
      dataIndex: 'proveedor',
      key: 'proveedor'
    }
  ];

  // Columnas para usuarios
  const columnasUsuarios = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Rol',
      dataIndex: 'rol',
      key: 'rol'
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      render: (estado: string) => {
        const color = estado === 'Activo' ? 'green' : estado === 'Suspendido' ? 'red' : 'orange';
        return <Tag color={color}>{estado}</Tag>;
      }
    },
    {
      title: 'Departamento',
      dataIndex: 'departamento',
      key: 'departamento'
    }
  ];

  // Acciones para productos
  const accionesProductos = (producto: Producto) => (
    <Space>
      <Tooltip title="Ver detalles">
        <Button 
          icon={<EyeOutlined />} 
          size="small" 
          onClick={() => console.log('Ver producto:', producto.id)}
        />
      </Tooltip>
      <Tooltip title="Editar">
        <Button 
          icon={<EditOutlined />} 
          size="small" 
          type="primary"
          onClick={() => console.log('Editar producto:', producto.id)}
        />
      </Tooltip>
      <Popconfirm
        title="¿Eliminar producto?"
        description="Esta acción no se puede deshacer"
        onConfirm={() => console.log('Eliminar producto:', producto.id)}
      >
        <Tooltip title="Eliminar">
          <Button 
            icon={<DeleteOutlined />} 
            size="small" 
            danger
          />
        </Tooltip>
      </Popconfirm>
    </Space>
  );

  // Acciones para usuarios
  const accionesUsuarios = (usuario: Usuario) => (
    <Space>
      <Button 
        icon={<EditOutlined />} 
        size="small" 
        type="primary"
        onClick={() => console.log('Editar usuario:', usuario.id)}
      >
        Editar
      </Button>
    </Space>
  );

  // Botones personalizados para productos
  const botonesProductos: ConfiguracionBotonTabla[] = [
    {
      key: 'agregar',
      posicion: 'arriba-derecha',
      contenido: (
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => console.log('Agregar producto')}
        >
          Nuevo Producto
        </Button>
      )
    },
    {
      key: 'refrescar',
      posicion: 'arriba-derecha',
      contenido: (
        <Button 
          icon={<ReloadOutlined />}
          loading={cargandoProductos}
          onClick={() => {
            setCargandoProductos(true);
            setTimeout(() => setCargandoProductos(false), 2000);
          }}
        >
          Refrescar
        </Button>
      )
    },
    {
      key: 'exportar',
      posicion: 'abajo-derecha',
      contenido: (
        <Button 
          icon={<DownloadOutlined />}
          onClick={() => console.log('Exportar productos')}
        >
          Exportar
        </Button>
      )
    }
  ];

  // Manejar cambio de página productos
  const manejarCambioProductos = (pagina: number, tamanio: number) => {
    setPaginaProductos(pagina);
    setTamanioProductos(tamanio);
  };

  // Manejar cambio de página usuarios
  const manejarCambioUsuarios = (pagina: number, tamanio: number) => {
    setPaginaUsuarios(pagina);
    setTamanioUsuarios(tamanio);
  };

  return (
    <>
      <Breadcrumb pageName="Ejemplos de Tabla Paginada" />

      <div className="flex flex-col gap-6">
        
        {/* Ejemplo 1: Tabla de Productos con Búsqueda Avanzada AUTO-GENERADA */}
        <Tarjeta
          titulo="Tabla de Productos"
          subtitulo="Búsqueda avanzada AUTO-GENERADA basada en los datos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: '2px',
            color: 'blue'
          }}
        >
          <TablaPaginada
            datos={productosParaMostrar}
            columnas={columnasProductos}
            total={productosFiltrados.length}
            paginaActual={paginaProductos}
            tamanioPagina={tamanioProductos}
            onPageChange={manejarCambioProductos}
            claveFila="id"
            acciones={accionesProductos}
            botones={botonesProductos}
            busquedaAvanzada={busquedaProductos}
            mostrarHeader={true}
            tituloTabla="Gestión de Productos"
            subtituloTabla={`${productosFiltrados.length} productos encontrados`}
            cargando={cargandoProductos}
            clasesPersonalizadas={{
              contenedor: 'shadow-lg',
              panelBusqueda: 'bg-blue-50 p-4 rounded-lg mb-4'
            }}
          />
        </Tarjeta>

        {/* Ejemplo 2: Tabla de Usuarios Simple */}
        <Tarjeta
          titulo="Tabla de Usuarios"
          subtitulo="Búsqueda expandida por defecto con campos excluidos"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: '2px',
            color: 'green'
          }}
        >
          <TablaPaginada
            datos={usuariosParaMostrar}
            columnas={columnasUsuarios}
            total={usuariosFiltrados.length}
            paginaActual={paginaUsuarios}
            tamanioPagina={tamanioUsuarios}
            onPageChange={manejarCambioUsuarios}
            opcionesTamanioPagina={['5', '10', '15', '20']}
            claveFila="id"
            acciones={accionesUsuarios}
            busquedaAvanzada={busquedaUsuarios}
            tituloTabla="Gestión de Usuarios"
            subtituloTabla={`Total: ${usuariosFiltrados.length} usuarios`}
          />
        </Tarjeta>

        {/* Información sobre el componente */}
        <Tarjeta
          titulo="🚀 Búsqueda Avanzada AUTO-GENERADA"
          subtitulo="¡Solo necesitas pasar los datos y el componente genera automáticamente los filtros!"
          variante="defecto"
          lineaHeader={{
            mostrar: true,
            grosor: '2px',
            color: 'red'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-3 text-lg">
                🎯 Configuración Mínima
              </h4>
              <div className="bg-gray-800 text-green-400 p-4 rounded text-sm font-mono">
                <div>busquedaAvanzada: {`{`}</div>
                <div className="ml-4">datos: misDatos,</div>
                <div className="ml-4">onFiltrosChange: (filtros) =&gt; {`{`}</div>
                <div className="ml-8">setFiltros(filtros);</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
              <p className="text-sm text-blue-600 mt-3">
                ¡Eso es todo! El componente detecta automáticamente los tipos de datos y genera los filtros apropiados.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-3 text-lg">
                🧠 Auto-Detección Inteligente
              </h4>
              <ul className="text-sm text-green-600 space-y-2">
                <li>• <strong>Texto:</strong> Filtros de contiene, igual, empieza con</li>
                <li>• <strong>Números:</strong> Mayor, menor, entre, igual</li>
                <li>• <strong>Fechas:</strong> Rangos y comparaciones</li>
                <li>• <strong>Booleanos:</strong> Sí/No automático</li>
                <li>• <strong>Selects:</strong> Si hay pocos valores únicos</li>
                <li>• <strong>Exclusiones:</strong> Campos sensibles automáticamente excluidos</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-3 text-lg">
                ⚙️ Opciones Avanzadas
              </h4>
              <ul className="text-sm text-purple-600 space-y-2">
                <li>• <strong>camposExcluidos:</strong> ['id', 'password']</li>
                <li>• <strong>expandidoPorDefecto:</strong> true/false</li>
                <li>• <strong>permitirGuardarBusquedas:</strong> true</li>
                <li>• <strong>titulo:</strong> "Mis Filtros Personalizados"</li>
                <li>• <strong>filtrosIniciales:</strong> Filtros predefinidos</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-3 text-lg">
                🎨 Personalización Total
              </h4>
              <ul className="text-sm text-red-600 space-y-2">
                <li>• <strong>Campos manuales:</strong> Define tus propios campos</li>
                <li>• <strong>Operadores custom:</strong> Personaliza operadores por campo</li>
                <li>• <strong>Validaciones:</strong> Funciones de validación personalizadas</li>
                <li>• <strong>Opciones dinámicas:</strong> Selects con datos de API</li>
                <li>• <strong>Estilos:</strong> Clases CSS personalizadas</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <h5 className="font-semibold text-yellow-800 mb-2">💡 Tip Pro:</h5>
            <p className="text-yellow-700 text-sm">
              Para entidades complejas, puedes combinar auto-generación con configuración manual. 
              Define solo los campos especiales y deja que el resto se genere automáticamente.
            </p>
          </div>
        </Tarjeta>
      </div>
    </>
  );
};

export default TablaPaginadaExamples; 