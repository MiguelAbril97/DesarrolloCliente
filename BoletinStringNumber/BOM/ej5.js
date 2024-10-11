window.addEventListener("load",reloj);



function reloj(){
    let actual = new Date();

    hora = actual.getHours();
    min = actual.getMinutes();
    sec = actual.getSeconds();

    document.title=hora+":"+min;
}

setInterval(reloj, 60000);