const userModel = require('./models/students.model');
const mongoose = require('mongoose');
const coursesModel = require('./models/courses.model');
const studentsModel = require('./models/students.model');
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
    const resp = await studentsModel.find().populate('courses.course');
    console.log(JSON.stringify(resp, null, 2));
  } catch (error) {
    console.log(error);
  }
};

test();
