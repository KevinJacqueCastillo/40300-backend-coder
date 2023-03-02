const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const routerViews = require('./routes/views.router');
const routerSession = require('./routes/session.router');
const InitPassport = require('./utils/passport.config');
const passport = require('passport');
const cookieParser = require('cookie-parser');

//innit
const app = express();
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

InitPassport();
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//routes
app.use(routerViews);
app.use('/api/session', routerSession);

app.listen(8080, () => {
  console.log('Escuchando en el puerto http://localhost:8080');
  mongoose.connect(
    'mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
});
