
class Contador{

    constructor(nombreResponsable) {
        this.nombreResponsable = nombreResponsable;
        this.contador = 0
    }


    getNombreResponsable() {
        console.log(this.nombreResponsable)
    }
    
    aumentar() {
        this.contador = this.contador + 1;
        console.log(`${this.nombreResponsable}=>${this.contador}`)
     }

}

const responsable = new Contador('kevin');
const responsable2 = new Contador('valeria');
const responsable3 = new Contador('alan');
const responsable4 = new Contador('ariel');
responsable.aumentar();
responsable2.aumentar();
responsable3.aumentar();
responsable4.aumentar();


