const express = require("express");
const router = express.Router();

const defaultCtrl = require("../controller/defaultCtrl");
const upload = require("../middleware/uploader");

router.get("/", defaultCtrl.get);
router.get("/health", defaultCtrl.health);
router.post("/form", upload.single("file"), defaultCtrl.post);

module.exports = router;
