let respuesta = "";
let resultado ="";
let entrada = "";
let num = Math.floor(Math.random()*3);
let historial="";
let salida = false;
let opcion = 0;

while( !salida ){
  
    respuesta = "";
    resultado ="";
    entrada = "";
    num = Math.floor(Math.random()*3);
    salida = 0;
    opcion = 0;

    entrada=prompt("¿Qué desea hacer?"
            +"\n1: Jugar"
            +"\n2: Historial de juego"
            +"\n3: Salir"
        );
    opcion=parseInt(entrada);

        switch(opcion){
            
            case 1:
                
                    entrada = prompt("Donde crees que estara la bolita? O-O-O"
                        +"\nDerecha (D)"
                        +"\nCentro (C)"
                        +"\nIzquierda (I)"
                    );

                    respuesta=entrada.toUpperCase();

                    switch(num){

                        case 0: 
                                if(respuesta=="I"){
                                    alert("¡Acertaste! X-O-O");
                                    historial=historial+"Acierto: X-O-O\n"
                                }else{
                                    alert("¡Que pena! La bolita estaba en la izquierda X-O-O");
                                    historial=historial+"Fallo: X-O-O\n"
                                }
                        break;

                        case 1: 
                        
                            if(respuesta=="C"){
                                alert("¡Acertaste! O-X-O")
                                historial=historial+"Acierto: O-X-O\n"
                            }else{
                                alert("¡Que pena! La bolita estaba en el centro O-X-O");
                                historial=historial+"Fallo: O-X-O\n"
                            }
                        
                            break;

                        case 2: 
                            if(respuesta=="D"){
                                alert("¡Acertaste! O-O-X");
                                historial=historial+"Acierto: O-O-X\n"
                            }else{
                                alert("¡Que pena! La bolita estaba en la derecha O-O-X");
                                historial=historial+"Fallo: O-O-X\n"
                            }   
                        
                            break;

                    }//Fin del switch case del juego
                            
                    entrada=prompt("Para repetir pulse 0. Para salir cualquier otra letra");

                            if( parseFloat(entrada)!=0 ){
                                salida=true;
                            }
                    
            break;//Fin del case 1 jugar

            case 2:
                alert(historial);

                break; //fin case 2 ver historial

            case 3:
               
                salida=true;
                
                break;

            default:
                alert("Opción inválida");
                
        
        }//fin del switch case de las opciones del juego

}