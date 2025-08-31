const express = require("express");
const mongoose = require("mongoose");

const dbConnection = require("./config/db");
const app = express();

app.use(express.json());

const PORT = 3000;

const cors = require("cors");
app.use(cors());

dbConnection();

const userRoutes = require("./routes/userRoute");
app.use("/api/users", userRoutes);

const productRoutes = require("./routes/productRoute");
app.use("/api/products", productRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
