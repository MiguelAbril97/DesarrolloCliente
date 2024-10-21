var arr1 = [1,2,5,6];

var arr2 = [3,4];

let arr;

var tripleAndFilter = (arr) => arr.map((value) => value * 3).filter((value) =>value % 5 === 0).toString();

var doubleOddNumbers = (arr) => arr.filter((val) => val % 2 != 0).map((val) => val * 2).toString();

var bar = (...parametros) => parametros.reduce((valor, txt) => valor += txt,"");

var entrada = prompt("Elige que ejercicio hacer: ");

var select = parseInt(entrada);

switch (select){

    case 1:
        arr = tripleAndFilter(arr1);
        alert(arr);
       break;
    
    case 2:
       arr = doubleOddNumbers(arr1);
       alert(arr);
        break;
    
    case 3:
       arr = bar("Uno","Dos", "Hola");
       alert(arr);
        break;

}


