window.addEventListener('load', inicializar);
window.addEventListener('load', oferta);

function inicializar(){
    document.getElementById('btn').addEventListener('click',enviar);


    if(
        document.cookie.includes('nombre=')
    ){
     
        let nombre = document.getElementById('nombre');
        nombre.value = document.cookie.slice(document.cookie.indexOf('=')+1, document.cookie.indexOf(';'));
    }

    if(
        document.cookie.includes('habitacion=')
    ){
        let posInicial = document.cookie.slice(document.cookie.search('habitacion='));
        let habitacion = document.getElementById('habitacion');
        habitacion.value = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));
    }

    if(
        document.cookie.includes('cafe=')
    ){
        let posInicial = document.cookie.slice(document.cookie.search('cafe='));
        let valorCafe = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));
        let cafe = document.getElementById(valorCafe);
        cafe.checked = true;
    }

   
}

function enviar(){
   if(document.cookie.includes('nombre=')){
    let expira = new Date ();
    expira.setTime(expira.getTime()+(24*60*60*1000));
    let cafe = document.getElementsByName('cafe');
    let cafePreferido ="";
    
    for(let i=0; i<cafe.length; i++){
        if(cafe[i].checked){
            cafePreferido=cafe[i].value;
        }
    }
    document.cookie = ("cafe="+cafePreferido+';expires='+expira);
    
    let posInicial = document.cookie.slice(document.cookie.search('pedidos='));
    let valor = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));
    valor = parseInt(valor)+1;
    document.cookie = ('pedidos='+valor+';'+'expires='+expira);

   }else{
    let expira = new Date ();
    expira.setTime(expira.getTime()+(24*60*60*1000));
    
    let nombre = document.getElementById('nombre').value;
    document.cookie = ('nombre='+nombre+';'+'expires='+expira);

    let habitacion = document.getElementById('habitacion').value;
    document.cookie = ('habitacion='+habitacion+';'+'expires='+expira);

    let cafe = document.getElementsByName('cafe');
    let cafePreferido ="";
    
    for(let i=0; i<cafe.length; i++){
        if(cafe[i].checked){
            cafePreferido=cafe[i].value;
        }
    }

    document.cookie = ("cafe="+cafePreferido+';expires='+expira);
    document.cookie = ('pedidos='+1+';'+'expires='+expira);
   }

}

function oferta(){
    if(document.cookie.includes('pedidos=')){
        let posInicial = document.cookie.slice(document.cookie.search('pedidos='));
        let valor = posInicial.slice(posInicial.indexOf('=')+1, posInicial.indexOf(';'));
        valor = parseInt(valor);

        if(valor % 3 == 0){
            let respuesta = document.getElementById('respuesta');
            respuesta.textContent='Este cafe le sale gratis :)'
        }
    }
}