function seleccionarJugador() {
    alert('seleccionado');
}

// una forma de llamar a la funcion seleccionarJugador
let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
botonSeleccionarJugador.addEventListener('click', seleccionarJugador);

/* una forma de asignar funcion mediante flecha
    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
        botonSeleccionarJugador.addEventListener('click', () => {
            alert('seleccionado');
        });
*/