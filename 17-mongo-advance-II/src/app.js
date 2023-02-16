const mongoose = require('mongoose');
const orderModel = require('./models/orders.model');

const test = async () => {
  await mongoose.connect(
    'mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority'
  );
  console.log('Connected to DB');

  const orders = await orderModel.aggregate([
    {
      $match: {
        size: 'mediana',
      },
    },
    {
      $group: {
        _id: '$name',
        total: {
          $sum: '$quantity',
        },
      },
    },
    {
      $sort: {
        total: -1,
      },
    },
    {
      $group: {
        _id: 1,
        orders: {
          $push: '$$ROOT',
        },
      },
    },
    {
      $project: {
        _id: 0,
        orders: '$orders',
      },
    },
    {
      $merge: {
        into: 'reports',
      },
    },
  ]);
  //   const result = await orderModel.find();
  //   let result = await orderModel.insertMany([
  //     {
  //       name: 'Pepperoni',
  //       size: 'grande',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Pepperoni',
  //       size: 'chica',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Pepperoni',
  //       size: 'mediana',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Pepperoni',
  //       size: 'grande',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Pepperoni',
  //       size: 'chica',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Pepperoni',
  //       size: 'mediana',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Pepperoni',
  //       size: 'grande',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Pepperoni',
  //       size: 'chica',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: 'Italiana',
  //       size: 'mediana',
  //       price: 100,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //   ]);

  console.log(orders);
};

test();
