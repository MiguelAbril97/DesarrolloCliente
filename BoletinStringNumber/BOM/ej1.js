// Espera a que todo el contenido de la página se haya cargado
window.addEventListener("load", inicializar);

function inicializar() {
    document.getElementById("abrir-ventana").addEventListener('click', abrirNueva);
}

var nuevaVentana; 
function abrirNueva() {
   nuevaVentana= window.open("", "_blank", "height=400,width=600");

    var propiedades = navigator;

    var contenido = "<h1>Propiedades del objeto navigator</h1><ul>";
    for (var propiedad in propiedades) {
        contenido += "<li>" + propiedad + ": " + propiedades[propiedad] + "</li>";
    }
    contenido += "</ul>";

    nuevaVentana.document.write(contenido);
    nuevaVentana.document.close();
}


/*window.document.addEventListener("load",inicializar);

function inicializar(){
    document.getElementById("abrir-ventana").addEventListener('click', abrirNueva);
}
var nuevaVentana;
function abrirNueva(){
    nuevaVentana = window.open("", "_blank", "height=400,width=800");
}*/