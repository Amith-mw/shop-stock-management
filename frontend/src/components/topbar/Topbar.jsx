import React from "react";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h4 className="topUserType">Admin</h4>
        </div>
        <div className="topRight">
          <h3>INVENTORY MANAGEMENT SYSTEM</h3>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
