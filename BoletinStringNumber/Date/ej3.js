let entrada = "-";

while(isNaN(entrada)==true){
    
    entrada = prompt("Introduzca un numero de segundos y se te dara en horas, minutos y segundos");
    entrada = parseFloat(entrada);

}

let horas = Math.floor(entrada / 3600);
let minutos = Math.floor((entrada % 3600) / 60);
let segundos = entrada % 60;

alert(horas+":"+minutos+":"+segundos);


