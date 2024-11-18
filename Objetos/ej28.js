let alumno = new Alumno ("Miguel", "Abril Alamo", "7777", new Date("1-1-1997"),"2DAW");

alumno.asignarNotas("DEC",10);
alumno.asignarNotas("DES",7);

let mejorNota = alumno.mejorNota();

alert(mejorNota.toString());
alert(alumno.toString());