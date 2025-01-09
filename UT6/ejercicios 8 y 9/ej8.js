window.addEventListener('load',inicializar);
//https://picsum.photos/id/237/200/300
var json = 
[
{src:"imagen.jpeg", desc: "descripcion1", specs:["spec11", "spec12"]},
{src:"imagen2.jpeg", desc: "descripcion2", specs:["spec21", "spec22"]},
];

function inicializar(){
    let todo = document.createElement('div');
    todo.setAttribute('id','todas-las-imagenes');
    let h1 = document.createElement('h1');
    let txt = document.createTextNode('Lista de todas las imágenes');
    h1.appendChild(txt);
    todo.appendChild(h1);
    document.body.appendChild(todo);

    recorrerJson(json);

    let imagenes = document.getElementsByTagName('img');

    for(let i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('click',ocultar);
    }
}

function recorrerJson(json){
    let div = document.getElementById('todas-las-imagenes');
    let lista = document.createElement('ul');

    for(let i=0; i<json.length; i++){
        let bloque = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src',json[i].src);

        bloque.appendChild(img);
        
        
        let p = document.createElement('p');
        let txt = document.createTextNode(json[i].desc);
        p.appendChild(txt);
        bloque.appendChild(p);
        
        let ul = document.createElement('ul');
        ul.setAttribute('id','specs');
        
        let especificaciones = [...json[i].specs];

        for(let i=0;i<especificaciones.length;i++){
            let li = document.createElement('li');
            let texto = document.createTextNode(especificaciones[i]);

            li.appendChild(texto);
            ul.appendChild(li);
        }

        bloque.appendChild(ul);
      
        lista.appendChild(bloque);

    }

    div.appendChild(lista);

}


function ocultar(e){
    let elemento = e.currentTarget;
    let padre = elemento.parentNode;
    let hijos = [...padre.childNodes];

    hijos.forEach(elemento => {
            if(elemento != hijos[0] && elemento.style.display != 'none'){
                elemento.style.display ="none";
            }else{
                elemento.style.display ="block";
            }
        }
    );
   
}