window.addEventListener("load", inicializar);

function inicializar(){

    document.getElementById("abrir").addEventListener("click",abrirVentana);
    document.getElementById("abrir-cerrar").addEventListener("click",abrirCerrar);
    document.getElementById("cerrar").addEventListener("click",cerrar);
    document.getElementById("foco").addEventListener("click",foco);
    document.getElementById("quitar-foco").addEventListener("click",quitarFoco);
    document.getElementById("sc-absoluto").addEventListener("click",scrollAbsoluto);
    document.getElementById("sc-relativo").addEventListener("click",scrollRelativo);

}

var nuevaVentana;

function abrirVentana(){

    nuevaVentana = window.open("","_blank","width=300,height=300,resizable=yes");

    let contenido = '<input type="button" id="ra" value="Redimensionar Absoluto"> <input type="button" id="rr" value="Redimensionar Relativo">'
    
    nuevaVentana.document.write(contenido);
    redimensionar();
    nuevaVentana.document.close();
  

}

function cerrar(){
    if(nuevaVentana){
        nuevaVentana.close(); nuevaVentana=null;
    }
}

function abrirCerrar(){
    abrirVentana()

    setTimeout(cerrar(), 1000)

}

function foco(){
    nuevaVentana.focus();
}

function quitarFoco(){

    window.focus();

}
function scrollAbsoluto(){


}

function scrollRelativo(){

}

function redimensionar(){
    nuevaVentana.addEventListener("load", cargar);

    function cargar(){
        nuevaVentana.document.getElementById("ra").addEventListener("click",redimensionarAbsoluto);
        nuevaVentana.document.getElementById("rr").addEventListener("click",redimensionarRelativo);
    }

    function redimensionarAbsoluto(){
        nuevaVentana.resizeTo(500, 500);
    }

    function redimensionarRelativo(){
        nuevaVentana.resizeTo(30, 30);
    }


}