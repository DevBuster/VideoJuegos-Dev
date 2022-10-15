// -------------------------- funciones para el jugador -------------------------- //

// seleccionar al jugador
function seleccionarJugador() {

    // variables que obtienen el valor del input radio seleccionado
    let isDevbuster = document.getElementById('input-radio-jugador-devbuster');
    let isAncestralblock = document.getElementById('input-radio-jugador-ancestralblock');
    let isAster = document.getElementById('input-radio-jugador-aster');
    let isRex = document.getElementById('input-radio-jugador-rex');

    // variables que obtienen el valor del span
    let spanJugador = document.getElementById('span-jugador');

    // validar   si los inputs radios estan seleccionados
    if (isDevbuster.checked) {

        // con innerHTML manipulamos el DOM e insertamos un texto dentro de la etiqueta span
        spanJugador.innerHTML = 'DevBuster';

    } else if (isAncestralblock.checked) {

        spanJugador.innerHTML = 'Ancestral_block';

    } else if (isAster.checked) {

        spanJugador.innerHTML = 'Aster';

    } else if (isRex.checked) {

        spanJugador.innerHTML = 'Rex';

    } else {

        alert('Seleccione un jugador para continunar');

    }

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        seleccionarJugadorEnemigo();
        
    } else {

        alert('Ningun jugador a seleccionado, fin del juego');

    }
}

function seleccionarAtaqueJugador() {
    //
}
// ----------------------------------------------------------------- //

// ------------- funciones para el jugador enemigo ------------- //

// seleccionar jugador del enemigo
function seleccionarJugadorEnemigo() {

    // varaible que obtiene un numero aleatorio entre el 1 y 4
    let numeroAleatorio = seleccionarJugadorAleatorio(1, 4);

    let spanJugadorEnemigo = document.getElementById('span-jugador-enemigo');

    // validar si el numero que obtenemos es igual a las condiciones
    if (numeroAleatorio == 1) {

        spanJugadorEnemigo.innerHTML = 'DevBuster';

    } else if (numeroAleatorio == 2) {

        spanJugadorEnemigo.innerHTML = 'Ancestral_block';

    } else if (numeroAleatorio == 3) {

        spanJugadorEnemigo.innerHTML = 'Aster';

    } else if (numeroAleatorio == 4) {

        spanJugadorEnemigo.innerHTML = 'Rex';

    } else {

        alert('Error inesperado, el numero sobrepasó el rango establecido: ' + numeroAleatorio);

    }

}

// seleccionar jugador de forma aleatoria (enemigo)
function seleccionarJugadorAleatorio(valorMinimo, valorMaximo) {

    return Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);

}

function seleccionarAtaqueEnemigo() {
    //
}

// evento de escucha que al momento de que termine de cargar la pagina, carguen los botones
window.addEventListener('load', () => {
    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
    botonSeleccionarJugador.addEventListener('click', seleccionarJugador);
});
