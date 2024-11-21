window.addEventListener("load",inicializar);

function inicializar(){
    document.getElementById('btn').addEventListener('click',validar);
    document.getElementById('btn').addEventListener('mouseenter',cambio);
    document.getElementById('btn').addEventListener('mouseleave',cambio);
}

function validar(){
   let txt = document.getElementById('texto').value;
   let control = txt.toUpperCase();
      
        if(txt === control && txt != ""){
            alert("Nombre guardado");
        }else{
            alert("Error"); 
        }
}

function cambio(){
    document.getElementById('btn').style
}