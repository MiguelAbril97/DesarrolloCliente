let sexo;
let sueldo;
let mediaHombre=0;
let mediaMujer=0;
let ccM=0;
let ccH=0;
let entrada;
let permanencia=true;

/*
Dentro del while hay una estructura if else para hombre o mujer
cuando entra en un if hay una estructura while para asegurarme que introduce
bien el sueldo.
Cuando el sueldo esta bien introducido se aumenta el contador propio de los datos
de Hombre o Mujer (cch y ccM)
*/


while (sexo != "*"){

    entrada=prompt("Primero indique el sexo del trabajador "
        +"\nH para hombre"
        +"\nM para mujer"
        +"\n* para FINALIZAR la entrada de datos"
    );
    
    sexo=entrada;

   if ( sexo == "M" || sexo=="m" ){

        entrada=prompt("Introduzca el sueldo. Debe ser entre 1000-2000€");
        sueldo=parseFloat(entrada);

        while( sueldo<1000 || sueldo>2000 || isNaN(sueldo)==true ){
            entrada=prompt("El sueldo debe ser entre 1000-2000€");
            sueldo=parseFloat(entrada);
        }
       
        mediaMujer+=sueldo;
        ccM++;

    }else if ( sexo == "H" ||  sexo=="h" ){

        entrada=prompt("Introduzca el sueldo. Debe ser entre 1000-2000€");
        sueldo=parseFloat(entrada);

        while( sueldo<1000 || sueldo>2000 || isNaN(sueldo)==true ){
            entrada=prompt("El sueldo debe ser entre 1000-2000€");
            sueldo=parseFloat(entrada);
        }
       
        mediaHombre+=sueldo;
        ccH++;

    }

}

//Me aseguro de no hacer una division /0

if( ccH > 0){
    mediaHombre = mediaHombre/ccH;
}

if(ccM > 0){
    mediaMujer = mediaMujer/ccM;
}

alert(  
        "Se han introducido "+ccM+" sueldos de mujeres"
        +"\nLa media de los sueldos de las trabajadoras es de "+ mediaMujer
    );

alert(
    "Se han introducido "+ccH+" sueldos de hombres"
    +"\nLa media de los sueldos de los trabajadores es de "+ mediaHombre
    );