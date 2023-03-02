const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  if (req.session.user) {
    res.render('perfil', { name: req.session.user.first_name });
  } else {
    res.render('login');
  }
});

router.get('/registrar', (req, res) => {
  if (req.session.user) {
    res.render('perfil', { name: req.session.user.first_name });
  } else {
    res.render('register');
  }
});

router.get('/perfil', (req, res) => {
  if (req.session.user) {
    res.render('perfil', { name: req.session.user.first_name });
  } else {
    res.render('login');
  }
});
router.get('/forgot-password', (req, res) => {
  if (req.session.user) {
    res.render('perfil', { name: req.session.user.first_name });
  } else {
    res.render('forgot-password');
  }
});

module.exports = router;
