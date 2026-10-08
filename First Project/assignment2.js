const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});

app.listen(3000);
