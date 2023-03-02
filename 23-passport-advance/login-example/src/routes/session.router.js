const { Router } = require('express');
const UsersModel = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const passport = require('passport');
const { STRATEGY_REGISTER } = require('../utils/constants');
const { generateToken } = require('../utils/jwt');
const passportCustom = require('../utils/passportCall');
const router = Router();

const authorization = (role) => {
  //damos autorizacion solo a los que sean el role
  return (req, res, next) => {
    if (!req.user)
      return res.status(401).send({ status: 'error', msg: 'no contiene user' });
    if (req.user.role != role)
      return res.status(403).send({ status: 'error', msg: 'no autorizado' });

    next();
  };
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await UsersModel.findOne({ email });
  const isValidPassword = await comparePassword(password, user.password);
  if (user && isValidPassword) {
    const token = generateToken({ id: user.id, role: 'user' });
    res
      .cookie('token-coder', token, { maxAge: 30000, httpOnly: true })
      .send({ user });
  } else {
    res.status(401).send('Email o contraseña incorrectos');
  }
});

router.post(
  '/register',
  passport.authenticate(STRATEGY_REGISTER),
  async (req, res) => {
    res.send(req.user);
  }
);

router.post('/forgot-password', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UsersModel.findOne({ email });
    if (user) {
      const hash = await hashPassword(password);
      await UsersModel.updateOne({ email }, { password: hash });
      res.send(user);
    } else {
      res.status(404).send('Email no encontrado');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al crear usuario');
  }
});

router.get(
  '/current',
  passportCustom('jwt'),
  authorization('user'),
  (req, res) => {
    res.send(req.user);
  }
);

module.exports = router;
