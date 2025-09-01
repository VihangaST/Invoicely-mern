import React from "react";
import axios from "axios";
import AddCustomerForm from "../components/AddCustomerForm";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Customers() {
  const [customers, setCustomers] = useState([]);
  const getCustomers = async () => {
    axios
      .get("http://localhost:3000/api/customers/get")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <>
      <AddCustomerForm />
      <table className="table table-striped-columns">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Name</th>
            <th scope="col">Contact No</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <>
                <tr>
                  {" "}
                  {/* <td>{customer._id}</td> */}
                  <td>{customer.customerName}</td>
                  <td>{customer.telephoneNo}</td>
                  <td>
                    <button className="btn btn-primary">Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Customers;
