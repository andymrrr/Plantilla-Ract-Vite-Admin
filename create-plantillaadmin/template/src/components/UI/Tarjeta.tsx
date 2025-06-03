import React from 'react';

interface TarjetaProps {
  children: React.ReactNode;
  titulo?: string | React.ReactNode;
  subtitulo?: string;
  claseHeader?: string;
  claseCuerpo?: string;
  claseFooter?: string;
  piePagina?: React.ReactNode;
  sinRelleno?: boolean;
  conBorde?: boolean;
  variante?: 'defecto' | 'primario' | 'secundario';
}

const Tarjeta: React.FC<TarjetaProps> = ({
  children,
  titulo,
  subtitulo,
  claseHeader = '',
  claseCuerpo = '',
  claseFooter = 'mb-6',
  piePagina,
  sinRelleno = false,
  conBorde = true,
  variante = 'defecto'
}) => {
  const obtenerClasesVariante = () => {
    switch (variante) {
      case 'primario':
        return 'bg-primary border-primary text-white';
      case 'secundario':
        return 'bg-gray-2 border-gray-2 dark:bg-meta-4';
      default:
        return 'bg-white dark:bg-boxdark';
    }
  };

  return (
    <div
      className={`
        rounded-lg 
        ${conBorde ? 'border-2 border-stroke dark:border-strokedark' : ''} 
        ${obtenerClasesVariante()}
        shadow-default 
        ${claseFooter}
      `}
    >
      {/* Sección de Encabezado */}
      {(titulo || subtitulo) && (
        <div className={`border-b border-stroke px-6 py-4 dark:border-strokedark ${claseHeader}`}>
          {titulo && (
            typeof titulo === 'string' ? (
              <h4 className="text-xl font-semibold text-black dark:text-white">
                {titulo}
              </h4>
            ) : (
              titulo
            )
          )}
          {subtitulo && (
            <p className="mt-1 text-sm text-gray-5">{subtitulo}</p>
          )}
        </div>
      )}

      {/* Sección del Cuerpo */}
      <div className={`${!sinRelleno ? 'p-6' : ''} ${claseCuerpo}`}>
        {children}
      </div>

      {/* Sección del Pie de Página */}
      {piePagina && (
        <div className="border-t border-stroke px-6 py-4 dark:border-strokedark">
          {piePagina}
        </div>
      )}
    </div>
  );
};

export default Tarjeta;
