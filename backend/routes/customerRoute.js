const express = require("express");
const {
  addCustomers,
  getCustomers,
} = require("../controllers/customerController");

const router = express();

router.post("/add", addCustomers);
router.get("/get", getCustomers);

module.exports = router;
