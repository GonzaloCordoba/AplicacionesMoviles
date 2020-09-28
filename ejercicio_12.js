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

var alumno = new Estudiante("Gonzalo Cordoba",26);
alumno.setProfesor("Christian");
alumno.presentarse();
alumno.estudiando();