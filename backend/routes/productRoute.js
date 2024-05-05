const express = require("express");
const {
createProduct
} = require('../controllers/productController');
const router = express.Router();

router
  .route("/admin/product/new")
  .post(createProduct);
module.exports = router;