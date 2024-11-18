let entrada = prompt("Introduzca un número y se le dira el valor absoluto");
if (parseFloat(entrada)<0){
    console.log("El valor absoluto de "+entrada+" es: "+(entrada*-1));
}else{
    console.log("El valor absoluto de "+entrada);
}