window.addEventListener('load',inicializar);

function inicializar(){
    document.addEventListener('mousemove',coordenadas);
}


function coordenadas(evento){
    
    var div = document.getElementById('principal');

    let x = evento.clientX;
    let y = evento.clientY;

    div.textContent = '('+x+','+y+')';
}