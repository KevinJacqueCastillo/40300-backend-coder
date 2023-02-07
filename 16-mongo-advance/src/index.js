const userModel = require('./models/users.model');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const test = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'users',
      }
    );
    console.log('Connected to mongoDB');
    console.time('test');
    const response = await userModel
      .find()
      .explain('executionStats')
      .catch((error) => {
        console.log(error);
      });
    console.timeEnd('test');
    console.log('tiempo: ', response.executionStats.executionTimeMillis);
  } catch (error) {
    console.log(error);
  }
};

test();
