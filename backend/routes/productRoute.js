const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const router = express.Router();

router.post("/add", addProduct);
router.get("/get-products", getProducts);

module.exports = router;
