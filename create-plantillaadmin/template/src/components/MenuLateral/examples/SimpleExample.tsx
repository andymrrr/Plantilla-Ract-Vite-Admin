import React, { useState } from 'react';
import Sidebar from '../index'; // Ahora importa el sidebar moderno por defecto

const SimpleExample: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar Moderno (ahora es el principal) */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      {/* Contenido principal */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1>🚀 Sidebar Moderno - Principal</h1>
          <p>
            Este es el sidebar moderno que ahora es el componente principal.
            Es super tipado, configurable y moderno.
          </p>
        </div>

        {/* Botón para abrir/cerrar sidebar */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          {sidebarOpen ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
        </button>

        {/* Información */}
        <div style={{ 
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dee2e6'
        }}>
          <h3>✨ Características del Sidebar Moderno:</h3>
          <ul style={{ lineHeight: '1.6' }}>
            <li><strong>Super Tipado:</strong> TypeScript completo con tipos estrictos</li>
            <li><strong>Configurable:</strong> Temas, animaciones, comportamientos personalizables</li>
            <li><strong>Responsive:</strong> Adaptable a móviles, tablets y desktop</li>
            <li><strong>Accesible:</strong> ARIA labels, navegación por teclado</li>
            <li><strong>Búsqueda:</strong> Filtrado en tiempo real</li>
            <li><strong>Permisos:</strong> Control de acceso por roles</li>
            <li><strong>Eventos:</strong> Sistema de callbacks extensible</li>
            <li><strong>Plugins:</strong> Arquitectura extensible</li>
          </ul>
        </div>

        {/* Tipos de Items */}
        <div style={{ 
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#e3f2fd',
          borderRadius: '8px',
          border: '1px solid #bbdefb'
        }}>
          <h3>🎯 Tipos de Items Soportados:</h3>
          <ul style={{ lineHeight: '1.6' }}>
            <li><strong>Link:</strong> Enlaces simples con iconos y badges</li>
            <li><strong>Accordion:</strong> Menús desplegables con sub-items</li>
            <li><strong>Divider:</strong> Separadores visuales</li>
            <li><strong>Header:</strong> Encabezados con descripciones y acciones</li>
            <li><strong>Custom:</strong> Componentes personalizados</li>
          </ul>
        </div>

        {/* Uso */}
        <div style={{ 
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#fff3cd',
          borderRadius: '8px',
          border: '1px solid #ffeaa7'
        }}>
          <h3>💡 Cómo Usar:</h3>
          <pre style={{ 
            background: '#f8f9fa',
            padding: '1rem',
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '0.875rem',
            border: '1px solid #dee2e6'
          }}>
{`import React, { useState } from 'react';
import Sidebar from './components/MenuLateral';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main style={{ flex: 1 }}>
        {/* Tu contenido aquí */}
      </main>
    </div>
  );
};`}
          </pre>
        </div>
      </main>
    </div>
  );
};

export default SimpleExample; 