// cargamos el script despues de que el html se cargue
function cargarJuego() {

    // una forma de llamar a la funcion seleccionarJugador
    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
    botonSeleccionarJugador.addEventListener('click', seleccionarJugador);

}

function seleccionarJugador() {

    if (document.getElementById('radio-jugador-devbuster').checked) {

        alert('Jugador seleccionado: DevBuster');

    } else if (document.getElementById('radio-jugador-ancestralblock').checked) {

        alert('Jugador seleccionado: Ancestral_Block');

    } else if (document.getElementById('radio-jugador-aster').checked) {

        alert('Jugador seleccionado: Aster');

    } else if (document.getElementById('radio-jugador-rex').checked) {

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