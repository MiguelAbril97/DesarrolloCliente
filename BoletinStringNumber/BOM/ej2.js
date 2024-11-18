window.addEventListener("load", inicializar);

function inicializar() {
    document.getElementById("abrir-ventana").addEventListener('click', abrirNueva);
}

var nuevaVentana;

function abrirNueva(){
    nuevaVentana = window.open("", "_blank", "height=500,width=500");

    var informacion = "<h1>Información relevante</h1><ul>"
    informacion = informacion + "<li>" + navigator.userAgent + "</li>";
    
    nuevaVentana.document.write(informacion)

}