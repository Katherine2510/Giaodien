import React, { useState } from "react";
import { useEffect } from "react";
//import "../css/table.css";
//import "../css/style.css";
//import Popup from "reactjs-popup";
//import Aproducts from "./Aproducts";
import axios from "axios";
import { set } from "react-hook-form";

export default function WarrantyStatisticDone() {
  const [WarrantyStatisticDone, setWarrantyStatisticDone] = useState([]);
  var idb = localStorage.getItem("place_code");
  useEffect(() => {
    refreshWarrantyStatisticDone();
  }, []);

  function refreshWarrantyStatisticDone() {
    const ProjectAPI = axios
      .get(
        `http://localhost/thule3/ProductionMove/public/api/warranty/statistic_done/${idb}`
      )
      .then((res) => setWarrantyStatisticDone(res.data))
      .catch((err) => console.log(err));
  }
  const [post, setPost] = useState([]);

  return (
    <div col-md-9 col-sm-8 col-xs-12>
      <h3>PRODUCT LIST</h3>
      <table id="product-table">
        <thead>
          <tr>
            <th scope="col">The number of Products</th>
          </tr>
        </thead>

        <td>{WarrantyStatisticDone.num_products}</td>
      </table>

      <br />

      <table id="product-table">
        <thead>
          <tr>
            <th scope="col">ProductCode</th>
            <th scope="col">ProductLine</th>
            <th scope="col">Brand</th>
          </tr>
        </thead>
        <tbody>
          {WarrantyStatisticDone.products?.map((e, index) => (
            <tr key={index}>
              <td>{e.product_code}</td>
              <td>{e.product_line}</td>
              <td>{e.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
