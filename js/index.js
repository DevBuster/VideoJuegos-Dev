// cargamos el script despues de que el html se cargue
function cargarJuego() {

    // una forma de llamar a la funcion seleccionarJugador
    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
    botonSeleccionarJugador.addEventListener('click', seleccionarJugador);

}

// seleccionamos al jugador
function seleccionarJugador() {

    // variables que obtienen el valor del input radio seleccionado
    let isDevbuster = document.getElementById('input-radio-jugador-devbuster');
    let isAncestralblock = document.getElementById('input-radio-jugador-ancestralblock');
    let isAster = document.getElementById('input-radio-jugador-aster');
    let isRex = document.getElementById('input-radio-jugador-rex');

    // variables que obtienen el valor del span
    let spanNombreJugador = document.getElementById('span-nombre-jugador');

    if (isDevbuster.checked) {

        // con innerHTML manipulamos el DOM e insertamos un texto dentro de la etiqueta span
        spanNombreJugador.innerHTML = 'DevBuster';

    } else if (isAncestralblock.checked) {

        spanNombreJugador.innerHTML = 'Ancestral_block';

    } else if (isAster.checked) {

        spanNombreJugador.innerHTML = 'Aster';

    } else if (isRex.checked) {

        spanNombreJugador.innerHTML = 'Rex';

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