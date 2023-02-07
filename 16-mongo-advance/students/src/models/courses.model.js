const mongoose = require('mongoose');

const coursesCollection = 'courses';

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  difficulty: Number,
});

const coursesModel = mongoose.model(coursesCollection, courseSchema);

module.exports = coursesModel;
