const express = require("express");
const router = express.Router();

const bookCtrl = require("../controller/bookCtrl");

router.get("/", bookCtrl.get);

module.exports = router;
