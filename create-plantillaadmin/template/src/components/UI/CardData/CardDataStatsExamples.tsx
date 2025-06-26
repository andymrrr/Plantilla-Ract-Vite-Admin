import React from 'react';
import CardDataStats from './CardDataStats';

// Iconos de ejemplo (puedes usar react-icons o cualquier librería de iconos)
const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const RevenueIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const OrdersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const TasksIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const CardDataStatsExamples: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Ejemplos de CardDataStats Mejorado
      </h1>

      {/* Variantes básicas */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Variantes de Estilo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Default */}
          <CardDataStats
            title="Usuarios Totales"
            total={2420}
            rate="+15.3%"
            trend="up"
            icon={<UsersIcon />}
            variant="default"
            color="primary"
          />

          {/* Gradient */}
          <CardDataStats
            title="Ingresos Mensuales"
            total="$45,210"
            subtitle="Meta: $50,000"
            rateValue={12.5}
            trend="up"
            icon={<RevenueIcon />}
            variant="gradient"
            color="success"
            showBadge
            badgeText="Meta 90%"
          />

          {/* Outlined */}
          <CardDataStats
            title="Pedidos Pendientes"
            total={156}
            rate="-2.4%"
            trend="down"
            icon={<OrdersIcon />}
            variant="outlined"
            color="warning"
          />

          {/* Minimal */}
          <CardDataStats
            title="Tareas Completadas"
            total={89}
            subtitle="De 120 tareas"
            rateValue={74.2}
            trend="up"
            icon={<TasksIcon />}
            variant="minimal"
            color="info"
          />

          {/* Glassmorphism */}
          <CardDataStats
            title="Conversiones"
            total="3.2%"
            rate="+0.8%"
            trend="up"
            icon={<UsersIcon />}
            variant="glassmorphism"
            color="purple"
          />

          {/* Neon */}
          <CardDataStats
            title="Tiempo Promedio"
            total="2.4s"
            subtitle="Respuesta del servidor"
            rate="-0.3s"
            trend="up"
            icon={<RevenueIcon />}
            variant="neon"
            color="indigo"
          />
        </div>
      </section>

      {/* Diferentes tamaños */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Diferentes Tamaños
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardDataStats
            title="Pequeño"
            total={42}
            rate="+5%"
            trend="up"
            icon={<UsersIcon />}
            size="sm"
            color="primary"
          />

          <CardDataStats
            title="Mediano"
            total={1250}
            rate="+12%"
            trend="up"
            icon={<RevenueIcon />}
            size="md"
            color="success"
          />

          <CardDataStats
            title="Grande"
            total={8900}
            rate="+8%"
            trend="up"
            icon={<OrdersIcon />}
            size="lg"
            color="warning"
          />

          <CardDataStats
            title="Extra Grande"
            total={15600}
            rate="+25%"
            trend="up"
            icon={<TasksIcon />}
            size="xl"
            color="danger"
          />
        </div>
      </section>

      {/* Colores disponibles */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Paleta de Colores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['primary', 'success', 'warning', 'danger', 'info', 'purple', 'indigo'].map((color) => (
            <CardDataStats
              key={color}
              title={`Color ${color}`}
              total={Math.floor(Math.random() * 1000)}
              rate={`+${Math.floor(Math.random() * 20)}%`}
              trend="up"
              icon={<UsersIcon />}
              color={color as any}
              variant="gradient"
              size="sm"
            />
          ))}
        </div>
      </section>

      {/* Estados especiales */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Estados Especiales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Loading */}
          <CardDataStats
            title="Cargando..."
            total={0}
            loading={true}
            icon={<UsersIcon />}
          />

          {/* Clickeable */}
          <CardDataStats
            title="Clickeable"
            total={999}
            rate="+10%"
            trend="up"
            icon={<RevenueIcon />}
            onClick={() => alert('¡Card clickeada!')}
            variant="outlined"
            color="primary"
          />

          {/* Sin animaciones */}
          <CardDataStats
            title="Sin Animaciones"
            total={777}
            rate="+5%"
            trend="neutral"
            icon={<TasksIcon />}
            animated={false}
            variant="minimal"
          />
        </div>
      </section>

      {/* Gradientes personalizados */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Gradientes Personalizados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardDataStats
            title="Sunset"
            total="Beautiful"
            subtitle="Gradiente personalizado"
            icon={<UsersIcon />}
            variant="gradient"
            gradientFrom="orange-400"
            gradientTo="pink-600"
          />

          <CardDataStats
            title="Ocean"
            total="Amazing"
            subtitle="Azul profundo"
            icon={<RevenueIcon />}
            variant="gradient"
            gradientFrom="blue-600"
            gradientTo="teal-500"
          />

          <CardDataStats
            title="Forest"
            total="Nature"
            subtitle="Verde natural"
            icon={<TasksIcon />}
            variant="gradient"
            gradientFrom="green-600"
            gradientTo="emerald-400"
          />
        </div>
      </section>

      {/* Casos de uso del Dashboard */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Casos de Uso para Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardDataStats
            title="Jobs Ejecutados"
            total={1247}
            subtitle="Últimas 24 horas"
            rateValue={15.3}
            trend="up"
            icon={<TasksIcon />}
            variant="default"
            color="primary"
            showBadge
            badgeText="Activo"
          />

          <CardDataStats
            title="Jobs Fallidos"
            total={23}
            subtitle="Requieren atención"
            rateValue={-8.2}
            trend="down"
            icon={<OrdersIcon />}
            variant="outlined"
            color="danger"
          />

          <CardDataStats
            title="Tiempo Promedio"
            total="2.4min"
            subtitle="Por ejecución"
            rate="-30s"
            trend="up"
            icon={<RevenueIcon />}
            variant="gradient"
            color="success"
          />

          <CardDataStats
            title="Sistema"
            total="98.5%"
            subtitle="Disponibilidad"
            rateValue={0.2}
            trend="up"
            icon={<UsersIcon />}
            variant="glassmorphism"
            color="info"
            showBadge
            badgeText="Estable"
          />
        </div>
      </section>
    </div>
  );
};

export default CardDataStatsExamples; 