import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Bill() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [customers, setCustomers] = useState([]); // Add customers state
  const [selectedCustomer, setSelectedCustomer] = useState(""); // Selected customer

  const getAllProducts = () => {
    axios
      .get("http://localhost:3000/api/billing/get-products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  // Handle quantity change
  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };

  // Fetch customers
  const getAllCustomers = () => {
    axios
      .get("http://localhost:3000/api/billing/get-customers") // Change endpoint as needed
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  // Calculate total for each product
  const getAmount = (product) => {
    const qty = quantities[product._id] || 0;
    return qty * product.markerPrice;
  };
  // Prepare bill data (example)
  const handleCreateBill = () => {
    const billItems = products
      .filter((p) => quantities[p._id] > 0)
      .map((p) => ({
        productId: p._id,
        name: p.name,
        quantity: quantities[p._id],
        amount: getAmount(p),
      }));
    // Send billItems to backend or display
    console.log(billItems);

    axios
      .post("http://localhost:3000/api/billing/create-bill", {
        items: billItems,
        total: totalAmount,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllProducts();
    getAllCustomers();
  }, []);

  const totalAmount = products.reduce(
    (sum, product) => sum + getAmount(product),
    0
  );

  return (
    <>
      <h1>Billing Page</h1>
      {/* Customer selection */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="customer-select" style={{ marginRight: "1rem" }}>
          Select Customer:
        </label>
        <select
          id="customer-select"
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
        >
          <option value="">-- Select --</option>
          {customers.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <>
                <tr>
                  <td>
                    {product.name}-{product.weight}-Rs.{product.markerPrice}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      min="0"
                      value={quantities[product._id] || ""}
                      onChange={(e) =>
                        handleQuantityChange(product._id, e.target.value)
                      }
                    />{" "}
                  </td>
                  <td>{getAmount(product)}</td>
                  {/* <td>
                    <button className="btn btn-primary">Delete</button>
                  </td> */}
                  <td></td>
                </tr>
              </>
            );
          })}
          <tr>
            <td colSpan={2} style={{ textAlign: "right", fontWeight: "bold" }}>
              Total
            </td>
            <td style={{ fontWeight: "bold" }}>{totalAmount}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-success" onClick={handleCreateBill}>
        Create Bill
      </button>
      <button className="btn btn-success" onClick={() => window.print()}>
        Print Bill
      </button>
    </>
  );
}

export default Bill;
