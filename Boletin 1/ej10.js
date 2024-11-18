let op;
let num;
let cambio;
let entrada;
let salida=0;

do{
    entrada=prompt("¿A qué moneda desea cambiar?\n1) Dólares \n2) Libras \n3) Yenes \n4) Franco Suizo"+
        "\n5) Corona Noruega");
    op=parseInt(entrada);

    switch(op){
        case 1:

            entrada=prompt("¿Cuántos euros vas a cambiar?");
            num=parseFloat(entrada);

            cambio=num*1.12;

            alert(num+ "€ son: "+cambio+"$");

            break;
            
        case 2:
            
            entrada=prompt("¿Cuántos euros vas a cambiar?");
            num=parseFloat(entrada);

            cambio=num*0.8

            alert(num+ "€ son: "+cambio+" libras");

            break;
        
        case 3:
            
            entrada=prompt("¿Cuántos euros vas a cambiar?");
            num=parseFloat(entrada);

            cambio=num*160.8

            alert(num+ "€ son: "+cambio+" yenes");


            break;
        
        case 4:
            
            entrada=prompt("¿Cuántos euros vas a cambiar?");
            num=parseFloat(entrada);

            cambio=num*0.95

            alert(num+ "€ son: "+cambio+" francos suizos");


            break;

        case 5:
        
            entrada=prompt("¿Cuántos euros vas a cambiar?");
            num=parseFloat(entrada);

            cambio=num*11.79

            alert(num+ "€ son: "+cambio+" coronas noruegas");


            break;
        
        default:
            alert("Opción inválida");

    }

    entrada=prompt("Para repetir pulse: 0. Para salir cualquier otra tecla");
    salida=parseInt(entrada);

}while(salida==0);