const userRepo = require("../repos/userRepo");
const crypto = require("../utils/crypto");
const auth = require("../utils/auth");

const allUsers = async (req, res) => {
  try {
    const users = await userRepo.get();
    res.status(200);
    res.json(users);
  } catch (error) {
    logger.error(error);
    res.status(500);
    res.send("Internal Server Error!");
  }
};

const signup = async (req, res) => {
  try {
    const data = req.body;
    data.createdAt = new Date();
    data.password = await crypto.genHash(data.password);
    await userRepo.create(data);
    res.status(201);
    res.send();
  } catch (error) {
    if (error && error.message.indexOf("duplicate key") > -1) {
      res.status(400);
      res.send("Email Already Exists");
    } else {
      res.status(500);
      res.send("Internal Server Error!");
    }
  }
};

const signin = async (req, res) => {
  const data = req.body;
  const user = await userRepo.getByEmail(data.email);
  if (!user) {
    res.status(401);
    res.send("Email or Password Wrong");
  } else {
    const verify = await crypto.compare(data.password, user.password);
    if (verify) {
      const token = auth.generateToken({ email: data.email });
      const response = {
        message: "Login Successfull!",
        token,
      };
      res.status(200);
      res.send(response);
    } else {
      res.status(401);
      res.send("Email or Password Wrong");
    }
  }
};

module.exports = {
  allUsers,
  signup,
  signin,
};

// username & password
// find the user using its email in DB
// Unauthorized -> User Not Found
// db Password
// hash(pass) === dbpassword
// user Verified => successfull signin
// 401 -> Unauthorized
