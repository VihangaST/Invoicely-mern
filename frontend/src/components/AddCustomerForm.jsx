import React from "react";
import axios from "axios";
import { useState } from "react";
function AddCustomerForm() {
  const [customer, setCustomer] = useState({
    customerName: "",
    telephoneNo: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/customers/add", { customer })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <>
      <h2>Add Customer</h2>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="customerName" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            name="customerName"
            value={customer.customerName}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="telephoneNo" className="form-label">
            Telephone No
          </label>
          <input
            type="text"
            className="form-control"
            id="telephoneNo"
            name="telephoneNo"
            value={customer.telephoneNo}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddCustomerForm;
