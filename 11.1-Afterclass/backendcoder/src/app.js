const express = require('express');
const handlebars = require('express-handlebars');
const cartsRouter = require('./routes/carts.router.js');
const productRouter = require('./routes/products.router.js');
const viewsRouter = require('./routes/views.router.js');
const { connectSocket } = require('./utils/socket.io.js');

const server = express();
server.use(express.urlencoded({ extended: true }));

// server.get("/product", async (req, res) => {
//     const limite = req.query.limit
//     if (limite == undefined && limite == 0) {
//         let productos = await Product.getProducts();
//         res.send(productos)
//     }
//     let productos = await Product.getProducts(limite);
//     res.send(productos)
// })

// server.get("/product/:pid", async (req, res) => {
//     const pid = req.params.pid
//     let product = await Product.getProductById(pid);
//     if (product == null) {
//         res.send("Producto no encontrado,intente nuevamente")
//     } else {
//         res.send(product)

//     }
// })

server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');

server.use(express.static(__dirname + '/public'));

server.use('/api/products', productRouter);
server.use('/api/carts', cartsRouter);
server.use('/', viewsRouter);

const httpServer = server.listen(8080, () => {
  console.log('Escuchando en puerto 8080');
});

connectSocket(httpServer);
