import React, { useState } from 'react';
import { MessageCard, MessageType, MessageAction } from './index';

const MessageCardExamples: React.FC = () => {
  const [showAutoDismiss, setShowAutoDismiss] = useState(false);

  const handleAction = (action: MessageAction, index: number) => {
    console.log(`Acción ${index} ejecutada:`, action.label);
  };

  const handleDismiss = () => {
    console.log('Mensaje cerrado');
  };

  const accionesEjemplo: MessageAction[] = [
    {
      label: 'Aceptar',
      onClick: () => console.log('Aceptado'),
      variant: 'primary'
    },
    {
      label: 'Cancelar',
      onClick: () => console.log('Cancelado'),
      variant: 'secondary'
    }
  ];

  const accionesConLoading: MessageAction[] = [
    {
      label: 'Guardar',
      onClick: () => console.log('Guardando...'),
      variant: 'primary',
      loading: true
    },
    {
      label: 'Eliminar',
      onClick: () => console.log('Eliminando...'),
      variant: 'danger'
    }
  ];

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
        Ejemplos de MessageCard
      </h1>

      {/* Tipos de mensaje */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Tipos de Mensaje
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MessageCard
            type="success"
            titulo="Éxito"
            descripcion="Operación completada exitosamente"
            detalles="Los datos se han guardado correctamente en la base de datos."
            acciones={accionesEjemplo}
          />

          <MessageCard
            type="error"
            titulo="Error"
            descripcion="Ha ocurrido un error"
            detalles="No se pudo completar la operación. Inténtalo de nuevo."
            acciones={accionesEjemplo}
          />

          <MessageCard
            type="warning"
            titulo="Advertencia"
            descripcion="Atención requerida"
            detalles="Algunos campos pueden requerir tu atención antes de continuar."
            acciones={accionesEjemplo}
          />

          <MessageCard
            type="info"
            titulo="Información"
            descripcion="Información importante"
            detalles="Este es un mensaje informativo para el usuario."
            acciones={accionesEjemplo}
          />

          <MessageCard
            type="neutral"
            titulo="Neutral"
            descripcion="Mensaje neutral"
            detalles="Este es un mensaje neutral sin connotación específica."
            acciones={accionesEjemplo}
          />
        </div>
      </section>

      {/* Variantes de tamaño */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Variantes de Tamaño
        </h2>
        
        <div className="space-y-4">
          <MessageCard
            type="info"
            titulo="Tamaño Pequeño"
            descripcion="Este es un mensaje pequeño"
            size="sm"
            variant="compact"
          />

          <MessageCard
            type="info"
            titulo="Tamaño Mediano"
            descripcion="Este es un mensaje mediano"
            size="md"
          />

          <MessageCard
            type="info"
            titulo="Tamaño Grande"
            descripcion="Este es un mensaje grande"
            size="lg"
          />

          <MessageCard
            type="info"
            titulo="Tamaño Extra Grande"
            descripcion="Este es un mensaje extra grande"
            size="xl"
            variant="detailed"
          />
        </div>
      </section>

      {/* Variantes de diseño */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Variantes de Diseño
        </h2>
        
        <div className="space-y-4">
          <MessageCard
            type="success"
            titulo="Variante Default"
            descripcion="Esta es la variante por defecto"
            variant="default"
          />

          <MessageCard
            type="success"
            titulo="Variante Compact"
            descripcion="Esta es la variante compacta"
            variant="compact"
          />

          <MessageCard
            type="success"
            titulo="Variante Detailed"
            descripcion="Esta es la variante detallada"
            variant="detailed"
          />

          <MessageCard
            type="success"
            titulo="Variante Minimal"
            descripcion="Esta es la variante minimalista"
            variant="minimal"
          />
        </div>
      </section>

      {/* Acciones con diferentes variantes */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Acciones con Diferentes Variantes
        </h2>
        
        <MessageCard
          type="warning"
          titulo="Acciones Variadas"
          descripcion="Mensaje con diferentes tipos de botones"
          acciones={[
            {
              label: 'Primario',
              onClick: () => console.log('Primario'),
              variant: 'primary'
            },
            {
              label: 'Secundario',
              onClick: () => console.log('Secundario'),
              variant: 'secondary'
            },
            {
              label: 'Outline',
              onClick: () => console.log('Outline'),
              variant: 'outline'
            },
            {
              label: 'Ghost',
              onClick: () => console.log('Ghost'),
              variant: 'ghost'
            },
            {
              label: 'Peligro',
              onClick: () => console.log('Peligro'),
              variant: 'danger'
            }
          ]}
        />
      </section>

      {/* Acciones con loading */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Acciones con Loading
        </h2>
        
        <MessageCard
          type="info"
          titulo="Procesando"
          descripcion="Mensaje con acciones en estado de carga"
          acciones={accionesConLoading}
        />
      </section>

      {/* Auto dismiss */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Auto Dismiss
        </h2>
        
        <button
          onClick={() => setShowAutoDismiss(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Mostrar mensaje con auto-dismiss
        </button>

        {showAutoDismiss && (
          <MessageCard
            type="success"
            titulo="Auto Dismiss"
            descripcion="Este mensaje se cerrará automáticamente en 3 segundos"
            autoDismiss={true}
            dismissTimeout={3000}
            onDismiss={() => setShowAutoDismiss(false)}
          />
        )}
      </section>

      {/* Con icono personalizado */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Con Icono Personalizado
        </h2>
        
        <MessageCard
          type="info"
          titulo="Icono Personalizado"
          descripcion="Mensaje con un icono personalizado"
          icono="🚀"
          acciones={accionesEjemplo}
        />
      </section>

      {/* Con callback de acción */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Con Callback de Acción
        </h2>
        
        <MessageCard
          type="info"
          titulo="Callback de Acción"
          descripcion="Mensaje con callback personalizado para las acciones"
          acciones={accionesEjemplo}
          onAction={handleAction}
        />
      </section>
    </div>
  );
};

export default MessageCardExamples; 