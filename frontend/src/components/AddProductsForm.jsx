import React, { useState } from "react";
import axios from "axios";
function AddProductsForm() {
  const [product, setProduct] = useState({
    brand: "",
    name: "",
    weight: "",
    costPrice: 0,
    sellingPrice: 0,
    markerPrice: 0,
    image: "",
  });

  // ...existing code...
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct({ ...product, image: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axios
      .post("http://localhost:3000/api/products/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="brand" className="form-label">
            Brand Name
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="weight" className="form-label">
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="weight"
            name="weight"
            value={product.weight}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="costPrice" className="form-label">
            Cost Price
          </label>
          <input
            type="number"
            className="form-control"
            id="costPrice"
            name="costPrice"
            value={product.costPrice}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="sellingPrice" className="form-label">
            Selling Price
          </label>
          <input
            type="number"
            className="form-control"
            id="sellingPrice"
            name="sellingPrice"
            value={product.sellingPrice}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="markerPrice" className="form-label">
            Marker Price
          </label>
          <input
            type="number"
            className="form-control"
            id="markerPrice"
            name="markerPrice"
            value={product.markerPrice}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="image" className="form-label">
            Image
          </label>
          {/* image upload */}
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddProductsForm;
