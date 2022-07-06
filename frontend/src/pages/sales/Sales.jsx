import React from "react";
import "./Sales.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Sales = () => {
  return (
    <div className="sales">
      <Topbar />
      <div className="salesContainer">
        <Sidebar />
        <div className="salesContent">
          <h1 className="salesTitle">Sales</h1>
        </div>
      </div>
    </div>
  );
};

export default Sales;
