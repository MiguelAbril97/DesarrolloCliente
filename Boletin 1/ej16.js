let anyo1=0;
let mes1=0;
let dia1=0;
let anyo2=0;
let mes2=0;
let dia2=0;
let entrada;
let fecha1="";
let fecha2="";

do{
    entrada=prompt("Introduce el año de la primera fecha");
    anyo1=parseInt(entrada);
    
}while ( NaN(anyo1)==true);

    

while (mes1<=0 || mes1>12 || NaN(mes1)==true){

    entrada=prompt("Introduce el mes de la primera fecha en números (1 a 12)");
    mes1=parseInt(entrada);

}

while (dia1<=0 || dia1 > 31 || NaN(dia1)==true){
    entrada=prompt("Introduce el día de la primera fecha ");
    dia1=parseInt(entrada);
}

//Segunda fecha

do{
    entrada=prompt("Introduce el año de la segunda fecha ");
    anyo2=parseInt(entrada);
}while(NaN(anyo2)==true)


while( mes2<1 || mes2 > 12 || NaN(mes2)==true){
    
    entrada=prompt("Introduce el mes de la segunda fecha en números ");
    mes2=parseInt(entrada);

}

while ( dia2<1 || dia2 > 31 || NaN(dia2)==true){
    
    entrada=prompt("Introduce el día de la segunda fecha ");
    dia2=parseInt(entrada);

}

fecha1=dia1+"/"+mes1+"/"+anyo1;
fecha2=dia2+"/"+mes2+"/"+anyo2;

//Calculo

if ( anyo1 < anyo2 ){

    alert(fecha1+" va antes que "+fecha2);

}else if (anyo1==anyo2){
    
    if( mes1 < mes2 ){

        alert(fecha1+" va antes que "+fecha2);

    }else if (mes1==mes2){
        
        if(dia1<dia2){
            
            alert(fecha1+" va antes que "+fecha2);
        
        }else if (dia1==dia2){
           
            alert=("Son la misma fecha")
        }
        
    }else{

        alert(fecha2+" va antes que "+fecha1);
    }
    
}else{
    alert(fecha2+" va antes que "+fecha1);
}