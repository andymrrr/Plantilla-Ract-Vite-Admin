import { useState, useMemo } from 'react';
import { Button, Space, Tag, Tooltip, Popconfirm } from 'antd';
import { 
  EditOutlined, 
  DeleteOutlined, 
  EyeOutlined,
  PlusOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { TablaTema, TablaTamanio, TablaDensidad } from '../../components/UI/Tables';

// Interfaces
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

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: string;
  departamento: string;
}

interface TemaInfo {
  tema: TablaTema;
  nombre: string;
  icono: string;
}

export const useTablaPaginadaVM = () => {
  // Estados para paginación
  const [paginaProductos, setPaginaProductos] = useState(1);
  const [tamanioProductos, setTamanioProductos] = useState(10);
  const [paginaUsuarios, setPaginaUsuarios] = useState(1);
  const [tamanioUsuarios, setTamanioUsuarios] = useState(5);

  // Datos de ejemplo
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

  // Datos paginados
  const productosParaMostrar = useMemo(() => {
    const inicio = (paginaProductos - 1) * tamanioProductos;
    return datosProductosCompletos.slice(inicio, inicio + tamanioProductos);
  }, [datosProductosCompletos, paginaProductos, tamanioProductos]);

  const usuariosParaMostrar = useMemo(() => {
    const inicio = (paginaUsuarios - 1) * tamanioUsuarios;
    return datosUsuariosCompletos.slice(inicio, inicio + tamanioUsuarios);
  }, [datosUsuariosCompletos, paginaUsuarios, tamanioUsuarios]);

  // Columnas
  const columnasProductos = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 80 },
    { title: 'Producto', dataIndex: 'nombre', key: 'nombre' },
    { title: 'Categoría', dataIndex: 'categoria', key: 'categoria' },
    { 
      title: 'Precio', 
      dataIndex: 'precio', 
      key: 'precio',
      render: (precio: number) => `$${precio.toFixed(2)}`
    },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
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
    { title: 'Proveedor', dataIndex: 'proveedor', key: 'proveedor' }
  ];

  const columnasUsuarios = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 80 },
    { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Rol', dataIndex: 'rol', key: 'rol' },
    { 
      title: 'Estado', 
      dataIndex: 'estado', 
      key: 'estado',
      render: (estado: string) => {
        const color = estado === 'Activo' ? 'green' : estado === 'Suspendido' ? 'red' : 'orange';
        return <Tag color={color}>{estado}</Tag>;
      }
    },
    { title: 'Departamento', dataIndex: 'departamento', key: 'departamento' }
  ];

  // Acciones
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

  // Handlers
  const manejarCambioProductos = (pagina: number, tamanio: number) => {
    setPaginaProductos(pagina);
    setTamanioProductos(tamanio);
  };

  const manejarCambioUsuarios = (pagina: number, tamanio: number) => {
    setPaginaUsuarios(pagina);
    setTamanioUsuarios(tamanio);
  };

  // Temas disponibles
  const temas: TemaInfo[] = [
    { tema: 'default', nombre: 'Default', icono: '🎨' },
    { tema: 'professional', nombre: 'Professional', icono: '🏢' },
    { tema: 'minimalist', nombre: 'Minimalist', icono: '🎯' },
    { tema: 'modern', nombre: 'Modern', icono: '🚀' },
    { tema: 'elegant', nombre: 'Elegant', icono: '✨' },
    { tema: 'bold', nombre: 'Bold', icono: '🔥' },
    { tema: 'soft', nombre: 'Soft', icono: '🌸' },
    { tema: 'dark', nombre: 'Dark', icono: '🌙' },
    { tema: 'colorful', nombre: 'Colorful', icono: '🌈' },
    { tema: 'clean', nombre: 'Clean', icono: '🧹' }
  ];

  // Headers y footers
  const headerProductos = (
    <div className="flex justify-between items-center">
      <h4 className="text-lg font-semibold">Gestión de Productos</h4>
      <Space>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          size="small"
        >
          Nuevo
        </Button>
        <Button 
          icon={<ReloadOutlined />}
          size="small"
        >
          Refrescar
        </Button>
      </Space>
    </div>
  );

  const footerProductos = (
    <div className="text-center text-gray-600">
      Total: {datosProductosCompletos.length} productos
    </div>
  );

  const headerUsuarios = (
    <div className="flex justify-between items-center">
      <h4 className="text-lg font-semibold">Gestión de Usuarios</h4>
      <Button 
        type="primary" 
        icon={<PlusOutlined />}
        size="small"
      >
        Agregar Usuario
      </Button>
    </div>
  );

  const footerUsuarios = (
    <div className="text-center text-gray-600">
      {usuariosParaMostrar.length} de {datosUsuariosCompletos.length} usuarios
    </div>
  );

  const headerPersonalizado = (
    <div className="text-center">
      <h3 className="text-xl font-bold text-blue-600">Tabla Personalizada</h3>
      <p className="text-gray-600">Configuración avanzada con tema moderno</p>
    </div>
  );

  // Props para las tablas
  const propsProductos = {
    datos: productosParaMostrar,
    columnas: columnasProductos,
    total: datosProductosCompletos.length,
    paginaActual: paginaProductos,
    tamanioPagina: tamanioProductos,
    onPageChange: manejarCambioProductos,
    claveFila: "id" as const,
    acciones: accionesProductos
  };

  const propsUsuarios = {
    datos: usuariosParaMostrar,
    columnas: columnasUsuarios,
    total: datosUsuariosCompletos.length,
    paginaActual: paginaUsuarios,
    tamanioPagina: tamanioUsuarios,
    onPageChange: manejarCambioUsuarios,
    claveFila: "id" as const,
    acciones: accionesUsuarios
  };

  // Tema personalizado
  const temaPersonalizado = {
    tema: 'modern' as TablaTema,
    tamanio: 'large' as TablaTamanio,
    densidad: 'spacious' as TablaDensidad,
    conBordes: false,
    conSombras: true,
    conHover: true,
    conZebra: true,
    colorAcento: '#3b82f6'
  };

  // Utilidades
  const scrollToTema = (tema: TablaTema) => {
    const element = document.getElementById(`tema-${tema}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    // Datos
    temas,
    propsProductos,
    propsUsuarios,
    temaPersonalizado,
    
    // Headers y footers
    headerProductos,
    footerProductos,
    headerUsuarios,
    footerUsuarios,
    headerPersonalizado,
    
    // Utilidades
    scrollToTema
  };
}; 