import React from 'react';
import { FaHome, FaUsers, FaList, FaUser, FaCog, FaChartBar, FaChevronRight, FaAngleRight } from 'react-icons/fa';
import { RightOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Breadcrumb } from './index';
import { BreadcrumbItem } from './types';

const BreadcrumbExamples: React.FC = () => {
  const itemsEjemplo: BreadcrumbItem[] = [
    { 
      label: 'Usuarios', 
      href: '/usuarios',
      icon: <FaUsers />
    },
    { 
      label: 'Lista', 
      href: '/usuarios/lista',
      icon: <FaList />
    }
  ];

  const itemsLargos: BreadcrumbItem[] = [
    { label: 'Admin', href: '/admin' },
    { label: 'Sistema', href: '/admin/sistema' },
    { label: 'Configuración', href: '/admin/sistema/config' },
    { label: 'Avanzada', href: '/admin/sistema/config/avanzada' },
    { label: 'Seguridad', href: '/admin/sistema/config/avanzada/seguridad' }
  ];

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
        Ejemplos de Breadcrumb
      </h1>

      {/* Variante Default */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Variante Default
        </h2>
        <Breadcrumb 
          pageName="Detalles del Usuario"
          items={itemsEjemplo}
          titleIcon={<FaUser />}
        />
      </section>

      {/* Variante Minimal */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Variante Minimal
        </h2>
        <Breadcrumb 
          pageName="Configuración"
          variant="minimal"
          items={[
            { label: 'Sistema', href: '/sistema' },
            { label: 'General', href: '/sistema/general' }
          ]}
        />
      </section>

      {/* Variante Detailed */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Variante Detailed
        </h2>
        <Breadcrumb 
          pageName="Reportes Avanzados"
          variant="detailed"
          items={[
            { 
              label: 'Analytics', 
              href: '/analytics',
              icon: <FaChartBar />
            },
            { 
              label: 'Métricas', 
              href: '/analytics/metricas',
              icon: <FaCog />
            }
          ]}
          titleIcon={<FaChartBar />}
        />
      </section>

      {/* Variante Compact */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Variante Compact
        </h2>
        <Breadcrumb 
          pageName="Perfil"
          variant="compact"
          items={[
            { label: 'Cuenta', href: '/cuenta' }
          ]}
        />
      </section>

      {/* Con Truncamiento */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Con Truncamiento
        </h2>
        <Breadcrumb 
          pageName="Configuración Avanzada"
          items={itemsLargos}
          maxItems={4}
          truncateItems={true}
          variant="default"
        />
      </section>

      {/* Sin Título */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Sin Título
        </h2>
        <Breadcrumb 
          pageName="Dashboard"
          showTitle={false}
          variant="minimal"
          items={[
            { label: 'Inicio', href: '/inicio' }
          ]}
        />
      </section>

      {/* Con Separador Personalizado */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Con Separador Personalizado
        </h2>
        <Breadcrumb 
          pageName="Mi Página"
          separator={<FaChevronRight />}
          variant="minimal"
        />
      </section>

      {/* Con Separador de Ant Design */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Con Separador de Ant Design
        </h2>
        <Breadcrumb 
          pageName="Mi Página"
          separator={<ArrowRightOutlined />}
          variant="detailed"
        />
      </section>

      {/* Con Items con onClick */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Con Items con onClick
        </h2>
        <Breadcrumb 
          pageName="Resultados de Búsqueda"
          items={[
            { 
              label: 'Búsqueda', 
              onClick: () => alert('Volver a búsqueda')
            }
          ]}
          variant="default"
        />
      </section>

      {/* Sin Home */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Sin Home
        </h2>
        <Breadcrumb 
          pageName="Página Especial"
          showHome={false}
          variant="minimal"
          items={[
            { label: 'Sección', href: '/seccion' }
          ]}
        />
      </section>

      {/* Home Personalizado */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Home Personalizado
        </h2>
        <Breadcrumb 
          pageName="Mi Aplicación"
          homeLabel="Inicio"
          homeHref="/inicio"
          homeIcon={<FaHome />}
          variant="detailed"
        />
      </section>

      {/* Solo Navegación */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Solo Navegación (sin pageName)
        </h2>
        <Breadcrumb 
          items={[
            { label: 'Categoría', href: '/categoria' },
            { label: 'Subcategoría', href: '/categoria/sub' },
            { label: 'Item Actual', isActive: true }
          ]}
          variant="compact"
        />
      </section>

      {/* Con Clases Personalizadas */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Con Clases Personalizadas
        </h2>
        <Breadcrumb 
          pageName="Página Personalizada"
          variant="default"
          containerClassName="border-2 border-blue-500"
          titleClassName="text-blue-600"
          navClassName="bg-gray-100 dark:bg-gray-800 p-2 rounded"
        />
      </section>
    </div>
  );
};

export default BreadcrumbExamples; 