import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
