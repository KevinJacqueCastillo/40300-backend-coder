const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const UsersModel = mongoose.model('Users', userSchema);

module.exports = UsersModel;
