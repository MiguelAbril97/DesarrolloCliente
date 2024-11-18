let reg = RegExp(/^\w+[@]{1}\w+[.]{1}\w{2,3}/gm);
let entrada = "";


do{
    entrada = prompt("Introduzca su direccion email");

}while(entrada.match(reg)==null);
