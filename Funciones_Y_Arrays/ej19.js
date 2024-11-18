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
var select = 0;
var nacimiento;

/*
while (entrada != ""){

    entrada = prompt("Introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas");

   if(entrada != ""){
    datos = entrada.split(",");
    nacimiento = new Date(datos.pop());
    datos.push(nacimiento);
    total.push(datos);
   }

}
*/

let mayorEdad = new Date();
mayorEdad.setFullYear(edad.getUTCFullYear()-"18");

var buscarApellidos = (arr, apellidos) => arr.filter((pos) => pos.filter((dato) => dato == apellidos).length != 0);
var buscarEdad = (arr, edad) => arr.filter((elemento) => elemento[3].getFullYear() == edad.getFullYear());
var buscarMayorEdad = (arr, mayorEdad) => arr.filter((elemento) => elemento[3].getTime() < mayorEdad.getTime());
var buscarMenorEdad = (arr, mayorEdad) => arr.filter((elemento) => elemento[3].getTime() > mayorEdad.getTime());

total = [["Miguel", "Abril Alamo", "6736", new Date("12-23-1997")], ["Manolito", "Gafotas", "12345", new Date("10-10-2000")], ["Pipi", "Calzaslargas", "12234", new Date("01-01-2009")]];

entrada = prompt("Pulse: \n1) Buscar por apellidos o DNI \n2) Buscar por edad \n3) Ver mayores de edad");
select = parseInt(entrada);

let respuesta;
let edad= new Date();


//var buscarApellidos = (arr, apellidos) =>  arr.map((pos) => pos.filter((dato) => dato == apellidos));
/*
Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 
Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):
mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. 
*/

switch (select) {

    case 1:
        entrada = prompt("Introduzca apellidos o DNI");
        respuesta = buscarApellidos(total, entrada);
        alert(respuesta.toString());
        break;

    case 2:
        entrada = prompt("¿Qué edad desea buscar?");
        edad.setFullYear(edad.getUTCFullYear()-parseInt(entrada));
        respuesta = buscarEdad(total, edad);
        alert(respuesta.toString());
        break;
    
    case 3:
        respuesta = buscarMayorEdad(total, mayorEdad);
        alert(respuesta.toString());
        break;
}


