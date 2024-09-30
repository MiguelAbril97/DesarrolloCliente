let subCadena="";
let entrada="";
let num=0;
let palabras=0;
let ccA=0;
control=true;

entrada=prompt("Introduzca un texto");
entrada=entrada.toUpperCase();

for(let i=0; i<entrada.length;i++){

    if(i==0){
        
        num=entrada.indexOf(" ");
        subCadena=entrada.substring(0,num);
        palabras++;

        if(subCadena.charAt(0)=="A"){
            ccA++;
        }
    
    }
    
    if( entrada.charAt(i)==" " && entrada.charAt(i+1)!=" " ){
        
        for( let j=i+1; j< entrada.length ; j++ ){
            
            if( (entrada.charAt(j)==" " || entrada.charAt(j)==".") && control==true){
                
                subCadena=entrada.substring((i+1),j);
                palabras++;
                control=false;
            }
        }
        
        if(subCadena.charAt(0)=="A"){
            ccA++;
        }
        
        control=true;

    }//fin if
    
}

alert("Ha escrito un total de "+palabras+" palabras. "+ccA+" de ellas empiezan por la letra A");