import React from "react";
import "./CreateCategory.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";

const CreateCategory = () => {
  return (
    <div className="createBrand">
      <Topbar />
      <div className="createCategoryContainer">
        <Sidebar />

        <div className="createCategoryContent">
          <div className="createCategoryTitleRow">
            <h2 className="title">Add New Category</h2>
          </div>

          <div className="createCategoryForm">
            <form action="">
              <label htmlFor="">Category Name</label>
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

export default CreateCategory;
