window.addEventListener('load',inicializar);
let imagenes;
let viaje;
let h2;
let h2Txt;
let span;
let spanTxt;
let button;
let fotos;
let li;
let img;
let bototnes;
function inicializar(){
    document.getElementById('mostrar').addEventListener('click',show);
   
}

let json = [
    {"clase_pais":"usa","ciudad_h2":"New York,NY","detalle_precio_total":"1,899","detalle_num_noches":7,"precio_noche":275,"ruta_imagen":"./photos/newyork.jpg","pie_imagen":"Puente Brooklyn"},
    {"clase_pais":"paris","ciudad_h2":"Paris,Francia","detalle_precio_total":"1,499","detalle_num_noches":5,"precio_noche":300,"ruta_imagen":"./photos/paris.jpg","pie_imagen":"Notre Dame de Paris"},
    {"clase_pais":"uk","ciudad_h2":"Londres,UK","detalle_precio_total":"2,199","detalle_num_noches":5,"precio_noche":440,"ruta_imagen":"./photos/london.jpg","pie_imagen":"Torre de Londres"}
]

function show(){
    let viajes = document.createElement('ul');

    if(document.getElementsByTagName('ul').length == 0){
        viajes = document.createElement('ul');
    

        json.forEach( elemento =>{

                viaje = document.createElement('li');
                viaje.className = 'viaje '+elemento.clase_pais;

                h2 = document.createElement('h2');
                h2Txt = document.createTextNode(elemento.ciudad_h2);
                h2.appendChild(h2Txt);

                span = document.createElement('span');
                span.className = 'detalle';
                spanTxt = document.createTextNode(elemento.detalle_precio_total+' por '+elemento.detalle_num_noches+' noches');
                span.appendChild(spanTxt);

                button = document.createElement('button');
                button.className = 'reserva';
                let btnTxt = document.createTextNode('Resérvalo ya!');
                button.appendChild(btnTxt);

                fotos = document.createElement('ul');
                fotos.className = 'fotos';

                li =  document.createElement('li');

                img = document.createElement('img');
                img.src = elemento.ruta_imagen;

                let pie = document.createElement('span');
                let pieTxt = document.createTextNode(elemento.pie_imagen);
                pie.appendChild(pieTxt);

                li.appendChild(img);
                li.appendChild(pie);
                fotos.appendChild(li);

                viaje.appendChild(h2);
                viaje.appendChild(span);
                viaje.appendChild(button);
                viaje.appendChild(fotos);

                viajes.appendChild(viaje);

        }

    )
        document.body.appendChild(viajes);

        document.getElementById('mostrar').textContent = 'OCULTAR VIAJES';

        /*
        Creo aqui los listener porque si los pongo en inicializar no va a coger los elementos img
        */

        imagenes = [...document.getElementsByTagName('img')];
        imagenes.forEach(elemento => elemento.addEventListener('mouseenter',destacar));
        imagenes.forEach(elemento => elemento.addEventListener('mouseleave',noDestacar));
        
        botones = [...document.getElementsByTagName('button')];
        botones.forEach(elemento => elemento.addEventListener('click', reserva));

    }else{
        viajes = document.getElementsByTagName('ul')[0];

        viajes.remove()

        document.getElementById('mostrar').textContent = 'MOSTRAR VIAJES';


    }

}

function destacar(event){
    let ul = event.currentTarget.closest('ul');;
    let padre = ul.parentNode;
    let hijos = [...padre.childNodes];
    let pos = hijos.findIndex(elemento => elemento.className.includes("detalle"));
    let detalle = hijos[pos];

    if(detalle.className === 'detalle'){
        detalle.classList.add('destacado');
    }

}

function noDestacar(event){
    let ul = event.currentTarget.closest('ul');;
    let padre = ul.parentNode;
    let hijos = [...padre.childNodes];
    let pos = hijos.findIndex(elemento => elemento.className.includes("detalle"));
    let detalle = hijos[pos];

    
    detalle.classList.remove('destacado');
    

}

function reserva(event){
    let padre =  event.currentTarget.parentNode;
    let hijos = [...padre.childNodes];
    if(hijos.filter(elemento => elemento.value == 'Aceptar') == 0 ){
        let nombre = document.createElement('input');
        nombre.type = 'text';
        nombre.setAttribute('id','nombre');
       
        let aceptar = document.createElement('button');
        let txt = document.createTextNode('Aceptar');
        aceptar.appendChild(txt);
        aceptar.addEventListener('click',guardar);
        aceptar.disabled = true;

        nombre.addEventListener('input', function revisar() {
            if(nombre.value == ''){
                aceptar.disabled = true;
            }else{
                aceptar.disabled = false;

            }
        })

        padre.appendChild(nombre);
        padre.appendChild(aceptar);

    }


}

function guardar(){
    let valor = document.getElementById('nombre').value; 
    localStorage.setItem('nombre', valor);    
}