import React from "react";

interface Propiedad {
  texto: string;
  estatus: number; // Cambia 'activo' a 'estatus' para reflejar el valor numérico
  anchoCompleto?: boolean;
}

const EtiquetaEstado: React.FC<Propiedad> = ({ texto, estatus, anchoCompleto }) => {
  // Convertimos el estatus en un valor booleano
  const esActivo = estatus === 1; 

  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full 
        ${esActivo ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"} 
        ${anchoCompleto ? "w-full" : ""} text-center`}
    >
      {texto}
    </span>
  );
};

export default EtiquetaEstado;
