window.addEventListener('load', inicializar);
let boton;
let txt;
function inicializar() {
    txt = document.getElementById('codigoProducto');
    txt.addEventListener('blur', revisar);
    boton = document.getElementById('enviar');
    boton.addEventListener('click', guardar);
    boton.disabled = true;

}

function revisar() {
    let msj = document.getElementById('mensaje');
    let regex = RegExp(/^[A-Za-z]{3}-\d{1,5}$/);
    var codigo = txt.value;
    if (!regex.test(codigo) || codigo.length < 5) {
        msj.textContent = 'El código no es válido';
        boton.disabled = true;
    } else {
        msj.textContent = '';
        boton.disabled = false;
    }
}

function guardar() {
    let codigo = txt.value;
    localStorage.setItem('codigoProducto', codigo);
    let msj = document.getElementById('mensaje');
    msj.textContent = 'El código se ha almacenado';
    boton.disabled = true;
    setTimeout(() => {
        msj.textContent = '';
    }, 1500);

}