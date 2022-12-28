import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";

export default function Aproducts({ value }) {
  const [PersonList, setPersonList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost/thule3/ProductionMove/public/api/admin/view_all_products"
      )
      .then((res) => setPersonList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [post, setPost] = useState([]);

  const [idb, setIdb] = useState(PersonList.product_code);

  useEffect(() => {
    axios
      .get(
        `http://localhost/thule3/ProductionMove/public/api/admin/view_product/${idb}`
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [idb]);

  return (
    <>
      <Popup
        trigger={<button onClick={() => setIdb(value)}>Click me</button>}
        className="modal"
        position="left center"
      >
        <div>
          <p>ProductCode: {post.product_code}</p>
          <p>Cylinder: {post.cylinder}</p>
          <p>Drive Type: {post.drive_type}</p>
          <p>Tranmission: {post.transmission}</p>
          <p>Engine Type: {post.engine_type}</p>
          <p>Total Door: {post.total_door}</p>
          <p>Total Seat: {post.total_seats}</p>
          <p>Warranty year: {post.warranty_years}</p>
        </div>
      </Popup>
    </>
  );
}
