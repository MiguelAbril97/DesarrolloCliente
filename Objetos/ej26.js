

var punto1 = new Punto (9, 13);
var punto2 = new Punto (23,35);

var rectangulo = new Rectangulo( punto1,punto2 );

alert("El ancho de tu rectángulo es: "+rectangulo.ancho+", el alto es de: "+rectangulo.alto);
alert("El área es: "+rectangulo.area()+". El perímetro es: "+rectangulo.perimetro());