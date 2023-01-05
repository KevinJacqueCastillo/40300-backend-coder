const express = require("express")

const app = express();

let todos = ['tarea 1', 'tarea 2'];

app.use(express.json());

//Retorna todos los TODOS
app.get('/', (req, res) => {
    res.json({
       todos
   }) 
});

//Debe añadir un TODO a la lista todos
app.post('/', (req, res) => {
    const todo = req.body.todo;
    todos.push(todo);
    res.status(200).json({
        msg: 'se creo exitosamente el todo',
        todos
    })
})

//crear un metodo put, que modifique un todo, obtener desde el parametro el index que hace referencia a la posicion del array
app.put('/:index', (req, res) => {
    const index = req.params.index;
    const todo = req.body.todo;

    todos[index] = todo;
    res.json({
        msg: `todo (${index}) fue actualizado con exito`,
        todos
    })
})

//crear un metodo delete, que elimine un todo  (ocupar filter y reasingar array resultante del filter a la variable todos)
app.delete('/:index', (req, res) => {
    const index = req.params.index;
    [0,1,2]
    const todosFiltered = todos.filter((todo, i) => i != index);

    todos = todosFiltered;

    res.json({
        msg: 'se elimino exitosamente el valor',
        todos
    })


})




app.listen(8080, () => {
    console.log('Servidor corriendo correctamente en el purto 8080');
})