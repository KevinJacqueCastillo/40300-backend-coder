const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'ESKJAFBJKFBJSFBJA';

const generateToken = (user) => {
  const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
  return token;
};

const getPayload = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('FALTO AGREGAR HEADER');
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, PRIVATE_KEY, (err, payload) => {
    if (err) {
      res.status(403).send('token invalido o no autorizado');
    }
    req.user = payload.user;
  });
};

module.exports = {
  getPayload,
  generateToken,
};
