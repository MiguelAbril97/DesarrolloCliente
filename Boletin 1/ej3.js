let  control = false;
let permanencia = 0;
do{
    control = false;
    
    while(control==false){

        entrada = prompt("Introduzca un valor diferente de 0");
        num = parseFloat(entrada);
        
        if(num!=0){
            
            control=true;
        
        }else{

            control=false;

        }
    }
    
    resultado=prompt("El valor inverso de "+num+" es: " + (1/num) + ", para repetir pulse 1");
    
    permanencia=parseFloat(resultado);

}while(permanencia==1);

