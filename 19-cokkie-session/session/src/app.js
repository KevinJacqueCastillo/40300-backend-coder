const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    secret: 'llavesecreta',
    resave: true,
    saveUninitialized: true,
  })
);

const authMiddleware = (req, res, next) => {
  if (req.session.auth) {
    next();
  } else {
    res.send('No estas autorizado');
  }
};

app.get('/login', (req, res) => {
  if (!req.session.auth) {
    req.session.auth = true;
    res.send('Ya estas logeado');
  } else {
    res.send('Ya estas logeado');
  }
});

app.get('/private', authMiddleware, (req, res) => {
  res.send('Excelente estas autenticado esta es una ruta privada');
});

app.use(express.urlencoded({ extended: false }));

app.get('/root', (req, res) => {
  const { name } = req.query;
  if (name && !req.session.name) {
    req.session.name = name;
  }
  if (req.session.views) {
    req.session.views++;
    res.send(
      `Bienvenido ${req.session.name || ''}, visitaste esta pagina ` +
        req.session.views +
        ' veces'
    );
  } else {
    req.session.views = 1;
    res.send('Bienvenido por primera vez');
  }
});

app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send('Error');
    }

    res.send('Session destroyed');
  });
});

app.use(express.json());

app.listen(8080, () => {
  console.log('Server is running on port http://localhost:8080');
});
