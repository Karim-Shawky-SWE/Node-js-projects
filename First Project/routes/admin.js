const express = require("express");
const path = require("path");
const router = express.Router();

// /admin/add-product ==> GET
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  res.redirect("/");
});

// /admin/add-product ==> POST
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

module.exports = router;
