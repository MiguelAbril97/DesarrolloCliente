window.addEventListener("load", inicializar);

function inicializar(){
    document.getElementById('sms').addEventListener('input', entrada);
}

function entrada(){
    let txt=document.getElementById('sms').value;
    let rg = new RegExp(/^[A-Za-z0-9,.ñ]+/i);
    let btn = document.getElementById('btn');
    let mx = 145;
    let long  = document.getElementById('sms').attributes.length;
    long = mx - long;
    let caracteres = document.getElementById('caracteres');

    if(rg.test(txt)){
       btn.disabled = false;
       caracteres.textContent="Quedan "+long+" caracteres restates";

    }else if(txt=""){
       btn.disabled = true;

    }else{
        btn.disabled = true;
    }

}