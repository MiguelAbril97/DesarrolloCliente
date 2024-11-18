let alumno1 = new Alumno ("Miguel", "Abril Alamo", "7777", new Date("1-1-1997"),"2DAW");
alumno1.asignarNotas("DEC",10); alumno1.asignarNotas("DES",10);

let alumno2 = new Alumno ("Javier", "Lopez", "98446", new Date("1-1-1970"),"2DAW");
alumno2.asignarNotas("DEC",8); alumno2.asignarNotas("DES",6);

let alumno3 = new Alumno ("Julia", "Naranjo", "65468", new Date("1-1-1980"),"2DAW");
alumno3.asignarNotas("DEC",5); alumno3.asignarNotas("DES",7);

let alumno4 = new Alumno ("Tania", "Martinez", "65464", new Date("1-1-2001"),"2DAW");
alumno4.asignarNotas("DEC",6); alumno4.asignarNotas("DES",8);

var aula = new Aula("2DAW");

aula.agregarAlumno(alumno1,alumno2,alumno3,alumno4);

//var nuevaVentana = new window.open()

document.write("DNI buscado: 98446. Corresponde a: "+"<strong>"+aula.buscarAlumno("98446")+"</strong>"+"<br>");
let notas = aula.imprimirAlumnos()
document.write(notas);