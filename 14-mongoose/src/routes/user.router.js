const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
  res.send('hola mundo');
});

module.exports = router;
