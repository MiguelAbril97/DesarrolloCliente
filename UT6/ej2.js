window.addEventListener('load',inicializar)

function inicializar(){
    
    let lista = document.getElementsByTagName("ul");

    for(let i=0; i<lista.length;i++){
        lista[i].setAttribute('type','square');
    }

}