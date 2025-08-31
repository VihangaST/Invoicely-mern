const UserSchema = require("../models/userModel");
const loginUser = async (req, res) => {
  try {
    await UserSchema.create(req.body);
    res.send({ msg: "User created successfully" });
  } catch (err) {
    res.status(500).send({ msg: "Error creating user", error: err.message });
  }
};

module.exports = { loginUser };
