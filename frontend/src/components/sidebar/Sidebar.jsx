import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <div className="sidebarTitle">Dashboard</div> */}
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to={"/brands"}>BRANDS</Link>
            </li>

            <li className="sidebarListItem">
              <Link to={"/categories"}>CATEGORIES</Link>
            </li>

            <li className="sidebarListItem">
              <Link to={"/subcategories"}>SUB CATEGORIES</Link>
            </li>

            <li className="sidebarListItem">
              <Link to={"/products"}>PRODUCTS</Link>
            </li>

            <li className="sidebarListItem">
              <Link to={"/orders"}>ORDERS</Link>
            </li>

            <li className="sidebarListItem">
              <Link to={"/sales"}>SALES</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
