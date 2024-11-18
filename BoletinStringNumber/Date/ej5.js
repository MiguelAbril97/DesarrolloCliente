/*
Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del 
usuario y muestre “¡Felicidades!” si es el día señalado.
*/
var aux = new Date ();

let entrada = prompt("Introduce tu año de nacimiento")
let anyo = parseInt(entrada);

entrada = prompt("¿Qué mes naciste?");
let mes = parseInt(entrada);

entrada = prompt("¿Y que día?");
var dia = parseInt(entrada);

var fecha = new Date(anyo, mes, dia);

var meses = aux.getMonth() - fecha.getMonth();
var dias  = aux.getDay() - fecha.getDay();

if(meses < 0){
    meses*= -1;
}

if(dias < 0){
    dias*=-1;
}

dias += (meses*30);

if(dias==0){
    alert("Hoy cumples años");
}else{
    alert("Quedan "+dias+" hasta tu próximo cumpleaños");
}