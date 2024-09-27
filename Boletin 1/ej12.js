let nota=0;
let entrada;

while(nota<=0 || isNaN(nota)==true){

    entrada=prompt("¿Qué nota has sacado?");
    nota=parseFloat(entrada);

}

if(nota<5){

    alert("Suspenso");

}else if( nota>=5 && nota<6 ){

    alert("Aprobado");

}else if (nota>=6 && nota<7) {

    alert("Bien")

}else if (nota>=7 && nota<9) {

    alert("Notable")

}else{
    alert("Sobresaliente")
}