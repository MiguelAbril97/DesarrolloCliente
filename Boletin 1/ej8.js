let calculo;
let entrada;
let num;

do{

    entrada = prompt("Introduce un número del 1 al 20");
    num = parseFloat(entrada);

}while(num>20);

let resultado = "Los números desde "+num+" hasta 20 son: ";

for(let i=num+1; i<= 20; i++){
    
    if(i==20){
        resultado=resultado+20;
    }else{
        resultado = resultado+i+", ";
    }
    
}

alert(resultado);