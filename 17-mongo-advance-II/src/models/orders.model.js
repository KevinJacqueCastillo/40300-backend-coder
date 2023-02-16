const mongoose = require('mongoose');

const ordenCollection = 'orders';

const ordenSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ['chica', 'mediana', 'grande'],
    default: 'mediana',
  },
  price: Number,
  quantity: Number,
  date: Date,
});

const orderModel = mongoose.model(ordenCollection, ordenSchema);

module.exports = orderModel;
