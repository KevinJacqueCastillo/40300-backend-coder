const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const MongoConnect = require('connect-mongo');
const mongoose = require('mongoose');
const routerViews = require('./routes/views.router');
const routerSession = require('./routes/session.router');

mongoose.connect(
  'mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(
  session({
    store: MongoConnect.create({
      mongoUrl:
        'mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority',
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
    secret: 'DASDSADSADVFGDDFBGFDBDGB',
    resave: true,
    saveUninitialized: true,
  })
);

//configuracion handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use(routerViews);
app.use('/api/session', routerSession);

app.listen(8080, () => {
  console.log('Escuchando en el puerto http://localhost:8080');
});
