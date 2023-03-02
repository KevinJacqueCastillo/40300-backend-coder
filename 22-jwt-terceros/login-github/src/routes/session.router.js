const { Router } = require('express');
const UsersModel = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const passport = require('passport');
const { STRATEGY_REGISTER } = require('../utils/constants');
const router = Router();
const queryString = require('node:querystring');
const fetch = require('node-fetch');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email == 'adminCoder@coder.com' && password == '123456') {
    const userAdmin = {
      first_name: 'Admin',
      last_name: 'Coder',
      age: '2',
      email,
      password,
      role: 'admin',
    };
    req.session.user = userAdmin;
  }
  const user = await UsersModel.findOne({ email });
  const isValidPassword = await comparePassword(password, user.password);
  if (user && isValidPassword) {
    req.session.user = { ...user, role: 'user' };
    res.send(user);
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

router.get('/github', (req, res) => {
  const params = queryString.stringify({
    client_id: 'Iv1.7ca64f3d195547f1',
    redirect_uri: 'http://localhost:8080/api/session/callbackGithub',
    scope: ['read:user', 'user:email'].join(' '), // space seperated string
    allow_signup: true,
  });

  const githubLoginUrl = `https://github.com/login/oauth/authorize?${params}`;
  res.redirect(githubLoginUrl);
});

router.get('/callbackGithub', async (req, res) => {
  const code = req.query.code;
  console.log({ code });
  const params = queryString.stringify({
    client_id: 'Iv1.7ca64f3d195547f1',
    client_secret: '9e443ea543f60ba7126a0c746346e73881758190',
    redirect_uri: 'http://localhost:8080/',
    code,
  });
  const { data } = await fetch(
    `https://github.com/login/oauth/access_token?${params}`
  );
  console.log({ data });
  res.redirect('/');
});

module.exports = router;
