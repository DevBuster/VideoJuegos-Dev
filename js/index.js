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

// evento de escucha que al momento de que termine de cargar la pagina, carguen las siguientes lineas de codigo
window.addEventListener('load', () => {

    /*
    * las variables section... son usados para mostrar u ocultar con style.display
    */
    let sectionMensajesSistemas = document.getElementById('section-mensajes-sistema');
    sectionMensajesSistemas.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('section-seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionDashboard = document.getElementById('section-dashboard');
    sectionDashboard.style.display = 'none';

    let sectionControl = document.getElementById('section-control');
    sectionControl.style.display = 'none';

    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');
    botonSeleccionarJugador.addEventListener('click', seleccionarJugador);

    let botonAtacarFisico = document.getElementById('boton-atacar-fisico');
    botonAtacarFisico.addEventListener('click', atacarFisico);

    let botonAtacarMagico = document.getElementById('boton-atacar-magico');
    botonAtacarMagico.addEventListener('click', atacarMagico);

    let botonAtacarAsistencia = document.getElementById('boton-atacar-asistencia');
    botonAtacarAsistencia.addEventListener('click', atacarAsistencia);

    let botonReiniciarJuego = document.getElementById('boton-reiniciar-juego');
    botonReiniciarJuego.addEventListener('click', () => {
        location.reload();
    });

    let botonInicio = document.getElementById('boton-inicio');
    botonInicio.addEventListener('click', () => {
        history.back();
    });
});

// -------------------------- funciones para el jugador -------------------------- //
// seleccionar al jugador
function seleccionarJugador() {

    let sectionSeleccionarJugador = document.getElementById('section-seleccionar-jugador');
    sectionSeleccionarJugador.style.display = 'none';

    mensaje = 'DEBE SELECCIONAR A UN JUGADOR';

    // variables que obtienen el valor booleano del input radio seleccionado
    let isDevbuster = document.getElementById('input-radio-jugador-devbuster');
    let isAncestralblock = document.getElementById('input-radio-jugador-ancestralblock');
    let isAster = document.getElementById('input-radio-jugador-aster');
    let isRex = document.getElementById('input-radio-jugador-rex');

    // variables que apuntan al span del section dashboard
    let spanJugador = document.getElementById('span-jugador');
    let spanPuntosSaludJugador = document.getElementById('puntos-salud-jugador');
    let spanPuntosSaludEnemigo = document.getElementById('puntos-salud-enemigo');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo');

    // boton que apunta a la seleccion del jugador
    let botonSeleccionarJugador = document.getElementById('boton-seleccionar-jugador');

    // variable de control para ocultar o mostrar el section
    let sectionMensajesSistemas = document.getElementById('section-mensajes-sistema');
    let sectionDashboard = document.getElementById('section-dashboard');
    let sectionSeleccionarAtaque = document.getElementById('section-seleccionar-ataque');

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

        mensaje = 'JUGADOR SELECCIONADO';

        sectionMensajesSistemas.style.display = 'flex';
        sectionDashboard.style.display = 'flex';
        sectionSeleccionarAtaque.style.display = 'flex';

        spanPuntosSaludJugador.innerHTML = puntosSaludJugador + 'HP';
        spanPuntosSaludEnemigo.innerHTML = puntosSaludEnemigo + 'HP';
        spanAtaqueJugador.innerHTML = '?';
        spanAtaqueEnemigo.innerHTML = '?';

        seleccionarJugadorEnemigo();

        crearMensajesSistema(mensaje);

        // deshabilita el boton despues de que el jugador seleccion
        botonSeleccionarJugador.disabled = true;

    } else {
        crearMensajesSistema(mensaje);
        sectionSeleccionarJugador.style.display = 'flex';
        sectionMensajesSistemas.style.display = 'flex';
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

        crearMensajesSistema(mensaje);
    }
}

// ------------- funciones de ataques para los jugadores ------------------------------- //

function atacarFisico() {

    mensaje = 'DEBE SELECCIONAR A UN JUGADOR';

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

    mensaje = 'DEBE SELECCIONAR A UN JUGADOR';

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

    mensaje = 'DEBE SELECCIONAR A UN JUGADOR';

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
    let sectionMensaje = document.getElementById('section-mensajes-sistema');
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

            mensaje = 'GANASTES';

        } else if (ataqueJugador == 'MAGICO' && ataqueEnemigo == 'ASISTENCIA') {

            puntosSaludEnemigo -= ataqueMagico;

            spanPuntosSaludEnemigo.innerHTML = puntosSaludEnemigo + 'HP';

            mensaje = 'GANASTES';

        } else if (ataqueJugador == 'ASISTENCIA' && ataqueEnemigo == 'FISICO') {

            puntosSaludEnemigo -= ataqueAsistencia;

            spanPuntosSaludEnemigo.innerHTML = puntosSaludEnemigo + 'HP';

            mensaje = 'GANASTES';

        } else {

            puntosSaludJugador -= ataqueFisico;
            spanPuntosSaludJugador.innerHTML = puntosSaludJugador + 'HP';

            mensaje = 'PERDISTES';

        }
        crearMensajesSistema(mensaje);
    }
    validarPuntosSalud();
}

function validarPuntosSalud() {

    let sectionControl = document.getElementById('section-control');

    if (puntosSaludEnemigo == 0) {

        mensaje = 'GANASTES, FIN DEL JUEGO';

        crearMensajesSistema(mensaje);
        deshabilitarBotonesAtaque();
        sectionControl.style.display = 'flex';

    } else if (puntosSaludJugador == 0) {

        mensaje = 'PERDISTE, FIN DEL JUEGO';

        crearMensajesSistema(mensaje);
        deshabilitarBotonesAtaque();
        sectionControl.style.display = 'flex';
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