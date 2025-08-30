const express = require("express");
const mongoose = require("mongoose");

const dbConnection = require("./config/db");
const app = express();
const UserSchema = require("./models/UserModel");

app.use(express.json());

const PORT = 3000;

const cors = require("cors");
app.use(cors());

dbConnection();

app.get("/", async (req, res) => {
  await UserSchema.create({
    name: "John Doe",
  });

  res.send({ msg: "Hello from backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
