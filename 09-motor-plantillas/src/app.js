const express = require("express");
const handlebars = require("express-handlebars");
const viewsRouter = require("./router/views.router");

const app = express();

//init handlebars

app.engine("handlebars", handlebars.engine());

app.set('views', __dirname + '/views');

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + "/public"));





app.use(viewsRouter);
// app.get("/", (req, res) => {
//     res.render("index", {
//         name: "kevin",
//     });

// });
const usuarios = [
    {
        name: 'kevin',
        lastName: 'jacque',
        age: 20,
        email: 'email@gmail.com',
        phone: '123456789',
    },
    {
        name: 'kevin1',
        lastName: 'jacque',
        age: 20,
        email: 'email@gmail.com',
        phone: '123456789',
    },
    {
        name: 'kevin2',
        lastName: 'jacque',
        age: 20,
        email: 'email@gmail.com',
        phone: '123456789',
    },
    {
        name: 'kevin3',
        lastName: 'jacque',
        age: 20,
        email: 'email@gmail.com',
        phone: '123456789',
    },
    {
        name: 'kevin4',
        lastName: 'jacque',
        age: 20,
        email: 'email@gmail.com',
        phone: '123456789',
    },
]
app.get("/random", (req, res) => {
    // obtener un random entre 0 y 4
    const random = Math.floor(Math.random() * 5);
    res.render("index", {
        ...usuarios[random],
    });

});

const foods = [
    {
        name: 'lechuga',
        price:500
    },
    {
        name: 'pera',
        price:500
    },
    {
        name: 'manzana',
        price:500
    },
    {
        name: 'mora',
        price:500
    },

]
app.get("/food", (req, res) => {
    const testUser = {
        name: 'pedro',
        rol:'admin'
    }

    res.render("food", {
        isAdmin:testUser.rol === 'admin',
        foods,
    });


})

app.listen(8080, () => {
    console.log('servidor escuchando puerto 8080')
})
