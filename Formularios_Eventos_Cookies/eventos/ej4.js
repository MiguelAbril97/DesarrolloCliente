window.addEventListener("load", inicializar);

function inicializar(){
    const q1 = document.getElementsByName('q1');
        for(let i = 0; i<q1.length; i++){
            q1[i].addEventListener('click', respuesta);
        }

    const q2 = document.getElementsByName('q2');
     for(let i = 0; i<q1.length; i++){
         q2[i].addEventListener('click', respuesta);
     }
}

function respuesta(e){
    let element = e.currentTarget;
    let respuesta="";


        if(element.name =="q1" && element.value != "Jupiter"){
            respuesta += "La respuesta de la pregunta 1 es: Júpiter."
        }

       if(element.name =="q2" && element.value != "HTML"){
            respuesta += "La respuesta de la pregunta 2 es: HTML"
        }
    
    

    document.getElementById('respuestas').setAttribute("placeholder", respuesta);

}