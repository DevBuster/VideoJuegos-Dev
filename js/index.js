// -------------------------- variables globales del juegos -------------------------- //

let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;

// -------------------------- eventos generales del juegos -------------------------- //

// evento de escucha que al momento de que termine de cargar la pagina, carguen los botones
window.addEventListener('load', () => {

    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
    botonSeleccionarJugador.addEventListener('click', seleccionarJugador);

    let botonAtacarFisico = document.getElementById('boton-atacar-fisico');
    botonAtacarFisico.addEventListener('click', atacarFisico);

    let botonAtacarMagico = document.getElementById('boton-atacar-magico');
    botonAtacarMagico.addEventListener('click', atacarMagico);

    let botonAtacarAsistencia = document.getElementById('boton-atacar-asistencia');
    botonAtacarAsistencia.addEventListener('click', atacarAsistencia);

});

// -------------------------- funciones para el jugador -------------------------- //
// seleccionar al jugador
function seleccionarJugador() {

    // variables que obtienen el valor del input radio seleccionado
    let isDevbuster = document.getElementById('input-radio-jugador-devbuster');
    let isAncestralblock = document.getElementById('input-radio-jugador-ancestralblock');
    let isAster = document.getElementById('input-radio-jugador-aster');
    let isRex = document.getElementById('input-radio-jugador-rex');

    let spanJugador = document.getElementById('span-jugador');
    let spanVidaJugador = document.getElementById('vida-jugador');
    let spanVidaEnemigo = document.getElementById('vida-enemigo');

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
        //
    }

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        spanVidaJugador.innerHTML = '100HP';
        spanVidaEnemigo.innerHTML = '100HP';

        seleccionarJugadorEnemigo();

    } else {

        alert('Ningun jugador a seleccionado, fin del juego');

    }
}

// ------------- funciones para el jugador enemigo ------------------------------- //

// seleccionar jugador del enemigo
function seleccionarJugadorEnemigo() {

    // varaible que obtiene un numero aleatorio entre el 1 y 4
    let numeroAleatorio = getEnemigoAleatorio(1, 4);

    let spanJugadorEnemigo = document.getElementById('span-enemigo');

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

// ------------- funciones de ataques para los jugadores ------------------------------- //

function atacarFisico() {

    let spanJugador = document.getElementById('span-jugador');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        ataqueJugador = 'FISICO';
        spanAtaqueJugador.innerHTML = 'FISICO';

        atacarJugador();

    } else {

        alert('Ningun jugador a seleccionado, fin del juego');

    }
}

function atacarMagico() {

    let spanJugador = document.getElementById('span-jugador');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        ataqueJugador = 'MAGICO';
        spanAtaqueJugador.innerHTML = 'MAGICO';

        atacarJugador();

    } else {

        alert('Ningun jugador a seleccionado, fin del juego');

    }
}

function atacarAsistencia() {

    let spanJugador = document.getElementById('span-jugador');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        ataqueJugador = 'ASISTENCIA';
        spanAtaqueJugador.innerHTML = 'ASISTENCIA';

        atacarJugador();

    } else {

        alert('Ningun jugador a seleccionado, fin del juego');

    }
}

// atacar al jugador
function atacarJugador() {

    obtenerAtaqueEnemigo = getAtaqueAleatorio(1, 3);

    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo');

    if (obtenerAtaqueEnemigo == 1) {

        ataqueEnemigo = 'FISICO';
        spanAtaqueEnemigo.innerHTML = 'FISICO';

    } else if (obtenerAtaqueEnemigo == 2) {

        ataqueEnemigo = 'MAGICO';
        spanAtaqueEnemigo.innerHTML = 'MAGICO';

    } else if (obtenerAtaqueEnemigo == 3) {

        ataqueEnemigo = 'ASISTENCIA';
        spanAtaqueEnemigo.innerHTML = 'ASISTENCIA';

    } else {

        alert('Error inesperado, el numero sobrepasó el rango establecido: ' + numeroAleatorio);

    }

    combate();

}

// ------------- funciones generales del juego ----------------------------------- //

// obtener el enemigo aleatorio
function getEnemigoAleatorio(valorMinimo, valorMaximo) {

    return Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);

}

// obtener el ataque aleatorio del enemigo
function getAtaqueAleatorio(valorMinimo, valorMaximo) {

    return Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);

}

// crear mensajes e imprimir todo lo que ocurra dentro del combate
function crearMensajeSistema(resultadoCombate) {

    /*
    * createElement permite crear una etiqueta html.
    *
    * appendChild() permite insertar un nodo, en este 
    * caso la etiqueta <p> dentro del sectionMensaje que es un <section> en el html 
    */
    let sectionMensaje = document.getElementById('mensajes-sistema');
    let mensajesSistema = document.createElement('p');

    mensajesSistema.innerHTML = 'el jugador atacó con ' + ataqueJugador + ' y el enemigo atacó con ' + ataqueEnemigo + ' resultado: ' + resultadoCombate;

    sectionMensaje.appendChild(mensajesSistema);

}

function combate() {

    if (ataqueJugador == ataqueEnemigo) {

        resultadoCombate = 'EMPATE';

    } else if (ataqueJugador == 'FISICO' && ataqueEnemigo == 'MAGICO') {

        resultadoCombate = 'GANASTE';

    } else if (ataqueJugador == 'MAGICO' && ataqueEnemigo == 'ASISTENCIA') {

        resultadoCombate = 'GANASTE';

    } else if (ataqueJugador == 'ASISTENCIA' && ataqueEnemigo == 'FISICO') {

        resultadoCombate = 'GANASTE';
    } else {
        resultadoCombate = 'PERDISTE';
    }

    crearMensajeSistema(resultadoCombate);

}