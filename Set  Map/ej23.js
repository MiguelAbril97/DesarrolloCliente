class Asignaturas{
    constructor(nombre,duracion, alumnos){
        this.nombre=nombre;
        this.duracion = duracion;
        this.alumnos = alumnos;
    }
}

var asignaturasMap = new Map();

asignaturasMap.set("DWEC",new Asignaturas("Desarrollo web entorno cliente", 5, 24));
asignaturasMap.set("DWES", new Asignaturas("Desarrollo web entorno servidor", 3, 5));
asignaturasMap.set("IG",new Asignaturas("Interfaces graficas", 2,65));
asignaturasMap.set("DAW", new Asignaturas("Despliegue de aplicaciones web", 32,54) );

alert(asignaturasMap.has("DWES"));

let iterador =[...asignaturasMap.values()];

var arrayAlumnos = iterador.map((elemento)=> elemento.alumnos);

alert(arrayAlumnos.reduce((a,b)=>a+b));
