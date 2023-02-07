const mongoose = require('mongoose');

const studentsCollection = 'students';

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'courses',
        },
      },
    ],
    default: [],
  },
});

studentSchema.pre('find', function () {
  this.populate('courses.course');
});

const studentsModel = mongoose.model(studentsCollection, studentSchema);

module.exports = studentsModel;
