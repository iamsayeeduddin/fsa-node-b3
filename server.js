const express = require("express");

const defaultRouter = require("./routes/defaultRoute");
const bookRouter = require("./routes/bookRoute");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is up & running!"));

app.use("/", defaultRouter);
app.use("/books", bookRouter);
