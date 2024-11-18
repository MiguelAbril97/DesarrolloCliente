let op;
let entrada;
let salida=0;


do{
    entrada=prompt("Escribe el número de un mes y te dire el nombre");
    op=parseInt(entrada);

    switch(op){
        case 1:

            alert("Enero");

            break;
            
        case 2:

            alert("Febrero");

            break;
        
        case 3:
            
            alert("Marzo");


            break;
        
        case 4:
       
            alert("Abril");


            break;

        case 5:
  
            alert("Mayo");


            break;
        
        case 6:
            alert("Junio");
            break;

        case 7:
            alert("Julio");
            break;
        
        case 8:
            
            alert("Agosto");
        
            break;
        
        case 9:
        
            alert("Septiembre");
            
            break;

        case 10:
           
            alert("Octubre");
            
            break;
       
        case 11:
            alert("Noviembre");
            
            break;
        
        case 12:
            
            alert("Diciembre");
            
            break;
        
        default:
            alert("Opción inválida");

    }

    entrada=prompt("Para repetir pulse: 0. Para salir cualquier otra tecla");
    salida=parseInt(entrada);

}while(salida==0);