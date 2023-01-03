


const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }));

const arrayUsers = [
    {
        id: 1,
        name: "Juan",
        age: 25,
    },
    {
        id: 2,
        name: "Pedro",
        age: 30,
    },
]


app.get('/', (req, res) => { 
    res.send(arrayUsers);
})


app.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = arrayUsers.find((user) => user.id === parseInt(id));
    if (!user) {
        res.send("User not found");
    }
    res.send(user);
})


app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
})
