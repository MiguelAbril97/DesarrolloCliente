window.addEventListener('load', inicializar);

function inicializar(){
    document.getElementById('btn').addEventListener('click',enviar);
}

function enviar(){

    if(document.cookie = ""){
        obtenerPreferencias();
    }else{

    }
}


function obtenerPreferencias(){
    let nombre = document.getElementById('nombre').value;
    let habitacion = document.getElementById('habitacion').value;
    let cafe = document.getElementsByName('cafe');
    let cafePreferido ="";
    for(let i=0; i<cafe.length; i++){
        if(cafe[i].isChecked()){
            cafePreferido=cafe[i].value;
        }
    }

    let expira = new Date ();
    expira.setTime(d.getTime()+(24*60*60*1000));
    document.cookie = ('nombre='+nombre+";",'habitacion='+habitacion+";","cafe="+cafePreferido+';'+24*60*60*1000);
    document.cookie = ('pedidos='+1+';'+24*60*60*1000);
}
