class Persona{

    constructor (nombre, apellidos, dni, nacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.nacimiento = nacimiento;
    }

    imprimirDatos(){
        return "Nombre: "+this.nombre+"\nApellidos: "+this.apellidos+
                "\nDNI: "+this.dni+"\nFecha de nacimiento: "+this.nacimiento;
    }
}

class Alumno extends Persona{

    constructor (nombre, apellidos, dni, nacimiento, curso){
        super(nombre, apellidos, dni, nacimiento);
        this.curso=curso;
        this.notas = new Map();      
    }

    asignarNotas(asignatura, nota){
        this.notas.set(asignatura, parseFloat(nota));
    }

    media(){

        let copia = [...this.notas];
        let suma = copia.reduce((total) => total+suma);
        return suma/copia.length;
    }

    mejorNota(){

        let mayor = Math.max(...this.notas.values());
        let copia = [...this.notas.entries()];
        let mejoresNotas = copia.filter((elemento) => elemento[1] === mayor);
        
        return mejoresNotas;
         
   
    }

    toString(){
        let copia = [...this.notas.entries()];
        let mostrarNota=copia.toString();

        return "Alumno: "+this.nombre+" "+this.apellidos+"\nCurso: "+this.curso+". Notas: "+mostrarNota+"<br>";

    }

    ordenarNotas (){
        this.notas.sort((a,b) => a-b);
    }
}

class Aula{

    constructor (numero){
        this.numero = numero;
        this.alumnos = [];
    }

    agregarAlumno (...alumno){
        return this.alumnos.push(...alumno);
    }

    buscarAlumno(dni){
        let posResultado = this.alumnos.findIndex( (elemento) => elemento.dni == dni);
        let resultado = this.alumnos[posResultado];

        return resultado.toString();
    }

    ordenarApellido (){
        return this.alumnos.sort((elemento) => elemento.apellidos);
    }

    imprimirAlumnos (){
        let notas="";
        this.alumnos.forEach((elemento) => notas += elemento.toString());
        return notas;
    }

    ordenarNotasAlumno(dni){
        let posResultado = this.alumnos.findIndex( (elemento) => elemento.dni == dni);
        this.alumnos[posResultado.ordenarNotas()];
    }

}

class Punto{

    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    cuadrante(){

        if( x<0 ){
            if(y<0){
                alert("El punto esta en el cuadrante 3");
            }else if(y > 0){
                alert("El punto esta en el cuadrante 1");
            }else{
                alert("El punto esta entre los cuadrantes 1 y  3");
            }

        }else if (x > 0){
            if(y<0){
                alert("El punto esta en el cuadrante 4");
            }else if(y > 0){
                alert("El punto esta en el cuadrante 2");
            }else{
                alert("El punto esta entre los cuadrantes 2 y  4");
            }

        }else{

            if(y<0){
                alert("El punto esta entre los cuadrantes 3 y 4");
            }else if(y > 0){
                alert("El punto esta entre los cuadrantes 1 y 2");
            }else{
                alert("El punto esta en el origen");
            }

        }
    }
}

class Rectangulo{
    constructor (a, b){

        this.ancho = a.x - (b.x);
        this.alto = a.y - (b.y);

        if(this.ancho < 0){
            this.ancho = this.ancho*(-1);
        }

        if(this.alto < 0){
            this.alto = this.alto*(-1);
        }

    }

    area(){
        return this.ancho*this.alto;
    }
    
    perimetro(){
        return (this.ancho*2)+(this.alto*2);
    }
}

