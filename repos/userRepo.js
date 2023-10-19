const UserModel = require("../model/userModel");

const get = () => {
  return UserModel.find({}, { password: 0, __v: 0 });
};

const create = (data) => {
  const user = new UserModel(data);
  return user.save();
};

const getByEmail = (email) => {
  return UserModel.findOne({ email: email }, { email: 1, password: 1 });
};

module.exports = {
  get,
  create,
  getByEmail,
};
