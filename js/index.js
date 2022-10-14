// cargamos el script despues de que el html se cargue
function cargarJuego() {

    // una forma de llamar a la funcion seleccionarJugador
    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
    botonSeleccionarJugador.addEventListener('click', seleccionarJugador);

}

// seleccionamos al jugador
function seleccionarJugador() {

    let isDevbuster = document.getElementById('radio-jugador-devbuster');
    let isAncestralblock = document.getElementById('radio-jugador-ancestralblock');
    let isAster = document.getElementById('radio-jugador-aster');
    let isRex = document.getElementById('radio-jugador-rex');

    if (isDevbuster.checked) {

        alert('Jugador seleccionado: DevBuster');

    } else if (isAncestralblock.checked) {

        alert('Jugador seleccionado: Ancestral_Block');

    } else if (isAster.checked) {

        alert('Jugador seleccionado: Aster');

    } else if (isRex.checked) {

        alert('Jugador seleccionado: Rex');

    } else {

        alert('Seleccione un jugador para continunar');

    }
}

/* una forma de asignar funcion mediante flecha
    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
        botonSeleccionarJugador.addEventListener('click', () => {
            alert('seleccionado');
        });
*/

window.addEventListener('load', cargarJuego);
// window.addEventListener('DOMContentLoaded', cargarJuego);