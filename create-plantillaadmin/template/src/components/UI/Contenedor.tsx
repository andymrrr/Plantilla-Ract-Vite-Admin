import { ReactNode } from "react"

interface ContenedorPropiedad{
    children: ReactNode
}

export const Contenedor = ({children}:ContenedorPropiedad) => {
  return (
    <div className="mb-10 flex flex-col">
    {children}
    </div>
  )
}
