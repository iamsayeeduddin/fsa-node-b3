const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const defaultRouter = require("./routes/defaultRoute");
const bookRouter = require("./routes/bookRoute");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is up & running!"));
mongoose
  .connect("mongodb://127.0.0.1:27017/fsa-b3")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/", defaultRouter);
app.use("/books", bookRouter);
