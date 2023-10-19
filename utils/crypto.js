const bcrypt = require("bcrypt");

const genHash = (pass) => {
  return bcrypt.hash(pass, 2);
};

const compare = (pass, dbpass) => {
  return bcrypt.compare(pass, dbpass);
};

module.exports = {
  genHash,
  compare,
};
