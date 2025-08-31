import React from "react";

function ProductCard({ product }) {
  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <img src={`http://localhost:3000${product.image}`} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          Weight: {product.weight}
          <br />
          Cost Price: Rs. {product.costPrice}
          <br />
          Selling Price: Rs. {product.sellingPrice}
          <br />
          Market Price: Rs. {product.markerPrice}
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
