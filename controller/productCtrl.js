const productRepo = require("../repos/productRepo");
const logger = require("../utils/appLogger");

// Pagination -> 100 -> 10
// Page Size -> 10
// No Of Pages -> 100 / 10 -> 10

// 30 -> 10 -> 3
// 1 -> 1-10
// 2 -> 11 - 20
// 3 -> 21 - 30

// 35 -> 10 -> 3.5
// 1 -> 1-10
// 2 -> 11 - 20
// 3 -> 21 - 30
// 4 -> 31 - 35
// Skipping Records -> (pageNo - 1) * pageSize

const getAll = async (req, res) => {
  try {
    const search = req.query.search;
    const sort = req.query.sort;
    const dir = req.query.dir;
    const page = +req.params.page || 1;
    const pageSize = +req.params.size || 10;
    const products = await productRepo.get(page, pageSize, sort, dir, search);
    logger.info("Get All Products Request Made");
    res.status(200).json(products);
  } catch (error) {
    logger.error("Some Error Occured");
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const addProduct = async (req, res) => {
  try {
    const data = req.body;
    await productRepo.create(data);
    res.status(201).send("Product Added!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const singleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productRepo.getById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const fullUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await productRepo.put(id, data);
    res.status(204);
    res.send("Updated!");
  } catch (err) {
    res.status(500);
    console.error(err);
    res.send("Internal Server Error");
  }
};

const partialUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await productRepo.put(id, data);
    res.status(204);
    res.send("Updated!");
  } catch (err) {
    res.status(500);
    console.error(err);
    res.send("Internal Server Error");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productRepo.remove(id);
    res.status(204);
    res.send("DSAeleted!");
  } catch (err) {
    res.status(500);
    console.error(err);
    res.send("Internal Server Error");
  }
};

module.exports = {
  getAll,
  addProduct,
  singleProduct,
  fullUpdate,
  partialUpdate,
  deleteProduct,
};
