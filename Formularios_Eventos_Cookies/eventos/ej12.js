window.addEventListener("load",inicializar);

function inicializar(){
    let a = document.getElementsByTagName("a");

    for(let i=0; i < a.length; i++){
        a[i].addEventListener("mouseenter",pintar);
        a[i].addEventListener("mouseleave",despintar)
    }

}

function pintar(e){
    
    let elemento = e.currentTarget;

    elemento.style.backgroundColor = "#ADD8E6"

}

function despintar(e){
    
    let elemento = e.currentTarget;

    elemento.style.backgroundColor = "white";

}