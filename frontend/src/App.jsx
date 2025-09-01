import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import Bill from "./pages/Bill";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Customers from "./pages/Customers";

function App() {
  axios
    .post("http://localhost:3000/api/users", { name: "john" })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/billing" element={<Bill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
