const express = require("express");
const router = express.Router();

const bookCtrl = require("../controller/bookCtrl");

router.get("/", bookCtrl.get);
router.get("/:id", bookCtrl.getById);
router.post("/create", bookCtrl.create);
router.put("/:id", bookCtrl.update);
router.patch("/:id", bookCtrl.patch);
router.delete("/:id", bookCtrl.delete);

module.exports = router;
