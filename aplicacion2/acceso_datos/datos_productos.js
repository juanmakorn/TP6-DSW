const CLAVE_PRODUCTOS = 'productos';

export function obtenerProductos() {
    const datos = localStorage.getItem(CLAVE_PRODUCTOS);
    return datos ? JSON.parse(datos) : [];
}

export function guardarProducto(producto) {
    const productos = obtenerProductos();
    productos.push(producto);
    localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(productos));
}

export function eliminarProducto(indice) {
    const productos = obtenerProductos();
    if (indice >= 0 && indice < productos.length) {
        productos.splice(indice, 1);
        localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(productos));
    }
}

export function actualizarProducto(indice, nuevosDatos) {
    const productos = obtenerProductos();
    if (indice >= 0 && indice < productos.length) {
        productos[indice] = { ...productos[indice], ...nuevosDatos };
        localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(productos));
    }
}
