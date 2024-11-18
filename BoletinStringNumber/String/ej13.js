let ejemplo = `
    <ul>
        <li><a href="https://www.google.com" target="_blank">Google</a></li>
        <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
        <li><a href="https://www.mozilla.org" target="_blank">Mozilla</a></li>
    </ul>
`;

alert("El html usado para el ejemplo es este: "+ejemplo);

let re = RegExp(/href\=[\'\"]+.+[\'\"]+/gm);

let array = ejemplo.match(re);

let links="";

for(let i=0;i<array.length;i++){

    alert("Link encontrado: "+array[i]);
    
}




