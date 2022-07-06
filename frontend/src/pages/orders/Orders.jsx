import React from "react";
import "./Orders.css";
import { DataGrid } from "@mui/x-data-grid";
import { orders } from "../../dataSet/dummyData";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "customerName", headerName: "Customer", width: 130 },
  { field: "telephone", headerName: "Telephone", width: 130 },
  { field: "amount", headerName: "Amount", width: 130 },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const orderList = orders.map((order) => order);

const Orders = () => {
  return (
    <div className="orders">
      <Topbar />
      <div className="ordersContainer">
        <Sidebar />
        <div className="ordersContent">
          <div className="ordersTitleRow">
            <h2 className="ordersTitle">Orders</h2>
            <Button
              btnName={""}
              btnColor={"blue"}
              btnIcon={<AddOutlinedIcon />}
              style={{ marginRight: "0.5rem" }}
            />
          </div>
          <div className="ordersTable">
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
    </div>
  );
};

export default Orders;
