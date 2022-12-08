class Contador {
    constructor(nombre){
        this.nombre=nombre
    }
    static count = 0;

    aumentar(){
        Contador.count++;
        console.log(`${this.nombre} aumento el contador en: ${Contador.count}`)
    }

}

const contadorProfesor= new Contador('kevin')
const contadorEstudiantes = new Contador('estudiante')
contadorProfesor.aumentar();
contadorEstudiantes.aumentar();