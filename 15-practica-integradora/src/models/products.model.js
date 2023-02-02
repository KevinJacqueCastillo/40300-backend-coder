const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  thumbnail: String,
  stock: {
    type: Number,
    default: 0,
  },
});

const ProductsModel = mongoose.model('ProductosEcommerce', productsSchema);

module.exports = ProductsModel;
