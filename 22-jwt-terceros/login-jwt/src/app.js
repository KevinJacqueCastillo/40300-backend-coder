const express = require('express');
const routerAuth = require('./router/auth.router');

const app = express();

//mdw
app.use(express.json());
//router
app.use('/api/auth', routerAuth);

app.listen('8080', () => {
  console.log('servidor escuchando en http://localhost:8080/');
});
