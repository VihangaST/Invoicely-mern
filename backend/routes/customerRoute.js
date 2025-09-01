const express = require("express");
const { addCustomers } = require("../controllers/customerController");

const router = express();

router.post("/add", addCustomers);

module.exports = router;
