// Buffer is a global object in Node.js, no import needed
const ProductSchema = require("../models/ProductModel");

const addProduct = async (req, res) => {
  try {
    const { brand, name, weight, costPrice, sellingPrice, markerPrice } =
      req.body;
    const imagePath = req.file ? req.file.path : "";
    const product = new ProductSchema({
      brand,
      name,
      weight,
      costPrice,
      sellingPrice,
      markerPrice,
      image: imagePath,
    });
    await product.save();
    res.send({ msg: "successfully added" });
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async (req, res) => {
  try {
    const Products = await ProductSchema.find();
    Products.forEach((product) => {
      if (product.image) {
        product.image = product.image.toString("base64");
      }
    });
    console.log(Products);

    res.send({ msg: "success", products: Products });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addProduct, getProducts };
