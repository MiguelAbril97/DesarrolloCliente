
let info = window.outerHeight;

let respuesta = "El alto de la ventana es de: "+info+"\n";

info = window.outerWidth;

respuesta+= "El ancho de la ventana es de: "+info+"\n";

info = window.screen.colorDepth;

respuesta+= "La profundidad del color es de: "+info+"\n";

alert(respuesta);