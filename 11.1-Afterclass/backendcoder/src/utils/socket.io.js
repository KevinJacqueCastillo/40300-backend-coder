const socket = require('socket.io');
const Product = require('../productManager');
let io;
const connectSocket = (httpServer) => {
  io = socket(httpServer);

  io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado!');
    socketConnect = socket;
    const { products } = await Product.getProducts();
    socket.emit('init-products', { products });
  });
};
const emitDeleteProduct = (id) => {
  io.emit('delete-product', { id });
};

module.exports = { connectSocket, emitDeleteProduct };
