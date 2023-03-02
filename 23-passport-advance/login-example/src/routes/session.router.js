const { Router } = require('express');
const UsersModel = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const passport = require('passport');
const { STRATEGY_REGISTER } = require('../utils/constants');
const { generateToken } = require('../utils/jwt');
const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await UsersModel.findOne({ email });
  const isValidPassword = await comparePassword(password, user.password);
  if (user && isValidPassword) {
    const token = generateToken({ id: user.id });
    res
      .cookie('cookie-token', token, { maxAge: 60 * 60 * 100 })
      .send({ user, token });
  } else {
    res.status(401).send('Email o contraseña incorrectos');
  }
});

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req);
    res.send({ payload: req.user });
  }
);

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

module.exports = router;
