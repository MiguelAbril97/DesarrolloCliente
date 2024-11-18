var arr1 = [1,2,5,6];

var arr2 = [3,4];

let arr;

var entrada = prompt("Elige que ejercicio hacer: ");

var select = parseInt(entrada);

switch (select){

    case 1:
        elMenor(1,3,4,5,68,85);
        break;
    
    case 2:
        arr = colocaEnMedio(arr1, arr2);
        alert(arr.toString());
        break;
    
    case 3:
        arr = uneArrays(arr1,arr2);
        alert(arr.toString());
        break;

    case 4:
        arr=sumaArgsPares(4,5,9,3,5,2,8);
        alert(arr);
        break;
}

function elMenor (...parametros){
    
    let menor = Number.MAX_VALUE;

    for(let i of parametros){
        if(i<menor){
            menor=i;
        }
    }

    return menor;
}

function colocaEnMedio ( par1, par2){

    var pos = par1.length/2;

    for(let i of par2){
        par1.splice(pos, 0, i);
        pos++;
    }

    return par1;
}

function uneArrays(...parametros){
   var conjunto=[]
   conjunto=conjunto.concat(...parametros);

   return conjunto;
}


function sumaArgsPares(...params){
    /*let checkPar = (num) => num % 2 == 0;
    let sumatorio = (total,num) => total+=num;
    var pares = params.filter(checkPar);
    let suma = pares.reduce(sumatorio,0);*/

    let suma = params.filter((num) => num % 2 == 0).reduce((total,num) => total += num);
    
    return suma;
    
}

