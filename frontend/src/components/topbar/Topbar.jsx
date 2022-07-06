import React from "react";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ShopIt</span>
        </div>
        <div className="topRight">
          <h3>INVENTORY MANAGEMENT SYSTEM</h3>
          {/* TODO: Icons Area */}
          {/* 
          01. notifications for minimum product quantity 
          02. profile pic - when click on it - show user role and logout
          */}
          {/* <div className="topbarIcons"><NotificationsNoneIcon/></div> */}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
