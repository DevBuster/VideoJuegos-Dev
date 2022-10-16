// -------------------------- variables globales del juego -------------------------- //

let ataqueJugador;
let ataqueEnemigo;
let mensaje;

let puntosSaludJugador = 100;
let puntosSaludEnemigo = 100;
let ataqueFisico = 50;
let ataqueMagico = 40;
let ataqueAsistencia = 10;

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

    mensaje = 'Debe seleccionar a un jugador';

    // variables que obtienen el valor del input radio seleccionado
    let isDevbuster = document.getElementById('input-radio-jugador-devbuster');
    let isAncestralblock = document.getElementById('input-radio-jugador-ancestralblock');
    let isAster = document.getElementById('input-radio-jugador-aster');
    let isRex = document.getElementById('input-radio-jugador-rex');

    let spanJugador = document.getElementById('span-jugador');
    let spanPuntosSaludJugador = document.getElementById('puntos-salud-jugador');
    let spanPuntosSaludEnemigo = document.getElementById('puntos-salud-enemigo');

    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');

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

        spanPuntosSaludJugador.innerHTML = puntosSaludJugador + 'HP';
        spanPuntosSaludEnemigo.innerHTML = puntosSaludEnemigo + 'HP';

        seleccionarJugadorEnemigo();

        // deshabilita el boton despues de que el jugador seleccion
        botonSeleccionarJugador.disabled = true;

    } else {

        crearMensajesSistema(mensaje);
    }
}

// ------------- funciones para el jugador enemigo ------------------------------- //

// seleccionar jugador del enemigo
function seleccionarJugadorEnemigo() {

    mensaje = 'Error inesperado, el numero sobrepasó el rango establecido';

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

        crearMensajesSistema(mensaje);
    }
}

// ------------- funciones de ataques para los jugadores ------------------------------- //

function atacarFisico() {

    mensaje = 'Debe seleccionar a un jugador';

    let spanJugador = document.getElementById('span-jugador');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        ataqueJugador = 'FISICO';
        spanAtaqueJugador.innerHTML = 'FISICO';

        atacarJugador();

    } else {

        crearMensajesSistema(mensaje);
    }
}

function atacarMagico() {

    mensaje = 'Debe seleccionar a un jugador';

    let spanJugador = document.getElementById('span-jugador');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        ataqueJugador = 'MAGICO';
        spanAtaqueJugador.innerHTML = 'MAGICO';

        atacarJugador();

    } else {

        crearMensajesSistema(mensaje);
    }
}

function atacarAsistencia() {

    mensaje = 'Debe seleccionar a un jugador';

    let spanJugador = document.getElementById('span-jugador');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');

    // valida que si no esta vacio el span, que ejecute la funcion
    if (!(spanJugador.innerHTML == '')) {

        ataqueJugador = 'ASISTENCIA';
        spanAtaqueJugador.innerHTML = 'ASISTENCIA';

        atacarJugador();

    } else {

        crearMensajesSistema(mensaje);
    }
}

// atacar al jugador
function atacarJugador() {

    mensaje = 'Error inesperado, el numero sobrepasó el rango establecido';

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

        crearMensajesSistema(mensaje);

    }
    combatirJugadores();
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
function crearMensajesSistema(mensaje) {

    /*
    * createElement permite crear una etiqueta html.    
    *
    * appendChild() permite insertar un nodo, en este 
    * caso la etiqueta <p> dentro del sectionMensaje que es un <section> en el html 
    */
    let sectionMensaje = document.getElementById('mensajes-sistema');
    let mensajesSistema = document.createElement('p');

    mensajesSistema.innerHTML = mensaje;

    sectionMensaje.appendChild(mensajesSistema);
}

// combate entre los jugadores
function combatirJugadores() {

    let spanPuntosSaludJugador = document.getElementById('puntos-salud-jugador');
    let spanPuntosSaludEnemigo = document.getElementById('puntos-salud-enemigo');

    if (puntosSaludJugador > 0 && puntosSaludEnemigo > 0) {

        if (ataqueJugador == ataqueEnemigo) {

            mensaje = 'EMPATE';

        } else if (ataqueJugador == 'FISICO' && ataqueEnemigo == 'MAGICO') {

            puntosSaludEnemigo -= ataqueFisico;

            spanPuntosSaludEnemigo.innerHTML = puntosSaludEnemigo + 'HP';

            mensaje = 'GANASTE, puntos de salud del enemigo: ' + puntosSaludEnemigo + 'HP';

        } else if (ataqueJugador == 'MAGICO' && ataqueEnemigo == 'ASISTENCIA') {

            puntosSaludEnemigo -= ataqueMagico;

            spanPuntosSaludEnemigo.innerHTML = puntosSaludEnemigo + 'HP';

            mensaje = 'GANASTE, puntos de salud del enemigo: ' + puntosSaludEnemigo + 'HP';

        } else if (ataqueJugador == 'ASISTENCIA' && ataqueEnemigo == 'FISICO') {

            puntosSaludEnemigo -= ataqueAsistencia;

            spanPuntosSaludEnemigo.innerHTML = puntosSaludEnemigo + 'HP';

            mensaje = 'GANASTE, puntos de salud del enemigo: ' + puntosSaludEnemigo + 'HP';

        } else {

            puntosSaludJugador -= ataqueFisico;
            spanPuntosSaludJugador.innerHTML = puntosSaludJugador + 'HP';

            mensaje = 'PERDISTE, puntos de salud del jugador: ' + puntosSaludJugador + 'HP';

        }
        crearMensajesSistema(mensaje);
    }
    validarPuntosSalud();
}

function validarPuntosSalud() {

    if (puntosSaludEnemigo == 0) {

        mensaje = 'GANASTE, Fin del juego';

        crearMensajesSistema(mensaje);
        deshabilitarBotonesAtaque();

    } else if (puntosSaludJugador == 0) {

        mensaje = 'PERDISTE, Fin del juego';

        crearMensajesSistema(mensaje);
        deshabilitarBotonesAtaque();
    }
}

// deshabilita los botones al terminar el juego
function deshabilitarBotonesAtaque() {

    let botonAtacarFisico = document.getElementById('boton-atacar-fisico');
    let botonAtacarMagico = document.getElementById('boton-atacar-magico');
    let botonAtacarAsistencia = document.getElementById('boton-atacar-asistencia');

    botonAtacarFisico.disabled = true;
    botonAtacarMagico.disabled = true;
    botonAtacarAsistencia.disabled = true;
}