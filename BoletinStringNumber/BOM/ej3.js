window.addEventListener('load', inicializar);

function inicializar(){
    document.getElementById("abrir-ventana").addEventListener("click", abrirVentana);
    document.getElementById("cerrar-ventana").addEventListener("click", cerrarVentana);

}


var ventanaNueva;

function abrirVentana(){

    ventanaNueva = window.open("","_blank","width=400,height=400,top=0,left=0,scrollbars=yes");
     
    ventanaNueva.document.write(

        '<p><h1>El ojo es la ventana a tu alma</h1></p>'
    );
    
    ventanaNueva.document.close();
    ventanaNueva.focus();
}


function cerrarVentana(){
    if(ventanaNueva){
        //Lo de null por que?
        ventanaNueva.close(); ventanaNueva = null;
    }

}