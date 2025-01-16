window.addEventListener('load',inicializar);
let json = [
            {titular: "Noticia 1", resumen: "Resumen de la noticia 1",descripcion: "Esta es la noticia 1"},
            {titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion:"Esta es la noticia 2"},
            {titular: "Noticia 3",resumen: "Resumen de la noticia3",descripcion: "Esta es la noticia 3"}
            ];
let noticias;
let botones;
function inicializar(){
    noticias = document.getElementById('noticias');
    generar();

    botones = [...document.getElementsByTagName('img')];
    botones.forEach(element => element.addEventListener('click',mostrarInfo));
}

function generar(){
    let noticia;
    let titular;
    let titularTxt;
    let resumen;
    let resumenTxt;
    let boton;
    let descripcion;
    let descripcionTxt;

    json.forEach(element => {
        noticia = document.createElement('div');
        titular = document.createElement('h1');
        resumen = document.createElement('p');
        boton = document.createElement('img');
        descripcion = document.createElement('h4');

        titularTxt = document.createTextNode(element.titular);
        resumenTxt = document.createTextNode(element.resumen);
        descripcionTxt = document.createTextNode(element.descripcion);

        titular.appendChild(titularTxt);
        resumen.appendChild(resumenTxt);
        descripcion.appendChild(descripcionTxt);
        boton.src = 'imagen.jpeg';

        noticia.setAttribute('id',element.titular.replace(' ','').toLowerCase());
        noticia.appendChild(titular);
        noticia.appendChild(resumen);
        noticia.appendChild(boton);
        noticia.appendChild(descripcion);

        noticias.appendChild(noticia);
    });

    
}

function mostrarInfo(event){
    let e = event.currentTarget;
    let descripcion = e.nextElementSibling;

    if(descripcion.style.display == 'none'){
        descripcion.style.display = 'block';
        e.src = 'imagen.jpeg';
    }else{
        descripcion.style.display = 'none';
        e.src = 'imagen2.jpeg';
    }
    
}