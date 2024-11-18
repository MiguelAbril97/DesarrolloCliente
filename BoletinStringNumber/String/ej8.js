var entrada = prompt("Introduce una palabra y comprobare si es palindromo");
var copia = entrada.toLocaleLowerCase();

var invertido = [...copia];
invertido=invertido.toReversed();

aux=invertido.toString();

if(aux == copia){
    alert('"'+entrada+'"'+' es un palíndromo');
}else{
    alert('"'+entrada+'"'+' no es un palíndromo');

}