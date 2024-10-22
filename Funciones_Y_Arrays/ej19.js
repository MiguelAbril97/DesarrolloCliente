/*
Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 
Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):
mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. 

*/

let total = [];
let datos = [];
let entrada = " ";
var select=0;
var arr1 = [1,2,5,6];
var arr2 = [3,4];


while (entrada != ""){

    entrada = prompt("Introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas");

    datos = entrada.split(",");

    total.push(datos);

}

entrada = prompt("Pulse: \n1)Buscar por apellidos \n2)Buscar por DNI \n3) Buscar por fecha de nacimiento");
select = parseInt(entrada);

let respuesta;


var buscarApellidos = (arr, apellidos) =>  arr.map((pos) => pos.filter((dato) => dato == apellidos));

switch(select){
   
    case 1: 
            entrada = prompt("¿Que apellido deseas buscar?");
            respuesta = buscarApellidos(total, entrada);
            alert(respuesta.toString());
        break;
    
    case 2: 
        break;

    case 3: 
        break;

}


