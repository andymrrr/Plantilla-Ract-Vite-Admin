
export function construirFormulario<T>(
    solicitud: T, 
    asignaciones: { llave: string; propiedad: keyof T }[]
): FormData {
    return asignaciones.reduce((formulario, { llave, propiedad }) => {
        const valorCampo = solicitud[propiedad];
        formulario.append(llave, valorCampo != null ? String(valorCampo) : "");
        return formulario;
    }, new FormData());
}


export function construirFormularioAutomatico<T extends object>(solicitud: T): FormData {
    const formulario = new FormData();

    Object.keys(solicitud).forEach((key) => {
        const valorCampo = solicitud[key as keyof T];
        formulario.append(key, valorCampo != null ? String(valorCampo) : "");
    });

    return formulario;
}

export function construirFormularioConArraysComplejos<T extends object>(solicitud: T): FormData {
    const formulario = new FormData();

    Object.keys(solicitud).forEach((key) => {
        const valorCampo = solicitud[key as keyof T];
        
        if (valorCampo == null || valorCampo === undefined) {
            return;
        } else if (valorCampo instanceof File) {
            formulario.append(key, valorCampo);
        } else if (typeof valorCampo === 'boolean') {
            if (valorCampo) {
                formulario.append(key, 'true');
            }
        } else if (Array.isArray(valorCampo)) {
            formulario.append(key, JSON.stringify(valorCampo));
        } else if (typeof valorCampo === 'object') {
            formulario.append(key, JSON.stringify(valorCampo));
        } else {
            formulario.append(key, String(valorCampo));
        }
    });

    return formulario;
}

export function debugFormData(formData: FormData): Record<string, any> {
    const entries: Record<string, any> = {};
    formData.forEach((value, key) => {
        entries[key] = value;
    });
    return entries;
} 