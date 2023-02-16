const mongoose = require('mongoose');

const studentsColecction = 'students';

const studentsSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
});

const studentsModel = mongoose.model(studentsColecction, studentsSchema);

module.exports = studentsModel;
