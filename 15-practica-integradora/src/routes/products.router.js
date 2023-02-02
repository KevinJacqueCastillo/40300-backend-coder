const { Router } = require('express');
const ProductsModel = require('../models/products.model');
const { body, validationResult } = require('express-validator');
const multerUtils = require('../multer.utils');

const router = Router();
/*
    {
        msg: 'ok/error',
        payload: {
           
        }
    }

*/

router.get('/', async (req, res) => {
  try {
    const products = await ProductsModel.find();
    return res.json({
      msg: 'ok',
      payload: products,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'error',
      payload: 'Error al obtener los productos',
    });
  }
});

router.post(
  '/',

  multerUtils.single('imagen1'),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ msg: 'error', errors: errors.array() });
      }

      const product = req.body;
      const newProduct = await ProductsModel.create(product);
      return res.json({
        msg: 'ok',
        payload: newProduct,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        msg: 'error',
        payload: 'Error al intentar crear un producto',
      });
    }
  }
);

module.exports = router;
