const express = require('express');
const handlebars = require('express-handlebars');
const routerViews = require('./routes/views.router');

const app = express();

const httpServer = app.listen(8080, () => {
  console.log('app escuchando por el puerto 8080');
});

const io = require('socket.io')(httpServer);

app.set('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/', routerViews);

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado!');
});
