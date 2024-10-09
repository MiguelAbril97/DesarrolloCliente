let entrada = prompt("Introduce tu año de nacimiento")
let anyo = parseInt(entrada);

entrada = prompt("¿Qué mes naciste?");
let mes = parseInt(entrada);

entrada = prompt("¿Y que día?");
let dia = parseInt(entrada);

let fecha = new Date(anyo, mes, dia);

