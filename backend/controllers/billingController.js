const Products = require("../models/ProductModel");
const BillingModel = require("../models/BillingModel");
const CustomerModel = require("../models/CustomerModel");
const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

const createBill = async (req, res) => {
  try {
    const { customerId, items, total } = req.body;
    const newBill = new BillingModel({ customerId, items, total });
    await newBill.save();
    res.status(201).send(newBill);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    res.send(customers);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports = { getProducts, createBill, getCustomers };
