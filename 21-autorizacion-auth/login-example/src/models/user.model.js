const mongoose = require('mongoose');
const usersCollection = 'usersLogin';

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  age: String,
});

const UsersModel = mongoose.model(usersCollection, UserSchema);

module.exports = UsersModel;
