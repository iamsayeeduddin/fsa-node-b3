const ReviewModel = require("../model/reviewModel");

const get = () => {
  return ReviewModel.find({}, { _id: 0, __v: 0 });
};

const create = (data) => {
  const review = new ReviewModel(data);
  return review.save();
};

module.exports = {
  get,
  create,
};
