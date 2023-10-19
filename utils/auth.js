const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.API_KEY, { expiresIn: 60 });
};

module.exports = {
  generateToken,
};
