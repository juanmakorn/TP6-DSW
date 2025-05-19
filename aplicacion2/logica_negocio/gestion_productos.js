// Importar la capa de acceso a datos
import * as datosProductos from '../acceso_datos/datos_productos.js';

function agregarProducto() {
    const nombre = document.getElementById('nombre-producto').value;
    const descripcion = document.getElementById('descripcion-producto').value;
    const precio = parseFloat(document.getElementById('precio-producto').value);

    if (nombre && !isNaN(precio)) {
        datosProductos.guardarProducto({ nombre, descripcion, precio });
        mostrarProductos();
        limpiarFormularioProducto();
    } else {
        alert('Por favor, complete los campos correctamente.');
    }
}

function mostrarProductos() {
    const productos = datosProductos.obtenerProductos();
    const listaProductosElement = document.getElementById('productos');
    listaProductosElement.innerHTML = '';
    productos.forEach((producto, index) => {
       const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - ${producto.descripcion} ($${producto.precio.toFixed(2)}) `;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarProducto(index);

        listItem.appendChild(botonEliminar);
        listaProductosElement.appendChild(listItem);
    });
}

function eliminarProducto(indice) {
    datosProductos.eliminarProducto(indice);
    mostrarProductos();
}

function limpiarFormularioProducto() {
    document.getElementById('nombre-producto').value = '';
    document.getElementById('descripcion-producto').value = '';
    document.getElementById('precio-producto').value = '';
}

// Funciones para modificación (ejemplo básico)
function modificarProducto(indice, nuevosDatos) {
    datosProductos.actualizarProducto(indice, nuevosDatos);
    mostrarProductos();
}

// Para que las funciones sean accesibles desde el HTML
window.agregarProducto = agregarProducto;
window.mostrarProductos = mostrarProductos;
window.eliminarProducto = eliminarProducto;
// window.modificarProducto = modificarProducto; // Implementar lógica en la presentación

