window.addEventListener('load',inicializar);

function inicializar(){
    document.getElementById('enlace').addEventListener('click',mostrar);
}

function mostrar(){
    let div = document.getElementById('div');
    let coordenadas = div.getBoundingClientRect();

    div.textContent = 'X: '+coordenadas.left+', Y: '+coordenadas.top;
    
}