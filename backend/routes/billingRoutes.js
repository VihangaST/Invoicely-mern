const express = require("express");
const router = express.Router();
const {
  getProducts,
  createBill,
  getCustomers,
} = require("../controllers/billingController");

router.get("/get-products", getProducts);

router.post("/create-bill", createBill);

router.get("/get-customers", getCustomers);

module.exports = router;
