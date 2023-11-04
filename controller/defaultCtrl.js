const get = (req, res) => {
  res.status(200);
  res.send("Hello World!");
};

const health = (req, res) => {
  res.status(200);
  res.send("Server is Healthy!");
};

const post = (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    res.status(201);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  get,
  health,
  post,
};
