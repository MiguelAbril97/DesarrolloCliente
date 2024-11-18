window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('ej25').addEventListener('click', ejercicio25);
}

function ejercicio25() {
    var entrada = prompt("Introduzca el valor de X");
    let x = parseInt(entrada);

    var entrada = prompt("Introduzca el valor de Y");
    let y = parseInt(entrada);

    var punto = new Punto(x, y);

    punto.cuadrante();
}