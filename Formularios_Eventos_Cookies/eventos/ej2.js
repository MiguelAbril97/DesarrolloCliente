window.addEventListener("load", inicializar);

function inicializar(){
    document.getElementById('sms').addEventListener('input', entrada);
}

function entrada(){
    txt=document.getElementById('sms').value;
    rg = new RegExp(/[A-Za-z0-9,. ñ]/gm);
    
    if(rg.test(txt)){
        document.getElementById('btn').setAttribute('disabled',false);
    }else{
        document.getElementById('btn').setAttribute('enabled',true);
    }

}