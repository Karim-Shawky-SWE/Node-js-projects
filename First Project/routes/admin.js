const express = require("express");

const router = express.Router();

// /admin/add-product ==> GET
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  res.redirect("/");
});

// /admin/add-product ==> POST
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>',
  );
});

module.exports = router;
