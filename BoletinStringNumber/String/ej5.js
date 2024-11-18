let entrada = prompt("Introduce una frase y se invertira");
let respuesta="";

for(let i=entrada.length-1;i>=0;i--){
    respuesta+=entrada.charAt(i);
}

alert(respuesta);