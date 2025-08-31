// Buffer is a global object in Node.js, no import needed
const ProductSchema = require("../models/ProductModel");

const addProduct = async (req, res) => {
  try {
    const { brand, name, weight, costPrice, sellingPrice, markerPrice } =
      req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";
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
    res.status(500).send({ msg: "Error adding product", error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const Products = await ProductSchema.find();
    res.send({ msg: "success", products: Products });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ msg: "Error fetching products", error: err.message });
  }
};
module.exports = { addProduct, getProducts };
