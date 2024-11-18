let x;
let y;
let cuadrante;

let entrada = prompt("Introduzca el las coordenada en eje X");
x=parseFloat(entrada);

entrada = prompt("Introduzca las coordenadas del eje Y");
y=parseFloat(entrada);

if(x==0){

    if(y>0){
        cuadrante="Está separando los cuadrantes 1 y 2";
    }else if (y<0){
        cuadrante="Está separando los cuadrantes 3 y 4";
    }else{
        cuadrante="Es el origen";
    }

}else if(x<0){
   
    if(y>0){
        cuadrante="Está en el cuadrante 2";
    }else if (y<0){
        cuadrante="Está en el cuadrantes 3";
    }else{
        cuadrante="Está en el origen de X entre los cuadrantes 2 y 3";
    }

} else {

    if(y>0){
        cuadrante="Está en el cuadrante 1";
    }else if (y<0){
        cuadrante="Está en el cuadrante 4";
    }else{
        cuadrante="Está en el origen de X entre los cuadrantes 1 y 4";
    }

}

alert(cuadrante);

