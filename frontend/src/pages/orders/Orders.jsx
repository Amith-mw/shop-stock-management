import React from "react";
import "./Orders.css";
import { DataGrid } from "@mui/x-data-grid";
import { orders } from "../../dataSet/dummyData";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const orderList = orders.map((order) => order);

const Orders = () => {
  return (
    <div className="ordersContainer">
      <Topbar />
      <div className="pageContentContainer">
        <Sidebar />
        <div className="dataTableContainer">
          <h2 className="orderTitle">Orders</h2>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={orderList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              //   checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
