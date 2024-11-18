let entrada = prompt("Introduzca nombres separados por espacios. Se les mostrara los que empiecen por c");
let reg = new RegExp (/\bc/igm);
let respuesta = "";

if(entrada.match(reg)!=null){
    
    let matches= entrada.match(reg);

     alert("Hay "+matches.length+" nombres que empiezan por C");

}else{
    alert("Nungun nombre empieza por C")
}