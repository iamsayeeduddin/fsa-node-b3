const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + file.originalname;
    req.body.file = name;
    cb(null, name);
  },
});

const upload = multer({ storage });
module.exports = upload;
