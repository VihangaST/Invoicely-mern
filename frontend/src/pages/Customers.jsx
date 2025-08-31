import React from "react";
import AddCustomerForm from "../components/AddCustomerForm";
function Customers() {
  return (
    <>
      <AddCustomerForm />
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Contact No</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Customers;
