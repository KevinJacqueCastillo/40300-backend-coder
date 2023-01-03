import express from 'express'

const app = express()

app.get('/saludo', (req, res) => {
    res.send('<h1 style="color: blue;">Hola todos, pero ahora desde express!<h1>')
})

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
})


