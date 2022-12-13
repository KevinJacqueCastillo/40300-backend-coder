class TicketManager {

  constructor() {
    //se crea una variable 
    this.eventos = []
  }

  //variable privada 
  #precioBaseDeGanancia = 200;
  //para crear parametros opcionales solo debemos asignarlos, si la funcion es llamada sin este parametro 
  //se utilizara el default, en caso de que viaje, este sera el nuevo parametro
  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    //se crea evento nuevo
    this.eventos.push({
      id: this.eventos.length, //id auto-incrementable de esta manera el id va a ser siempre la posicion del arreglo
      nombre,
      //cuando colocamos solo el nombre de una variable js lo considera nombre: valor de variable nombre, 
      //de esta manera nos ahorramos definiendo nombre del atributo
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    });
  }

  agregarUsuario(idUsuario, idEvento) {
    //con este map limpiamos el array y solo dejamos un array con los ids
    //en ves de tener un array con objetos, tenemos uno con ids de los eventos
    const idsEventos = this.eventos.map(evento => evento.id)
    if (idsEventos.includes(idEvento)) {
      //como sabesmos que el id es la posicion del arreglo lo reutilizamos
      //y en el atribuitoo participantes puisheamos nuevo id 
      this.eventos[idEvento].participantes.push(idUsuario);
      console.log('Usuario agregado')
    }
    else {
      console.log('id evento not found')
    }
  }

  get getEventos() {
    return this.eventos;
  }

  ponerEventoEnGira(idEvento, newLocation, newDate) {
    //aca se reutiliza un evento anterior para crear uno nuevo con nueva localidad y fecha, 
    //con el spread y sobre escribimos los atributos fecha lugar id y participantes
    this.eventos.push({
      ...this.eventos[idEvento],
      fecha: newDate,
      lugar: newLocation,
      id: this.eventos.length,
      participantes: [],

    })

  }
}

//se crea una instancia de la clase
const tickets = new TicketManager()

//se agrega evento, no colocamos todos, para que el por default haga su trabajo
tickets.agregarEvento('mi-evento', 'plaza dignidad,santiago,Chile', 5000);
//imprimimos en consola todos los eventos
console.log(tickets.getEventos);

//agragamos un usuario (id del usuario es 1) al evento con el id 0
tickets.agregarUsuario(1, 0);

//probamos agragamos un usuario (id del usuario es 1) al evento con el id 1, deberia mostrar error not found
tickets.agregarUsuario(1, 1);

//usamos el evento creado para crear nuevo evento
tickets.ponerEventoEnGira(0, 'nuewva direccion', new Date());

//mostramos en consola todos los eventos
console.log(tickets.getEventos);


