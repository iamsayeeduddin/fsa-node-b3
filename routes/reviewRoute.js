const express = require("express");
const router = express.Router();
const reviewCtrl = require("../controller/reviewCtrl");

router.get("/", reviewCtrl.getAll);
router.post("/create", reviewCtrl.post);

module.exports = router;
