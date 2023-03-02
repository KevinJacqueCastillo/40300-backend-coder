const bcrypt = require('bcrypt');

const passwordHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  //   console.log(hash);
  return hash;
};
passwordHash('123456');

const hash = '$2b$10$OHwFdxv/pb.9SD/bJurPGOCQcTrpeSNJNrwm6fu95lMsUsyLlKWa2';

const passwordCompare = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  console.log(result);
  return result;
};

passwordCompare('1234567', hash);
