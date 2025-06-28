import { 
    FormularioTabData,
} from "../components/FormulariosControles/HookFormDinamico";
import { TipoParametro } from "../Core/Domain/Enum/TipoParametro";

export interface ParametroGenerico {
    propiedad: string;
    valor: string;
    tipo: TipoParametro;
}

export interface ConfiguracionAPIProcessada<T = ParametroGenerico> {
    headers: Array<{ nombre: string; valor: string }>;
    queryParams: Array<{ nombre: string; valor: string }>;
    parametros: T[];
}




export function validarConfiguracionAPI(
    configuracionAPI: FormularioTabData
): { esValida: boolean; errores: string[] } {
    const errores: string[] = [];
    
    if (configuracionAPI.Headers) {
        configuracionAPI.Headers.forEach((header, index) => {
            if (!header.nombre || header.nombre.trim() === '') {
                errores.push(`Header ${index + 1}: El nombre es requerido`);
            }
            if (!header.valor || header.valor.trim() === '') {
                errores.push(`Header ${index + 1}: El valor es requerido`);
            }
        });
    }

    if (configuracionAPI['Query Params']) {
        configuracionAPI['Query Params'].forEach((param, index) => {
            if (!param.nombre || param.nombre.trim() === '') {
                errores.push(`Query Param ${index + 1}: El nombre es requerido`);
            }
            if (!param.valor || param.valor.trim() === '') {
                errores.push(`Query Param ${index + 1}: El valor es requerido`);
            }
        });
    }

    return {
        esValida: errores.length === 0,
        errores
    };
}
