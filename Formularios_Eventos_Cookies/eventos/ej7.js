window.addEventListener('load',inicializar);

function inicializar(){
    const btn = document.getElementsByName('color');
        for(let i=0; i<btn.length; i++){
            btn[i].addEventListener('click', color);
        }
}

function color(e){
    let elemento = e.currentTarget;
    let form = elemento.closest('form');
    if(elemento.value == "rojo"){
        form.style.backgroundColor = "red";
    }else  if(elemento.value == "verde"){
        form.style.backgroundColor = "green";
    }else{
        form.style.backgroundColor = "blue";
    }

}