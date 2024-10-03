let entrada="";
let busqueda="";
let resultado="";
let num=0;
let cc=0;
let control=true;

entrada= prompt("Introduce un texto con algunos parentesis." 
    +"Te mostraré el contenido entre estos");
busqueda=entrada;

//compruebo si hay un parentesis. Si no lo hay da la cadena vacía

if( entrada.indexOf("(") > -1 ){
   

    //si hay parentesis busca el cierre. Si no hay cierre muestra desde el parentesis hasta el final

    if(entrada.indexOf(")") > -1){

        num=entrada.indexOf("(");
        cc=num;

    do{
        num=busqueda.indexOf("(")
    
        for(let i=cc; i<busqueda.length; i++){
    
            if( busqueda.charAt(i)==")" && control==true ){
    
                resultado = resultado + busqueda.slice(num, i+1);
                busqueda = entrada.substring(i+1);
                cc=i+1; 
                control=false;

            }
    
        }
    
        if(control==true){
    
            resultado=resultado+entrada.substring(num);
        
        }
    
        control=true;
    
        alert(resultado);

    }while(num > -1);

    }else{

        
        num=entrada.indexOf("(");

        resultado=entrada.substring(num);
        
        alert(resultado);

    }

}else {

    alert(resultado);

}

