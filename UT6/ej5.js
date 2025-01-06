window.addEventListener('load',tabla);

function tabla(){
    let div = document.createElement('div');

    let tabla = document.createElement('table');

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
    div.appendChild(tabla);
    document.body.appendChild(div);
}