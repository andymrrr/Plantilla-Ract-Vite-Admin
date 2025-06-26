
export interface ConfiguracionParametros<T> {
    valoresPorDefecto?: Partial<T>;
    camposTexto?: (keyof T)[];
    camposOpcionales?: (keyof T)[];
    camposNumericos?: (keyof T)[];
}


export function prepararParametrosConsulta<T extends object>(
    parametros: T,
    configuracion: ConfiguracionParametros<T> = {}
): T {
        const {
        valoresPorDefecto = {},
        camposTexto = [],
        camposOpcionales = [],
        camposNumericos = []
    } = configuracion;

    const resultado = { ...valoresPorDefecto } as T;

    Object.keys(parametros).forEach((key) => {
        const campo = key as keyof T;
        const valor = parametros[campo];

        if (valor == null || valor === undefined) {
            return;
        }

        if (camposTexto.includes(campo) && typeof valor === 'string') {
            const valorLimpio = valor.trim();
            
            if (valorLimpio.length > 0 || !camposOpcionales.includes(campo)) {
                resultado[campo] = valorLimpio as T[keyof T];
            }
        }
        else if (camposNumericos.includes(campo) && typeof valor === 'number') {
            if (!isNaN(valor) && isFinite(valor)) {
                resultado[campo] = valor;
            }
        }
        
        else {
            resultado[campo] = valor;
        }
    });

    return resultado;
}


export const CONFIGURACION_PAGINACION_JOBS: ConfiguracionParametros<any> = {
    valoresPorDefecto: {
        pagina: 1,
        cantidadRegistroPorPagina: 10
    },
    camposTexto: ['busqueda', 'nombre', 'ordenar', 'idMetodo'],
    camposOpcionales: ['busqueda', 'nombre', 'ordenar', 'idMetodo'],
    camposNumericos: ['pagina', 'cantidadRegistroPorPagina', 'metodoHttps', 'estadoEjecucion']
};


export function prepararParametrosPaginacionJobs<T extends object>(parametros: T): T {
    return prepararParametrosConsulta(parametros, CONFIGURACION_PAGINACION_JOBS);
}


export function construirQueryParamsLimpios<T extends object>(
    parametros: T,
    configuracion?: ConfiguracionParametros<T>
): URLSearchParams {
    const parametrosLimpios = configuracion 
        ? prepararParametrosConsulta(parametros, configuracion)
        : parametros;

    const queryParams = new URLSearchParams();

    Object.entries(parametrosLimpios).forEach(([key, value]) => {
        if (value != null && value !== undefined && value !== '') {
            queryParams.append(key, String(value));
        }
    });

    return queryParams;
} 