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
  lineaHeader?: {
    mostrar?: boolean;
    grosor?: '1px' | '2px' | '4px';
    color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow';
  };
  lineaFooter?: {
    mostrar?: boolean;
    grosor?: '1px' | '2px' | '4px';
    color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow';
  };
  lineaDivisora?: {
    mostrar?: boolean;
    grosor?: '1px' | '2px' | '4px';
    color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow';
    className?: string;
  };
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
  variante = 'defecto',
  lineaHeader = { mostrar: true, grosor: '1px', color: 'gray' },
  lineaFooter = { mostrar: true, grosor: '1px', color: 'gray' },
  lineaDivisora
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

  const obtenerClaseColor = (color: string = 'gray') => {
    return {
      gray: 'border-gray-300 dark:border-strokedark',
      blue: 'border-blue-500 dark:border-blue-700',
      red: 'border-red-500 dark:border-red-700',
      green: 'border-green-500 dark:border-green-700',
      yellow: 'border-yellow-500 dark:border-yellow-700',
    }[color];
  };

  const LineaDivisoraComponente = ({ grosor = '1px', color = 'gray', className = '' }) => (
    <hr
      className={`border-t ${obtenerClaseColor(color)} my-4 ${className}`}
      style={{ borderWidth: grosor }}
    />
  );

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
        <>
          <div className={`px-6 py-4 ${claseHeader}`}>
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
          {lineaHeader.mostrar && (
            <div className={`border-t ${obtenerClaseColor(lineaHeader.color)}`} style={{ borderWidth: lineaHeader.grosor }} />
          )}
        </>
      )}

      {/* Sección del Cuerpo */}
      <div className={`${!sinRelleno ? 'p-6' : ''} ${claseCuerpo}`}>
        {children}
        {lineaDivisora?.mostrar && (
          <LineaDivisoraComponente
            grosor={lineaDivisora.grosor}
            color={lineaDivisora.color}
            className={lineaDivisora.className}
          />
        )}
      </div>

      {/* Sección del Pie de Página */}
      {piePagina && (
        <>
          {lineaFooter.mostrar && (
            <div className={`border-t ${obtenerClaseColor(lineaFooter.color)}`} style={{ borderWidth: lineaFooter.grosor }} />
          )}
          <div className="px-6 py-4">
            {piePagina}
          </div>
        </>
      )}
    </div>
  );
};

export default Tarjeta;
