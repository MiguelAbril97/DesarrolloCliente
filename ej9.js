let cc=1;
let num;
let media=0;

while (cc<6) {
    
    entrada = prompt("Introduce un número positivo (" +cc+" de 5)");
    num = parseFloat(entrada);
    
    if(isNaN(num)==true || num<0){
        
        alert("Asegurese de introducir un número positivo")
    
    }else{
        cc++

        media+=num
    }
}

media=media/(cc-1)

alert("La media de los números introducidos es "+media)

