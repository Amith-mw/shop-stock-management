import React from "react";
import "./CreateBrand.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";

const CreateBrand = () => {
  return (
    <div className="createBrand">
      <Topbar />
      <div className="createBrandContainer">
        <Sidebar />

        <div className="createBrandContent">
          <div className="createBrandTitleRow">
            <h2 className="title">Add New Brand</h2>
          </div>

          <div className="createBrandForm">
            <form action="">
              <label htmlFor="">Brand Name</label>
              <input type="text" />
              <label htmlFor="">Status</label>
              <input type="text" />

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

export default CreateBrand;
