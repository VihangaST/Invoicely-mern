import React from "react";

function ProductCard({ product }) {
  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <img
          src={`http://localhost:3000/api/products/get-products${product.image}`}
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.weight}</p>
          <p className="card-text">{product.costPrice}</p>
          <p className="card-text">{product.sellingPrice}</p>
          <p className="card-text">{product.markerPrice}</p>

          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
