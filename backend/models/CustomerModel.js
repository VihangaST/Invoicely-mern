const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  telephoneNo: {
    type: String,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
