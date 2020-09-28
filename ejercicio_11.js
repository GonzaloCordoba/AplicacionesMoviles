class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        console.log("Hola mi nombre es " + this.nombre + " y tengo " + this.edad + " años");
    }
}

var persona = new Persona("Gonzalo Córdoba",26);
persona.presentarse();