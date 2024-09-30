let cadena="";
let nombre="";
let entrada="";
let cc=0;
let ccC=0;
let ccNY=0;
let permanencia=true;

while(permanencia){

    entrada=prompt("Introduce un nombre. Escrube ULTIMO para finalizar");
    entrada=entrada.toUpperCase();

    if(entrada.match("ULTIMO")==null){
       cc++;

        if(entrada.indexOf("C")==0){
            ccC++;
        }
        
        if(entrada.search("Ñ")!= -1){
            ccNY++;
        }

    }else{
        permanencia=false;
    }

}

alert("Ha introducido: "+cc+" nombres, "+ccC+" de ellos empezaban por C y "
    +ccNY+" contenían la Ñ."
);

