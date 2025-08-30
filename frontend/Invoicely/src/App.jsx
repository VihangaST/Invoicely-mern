import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("http://localhost:3000/")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  return (
    <>
      <h1>Hello from frontend</h1>
    </>
  );
}

export default App;
