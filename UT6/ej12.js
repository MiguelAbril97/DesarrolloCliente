window.addEventListener('load',inicializar);

function inicializar(){
    document.addEventListener('mousemove',seguir);
}

function seguir(evento){
    let x = evento.clientX;
    let y = evento.clientY;

    let imagen = document.getElementById('imagen');

    imagen.style.marginLeft = x + 'px';
    imagen.style.marginTop = y + 'px';
}