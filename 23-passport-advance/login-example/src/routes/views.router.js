const { Router } = require('express');
const { getPayload } = require('../utils/jwt');

const router = Router();

router.get('/', getPayload, (req, res) => {
  if (req.payload) {
    res.render('perfil', { name: req.payload.user.first_name });
  } else {
    res.render('login');
  }
});

router.get('/registrar', (req, res) => {
  // if (req.cookies.user) {
  //   res.render('perfil', { name: req.session.user.first_name });
  // } else {
  res.render('register');
  // }
});

router.get('/perfil', (req, res) => {
  // if (req.session.user) {
  res.render('perfil', { name: 'keivn' });
  // } else {
  //   res.render('login');
  // }
});
router.get('/forgot-password', (req, res) => {
  // if (req.session.user) {
  //   res.render('perfil', { name: req.session.user.first_name });
  // } else {
  res.render('forgot-password');
  // }
});

module.exports = router;
