


const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }));

const arrayUsers = [
    {
        id: 1,
        name: "Juan",
        age: 25,
        genero:'M'
    },
    {
        id: 2,
        name: "Pedro",
        age: 30,
        genero:'M'
    },
    {
        id: 3,
        name: "Ignacia",
        age: 30,
        genero:'F'
    },
]


app.get('/', (req, res) => { 
    const genero = req.query.genero;
    if (genero) {
        const usersFiltered = arrayUsers.filter((user) => user.genero === genero);
        return res.send(usersFiltered);
    }
    return res.send(arrayUsers);
})





app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
})
