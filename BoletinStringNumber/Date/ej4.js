let array = new Array (5);
let entrada="";
let dia=0;
let mes = 0;
let anyo = 0;
let fecha = new Date();

//Considerar la mayor como la mas reciente y menor la mas antigua
let mayor = new Date(0, 0, 1);
let menor = new Date(9999, 11, 31);

alert("Se te pediran que vayas introduciendo el año, mes y dia de 5 fechas");


for(let i =0; i<array.length;i++){

entrada = prompt ("Introduce el año (fecha "+(i+1)+" de 5)");
anyo = parseInt(entrada);

do{
    
    entrada = prompt ("Introduce el mes de 0 (Enero) a 11 (Diciembre) (fecha "+(i+1)+" de 5)");
    mes = parseInt(entrada);

}while(mes < 0 || mes > 11);

do{
    
    entrada = prompt ("Introduce el dia de 1 a 31 (fecha "+(i+1)+" de 5)");
    dia = parseInt(entrada);

}while(dia < 1 || dia > 31);

fecha.setFullYear(anyo);
fecha.setMonth(mes);
fecha.setDate(dia);

array[i]=fecha;

}

for (let i=0; i<array.length; i++){

    if(array[i].getTime() > mayor.getTime()){
        
        mayor.setFullYear(array[i].getFullYear());
        mayor.setMonth(array[i].getMonth());
        mayor.setDate(array[i].getDate());

    }
    
    if(array[i].getTime() < menor.getTime()){
       
        menor.setFullYear(array[i].getFullYear());
        menor.setMonth(array[i].getMonth());
        menor.setDate(array[i].getDate());

    }

}

alert("La mayor fecha introducida es: "+mayor.toLocaleDateString()
        +"\nLa menor es: "+menor.toLocaleDateString()
);
