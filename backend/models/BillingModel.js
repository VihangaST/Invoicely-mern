const mongoose = require("mongoose");
const BillingSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        quantity: Number,
        amount: Number,
      },
    ],
    total: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Billing", BillingSchema);
