window.addEventListener('load',inicializar);
var a;

function inicializar(){
    a = document.createElement('a');
    let txt = document.createTextNode(' Ver Tabla');
    a.setAttribute('id', 'btn');
    a.appendChild(txt);
    document.body.appendChild(a);
    
    document.getElementById('btn').addEventListener('click',modificar);
}

function modificar(){
  
    if(!document.getElementById('tabla')){
        tabla();
    }else{
        let tabla = document.getElementById('tabla');
        
        if(tabla.style.display != 'none'){
            tabla.style.display = 'none'
        }else{
            tabla.style.display = 'block'
        }
    }
}

function tabla(){

    let tabla = document.createElement('table');
    tabla.setAttribute('id','tabla')
    let tr,td,txt;
  
    for(let i=0; i<20; i++){
        
        tr = document.createElement('tr');
            
        for(let j=0; j<20; j++){
            
            if(j==0){
                
                td = document.createElement('td');
                txt = document.createTextNode('Fila número: '+i);
                td.appendChild(txt);
                tr.appendChild(td);

            }else{
                
                td = document.createElement('td');
                txt = document.createTextNode(j);
                td.appendChild(txt);
                tr.appendChild(td);
            }
            
        }
        tabla.appendChild(tr);
    }
    
    tabla.setAttribute('border','1');
    document.body.appendChild(tabla);
}