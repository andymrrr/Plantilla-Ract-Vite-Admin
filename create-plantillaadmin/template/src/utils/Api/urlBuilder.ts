
export function construirQueryParams(obj: Record<string, any>): URLSearchParams {
    const params = new URLSearchParams();

    Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                params.append(key, item.toString());
            });
        } else if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
        }
    });

    return params;
}


export function construirUrlConParametros(baseUrl: string, params: Record<string, any>): string {
    const queryParams = construirQueryParams(params);
    const separator = baseUrl.includes('?') ? '&' : '?';
    return queryParams.toString() ? `${baseUrl}${separator}${queryParams.toString()}` : baseUrl;
}

export const ConstruirQueryParams = construirQueryParams; 