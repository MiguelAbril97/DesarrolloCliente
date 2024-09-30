let entrada="";
let busqueda="";
let resultado="";
let num=0;
let cc=0;
let longitud=0;
let control=true;

entrada= prompt("Introduce un texto con algunos parentesis." 
    +"Te mostraré el contenido entre estos");
busqueda=entrada;

if( entrada.indexOf("(") > -1 ){
   
    longitud=entrada.length;

    do{
        
        num=entrada.indexOf("(");
              
    
        for(let i=num; i<entrada.length; i++){
    
            if( entrada.charAt(i)==")" && control==true ){
    
                resultado = resultado + entrada.substring(num, i+1  );
                control=false;
            }
    
        }
    
        if(control==true){
    
            resultado=resultado+entrada.substring(num, longitud);
        
        }
    
        control=true;
    
        alert(resultado);

    }while(num > -1);

}else {

    alert(resultado);

}

