const CLAVE_PERSONAS = 'personas';

export function obtenerPersonas() {
    const datos = localStorage.getItem(CLAVE_PERSONAS);
    return datos ? JSON.parse(datos) : [];
}

export function guardarPersona(persona) {
    const personas = obtenerPersonas();
    personas.push(persona);
    localStorage.setItem(CLAVE_PERSONAS, JSON.stringify(personas));
}

export function eliminarPersona(indice) {
    const personas = obtenerPersonas();
    if (indice >= 0 && indice < personas.length) {
        personas.splice(indice, 1);
        localStorage.setItem(CLAVE_PERSONAS, JSON.stringify(personas));
    }
}

export function actualizarPersona(indice, nuevosDatos) {
    const personas = obtenerPersonas();
    if (indice >= 0 && indice < personas.length) {
        personas[indice] = { ...personas[indice], ...nuevosDatos };
        localStorage.setItem(CLAVE_PERSONAS, JSON.stringify(personas));
    }
}
