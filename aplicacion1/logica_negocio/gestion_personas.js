import * as datosPersonas from '../acceso_datos/datos_personas.js';

function agregarPersona() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value);

    if (nombre && apellido && !isNaN(edad)) {
        datosPersonas.guardarPersona({ nombre, apellido, edad });
        mostrarPersonas();
        limpiarFormularioPersona();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

function mostrarPersonas() {
    const personas = datosPersonas.obtenerPersonas();
    const listaPersonasElement = document.getElementById('personas');
    listaPersonasElement.innerHTML = '';
    personas.forEach((persona, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${persona.nombre} ${persona.apellido} (${persona.edad} años) `;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarPersona(index);

        listItem.appendChild(botonEliminar);
        listaPersonasElement.appendChild(listItem);
    });
}

function eliminarPersona(indice) {
    datosPersonas.eliminarPersona(indice);
    mostrarPersonas();
}

function limpiarFormularioPersona() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('edad').value = '';
}

// Funciones para modificación (ejemplo básico)
function modificarPersona(indice, nuevosDatos) {
    datosPersonas.actualizarPersona(indice, nuevosDatos);
    mostrarPersonas();
}

// Para que las funciones sean accesibles desde el HTML (en un entorno de navegador sin módulos nativos)
window.agregarPersona = agregarPersona;
window.mostrarPersonas = mostrarPersonas;
window.eliminarPersona = eliminarPersona;
// window.modificarPersona = modificarPersona; // Implementar lógica en la presentación
