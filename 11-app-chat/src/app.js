const express = require('express');
const { Server } = require('socket.io');
const app = express();
const handlebars = require('express-handlebars');
const routerViews = require('./router/views.router');

const httpServer = app.listen(8080, () => {
  console.log('server is running on port 8080');
});
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('nueva usuario conectado');
});

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.use('/', routerViews);
