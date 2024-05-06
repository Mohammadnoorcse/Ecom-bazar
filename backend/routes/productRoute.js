const express = require("express");
const {
createProduct,
getProductDetails
} = require('../controllers/productController');
const router = express.Router();

router
  .route("/admin/product/new")
  .post(createProduct);
router.route("/product/:id").get(getProductDetails);


module.exports = router;