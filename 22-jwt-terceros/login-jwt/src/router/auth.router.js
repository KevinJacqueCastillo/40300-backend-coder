const { Router } = require('express');
const { generateToken, getPayload } = require('../utils/jwt');

const router = Router();

const USERS = [];

router.get('/', (req, res) => {
  res.send(USERS);
});

router.get('/getUserFromtoken', getPayload, (req, res) => {
  console.log(req.payload);
  res.send({ ...req.payload, user: USERS[req.payload.index] });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const index = USERS.findIndex((user) => user.username == username);
  if (index == -1) {
    res.status(404).send({ error: 'usuario no encontrado' });
  } else {
    const token = generateToken({ index });
    res.send({ msg: 'usuario exitosamente encontrado', token });
  }
});

router.post('/register', (req, res) => {
  const user = req.body.user;
  const exist = USERS.findIndex((userArrya) => userArrya == user);
  if (exist == -1) {
    USERS.push(user);
    res.send({ msg: 'register' });
  } else {
    res.status(403).send({ error: 'usuario existente' });
  }
});

module.exports = router;
