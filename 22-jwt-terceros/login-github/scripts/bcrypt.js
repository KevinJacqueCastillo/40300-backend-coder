const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  console.log(salt);
  const hash = bcrypt.hashSync(password, salt);
  console.log({ hash, salt });
};

// hashPassword('123456');
//'$2b$10$dYtd1wjJtR59W9wWIhuvCeT.uuo5sHhCLKU9sh4JwkfZ6ZNlFSafK'

const comparePassword = async (password, hash) => {
  const response = bcrypt.compareSync(password, hash);
  console.log(response);
};

comparePassword(
  '1234567',
  '$2b$10$dYtd1wjJtR59W9wWIhuvCeT.uuo5sHhCLKU9sh4JwkfZ6ZNlFSafK'
);
