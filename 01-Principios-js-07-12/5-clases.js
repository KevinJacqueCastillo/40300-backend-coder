class Persona{

    #variableprivada=1

    constructor(edad,nombre,apellido){
        this.edad=edad;
        this.nombre=nombre;
        this.apellido=apellido;
    }
    
    static especie = "humano";

    saludo() {
        this.#variableprivada
        console.log(`hola, mi nombre es: ${this.nombre} ${this.apellido}`)
    }
    getEspecie(){
        console.log(`soy un ${Persona.especie}`)
    }
}


const profesor = new Persona(24,'Kevin','Jacque')
const profesor1 = new Persona(24,'Kevin','Jacque')
const profesor2 = new Persona(24,'Kevin','Jacque')
const profesor3 = new Persona(24,'Juan','Jacque')
const profesor4 = new Persona(24,'Kevin','Jacque')



profesor.saludo();
profesor3.saludo();