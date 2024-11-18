let entrada="";
let anyo=0;
let mes=0;
let dia=0;
let anyo2=0;
let mes2=0;
let dia2=0;

entrada = prompt("Introduce el año de la primera fecha");
anyo = parseInt(entrada);

do{
    entrada = prompt("El mes");
    mes = parseInt(entrada)-1;
}while(mes <0 ||  mes >=12 );

do{

    entrada = prompt("¿Qué dia?");
    dia = parseInt(entrada);

}while(dia<=0 || dia > 31);

//Segunda fecha
entrada = prompt("Introduce el año de la segunda fecha");
anyo2 = parseInt(entrada);

do{
    entrada = prompt("El mes");
    mes2 = parseInt(entrada)-1;
}while(mes2 <0 ||  mes2 >=12 );



do{

    entrada = prompt("¿Qué dia?");
    dia2 = parseInt(entrada);

}while(dia2<=0 || dia2 > 31);

fecha1 = new Date(anyo, mes, dia);
fecha2 = new Date(anyo2, mes2, dia2);

if(fecha1.getTime() > fecha2.getTime()){

    alert("La fecha "+fecha2.toDateString()+" es anterior");

}else if (fecha1.getTime() < fecha2.getTime()){
    
    alert("La fecha "+fecha1.toDateString()+" es anterior");

}else{
    alert("Las fechas son la misma");
}