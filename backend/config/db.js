const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/Invoicely";

mongoose.set("strictQuery", true, "useUnifiedTopology", true);

const connection = () => {
  try {
    mongoose.connect(dbURL);
    console.log("Database connected successfully");
  } catch {
    (err) => {
      console.log("Error while connecting to mongoDB", err.message);
    };
  }
};

module.exports = connection;
