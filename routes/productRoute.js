const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/productCtrl");
const auth = require("../middleware/auth");

router.get("/", productCtrl.getAll);
router.get("/page/:page/size/:size", productCtrl.getAll);
router.get("/:id", productCtrl.singleProduct);
router.post("/create", productCtrl.addProduct);
router.put("/update/:id", productCtrl.fullUpdate);
router.patch("/update/:id", productCtrl.partialUpdate);
router.delete("/delete/:id", productCtrl.deleteProduct);

module.exports = router;
