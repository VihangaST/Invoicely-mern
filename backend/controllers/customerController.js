const CustomerSchema = require("../models/CustomerModel");

const addCustomers = async (req, res) => {
  try {
    const { customerName, telephoneNo } = req.body.customer;
    await CustomerSchema.create({ customerName, telephoneNo });
    console.log(customerName, telephoneNo);
    res.send({ msg: "Customer added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Failed to add customer", error });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerSchema.find({});
    console.log(customers);
    res.send(customers);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = { addCustomers, getCustomers };
