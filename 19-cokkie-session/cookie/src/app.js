const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use('/', express.static(__dirname + '/public'));

app.post('/setCookie', (req, res) => {
  const { name, email } = req.body;
  res.cookie(name, email, { maxAge: 10000 });
  console.log({
    name,
    email,
  });
  res.send('ok');
});

app.get('/getCookie', (req, res) => {
  res.send(req.cookies);
});

app.listen(8080, () => {
  console.log('Server is running on port http://localhost:8080');
});
