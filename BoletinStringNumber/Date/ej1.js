let entrada="";
let anyo=0;
let mes=0;
let dia=0;

entrada = prompt("Introduce el año de nacimiento");
anyo = parseInt(entrada);

do{
    entrada = prompt("El mes en el que naciste");
    mes = parseInt(entrada)-1;
}while(mes <0 ||  mes >=12 );



do{

    entrada = prompt("¿Qué dia naciste?");
    dia = parseInt(entrada);

}while(dia<=0 || dia > 31);

let fecha =  new Date(anyo, mes, dia);
let aux = Date.now();


if(fecha.getTime() > aux){

    alert("Fecha inválida");

}else{
    alert("Fecha válida");
}