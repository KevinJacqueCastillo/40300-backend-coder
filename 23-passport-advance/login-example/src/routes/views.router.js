const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/registrar', (req, res) => {
  res.render('register');
});

router.get('/perfil', (req, res) => {
  res.render('perfil', { name: 'nombre' });
});
router.get('/forgot-password', (req, res) => {
  res.render('forgot-password');
});

module.exports = router;
