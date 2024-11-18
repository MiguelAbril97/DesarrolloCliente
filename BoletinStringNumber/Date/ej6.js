window.addEventListener("load", inicializar);

var nuevaVentana;

function inicializar(){
    document.getElementById("revelar").addEventListener("click",revelarDias);
}

var aux = new Date();

let entrada = prompt("Introduce tu año de nacimiento")
let anyo = parseInt(entrada);

entrada = prompt("¿Qué mes naciste?");
let mes = parseInt(entrada);

entrada = prompt("¿Y que día?");
var dia = parseInt(entrada);

const fecha = new Date(anyo, mes, dia);
fecha.setFullYear(aux.getFullYear());

const dias = [];

for (let i=0; i < 50; i++){
    
    fecha.setFullYear(fecha.getFullYear()+1);
    
    switch(fecha.getDay()){
        
        case 0:
                dias.push("Lunes");
            break;

        case 1:
                dias.push("Martes");
            break;

        case 2:
                dias.push("Miercoles");
            break;

        case 3:
                dias.push("Jueves");
            break;

        case 4:
                dias.push("Viernes");
            break;

        case 5:
                dias.push("Sábado");
            break;
        
        case 6: 
              dias.push("Domingo");
            break;
    
    }

}

fecha.setFullYear(aux.getFullYear());


function revelarDias(){
    nuevaVentana = window.open("","_blank","resizable=yes");

    for(let i=0; i<dias.length; i++){
        
        fecha.setFullYear(fecha.getFullYear()+1);

        nuevaVentana.document.write('<p>Dia de la semana de tu cumple del año: '+fecha.getFullYear()+': '+dias[i]+'</p>')
    }
   
}