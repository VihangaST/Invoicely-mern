const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  weight: String,
  costPrice: Number,
  sellingPrice: Number,
  markerPrice: Number,
  image: String,
});

module.exports = mongoose.model("Product", ProductSchema);
