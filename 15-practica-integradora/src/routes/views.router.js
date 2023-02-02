const { Router } = require('express');
const ProductsModel = require('../models/products.model');

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/productos', async (req, res) => {
  const products = await ProductsModel.find();
  console.log(products);
  res.render('products', {
    products: products.map((product) => {
      console.log(product._id.toString());
      return {
        _id: product._id.toString(),
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
      };
    }),
  });
});

module.exports = router;
