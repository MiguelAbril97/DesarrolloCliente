window.addEventListener('load',inicializar)
var lista;

function inicializar(){
    
    document.getElementById('cuadrado').addEventListener('click',cuadrado);
    document.getElementById('anyadirFinal').addEventListener('click',anyadirFinal);
    document.getElementById('anyadirMedio').addEventListener('click',anyadirMedio);
    document.getElementById('anyadirPrincipio').addEventListener('click',anyadirPrincipio);
    document.getElementById('anyadirPersonalizado').addEventListener('click',anyadirPersonalizado);

    lista = document.getElementsByTagName("ul");


}

function cuadrado(){
    for(let i=0; i<lista.length;i++){
        lista[i].setAttribute('type','square');
    }
} 

function anyadirFinal(){
    let nuevo = document.createElement('li');
    let txt = document.createTextNode('Toyota Celica');
    nuevo.appendChild(txt);
//Lo añado al final
    lista[0].appendChild(nuevo);

}

function anyadirPrincipio(){
    let nuevo = document.createElement('li');
    let txt = document.createTextNode('Citroen C3');
    nuevo.appendChild(txt);
    lista[0].insertBefore(nuevo,lista[0].children[0]);
}

function anyadirMedio(){
    let nuevo = document.createElement('li');
    let txt = document.createTextNode('Audi R8');
    nuevo.appendChild(txt);
    lista[0].insertBefore(nuevo,lista[0].children[3]);

    //Tambien se podria insertar asi
    /*
    let li = document.getElementsByTagName('li');
    lista[0].insertBefore(nuevo,li[3]);
    */
}

function anyadirPersonalizado(){
    let li = document.getElementsByTagName('li');
    let arr =[...li]
    let txt = prompt("¿Junto a que modelo?");
    let nuevo = document.createElement('li');
    let nodo = document.createTextNode('Fiat Panda');
    nuevo.appendChild(nodo);

    let posicion = arr.findIndex((elemento) => elemento.textContent.includes(txt));

    lista[0].insertBefore(nuevo,lista[0].children[posicion]);
    posicion++;
    lista[0].insertBefore(nuevo,lista[0].children[posicion]);

}