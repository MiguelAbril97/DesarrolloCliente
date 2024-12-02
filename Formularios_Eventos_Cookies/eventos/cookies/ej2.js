window.addEventListener('load', inicializar);

function inicializar(){

    if(document.cookie.includes('nombre=')){
        rellenar();
    }

    document.getElementById('enviar').addEventListener('click', enviar);
}

function enviar(){

    if(validar()){
        
        if(document.cookie.includes('nombre=')){
            

        }else{
            let expira = new Date ();
            expira.setTime(expira.getTime()+(24*60*60*1000));
            
            let nombre = document.getElementById('nombre').value;
            document.cookie = ('nombre='+nombre.trim()+';'+'expires='+expira);
            
            let direccion = document.getElementById('direccion').value;
            document.cookie = ('direccion='+direccion.trim()+';'+'expires='+expira);
            
            let ciudad = document.getElementById('ciudad').value;
            document.cookie = ('ciudad='+ciudad.trim()+';'+'expires='+expira);
            
            let provincia = document.getElementById('provincia').value;
            document.cookie = ('provincia='+provincia.trim()+';'+'expires='+expira);
            
            let cp = document.getElementById('cp').value;
            document.cookie = ('cp='+cp.trim()+';'+'expires='+expira);
        }

    }
    
    
}

function validar(){
    let control = true;
    let regExp = new RegExp(/[a-zA-z]+/);
    let cp = new RegExp(/^\d{5}$/);
    
    if(!regExp.test(document.getElementById('nombre').value)){
        control = false;
    }

    if(!regExp.test(document.getElementById('ciudad').value)){
        control = false;
    }

    if(!regExp.test(document.getElementById('provincia').value)){
        control = false;
    }

    if(!cp.test(document.getElementById('cp').value)){
        control = false;
    }

    return control;
}   

function rellenar(){
    

    let nombre = document.getElementById('nombre');
    nombre.value = document.cookie.slice(document.cookie.indexOf('=')+1, document.cookie.indexOf(';'));
    
    let direccion = document.getElementById('direccion');
    let posInicial = document.cookie.slice(document.cookie.search('direccion='));
    direccion.value = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));

    let ciudad = document.getElementById('ciudad');
    posInicial = document.cookie.slice(document.cookie.indexOf('ciudad='));
    ciudad.value = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));

    let provincia = document.getElementById('provincia');
    posInicial = document.cookie.slice(document.cookie.indexOf('provincia='));
    provincia.value = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));

    let cp = document.getElementById('cp');
    posInicial = document.cookie.slice(document.cookie.indexOf('cp='));
    cp.value = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));
    
    
}