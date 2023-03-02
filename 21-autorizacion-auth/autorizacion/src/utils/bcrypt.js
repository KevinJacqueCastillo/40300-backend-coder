const bcrypt = require('bcrypt');

const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isValidHash = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = {
  createHash,
  isValidHash,
};
