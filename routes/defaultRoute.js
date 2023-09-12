const express = require("express");
const router = express.Router();

const defaultCtrl = require("../controller/defaultCtrl");

router.get("/", defaultCtrl.get);
router.get("/health", defaultCtrl.health);

module.exports = router;
