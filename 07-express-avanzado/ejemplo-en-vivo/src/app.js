const express = require("express")

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.json({
       data:'Hola, esta es una peticion GET'
   }) 
});

app.post('/', (req, res) => {
    res.json({
        data: 'Hola, esta es una peticion post',
    })
})
app.put('/', (req, res) => {
    res.json({
        data:'Hola, esta es una peticion put'
    })
})
app.delete('/', (req, res) => {
    res.json({
        data:'Hola, esta es una peticion delete'
    })
})



app.listen(8080, () => {
    console.log('Servidor corriendo correctamente en el purto 8080');
})