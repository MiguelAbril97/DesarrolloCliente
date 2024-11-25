window.addEventListener("load",inicializar);

function inicializar (){
    document.getElementById('btn').addEventListener('click',comprobar);
    document.getElementById('anyo').addEventListener('input',calcularEdad);
}

function comprobar(){
    nombre = document.getElementById('nombre');
    apellidos = document.getElementById('apellidos');
    control = true;
    let email = document.getElementById('usuario'); 
    let pass = document.getElementById('password'); 
    let c_pass = document.getElementById('confirm_password'); 
    let rg = new RegExp(/^[A-Za-z0-9*$!"%]+/i);
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById('mes').value;
    let anyo = document.getElementById('anyo').value;
    let fecha = new Date(mes,dia,anyo);

    if(nombre.value == "" || apellidos.value == ""){
        nombre.style.border = "2px solid red";
        apellidos.style.border = "2px solid red";
        control = false;
    }

    if(email.value == ""){
        email.style.border = "2px solid red";
        control = false;
    }

    if( pass.value=="" || !rg.test(pass.value) || c_pass.value != pass.value ){
        pass.value="";
        c_pass.value="";
        pass.style.border = "2px solid red";
        c_pass.style.border = "2px solid red";
        control = false;
    }

    if (mes=="" || fecha.now() > Date.now()){
        dia.style.border = "2px solid red";
        mes.style.border = "2px solid red";
        anyo.style.border = "2px solid red";
    }

    
    
    if(control){
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