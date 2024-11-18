let dosEuros=0;
let unEuro=0;
let cincuenta=0;
let veinte=0;
let diez=0;
let cinco=0;
let dos=0;
let uno=0;

let entrada; 
entrada = prompt("¿De cuantos euros quieres el cambio?");
let num;
num = parseFloat(entrada);


while (num > 0) {
    
    if( num-2 >= 0 ){
    
        dosEuros++;
        num -= 2;
    
    }else if ( num - 1 >= 0) {
        
        unEuro++;
        num -= 1;

    }else if (num - 0.5 >=0 ){

        cincuenta++;
        num -= 0.5;

    }else if (num - 0.2 >=0 ){
    
        veinte++;
        num -= 0.2;
    
    }else if (num - 0.1 >=0){

        diez++;
        num -= 0.1;

    }else if (num - 0.05 >=0 ){

        cinco++;
        num -= 0.05;

    }else if (num - 0.02 >=0 ){

        dos++;
        num -= 0.02;

    }else{
        uno++;
        num -= 0.01;
    }
}

alert("Para tener ese dinero en monedas necesitaria:"

+"\n"+dosEuros+" monedas de 2€"
+"\n"+unEuro+" monedas de 1€"
+"\n"+cincuenta+" monedas de 50 centimos"
+"\n"+veinte+" monedas de 20 centimos"
+"\n"+diez+" monedas de 10 centimos"
+"\n"+cinco+" monedas de 5 centimos"
+"\n"+dos+" monedas de 2 centimos"
+"\n"+uno+" monedas de 1 centimo"

)