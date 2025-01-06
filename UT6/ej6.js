window.addEventListener('load',enlace);

function enlace(){
    let a = document.createElement('a');
    a.setAttribute('href',
        'https://developer.mozilla.org/es/docs/Web/API/Node/textContent');
    a.setAttribute('target','_blank');
    let txt = document.createTextNode('Documentacion');
    a.appendChild(txt);
    document.body.appendChild(a);
}