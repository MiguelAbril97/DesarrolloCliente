let total = [];
let datos = [];
let entrada = " ";

while (entrada != ""){

    entrada = prompt("Introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas");

    datos = entrada.split(",");

    total += datos;

}