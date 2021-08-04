let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0
const $btnComenzar = document.querySelector("#btnComenzar")
$btnComenzar.onclick = comenzarJuego;

bloquearInputUsuario();

function comenzarJuego() {
    manejarRonda();
    cambiarEstado();
}

/** Turno de la Máquina **/

function manejarRonda() {
    bloquearInputUsuario();
    bloquearBoton();
    $cuadroAleatorio = obtenerCuadroAleatorio();
    secuenciaMaquina.push($cuadroAleatorio);

    function bloquearBoton() {
        $btnComenzar.disabled = true;
    }

    const RETRASO_TURNO_USUARIO = (secuenciaMaquina.length + 1) * 1000;

    secuenciaMaquina.forEach(function($cuadro, i) {
        const RETRASO_MS = (i + 1) * 1000;
        setTimeout(function() {
            resaltar($cuadro);
        }, RETRASO_MS);
    });

    setTimeout(function() {
        document.querySelector("#estado").innerText = "Es tu turno!";
        desbloquearInputUsuario();
    }, RETRASO_TURNO_USUARIO);

    secuenciaUsuario = [];
    ronda++;
    actualizarNumeroRonda();
}

/** Turno del Usuario **/

function manejarInputUsuario(e) {
    console.log(e);
    const $cuadro = e.target;
    resaltar($cuadro);
    secuenciaUsuario.push($cuadro);
}

function obtenerCuadroAleatorio() {

}

function actualizarNumeroRonda(ronda) {
    document.querySelector("#ronda").textContent = ronda;
}


/**Bloqueo y Desbloqueo de los Inputs **/

function bloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
        $cuadro.onclick = function() {};
    });
}

function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
        $cuadro.onclick = manejarInputUsuario();
    });
}

/** Utilidades **/

function resaltar($cuadro) {
    $cuadro.style.opacity = 1;
    setTimeout(function() {
        $cuadro.style.opacity = 0.7;
    }, 500)
}