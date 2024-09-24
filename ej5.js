
    entrada = prompt("Introduce un año y te dire si es bisiesto");
    anyo = parseFloat(entrada);
    if(anyo%400==0){
        alert("El año "+entrada+" es bisiesto");
    }else if( anyo%4 == 0 && anyo%100 != 0 ){
        alert("El año "+entrada+" es bisiesto");
    }else{
        alert("El año "+entrada+" no es bisiesto");
    }