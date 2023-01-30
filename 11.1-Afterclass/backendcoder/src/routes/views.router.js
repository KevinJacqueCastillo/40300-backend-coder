const { Router } = require('express');
const Product = require('../productManager');

const router = Router();

router.get('/', async (req, res) => {
  const { products } = await Product.getProducts();
    
  res.render('home', {
    products,
  });
});
router.get('/realtime', async (req, res) => {
  //   const { products } = await Product.getProducts();
document
  res.render('realTimeProducts', {});
});

module.exports = router;
