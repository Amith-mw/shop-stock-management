import React, { useState } from "react";
import "./CreateProduct.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Button from "../../components/button/Button";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const handleChange = () => {
    console.log("event");
  };

  return (
    <div className="CreateProduct">
      <Topbar />
      <div className="content">
        <Sidebar />

        <div className="CreateProductContent">
          <div className="productTitleRow">
            <h2 className="title">Add New Product</h2>
          </div>

          <div className="createProductForm">
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" />
              <label htmlFor="">Description</label>
              <input type="text" />
              <label htmlFor="">Brand</label>
              <input type="text" />
              <label htmlFor="">Category</label>
              <input type="text" />
              <label htmlFor="">Subcategory</label>
              <input type="text" />
              <label htmlFor="">Size</label>
              <input type="text" />
              <label htmlFor="">Color</label>
              <input type="text" />
              <label htmlFor="">Price</label>
              <input type="text" />
              <label htmlFor="">Quantity</label>
              <input type="number" />
              <div className="btnContainer">
                <Button type="submit" btnName={"Create"} btnColor="blue" />
                <Button type="submit" btnName={"Clear"} btnColor="lightgray" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
