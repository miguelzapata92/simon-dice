let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0
const $btnComenzar = document.querySelector("#btnComenzar")
$btnComenzar.onclick = comenzarJuego;


function comenzarJuego() {
    manejarRonda();
    cambiarEstado();
}

function manejarRonda() {
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


function obtenerCuadroAleatorio() {

}

function actualizarNumeroRonda(ronda) {
    document.querySelector("#ronda").textContent = ronda;
}