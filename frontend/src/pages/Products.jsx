import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/products/get-products"
      );
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </>
  );
}

export default Products;
