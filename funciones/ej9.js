function elMenor (...parametros){
    
    let menor = Number.MAX_VALUE;

    for(let i of parametros){
        if(i<menor){
            menor=i;
        }
    }

    return menor;
}

function colocaEnMedio ( [array1], [array2]){

    for(let i of array2){
        array1.splice(i);
    }
    
    return
}