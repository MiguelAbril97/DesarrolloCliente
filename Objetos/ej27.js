window.addEventListener('load', incializar);

var nuevaVentana;

function incializar(){
    document.getElementById('btn_rellenar').addEventListener('click',rellenar);
    document.getElementById('btn_leer').addEventListener('click',leer);
}

let total = [];
let datos = [];
let entrada = " ";
var select = 0;
let persona;
function rellenar(){

    while (entrada != ""){

        entrada = prompt("Introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas");

        if(entrada != ""){
            datos = entrada.split(",");
            nacimiento = new Date(datos.pop());
            datos.push(nacimiento);
            persona = new Persona(datos[0], datos[1], datos[2], datos[3])
            total.push(persona);
        }

    }

}



function leer(){
    nuevaVentana = window.open("",'_blank');
    total.forEach((elemento)=>nuevaVentana.document.write(elemento.imprimirDatos()));    
}



