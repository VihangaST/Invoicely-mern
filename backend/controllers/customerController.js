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

module.exports = { addCustomers };
