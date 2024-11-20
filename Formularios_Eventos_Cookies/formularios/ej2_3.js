window.addEventListener("load",inicializar);

function inicializar (){
    document.getElementById('btn').addEventListener('click',comprobar);
    document.getElementById('anyo').addEventListener('input',calcularEdad);
}

function comprobar(){
    let txt = "";
    let salida ="<div style='background-color: bisque; width: 30%; padding: 10px;'>";
    txt = document.getElementById('nombre').value.toLocaleUpperCase();
    salida += '<p>Nombre: '+txt+'</p>';
    txt = document.getElementById('apellidos').value.toLocaleUpperCase();
    salida += '<p>Apellidos: '+txt+'</p>';
    txt = document.getElementById('password').value.toLocaleUpperCase();
    salida += '<p>Contraseña: '+txt+'</p>';
    txt = document.getElementById('confirm_password').value.toLocaleUpperCase();
    salida += '<p>Confirmar contraseña: '+txt+'</p>';

    txt = document.getElementById('dia').value+'/'+document.getElementById('mes').value+'/'+document.getElementById('anyo').value;
    salida += '<p>Fecha de nacimiento: '+txt+ '</p>'

    txt = document.getElementById('sexo').value.toLocaleUpperCase();
    salida += '<p>Sexo: '+txt+'</p>';

    txt = document.getElementById('prefijo').value.toLocaleUpperCase();
    salida += '<p>'+txt+' ';
    txt = document.getElementById('telefono').value.toLocaleUpperCase();
    salida += txt+"<p>";

    txt = document.getElementById('correo').value.toLocaleUpperCase();
    salida += '<p>Dirección de correo: '+txt+'</p></div>';

    
    let nuevaVentana = window.open();

    nuevaVentana.document.write(salida);
}

function calcularEdad(){
    let year = new Date(); 
    let anyo = parseInt(year.getFullYear()); 
    let edad = parseInt(document.getElementById('anyo').value);
    edad = anyo - edad ;
    let txt = document.getElementById('mes').value+'-'
    +document.getElementById('dia').value+'-'+document.getElementById('anyo').value;

    let nacimiento = new Date(txt);

    if(nacimiento.getMonth() > year.getMonth()){
        
        edad = edad - 1;

    }else if(nacimiento.getMonth() == year.getMonth()){
        
        if(nacimiento.getDate() > year.getDate()){
            edad = edad - 1;
        }
    }

    document.getElementById('edad').setAttribute('placeholder',edad);
}