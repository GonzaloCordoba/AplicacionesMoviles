class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        console.log("Hola mi nombre es " + this.nombre + " y tengo " + this.edad + " años");
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, profesor){
        super(nombre,edad)
        this.profesor = profesor;
    }

    setProfesor(profesor){
        this.profesor = profesor;
    }

    estudiando(){
        console.log("Estudiando con " + this.profesor);
    }

}

class Profesor extends Persona {
    constructor(nombre,edad){
        super(nombre, edad);
        this.estudiantes = [];
    }
    
    addEstudiante(estudiante) {

        estudiante.setProfesor(this.nombre);

        this.estudiantes.push(estudiante);

    }

    enseñañdo(){
        this.estudiantes.forEach(e => console.log("Le estoy enseñando a: " + e.nombre));
    }

}


var alumno1 = new Estudiante("Gonzalo", 26);
var alumno2 = new Estudiante("Damian",32);
var alumno3=  new Estudiante("Marian",27);


var profesor = new Profesor ("Chrstian",35);
profesor.presentarse();
profesor.enseñañdo();
profesor.addEstudiante(alumno1);
profesor.addEstudiante(alumno2);
profesor.addEstudiante(alumno3);
profesor.addEstudiante(new Estudiante("Cinthia",25));
profesor.enseñañdo();