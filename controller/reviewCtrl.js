const reviewRepo = require("../repos/reviewRepo");

const getAll = async (req, res) => {
  try {
    const reviews = await reviewRepo.get();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const post = async (req, res) => {
  try {
    const data = req.body;
    data.createdAt = Date.now();
    await reviewRepo.create(data);
    res.status(201).send("Review Added");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAll,
  post,
};
