const get = (req, res) => {
  res.status(200);
  res.send("Hello World!");
};

const health = (req, res) => {
  res.status(200);
  res.send("Server is Healthy!");
};

module.exports = {
  get,
  health,
};
