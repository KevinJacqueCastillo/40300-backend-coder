const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const fileStore = require('session-file-store');
const mongoconnect = require('connect-mongo');

// const fileStorage = fileStore(session);

const app = express();

app.use(cookieParser());
app.use('/', express.static('public'));
app.use(express.json());

app.use(
  session({
    // store: new fileStorage({
    //   path: './sessions',
    //   ttl: 30,
    //   retries: 0,
    // }),
    store: mongoconnect.create({
      mongoUrl:
        'mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority',
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.get('/root', (req, res) => {
  const { name } = req.query;
  if (name && !req.session.name) {
    req.session.name = name;
  }
  if (req.session.views) {
    req.session.views++;
    res.send(
      `Bienvenido ${req.session.name || ''}, has visitado ${req.session.views}`
    );
  } else {
    req.session.views = 1;
    res.send(`Te damos la bienvenida ${req.session.name || ''}`);
  }
});

app.get('/session', (req, res) => {
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }
  res.send(`Views: ${req.session.views}`);
});

app.get('/login', (req, res) => {
  if (req.session.auth) {
    res.send('Ya estas logeado');
  } else {
    req.session.auth = true;
    res.send('Login Correcto');
  }
});

const midAuth = (req, res, next) => {
  if (req.session.auth) {
    next();
  } else {
    res.send('El usuario debe autenticarse primero en /login');
  }
};
//cliente reqest => middleware => controller server
app.get('/privada', midAuth, (req, res) => {
  res.send('Bienvenido usuario autenticado');
});

app.get('/logout', (req, res) => {
  if (req.session.auth) {
    req.session.destroy((error) => {
      if (error) {
        console.log(error);
        res.send('Error al cerrar sesion');
      } else {
        res.send('Logout Correcto');
      }
    });
  }
});

//como se crean las cookies

app.post('/setCookie', (req, res) => {
  const { name, email } = req.body;
  res.cookie(name, email, { maxAge: 10000 });
  res.send('Cookie creada');
});

//como se leen las cookies
app.get('/getCookie', (req, res) => {
  //lee de la reques las cookies
  res.send(req.cookies);
});

//como se borran las cookies
app.get('/clearCookie', (req, res) => {
  res.clearCookie('name');
  res.send(req.cookies);
});

app.listen(8080, () => {
  console.log('Server is up on port http://localhost:8080/');
});
