window.addEventListener("load",inicializar);

function inicializar(){
    const elemento = document.getElementsByTagName("input");

    for(let i=0; i<elemento.length;i++){
        elemento[i].addEventListener("blur",comprobar);
    }
}

function comprobar(e){
    let event = e.currentTarget;

    if(event.value ==""){
        alert("Rellene el campo");
        event.focus();
    }
    
}