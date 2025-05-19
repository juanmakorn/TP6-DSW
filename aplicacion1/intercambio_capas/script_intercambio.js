// Esto es solo para demostrar el intercambio. No tiene sentido lógico real.
function mostrarDatos() {
    const listaElement = document.getElementById('personas');
    listaElement.innerHTML = '';
    // Usamos la función de la lógica de productos para "mostrar" datos de personas
    const personasSimuladas = [
        { nombre: "Juan", apellido: "Pérez", edad: 30 },
        { nombre: "María", apellido: "Gómez", edad: 25 }
    ];

    personasSimuladas.forEach(persona => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${persona.nombre}, Descripción: ${persona.apellido}, Precio: ${persona.edad}`;
        listaElement.appendChild(listItem);
    });
}

// Simulación de funciones de la lógica de productos que "manejan" datos de personas
window.agregarProducto = () => alert("Función de agregar producto llamada desde la interfaz de personas.");
window.mostrarProductos = mostrarDatos; // Reutilizamos la función para mostrar
window.eliminarProducto = () => alert("Función de eliminar producto llamada desde la interfaz de personas.");

mostrarDatos();
