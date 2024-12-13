window.addEventListener("load",inicializar);

function inicializar(){
    document.getElementById("ej1").addEventListener('click', ejercicio1);
    document.getElementById("ej2").addEventListener('click', ejercicio2);

}

function ejercicio1(){
    let testdiv = document.createElement('div');

    testdiv.setAttribute('id','testdiv'),
    document.body.appendChild(testdiv);

    let para = document.createElement('p'); 
    let txt1 = document.createTextNode("Este es el");
    para.appendChild(txt1); 

    let enfasis = document.createElement('em');
    let txt2 = document.createTextNode(' contenido');
    enfasis.appendChild(txt2);
    para.appendChild(enfasis);

    let txt3 = document.createTextNode(' de mi párrafo');
    para.appendChild(txt3);
    testdiv.appendChild(para);
}

function ejercicio2(){
    window.open('ej2.html');
}