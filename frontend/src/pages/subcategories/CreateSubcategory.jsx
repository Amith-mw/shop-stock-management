import React from "react";
import "./CreateSubcategory.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";

const CreateSubcategory = () => {
  return (
    <div className="createSubcategory">
      <Topbar />
      <div className="createSubcategoryContainer">
        <Sidebar />

        <div className="createSubcategoryContent">
          <div className="createSubcategoryTitleRow">
            <h2 className="title">Add New Sub Category</h2>
          </div>

          <div className="createSubcategoryForm">
            <form action="">
              <label htmlFor="">Select Category Name</label>
              <input type="text" />
              <label htmlFor="">Sub Category Name</label>
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

export default CreateSubcategory;
