const { Router } = require('express');
const passport = require('passport');
const UsersModel = require('../models/user.model');
const { generateToken } = require('../utils/jwt');

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UsersModel.findOne({ email, password });
  if (user) {
    const token = generateToken(user);
    res.send({ ...user, token });
  } else {
    res.status(401).send('Email o contraseña incorrectos');
  }
});

router.post(
  '/register',
  passport.authenticate('register', { failureRedirect: '/' }),
  async (req, res) => {
    res.send(req.user);
  }
);

router.get(
  '/calback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['user:email'],
  })
);

module.exports = router;
