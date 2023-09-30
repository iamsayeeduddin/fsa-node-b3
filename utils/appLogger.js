const bunyan = require("bunyan");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "..", "logs");
const filePath = path.join(__dirname, "..", "logs", "app.log");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const logger = bunyan.createLogger({
  name: "Products",
  streams: [{ path: filePath }],
});

module.exports = logger;
