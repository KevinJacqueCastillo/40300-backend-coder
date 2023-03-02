const jwt = require('jsonwebtoken');
const UsersModel = require('../models/user.model');
const PRIVATE_KEY = 'DJASHDJASKNJKVFSJKVBFJSKJKNJVJFDBVD';

const generateToken = (payload) => {
  const token = jwt.sign({ payload }, PRIVATE_KEY, { expiresIn: '3m' });
  return token;
};

const getPayloadPrivated = (req, res, next) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    return res.status(401).send({ error: 'no se encontro token' });
  }

  const token = headerAuth.split(' ')[1];
  if (token) {
    jwt.verify(token, PRIVATE_KEY, async (e, credential) => {
      console.log(credential);
      if (e) {
        res.status(500).send({ error: 'ocurrio un error inesperado', e });
      } else {
        const user = await UsersModel.findById(credential.payload.id);
        req.payload.user = user;
        next();
      }
    });
  } else {
    res.status(401).send({ error: 'no se encontro token' });
  }
};
const getPayload = (req, res, next) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    return next();
  }

  const token = headerAuth.split(' ')[1];
  if (token) {
    jwt.verify(token, PRIVATE_KEY, async (e, credential) => {
      console.log(credential);
      if (e) {
        res.status(500).send({ error: 'ocurrio un error inesperado', e });
      } else {
        const user = await UsersModel.findById(credential.payload.id);
        req.payload.user = user;
        next();
      }
    });
  } else {
    next();
  }
};

module.exports = {
  generateToken,
  getPayload,
  PRIVATE_KEY,
};
