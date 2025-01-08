window.addEventListener('load',inicializar);
//https://picsum.photos/id/237/200/300
var json = 
[
{src:"https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4", desc: "descripcion1", specs:["spec11", "spec12"]},
{src:"https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU", desc: "descripcion2", specs:["spec21", "spec22"]},
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

      
        lista.appendChild(bloque);
    }

    div.appendChild(lista);

}


