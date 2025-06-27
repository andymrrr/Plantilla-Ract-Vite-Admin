import React, { useState } from 'react';
import Sidebar from '../components/MenuLateral/index';

const TestSidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log('🧪 TestSidebar render:', { sidebarOpen });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            🧪 Prueba de Sidebar
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Estado Actual</h2>
            <div className="space-y-2">
              <p>
                <strong>Sidebar abierto:</strong>{' '}
                <span className={`px-2 py-1 rounded text-white ${sidebarOpen ? 'bg-green-500' : 'bg-red-500'}`}>
                  {sidebarOpen ? 'SÍ' : 'NO'}
                </span>
              </p>
              <p>
                <strong>Ancho esperado:</strong> {sidebarOpen ? '256px (w-64)' : '80px (w-20)'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Controles de Prueba</h2>
            <div className="space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                🔄 Toggle Sidebar
              </button>
              
              <button
                onClick={() => setSidebarOpen(true)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                ✅ Abrir
              </button>
              
              <button
                onClick={() => setSidebarOpen(false)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                ❌ Cerrar
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Instrucciones</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Abre la consola del navegador (F12)</li>
              <li>Observa los logs de debug</li>
              <li>Prueba el botón toggle del sidebar</li>
              <li>Prueba los botones de esta página</li>
              <li>Verifica que el ancho cambie correctamente</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestSidebar; 