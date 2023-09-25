const ProductModel = require("../model/productModel");

const get = (page, pageSize, sort, dir) => {
  return ProductModel.find()
    .sort({ [sort]: dir })
    .skip((page - 1) * pageSize)
    .limit(pageSize);
};

const create = (data) => {
  const product = new ProductModel(data);
  return product.save();
};

const getById = (id) => {
  const product = ProductModel.find({ _id: id });
  return product;
};

const put = (id, data) => {
  return ProductModel.findOneAndUpdate(
    { _id: id },
    {
      brand: data.brand,
      model: data.model,
      price: data.price,
      category: data.category,
      inStock: data.inStock,
    }
  );
};

const patch = (id, data) => {
  return ProductModel.findOneAndUpdate({ _id: id }, data);
};

const remove = (id) => {
  return ProductModel.findOneAndDelete({ _id: id });
};

module.exports = {
  get,
  create,
  getById,
  put,
  patch,
  remove,
};
